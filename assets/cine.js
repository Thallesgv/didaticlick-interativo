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
    card.innerHTML = `<h2>Missão ${mi + 1} de ${L.length}</h2><div style="display:flex;gap:5px;margin:4px 0 10px">${L.map((_, i) => `<span style="width:26px;height:8px;border-radius:4px;background:${feitas.has(i) ? '#15803D' : i === mi ? '#F7821F' : '#D7DEEA'}"></span>`).join('')}</div><p style="margin:0">${L[mi][0]}</p>${keep ? '' : bot()}`;
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
    get i() { return mi; }
  };
})();
