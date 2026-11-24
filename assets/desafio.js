// DidatiClick · biblioteca comum dos desafios laranjas (um interativo por módulo).
// Cada página chama D.ciclo({livros:[...], sortear, montar, conferir}): as primeiras rodadas são a questão
// da apostila (livros); depois vêm variações sorteadas.
// O placar só conta depois do OK.
const $ = i => document.getElementById(i);
const Q = new URLSearchParams(location.search);
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[rnd(0, a.length - 1)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(0, i); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = n => { const s = String(n).replace('.', ','); const [i, d] = s.split(','); return i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (d !== undefined ? ',' + d : ''); };
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const num = s => { s = String(s).trim().replace(/\s/g, '').replace(/[−–]/g, '-'); if (s === '' || (s.match(/,/g) || []).length > 1) return NaN; s = s.replace(',', '.'); return /^[-+]?(\d+\.?\d*|\.\d+)$/.test(s) ? Number(s) : NaN; };
function msg(id, t, c) { $(id).innerHTML = t ? `<div class="msg ${c || 'info'}">${t}</div>` : ''; }
const box = (id, w, ph) => `<input class="n" id="${id}" inputmode="decimal" autocomplete="off" style="width:${w || 90}px"${ph ? ` placeholder="${ph}"` : ''}>`;
const D = {
  ac: 0, tt: 0, feito: false, rodada: 0,
  placar(ok) { this.tt++; if (ok) this.ac++; $('placar').textContent = `Acertos: ${this.ac} de ${this.tt}`; },
  // lê caixas de texto numéricas; devolve array ou null (e avisa)
  ler(ids) {
    const v = ids.map(i => num($(i).value));
    if (ids.some(i => $(i).value.trim() === '')) { msg('dm', 'Preencha todas as respostas e toque em OK.', 'info'); return null; }
    if (v.some(isNaN)) { msg('dm', 'Use só números (com vírgula para decimais e − para negativos).', 'info'); return null; }
    return v;
  },
  marcar(ids, oks) { ids.forEach((i, k) => $(i).style.borderColor = oks[k] ? 'var(--ok)' : 'var(--bad)'); },
  ciclo(o) {
    const self = this; let cur;
    function novo() {
      self.feito = false; $('ok').disabled = false; msg('dm', '');
      const L = o.livros || (o.livro ? [o.livro()] : []);
      cur = self.rodada < L.length ? Object.assign({ livro: true }, L[self.rodada]) : o.sortear(); self.rodada++;
      $('lv').classList.toggle('hide', !(cur && cur.livro));
      o.montar(cur);
      document.querySelectorAll('#area input.n, #dq input.n').forEach(x => x.onkeydown = e => { if (e.key === 'Enter') $('ok').click(); });
    }
    $('ok').onclick = () => {
      if (self.feito) return; const r = o.conferir(cur); if (!r) return;
      self.feito = true; $('ok').disabled = true; self.placar(r.ok);
      msg('dm', (r.ok ? 'Certo! ' : 'Ainda não. ') + r.exp, r.ok ? 'ok' : 'bad');
      if (o.depois) o.depois(cur, r);
      if (o.res && cur && cur.livro) $('rs').classList.remove('hide');
    };
    $('novo').onclick = novo; novo();
  }
};
const sg = v => v < 0 ? '−' + fmt(-v) : fmt(v);
// Reta numérica com inteiros tocáveis (data-t). o: {min,max,w,h,sel:Set,cor:{k:cor},extra:(sx,y)=>svg,rot:k=>texto}
D.reta = function (o) {
  const W = o.w || 360, H = o.h || 74, pad = 14, y = o.y || 34, sx = v => pad + (v - o.min) / (o.max - o.min) * (W - 2 * pad);
  let g = `<line x1="${pad - 8}" y1="${y}" x2="${W - pad + 8}" y2="${y}" stroke="#0E2354" stroke-width="2"/>`;
  if (o.extra) g += o.extra(sx, y);
  for (let k = Math.ceil(o.min); k <= o.max; k += (o.step || 1)) {
    const x = sx(k), on = o.sel && o.sel.has(k), cc = o.cor && o.cor[k], c = cc || (on ? '#0E2354' : '#fff');
    g += `<g data-t="${k}" style="cursor:pointer"><rect x="${x - 8}" y="${y - 22}" width="16" height="50" fill="transparent"/>` +
      `<circle cx="${x}" cy="${y}" r="${on || cc ? 7.5 : 4.5}" fill="${c}" stroke="#0E2354" stroke-width="1.5"/>` +
      `<text x="${x}" y="${y + 23}" text-anchor="middle" font-size="${(o.max - o.min) > 14 ? 11 : 13}" font-weight="600" font-family="Poppins,sans-serif" fill="#0E2354">${o.rot ? o.rot(k) : sg(k)}</text></g>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
};
D.tap = (el, cb) => el.querySelectorAll('[data-t]').forEach(n => n.onclick = () => cb(+n.dataset.t));
// frações: [n, d] simplificada
const fr = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return [n / g, d / g]; };
const frt = ([n, d]) => d === 1 ? sg(n) : `${sg(n)}/${d}`;
// Plano cartesiano. o: {x0,x1,y0,y1,w,h,fns:[{f,cor,tr}],pts:[{x,y,cor,rot,oco}],extra:(sx,sy)=>svg}
D.plano = function (o) {
  const W = o.w || 340, H = o.h || 300, p = 22, sx = x => p + (x - o.x0) / (o.x1 - o.x0) * (W - 2 * p), sy = y => H - p - (y - o.y0) / (o.y1 - o.y0) * (H - 2 * p);
  const st = o.passo || 1; let g = '';
  for (let x = Math.ceil(o.x0 / st) * st; x <= o.x1; x += st) g += `<line x1="${sx(x)}" y1="${p}" x2="${sx(x)}" y2="${H - p}" stroke="#EEF2F7"/>`;
  const sty = o.passoY || st; for (let y = Math.ceil(o.y0 / sty) * sty; y <= o.y1; y += sty) g += `<line x1="${p}" y1="${sy(y)}" x2="${W - p}" y2="${sy(y)}" stroke="#EEF2F7"/>`;
  g += `<line x1="${p}" y1="${sy(0)}" x2="${W - p}" y2="${sy(0)}" stroke="#0E2354" stroke-width="1.5"/><line x1="${sx(0)}" y1="${p}" x2="${sx(0)}" y2="${H - p}" stroke="#0E2354" stroke-width="1.5"/>`;
  const ls = o.rot || 2;
  for (let x = Math.ceil(o.x0 / ls) * ls; x <= o.x1; x += ls) if (x) g += `<text x="${sx(x)}" y="${sy(0) + 13}" text-anchor="middle" font-size="10" font-family="Poppins" fill="#6B7280">${sg(Math.round(x * 1e6) / 1e6)}</text>`;
  const lsy = o.rotY || ls; for (let y = Math.ceil(o.y0 / lsy) * lsy; y <= o.y1; y += lsy) if (y) g += `<text x="${sx(0) - 4}" y="${sy(y) + 3}" text-anchor="end" font-size="10" font-family="Poppins" fill="#6B7280">${sg(Math.round(y * 1e6) / 1e6)}</text>`;
  g += `<clipPath id="cp"><rect x="${p}" y="${p}" width="${W - 2 * p}" height="${H - 2 * p}"/></clipPath><g clip-path="url(#cp)">`;
  (o.fns || []).forEach(F => { let d = ''; const n = 200; for (let i = 0; i <= n; i++) { const x = o.x0 + (o.x1 - o.x0) * i / n, y = F.f(x); if (!isFinite(y)) continue; d += (d ? 'L' : 'M') + sx(x).toFixed(1) + ',' + sy(Math.max(o.y0 - 50, Math.min(o.y1 + 50, y))).toFixed(1); }
    g += `<path d="${d}" fill="none" stroke="${F.cor || '#2457D6'}" stroke-width="${F.lw || 2.5}"${F.tr ? ' stroke-dasharray="6 4"' : ''}/>`; });
  if (o.extra) g += o.extra(sx, sy);
  g += '</g>';
  (o.pts || []).forEach(P => { g += `<circle cx="${sx(P.x)}" cy="${sy(P.y)}" r="5" fill="${P.oco ? '#fff' : (P.cor || '#F7821F')}" stroke="${P.cor || '#F7821F'}" stroke-width="2"/>` + (P.rot ? `<text x="${sx(P.x) + 7}" y="${sy(P.y) - 7}" font-size="11" font-weight="700" font-family="Poppins" fill="${P.cor || '#F7821F'}">${P.rot}</text>` : ''); });
  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
};
// controle deslizante: D.sl(id, min, max, passo, valor, cb, mostra)
D.sl = function (id, lo, hi, st, v, cb, show) {
  const el = $(id), i = el.querySelector('input'), s = el.querySelector('span'); i.min = lo; i.max = hi; i.step = st; i.value = v;
  const sh = () => { s.textContent = show ? show(+i.value) : sg(+i.value); }; sh(); i.oninput = () => { if (D.feito) { i.value = i.dataset.v; return; } i.dataset.v = i.value; sh(); cb && cb(+i.value); }; i.dataset.v = v;
  return { get: () => +i.value, set: x => { i.value = x; i.dataset.v = x; sh(); } };
};
const sl = (id, rot) => `<div class="sl" id="${id}"><b>${rot}</b><input type="range"><span></span></div>`;
