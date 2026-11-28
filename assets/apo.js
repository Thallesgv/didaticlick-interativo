// DidatiClick · A Matemática da Aposta: utilidades extras das páginas da pasta apo/ (as básicas vêm de ass.js e fin.js).
const VERM = '#C8323A', PRETO = '#23262E', VERDE_M = '#1F6B47', AZC = '#A9BFEA', OURO = '#F2C14E', PAPEL = '#FFF8EC';
const CIR = (x, y, r, f, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra || ''}/>`;
// Face de dado: canto (x, y), lado s, valor n.
function DADO(x, y, s, n, fundo, ponto, borda) { const q = s * 0.27, r = s * 0.09, cx = x + s / 2, cy = y + s / 2;
  const P6 = {1: [[0, 0]], 2: [[-q, -q], [q, q]], 3: [[-q, -q], [0, 0], [q, q]], 4: [[-q, -q], [q, -q], [-q, q], [q, q]], 5: [[-q, -q], [q, -q], [0, 0], [-q, q], [q, q]], 6: [[-q, -q], [q, -q], [-q, 0], [q, 0], [-q, q], [q, q]]}[n];
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * 0.18}" fill="${fundo || '#fff'}" stroke="${borda || NAVY}" stroke-width="2"/>` + P6.map(([a, b]) => CIR(cx + a, cy + b, r, ponto || NAVY)).join(''); }
const ELI = (x, y, rx, ry, f, extra) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${extra || ''}/>`;
const PL = (pts, c, w, dash) => `<polyline points="${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="none" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// Controles deslizantes com botões − e + (ajuste fino por toque; segurar repete e acelera).
const _SL0 = SL;
(() => { const st = document.createElement('style'); st.textContent = '.sl input[type=range]{touch-action:pan-y;cursor:pointer}.sl input[type=range]::-webkit-slider-thumb{width:28px;height:28px}.sl input[type=range]::-moz-range-thumb{width:28px;height:28px}'; document.head.appendChild(st); })();
SL = function (id, lo, hi, st, v, cb, show) {
  const o = _SL0(id, lo, hi, st, v, cb, show), el = $(id), inp = el.querySelector('input');
  if (!el || el.dataset.fino) return o; el.dataset.fino = 1;
  // Barra larga como antes (arrastar) e, na linha do título, os botões − e + em volta do valor.
  el.style.gridTemplateColumns = '1fr 38px minmax(64px,auto) 38px'; el.style.rowGap = '6px';
  const lab = el.querySelector('b'), val = el.querySelector('span');
  if (lab) { lab.style.gridColumn = '1'; lab.style.gridRow = '1'; }
  if (val) { val.style.gridColumn = '3'; val.style.gridRow = '1'; val.style.textAlign = 'center'; }
  inp.style.gridColumn = '1 / -1'; inp.style.gridRow = '2'; inp.style.height = '28px';
  const dec = (String(st).split('.')[1] || '').length;
  const passo = d => { let x = lo + Math.round((+inp.value + d * st - lo) / st) * st; x = Math.min(hi, Math.max(lo, +x.toFixed(dec))); if (x === +inp.value) return; o.set(x); cb && cb(x); };
  const bt = (txt, d) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = txt; b.className = 'alt'; b.setAttribute('aria-label', d < 0 ? 'diminuir' : 'aumentar');
    b.style.cssText = 'padding:0;width:38px;height:38px;border-radius:50%;font-size:20px;font-weight:700;line-height:1';
    let t = null, n = 0; const para = () => { clearTimeout(t); t = null; };
    const rep = () => { passo(d * (n > 25 ? 10 : 1)); n++; t = setTimeout(rep, n < 3 ? 350 : 70); };
    b.addEventListener('pointerdown', e => { e.preventDefault(); n = 0; rep(); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, para));
    b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); passo(d); } });
    return b; };
  const bm = bt('−', -1), bp = bt('+', 1); bm.style.gridColumn = '2'; bm.style.gridRow = '1'; bp.style.gridColumn = '4'; bp.style.gridRow = '1';
  el.insertBefore(bm, inp); inp.after(bp);
  return o;
};
const vg = v => fmt(v).replace(/,(\d*?)0+$/, (m, d) => d ? ',' + d : '');
