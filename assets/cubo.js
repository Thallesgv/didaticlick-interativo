// DidatiClick · Cubo Mágico na Escola: cubo 3D (NxN) em canvas, sem bibliotecas.
// Eixos: x direita (R), y cima (U), z frente (F). Esquema de cores: U branco, D amarelo, F verde, B azul, R vermelho, L laranja.
// Arraste com o dedo para girar a vista; os movimentos são animados.
const CUBO_COR = { U: '#FFFFFF', D: '#FFD500', F: '#009B48', B: '#0046AD', R: '#C8102E', L: '#FF6A13', X: '#C9CED6' };
const CUBO_NORMAIS = { U: [0, 1, 0], D: [0, -1, 0], F: [0, 0, 1], B: [0, 0, -1], R: [1, 0, 0], L: [-1, 0, 0] };

function cuboTokens(alg) {
  alg = (alg || '').replace(/[’`´]/g, "'").replace(/[()]/g, ' ');
  return alg.match(/[RLUDFBMESxyzrludfb]w?[2']?'?/g) || [];
}
function cuboInverso(alg) {
  return cuboTokens(alg).reverse().map(t => t.endsWith('2') ? t : t.endsWith("'") ? t.slice(0, -1) : t + "'").join(' ');
}

class Cubo3D {
  constructor(el, o = {}) {
    this.el = typeof el === 'string' ? document.getElementById(el) : el;
    this.n = o.n || 3; this.mask = o.mask || null;
    this.yaw = o.yaw ?? -0.62; this.pitch = o.pitch ?? 0.5;
    this.vel = o.vel || 1;            // velocidade da animação (1 = normal)
    this.fila = []; this.anim = null; this.onmove = o.onmove || null; this.ondone = null;
    this.reset();
    const c = this.cv = document.createElement('canvas');
    c.style.width = '100%'; c.style.maxWidth = (o.max || 420) + 'px'; c.style.display = 'block'; c.style.margin = '0 auto';
    c.style.touchAction = 'none'; c.style.cursor = 'grab';
    this.el.innerHTML = ''; this.el.appendChild(c);
    if (o.dica !== false) { const d = document.createElement('div'); d.className = 'muted'; d.style.textAlign = 'center'; d.textContent = 'Arraste o cubo para ver de outro ângulo.'; this.el.appendChild(d); }
    let ini = null;
    c.addEventListener('pointerdown', e => { ini = [e.clientX, e.clientY, this.yaw, this.pitch]; try { c.setPointerCapture(e.pointerId); } catch (_) {} c.style.cursor = 'grabbing'; });
    c.addEventListener('pointermove', e => {
      if (!ini) return; e.preventDefault();
      this.yaw = ini[2] + (e.clientX - ini[0]) * 0.011;
      this.pitch = Math.max(-1.35, Math.min(1.35, ini[3] + (e.clientY - ini[1]) * 0.011));
      this.desenha();
    });
    const fim = () => { ini = null; c.style.cursor = 'grab'; };
    c.addEventListener('pointerup', fim); c.addEventListener('pointercancel', fim);
    window.addEventListener('resize', () => this.desenha());
    this.desenha();
  }
  reset() {
    const n = this.n, h = (n - 1) / 2; this.pecas = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) for (let k = 0; k < n; k++) {
      const p = [i - h, j - h, k - h], st = [];
      for (const f in CUBO_NORMAIS) { const v = CUBO_NORMAIS[f]; for (let a = 0; a < 3; a++) if (v[a] && Math.abs(p[a] - v[a] * h) < 1e-9) st.push({ n: v.slice(), f }); }
      if (st.length) this.pecas.push({ p, st, id: p.join(',') });
    }
    this.fila = []; this.anim = null;
  }
  _def(m) {
    const n = this.n, h = (n - 1) / 2;
    let b = m[0]; if (m[1] === 'w') b = b.toLowerCase();
    const D = {
      R: [0, p => p[0] > h - .5, -1], L: [0, p => p[0] < -h + .5, 1], U: [1, p => p[1] > h - .5, -1], D: [1, p => p[1] < -h + .5, 1],
      F: [2, p => p[2] > h - .5, -1], B: [2, p => p[2] < -h + .5, 1],
      M: [0, p => Math.abs(p[0]) < .5, 1], E: [1, p => Math.abs(p[1]) < .5, 1], S: [2, p => Math.abs(p[2]) < .5, -1],
      x: [0, p => true, -1], y: [1, p => true, -1], z: [2, p => true, -1],
      r: [0, p => p[0] > h - 1.5, -1], l: [0, p => p[0] < -h + 1.5, 1],
      u: [1, p => p[1] > h - 1.5, -1], d: [1, p => p[1] < -h + 1.5, 1], f: [2, p => p[2] > h - 1.5, -1], b: [2, p => p[2] < -h + 1.5, 1],
    }[b];
    let q = D[2]; if (m.endsWith('2')) q *= 2; else if (m.endsWith("'")) q = -q;
    return { eixo: D[0], filtro: D[1], q };
  }
  static rot(v, e, q) {
    let [x, y, z] = v; q = ((q % 4) + 4) % 4;
    for (let i = 0; i < q; i++) { if (e === 0) [y, z] = [-z, y]; else if (e === 1) [x, z] = [z, -x]; else [x, y] = [-y, x]; }
    return [x, y, z];
  }
  gira(m) {   // instantâneo
    const { eixo, filtro, q } = this._def(m);
    for (const pc of this.pecas) if (filtro(pc.p)) {
      pc.p = Cubo3D.rot(pc.p, eixo, q).map(v => Math.round(v * 2) / 2);
      pc.st.forEach(s => s.n = Cubo3D.rot(s.n, eixo, q).map(Math.round));
    }
  }
  aplica(alg) { cuboTokens(alg).forEach(t => this.gira(t)); this.desenha(); return this; }
  // animado: devolve uma promessa
  anima(m, ms) {
    return new Promise(res => {
      const d = this._def(m), dur = (ms || 330) * (m.endsWith('2') ? 1.45 : 1) / this.vel, t0 = performance.now();
      this.anim = { ...d, ang: 0 };
      const passo = t => {
        const u = Math.min(1, (t - t0) / dur), e = u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
        this.anim.ang = d.q * Math.PI / 2 * e; this.desenha();
        if (u < 1) requestAnimationFrame(passo); else { this.anim = null; this.gira(m); this.desenha(); if (this.onmove) this.onmove(m); res(); }
      };
      requestAnimationFrame(passo);
    });
  }
  async roda(alg, cada) {
    for (const t of cuboTokens(alg)) { if (this.parar) break; await this.anima(t); if (cada) cada(t); }
    this.parar = false;
  }
  face(f) {
    const v = CUBO_NORMAIS[f]; return this.pecas.flatMap(pc => pc.st.filter(s => s.n.every((x, i) => x === v[i])).map(s => s.f));
  }
  resolvido() { return Object.keys(CUBO_NORMAIS).every(f => new Set(this.face(f)).size === 1); }
  embaralha(k = 20) {
    const F = ['R', 'L', 'U', 'D', 'F', 'B'], S = ['', "'", '2'], ax = { R: 0, L: 0, U: 1, D: 1, F: 2, B: 2 }; let out = [], ult = null, pen = null;
    while (out.length < k) { const f = F[Math.floor(Math.random() * 6)]; if (f === ult || (pen && ax[f] === ax[ult] && f === pen)) continue; pen = ult; ult = f; out.push(f + S[Math.floor(Math.random() * 3)]); }
    return out.join(' ');
  }
  // ---------------- desenho
  _view(v) {
    const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const [x, y, z] = v;
    const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;          // yaw (em torno de y)
    return [x1, y * cp - z1 * sp, y * sp + z1 * cp];             // pitch (em torno de x)
  }
  _proj(v, W, H, esc) {
    const [x1, y2, z2] = this._view(v), dcam = this.n * 3.2, k = dcam / (dcam - z2);
    return [W / 2 + x1 * esc * k, H / 2 - y2 * esc * k, z2];
  }
  desenha() {
    const c = this.cv; if (!c) return;
    const dpr = window.devicePixelRatio || 1, W = c.clientWidth || 320, H = W;
    if (c.width !== Math.round(W * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const n = this.n, esc = W / (n * 2.05), A = this.anim;
    const rotA = (v, inA) => {
      if (!A || !inA) return v; const [x, y, z] = v, c_ = Math.cos(A.ang), s_ = Math.sin(A.ang);
      if (A.eixo === 0) return [x, y * c_ - z * s_, y * s_ + z * c_];
      if (A.eixo === 1) return [x * c_ + z * s_, y, -x * s_ + z * c_];
      return [x * c_ - y * s_, x * s_ + y * c_, z];
    };
    // fatias ao longo do eixo da animação (ou y), desenhadas de trás para a frente; dentro de cada fatia, cubinhos por profundidade
    const eixo = A ? A.eixo : 1;
    const ev = [0, 0, 0]; ev[eixo] = 1;
    const cam = this._proj(ev, W, H, esc)[2] - this._proj([0, 0, 0], W, H, esc)[2];   // >0: o lado + do eixo está virado para a câmera
    const fat = {};
    for (const pc of this.pecas) { const k = pc.p[eixo]; (fat[k] = fat[k] || []).push(pc); }
    const chaves = Object.keys(fat).map(Number).sort((a, b) => cam > 0 ? a - b : b - a);
    const msk = this.mask;
    for (const k of chaves) {
      const lst = fat[k].map(pc => { const inA = A && A.filtro(pc.p); return { pc, inA, z: this._proj(rotA(pc.p, inA), W, H, esc)[2] }; }).sort((a, b) => a.z - b.z);
      for (const { pc, inA } of lst) {
        for (const f in CUBO_NORMAIS) {
          const nv = CUBO_NORMAIS[f];
          const u = [0, 1, 2].filter(a => nv[a] === 0);
          const quad = (m) => [[-m, -m], [m, -m], [m, m], [-m, m]].map(([du, dv]) => { const q = pc.p.map((v, a) => v + nv[a] * .5); q[u[0]] += du; q[u[1]] += dv; return this._proj(rotA(q, inA), W, H, esc); });
          // face de costas? (normal contra a câmera)
          const cen = this._view(rotA(pc.p.map((v, a) => v + nv[a] * .5), inA)), nn = this._view(rotA(nv, inA)), dcam = this.n * 3.2;
          if (nn[0] * (0 - cen[0]) + nn[1] * (0 - cen[1]) + nn[2] * (dcam - cen[2]) <= 0) continue;
          const Q = quad(.5);
          g.fillStyle = '#1F2937'; g.beginPath(); Q.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); g.fill();
          g.strokeStyle = '#1F2937'; g.lineWidth = 1; g.stroke();
          const s = pc.st.find(s => s.n.every((x, i) => x === nv[i]));
          if (!s) continue;
          const cor = msk && msk(pc, s) ? CUBO_COR.X : CUBO_COR[s.f];
          const I = quad(.43);
          g.fillStyle = cor; g.beginPath(); I.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); g.fill();
        }
      }
    }
  }
}

// Máscaras prontas (nomes usados no parâmetro ?ver= do simulador)
const CUBO_MASCARAS = {
  centros: (pc) => pc.st.length !== 1, meios: (pc) => pc.st.length !== 2, quinas: (pc) => pc.st.length !== 3,
  cruz: (pc) => !(pc.st.length === 1 || (pc.st.length === 2 && pc.st.some(s => s.f === 'U'))),
  camada1: (pc) => !(pc.st.length === 1 || pc.st.some(s => s.f === 'U')),
  f2l: (pc) => pc.st.some(s => s.f === 'D') && pc.st.length > 1,
  oll: (pc, s) => pc.st.some(t => t.f === 'D') && pc.st.length > 1 && s.f !== 'D',
  pll: () => false,
};

// Painel de reprodução de um algoritmo: botões grandes, sequência com o passo atual destacado.
function cuboPlayer(cubo, alvo, alg, setup, o = {}) {
  const toks = cuboTokens(alg); let i = 0, rodando = false;
  const el = typeof alvo === 'string' ? document.getElementById(alvo) : alvo;
  el.innerHTML = `<div class="algseq" style="display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin:10px 0"></div>
  <div class="row" style="justify-content:center">
   <button class="alt" data-a="ini" title="Voltar ao início" style="min-width:52px">⏮</button>
   <button class="alt" data-a="ant" title="Passo anterior" style="min-width:52px">◀</button>
   <button data-a="play" style="min-width:110px">▶ Rodar</button>
   <button class="alt" data-a="prox" title="Próximo passo" style="min-width:52px">▶|</button></div>
  <div class="row" style="justify-content:center;margin-top:8px;align-items:center"><span class="muted">Velocidade</span>
   <input type="range" min="0.25" max="2.5" step="0.25" value="${cubo.vel}" style="width:160px"></div>`;
  const seq = el.querySelector('.algseq');
  const pinta = () => {
    seq.innerHTML = toks.map((t, k) => `<span style="font-weight:700;font-size:18px;padding:3px 8px;border-radius:7px;${k < i ? 'background:#E5E7EB;color:#6B7280' : k === i && rodando ? 'background:#F7821F;color:#fff' : 'background:#0E2354;color:#fff'}">${t.replace("'", '’')}</span>`).join('') || '<span class="muted">(sem movimentos)</span>';
    el.querySelector('[data-a=play]').textContent = rodando ? '⏸ Pausar' : (i >= toks.length ? '↺ De novo' : '▶ Rodar');
    if (o.passo) o.passo(i, toks.length);
  };
  const inicio = () => { cubo.reset(); cubo.aplica(setup || ''); i = 0; pinta(); };
  const um = async () => { if (i >= toks.length) return false; rodando = true; pinta(); await cubo.anima(toks[i]); i++; return true; };
  el.querySelector('[data-a=ini]').onclick = () => { if (cubo.anim) return; cubo.parar = true; rodando = false; inicio(); };
  el.querySelector('[data-a=prox]').onclick = async () => { if (cubo.anim || rodando) return; await um(); rodando = false; pinta(); };
  el.querySelector('[data-a=ant]').onclick = async () => {
    if (cubo.anim || rodando || i === 0) return; i--; const t = toks[i]; rodando = true; pinta();
    await cubo.anima(cuboInverso(t)); rodando = false; pinta();
  };
  el.querySelector('[data-a=play]').onclick = async () => {
    if (rodando) { cubo.parar = true; return; }
    if (i >= toks.length) { inicio(); await new Promise(r => setTimeout(r, 300)); }
    cubo.parar = false; rodando = true; pinta();
    while (i < toks.length && !cubo.parar) { await cubo.anima(toks[i]); i++; pinta(); }
    cubo.parar = false; rodando = false; pinta();
  };
  el.querySelector('input[type=range]').oninput = e => cubo.vel = +e.target.value;
  inicio();
  return { inicio, get i() { return i; } };
}

// Teclado de movimentos (R L U D F B, com ' e 2)
function cuboTeclado(cubo, alvo, o = {}) {
  const el = typeof alvo === 'string' ? document.getElementById(alvo) : alvo;
  const faces = o.faces || ['R', 'L', 'U', 'D', 'F', 'B'];
  el.innerHTML = `<div style="display:grid;grid-template-columns:repeat(${Math.min(6, faces.length)},1fr);gap:6px;max-width:420px;margin:0 auto">` +
    faces.map(f => [f, f + "'", f + '2']).flat().sort((a, b) => ['', "'", '2'].indexOf(a.slice(1)) - ['', "'", '2'].indexOf(b.slice(1))).map(m => `<button data-m="${m}" style="padding:12px 0;font-size:17px;font-weight:700">${m.replace("'", '’')}</button>`).join('') + '</div>';
  let ocupado = Promise.resolve();
  el.querySelectorAll('button').forEach(b => b.onclick = () => { ocupado = ocupado.then(() => cubo.anima(b.dataset.m)).then(() => o.cada && o.cada(b.dataset.m)); });
}
