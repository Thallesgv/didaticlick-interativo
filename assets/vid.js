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
// Bichos desenhados (centro em x, y; s = escala, 1 ≈ 24 px de comprimento; f = 1 olha para a direita, -1 para a esquerda).
const BICHO = {
  prea: (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s * (f || 1)} ${s})"><ellipse cx="0" cy="0" rx="11" ry="6.5" fill="#9C6B3F"/><ellipse cx="9" cy="-2" rx="5.5" ry="4.6" fill="#8A5A32"/><circle cx="7.5" cy="-6" r="2" fill="#C99A70"/><circle cx="11.5" cy="-3" r="1.1" fill="#1F2937"/><ellipse cx="-2" cy="2" rx="7" ry="3" fill="#B88456" opacity=".6"/></g>`,
  jaguatirica: (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s * (f || 1)} ${s})"><path d="M-13 -1 q-8 -2 -9 -9" stroke="#D99A3A" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="13" ry="6" fill="#E8B04B"/><rect x="-10" y="3" width="3" height="7" fill="#D99A3A"/><rect x="7" y="3" width="3" height="7" fill="#D99A3A"/><circle cx="13" cy="-4" r="5.5" fill="#E8B04B"/><path d="M10 -8 l1 -5 l3 4 z M15 -8 l2 -5 l2 5 z" fill="#C9862C"/><circle cx="15" cy="-5" r="1" fill="#1F2937"/>${[[-7, -2], [-3, 2], [1, -3], [5, 1], [-9, 2], [9, -1]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="1.8" ry="1.3" fill="#5B3A1A"/>`).join('')}</g>`,
  capivara: (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s * (f || 1)} ${s})"><rect x="-9" y="3" width="3.5" height="7" fill="#6E4A2A"/><rect x="5" y="3" width="3.5" height="7" fill="#6E4A2A"/><ellipse cx="0" cy="0" rx="13" ry="8" fill="#8B5E3C"/><path d="M9 -7 h8 a3 3 0 0 1 3 3 v4 a3 3 0 0 1 -3 3 h-6 z" fill="#7A5232"/><circle cx="10" cy="-8" r="1.6" fill="#5E3E22"/><circle cx="14" cy="-4" r="1" fill="#1F2937"/></g>`,
  mico: (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s * (f || 1)} ${s})"><path d="M-6 4 q-10 8 -6 16" stroke="#E39B2D" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="-2" cy="4" rx="6" ry="7" fill="#F2A93B"/>${Array.from({length: 12}, (_, i) => { const a = i * 30 * Math.PI / 180; return `<ellipse cx="${(4 + Math.cos(a) * 6).toFixed(1)}" cy="${(-6 + Math.sin(a) * 6).toFixed(1)}" rx="3" ry="2" fill="#F5B947" transform="rotate(${i * 30} ${(4 + Math.cos(a) * 6).toFixed(1)} ${(-6 + Math.sin(a) * 6).toFixed(1)})"/>`; }).join('')}<circle cx="4" cy="-6" r="4.2" fill="#6B4423"/><circle cx="5.5" cy="-7" r=".9" fill="#fff"/></g>`
};
// Cenário com bichos espalhados: n de cada tipo, posições fixas por semente.
function CENA(W, H, grupos, fundo) {
  let g = fundo || `<defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E8F4D8"/><stop offset="1" stop-color="#B9DA92"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#cg)" rx="10"/>`;
  const itens = [];
  grupos.forEach(([tipo, n, s, semente]) => { let r = semente || 7; const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; }; for (let i = 0; i < n; i++) itens.push([tipo, 18 + rnd() * (W - 36), 16 + rnd() * (H - 30), s, rnd() < 0.5 ? 1 : -1]); });
  itens.sort((a, b) => a[2] - b[2]).forEach(([t, x, y, s, f]) => g += BICHO[t](x.toFixed(1), y.toFixed(1), s, f));
  return SVG(W, H, g).replace(`width="${W}"`, `width="100%" style="max-width:${Math.round(W*1.4)}px"`);
}
// Vaso com um pé de feijão: base do vaso em (x, yb), h = altura da planta em px, solo = cor da terra, w = largura do vaso.
function VASO(x, yb, h, solo, w) {
  w = w || 22; const vh = w * 0.75; let g = PG([[x - w / 2, yb - vh], [x + w / 2, yb - vh], [x + w * 0.36, yb], [x - w * 0.36, yb]], '#C2703D', 'stroke="#9A5228" stroke-width="1"') + RC(x - w / 2 - 1, yb - vh - 3, w + 2, 4, '#B5612F', 'rx="1"') + `<ellipse cx="${x}" cy="${yb - vh}" rx="${w / 2 - 1}" ry="2.2" fill="${solo || '#6B4A2B'}"/>`;
  if (h > 0) { const t = yb - vh - h; g += LN(x, yb - vh, x, t + 2, '#3F8F4A', 2);
    for (let y = yb - vh - 10, k = 0; y > t + 8; y -= 11, k++) { const d = k % 2 ? 1 : -1; g += `<ellipse cx="${x + d * 5}" cy="${y}" rx="5" ry="2.6" fill="#7CC47F" transform="rotate(${d * -25} ${x + d * 5} ${y})"/>`; }
    g += `<ellipse cx="${x - 4}" cy="${t + 3}" rx="4.5" ry="2.6" fill="#5DB05F" transform="rotate(30 ${x - 4} ${t + 3})"/><ellipse cx="${x + 4}" cy="${t + 3}" rx="4.5" ry="2.6" fill="#5DB05F" transform="rotate(-30 ${x + 4} ${t + 3})"/>`; }
  return g;
}
const FOLHA = (x, y, c, s, ang) => `<g transform="translate(${x} ${y}) rotate(${ang || 0}) scale(${s || 1})"><path d="M-8 0 Q0 -5 8 0 Q0 5 -8 0z" fill="${c || '#7CC47F'}" stroke="#3F8F4A" stroke-width=".8"/><line x1="-8" y1="0" x2="8" y2="0" stroke="#3F8F4A" stroke-width=".6"/></g>`;
const GAUSS = () => Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
const SUP = n => String(n).split('').map(ch => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' })[ch] || ch).join('');
