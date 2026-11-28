// DidatiClick · A Matemática na Arqueologia: utilidades extras das páginas da pasta arq/ (as básicas vêm de ass.js e fin.js).
const AREIA = '#EBD5A6', AREIA_E = '#D2B47C', TERRA = '#B5774A', TERRA_E = '#7E4E2E', CONCHA = '#FBF4EA', AGUA = '#BFD9F2', AGUA_E = '#4F8CC0', PAPEL = '#FFF8EC', SOL = '#F6C35A', CER = '#C8693A';
const CIR = (x, y, r, f, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra || ''}/>`;
const ELI = (x, y, rx, ry, f, extra) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${extra || ''}/>`;
const PL = (pts, c, w, dash) => `<polyline points="${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="none" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
// Controles deslizantes com botões − e + (ajuste fino por toque; segurar repete e acelera).
const _SL0 = SL;
SL = function (id, lo, hi, st, v, cb, show) {
  const o = _SL0(id, lo, hi, st, v, cb, show), el = $(id), inp = el.querySelector('input');
  if (!el || el.dataset.fino) return o; el.dataset.fino = 1;
  el.style.gridTemplateColumns = '38px 1fr 38px 84px';
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
  el.insertBefore(bt('−', -1), inp); inp.after(bt('+', 1));
  return o;
};
const vg = v => fmt(v).replace(/,(\d*?)0+$/, (m, d) => d ? ',' + d : '');
