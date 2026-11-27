// DidatiClick · A Matemática da Navegação: utilidades das páginas da pasta nav/.
const NAVY = '#0E2354', ORANGE = '#F7821F', PEACH = '#FDE9D8', LIGHT = '#FBB57A', GRAYL = '#D7DEEA', BLUE = '#2457D6', GREEN = '#15803D', GRAY = '#6B7280';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const r1 = v => fmt(Math.round(v * 10) / 10), r2 = v => fmt(Math.round(v * 100) / 100);
const RAD = Math.PI / 180, DEG = 180 / Math.PI;
const P = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
function arrastar(svg, el, cb) {
  // O desenho é refeito a cada movimento: o estado do arraste fica no contêiner (que não muda), não no <svg>.
  // Tocar em qualquer ponto da figura pega o objeto arrastável mais próximo, leva até ali e começa o arraste (fácil no celular).
  const box = svg.parentNode;
  svg.style.touchAction = 'none'; box.style.touchAction = 'none'; if (el) el.style.cursor = 'grab';
  if (!box._drag) {
    const D = box._drag = { on: null, alvos: {} };
    const pt = e => { const s = box.querySelector('svg'), p = s.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(s.getScreenCTM().inverse()); };
    box.addEventListener('pointerdown', e => {
      const ids = Object.keys(D.alvos); if (!ids.length) return;
      const p = pt(e), s = box.querySelector('svg'); let melhor = ids[0], dm = Infinity;
      if (ids.length > 1) ids.forEach(id => { const n = s.querySelector('#' + id); if (!n) return; const b = n.getBBox(), d = Math.hypot(b.x + b.width / 2 - p.x, b.y + b.height / 2 - p.y); if (d < dm) { dm = d; melhor = id; } });
      D.on = melhor; e.preventDefault(); try { box.setPointerCapture(e.pointerId); } catch (_) {} D.alvos[melhor](p.x, p.y);
    });
    box.addEventListener('pointermove', e => { if (!D.on) return; e.preventDefault(); const p = pt(e); D.alvos[D.on](p.x, p.y); });
    const fim = () => { D.on = null; };
    box.addEventListener('pointerup', fim); box.addEventListener('pointercancel', fim); window.addEventListener('pointerup', fim);
  }
  box._drag.alvos[(el && el.id) || '_'] = cb;
}
function chips(id, itens, ini, cb) {
  const el = $(id); let cur = ini;
  el.innerHTML = itens.map((t, i) => `<button data-i="${i}" class="${i === ini ? 'on' : ''}">${t}</button>`).join('');
  el.querySelectorAll('button').forEach(b => b.onclick = () => { cur = +b.dataset.i; el.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); cb && cb(cur); });
  return { get: () => cur };
}
function missao(id, ok, txtOk, txtNao) { $(id).innerHTML = `<div class="msg ${ok ? 'ok' : 'info'}">${ok ? '✔ ' + txtOk : txtNao}</div>`; }
// Várias missões por simulador. MIS.def(()=>[[texto, ok(), msgOk, dica], ...]) no início do script; MIS.ver('m') a cada desenho.
// msgOk e dica podem ser texto ou função. O cartão "Missão" vira "Missão k de N" com barrinha de progresso e botão "Próxima missão".
const MIS = (() => {
  let fn = null, L = null, mi = 0, card = null, id = 'm', fresco = false, keep = null; const feitas = new Set();
  const v = x => typeof x === 'function' ? x() : x;
  function monta() {
    if (L) return; L = fn(); card = [...document.querySelectorAll('.card')].find(c => { const h = c.querySelector('h2'); return h && /^Missão/.test(h.textContent.trim()); });
    const alvo = $(id);
    if (!card && alvo) { const host = alvo.closest('.card'); card = document.createElement('div'); card.className = 'card'; (host || alvo).after(card); }
    if (card && alvo && card.contains(alvo)) keep = alvo;
  }
  const bot = () => feitas.has(mi) && mi < L.length - 1 ? '<button class="alt msprox" style="margin-top:8px">Próxima missão →</button>' : '';
  function liga() { document.querySelectorAll('.msprox').forEach(b => b.onclick = () => { mi++; fresco = true; MIS.ver(); try { $(id).scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (_) {} }); }
  function pinta() {
    if (!card) return;
    card.innerHTML = `<h2>Missão ${mi + 1} de ${L.length}</h2><div style="display:flex;gap:5px;margin:4px 0 10px">${L.map((_, i) => `<span style="width:26px;height:8px;border-radius:4px;background:${feitas.has(i) ? '#15803D' : i === mi ? '#F7821F' : '#D7DEEA'}"></span>`).join('')}</div><p style="margin:0">${L[mi][0]}</p>`;
    if (keep) card.appendChild(keep);
  }
  return {
    def(f) { fn = f; },
    ver(i) {
      if (i) id = i; if (!fn) return; monta(); const M = L[mi]; let ok = false;
      if (fresco) fresco = false; else ok = !!M[1]();
      if (ok) feitas.add(mi); pinta();
      const todas = ok && feitas.size === L.length;
      const feita = feitas.has(mi);
      $(id).innerHTML = `<div class="msg ${ok || feita ? 'ok' : 'info'}">${ok ? '✔ ' + (todas ? 'Todas as missões cumpridas! ' : '') + v(M[2]) : feita ? '✔ Missão cumprida!' + (mi < L.length - 1 ? ' Siga para a próxima.' : '') : v(M[3])}</div>${feita ? bot() : ''}`;
      liga();
    },
    pula() { if (L && mi < L.length - 1) { mi++; fresco = true; MIS.ver(); } },
    get i() { return mi; }
  };
})();
const ELI = (cx, cy, a, b, ang, fill, extra) => `<ellipse cx="${cx}" cy="${cy}" rx="${a}" ry="${b}" transform="rotate(${ang} ${cx} ${cy})" fill="${fill}" ${extra || ''}/>`;
const LN = (x1, y1, x2, y2, c, w, dash) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
function bonequinho(x, y, h, c) { const r = h * .11; return `<circle cx="${x}" cy="${y - h + r}" r="${r}" fill="${c}"/><rect x="${x - h * .12}" y="${y - h * .76}" width="${h * .24}" height="${h * .38}" rx="${h * .05}" fill="${c}"/>` + LN(x - h * .06, y - h * .4, x - h * .08, y, c, Math.max(2, h * .07)) + LN(x + h * .06, y - h * .4, x + h * .08, y, c, Math.max(2, h * .07)); }

const CRZ = v => fmt(Math.round(v)) + ' cruzados';
const CORES_NAV = [NAVY, ORANGE, BLUE, GREEN, '#7A4BB5'];
// Barra de 100% dividida em partes: [{nome, v, cor}]
function barra100(partes, W, y) {
  W = W || 320; y = y || 20; const S = partes.reduce((a, p) => a + p.v, 0) || 1; let x = 10, g = '';
  partes.forEach(p => { const w = (W - 20) * p.v / S; if (w > 0) { g += `<rect x="${x}" y="${y}" width="${w}" height="34" fill="${p.cor}" stroke="#fff" stroke-width="2"/>`;
    if (w > 26) g += TX(x + w / 2, y + 22, Math.round(100 * p.v / S) + '%', { fs: 11, c: '#fff' });
    if (w > 40) g += TX(x + w / 2, y + 50, p.nome, { fs: 9, c: GRAY, w: 500 }); } x += w; });
  return g;
}
// Pequeno tonel (vista de lado)
function tonel(x, y, w, h, cheio) {
  const c = cheio ? '#B7793F' : '#EEE4D8', b = cheio ? '#7A4E26' : '#C9BBAA';
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * .28}" fill="${c}" stroke="${b}" stroke-width="1.5"/>` + LN(x + 1, y + h * .25, x + w - 1, y + h * .25, b, 1.5) + LN(x + 1, y + h * .75, x + w - 1, y + h * .75, b, 1.5);
}
