// DidatiClick · A Matemática de um Assalto: utilidades das páginas da pasta ass/.
const NAVY = '#0E2354', ORANGE = '#F7821F', PEACH = '#FDE9D8', LIGHT = '#FBB57A', GRAYL = '#D7DEEA', BLUE = '#2457D6', GREEN = '#15803D', GRAY = '#6B7280', PLANTA = '#1E3A7B', GRADE = '#2C4C92';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const r1 = v => fmt(Math.round(v * 10) / 10), r2 = v => fmt(Math.round(v * 100) / 100);
const RAD = Math.PI / 180, DEG = 180 / Math.PI;
const P = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
function svgPt(box, e) { const s = box.querySelector('svg'), p = s.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(s.getScreenCTM().inverse()); }
// Toque/arraste no contêiner: cb(x, y) em coordenadas do SVG (o SVG é refeito a cada movimento).
function toque(id, cb) {
  const box = $(id); box.style.touchAction = 'none'; let on = false;
  box.addEventListener('pointerdown', e => { on = true; e.preventDefault(); try { box.setPointerCapture(e.pointerId); } catch (_) {} const p = svgPt(box, e); cb(p.x, p.y, true); });
  box.addEventListener('pointermove', e => { if (!on) return; e.preventDefault(); const p = svgPt(box, e); cb(p.x, p.y, false); });
  const fim = () => { on = false; }; box.addEventListener('pointerup', fim); box.addEventListener('pointercancel', fim);
}
function chips(id, itens, ini, cb) {
  const el = $(id); let cur = ini;
  el.innerHTML = itens.map((t, i) => `<button data-i="${i}" class="${i === ini ? '' : 'alt'}" style="padding:5px 11px;font-size:13px;margin:2px">${t}</button>`).join('');
  el.querySelectorAll('button').forEach(b => b.onclick = () => { cur = +b.dataset.i; el.querySelectorAll('button').forEach(x => x.className = x === b ? '' : 'alt'); cb && cb(cur); });
  return { get: () => cur };
}
function missao(id, ok, txtOk, txtNao) { $(id).innerHTML = `<div class="msg ${ok ? 'ok' : 'info'}">${ok ? '✔ ' + txtOk : txtNao}</div>`; }
const LN = (x1, y1, x2, y2, c, w, dash) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
const RC = (x, y, w, h, f, extra) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${extra || ''}/>`;
const PG = (pts, f, extra) => `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="${f}" ${extra || ''}/>`;
// Planta do térreo do Banco Aurora (24 m × 16 m). k = pixels por metro, (ox, oy) = canto (0, 0) embaixo à esquerda.
function plantaBanco(ox, oy, k) {
  const X = x => ox + x * k, Y = y => oy - y * k; let g = RC(X(0), Y(16), 24 * k, 16 * k, PLANTA);
  for (let i = 1; i < 24; i++) g += LN(X(i), Y(0), X(i), Y(16), GRADE, .6);
  for (let j = 1; j < 16; j++) g += LN(X(0), Y(j), X(24), Y(j), GRADE, .6);
  const W = (a, b, c, d, w) => LN(X(a), Y(b), X(c), Y(d), '#fff', w || 2.4);
  [[0,0,24,0],[24,0,24,16],[24,16,0,16],[0,16,0,0]].forEach(s => g += W(...s, 3.2));
  [[14,0,14,16],[14,10,24,10],[14,6,24,6],[0,10,14,10]].forEach(s => g += W(...s));
  [[5,0,9,0],[14,3,14,4.5],[14,12,14,13.5],[17,10,18.5,10],[3,10,4.5,10]].forEach(s => g += LN(X(s[0]), Y(s[1]), X(s[2]), Y(s[3]), PLANTA, 4));
  const R = (x, y, t) => g += TX(X(x), Y(y), t, { fs: 9, c: '#fff' });
  R(7, 5, 'SAGUÃO'); R(19, 2.8, 'CAIXAS'); R(19, 7.6, 'ESCADA'); R(19, 12.8, 'GERÊNCIA'); R(7, 12.8, 'ARQUIVO');
  return g;
}
