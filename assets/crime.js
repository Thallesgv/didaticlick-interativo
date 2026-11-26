// DidatiClick · A Matemática de um Crime: utilidades das páginas da pasta crime/.
const NAVY = '#0E2354', ORANGE = '#F7821F', PEACH = '#FDE9D8', LIGHT = '#FBB57A', GRAYL = '#D7DEEA', BLUE = '#2457D6', GREEN = '#15803D', GRAY = '#6B7280';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const r1 = v => fmt(Math.round(v * 10) / 10), r2 = v => fmt(Math.round(v * 100) / 100);
const RAD = Math.PI / 180, DEG = 180 / Math.PI;
const P = a => a[Math.floor(Math.random() * a.length)];
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
function arrastar(svg, el, cb) {
  const pt = e => { const p = svg.createSVGPoint(), t = e.touches ? e.touches[0] : e; p.x = t.clientX; p.y = t.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };
  let on = false;
  el.addEventListener('pointerdown', e => { on = true; e.preventDefault(); });
  svg.addEventListener('pointermove', e => { if (!on) return; e.preventDefault(); const p = pt(e); cb(p.x, p.y); });
  window.addEventListener('pointerup', () => { on = false; });
  el.style.cursor = 'grab'; el.style.touchAction = 'none'; svg.style.touchAction = 'none';
}
function chips(id, itens, ini, cb) {
  const el = $(id); let cur = ini;
  el.innerHTML = itens.map((t, i) => `<button data-i="${i}" class="${i === ini ? 'on' : ''}">${t}</button>`).join('');
  el.querySelectorAll('button').forEach(b => b.onclick = () => { cur = +b.dataset.i; el.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); cb && cb(cur); });
  return { get: () => cur };
}
function missao(id, ok, txtOk, txtNao) { $(id).innerHTML = `<div class="msg ${ok ? 'ok' : 'info'}">${ok ? '✔ ' + txtOk : txtNao}</div>`; }
const ELI = (cx, cy, a, b, ang, fill, extra) => `<ellipse cx="${cx}" cy="${cy}" rx="${a}" ry="${b}" transform="rotate(${ang} ${cx} ${cy})" fill="${fill}" ${extra || ''}/>`;
const LN = (x1, y1, x2, y2, c, w, dash) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
function bonequinho(x, y, h, c) { const r = h * .11; return `<circle cx="${x}" cy="${y - h + r}" r="${r}" fill="${c}"/><rect x="${x - h * .12}" y="${y - h * .76}" width="${h * .24}" height="${h * .38}" rx="${h * .05}" fill="${c}"/>` + LN(x - h * .06, y - h * .4, x - h * .08, y, c, Math.max(2, h * .07)) + LN(x + h * .06, y - h * .4, x + h * .08, y, c, Math.max(2, h * .07)); }
