// DidatiClick · Matemática e Cinema: utilidades das páginas da pasta cine/.
const NAVY = '#0E2354', ORANGE = '#F7821F', PEACH = '#FDE9D8', LIGHT = '#FBB57A', GRAYL = '#D7DEEA', BLUE = '#2457D6', GREEN = '#15803D';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const r1 = v => fmt(Math.round(v * 10) / 10), r2 = v => fmt(Math.round(v * 100) / 100);
// Arrastar elementos de um SVG: arr(svg, el, (x, y) => {...}) com coordenadas do viewBox
function arrastar(svg, el, cb) {
  const pt = e => { const p = svg.createSVGPoint(), t = e.touches ? e.touches[0] : e; p.x = t.clientX; p.y = t.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); };
  let on = false;
  const down = e => { on = true; e.preventDefault(); };
  const move = e => { if (!on) return; e.preventDefault(); const p = pt(e); cb(p.x, p.y); };
  const up = () => { on = false; };
  el.addEventListener('pointerdown', down); svg.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
  el.style.cursor = 'grab'; el.style.touchAction = 'none'; svg.style.touchAction = 'none';
}
function chips(id, itens, ini, cb) {
  const el = $(id); let cur = ini;
  el.innerHTML = itens.map((t, i) => `<button data-i="${i}" class="${i === ini ? 'on' : ''}">${t}</button>`).join('');
  el.querySelectorAll('button').forEach(b => b.onclick = () => { cur = +b.dataset.i; el.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); cb && cb(cur); });
  return { get: () => cur };
}
function missao(id, ok, txtOk, txtNao) { $(id).innerHTML = `<div class="msg ${ok ? 'ok' : 'info'}">${ok ? '✔ ' + txtOk : txtNao}</div>`; }
