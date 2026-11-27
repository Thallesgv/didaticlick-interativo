// DidatiClick · A Matemática da Vida: utilidades extras das páginas da pasta vid/ (as básicas vêm de ass.js).
const VERDE = '#7CC47F', VERDE_E = '#3F8F4A', VERDE_C = '#D7F0D3', VERM = '#D9342B', AGUA = '#9CC8F0';
const CI = (x, y, r, f, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra || ''}/>`;
// Plano cartesiano em SVG: PLOT({xmin,xmax,ymin,ymax,dx,dy,xl,yl,fy}, conteúdo(X,Y)) dentro de 340 × 230.
function PLOT(o, f) {
  const x0 = 46, y0 = 200, W = 284, H = 180, X = v => x0 + (v - o.xmin) / (o.xmax - o.xmin) * W, Y = v => y0 - (v - o.ymin) / (o.ymax - o.ymin) * H; let g = '';
  const lab = v => o.fy ? o.fy(v) : fmt(Math.round(v * 100) / 100);
  for (let v = o.xmin; v <= o.xmax + 1e-9; v += o.dx) g += LN(X(v), y0, X(v), y0 - H, '#E5E7EB', 1) + TX(X(v), y0 + 13, o.fx ? o.fx(v) : fmt(Math.round(v * 100) / 100), { fs: 9, c: GRAY, w: 500 });
  for (let v = o.ymin; v <= o.ymax + 1e-9; v += o.dy) g += LN(x0, Y(v), x0 + W, Y(v), '#E5E7EB', 1) + TX(x0 - 4, Y(v) + 3, lab(v), { fs: 9, c: GRAY, w: 500, a: 'end' });
  g += LN(x0, y0, x0 + W, y0, NAVY, 1.6) + LN(x0, y0, x0, y0 - H, NAVY, 1.6) + TX(x0 + W, y0 + 26, o.xl, { fs: 10, a: 'end' }) + TX(x0 + 2, 12, o.yl, { fs: 10, a: 'start' });
  return SVG(340, 232, g + f(X, Y));
}
const linha = (pts, X, Y, c, w, dash) => `<polyline points="${pts.map(p => X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' ')}" fill="none" stroke="${c}" stroke-width="${w || 2.5}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const ponto = (x, y, X, Y, c) => `<circle cx="${X(x)}" cy="${Y(y)}" r="5" fill="${c}" stroke="#fff" stroke-width="2"/>`;
// número com expoente bonito: sup(3) = '³'
const SUP = n => String(n).split('').map(ch => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' })[ch] || ch).join('');
