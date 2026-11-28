// DidatiClick · A Matemática de um Resgate: utilidades extras das páginas da pasta res/ (as básicas vêm de ass.js e fin.js).
const ROCHA = '#E2CBA8', ROCHA_M = '#C9A27A', ROCHA_E = '#6B4E34', CEU = '#EAF4FB', VERM = '#D9342B', AGUA = '#9CC8F0';
const SUP = n => String(n).split('').map(ch => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' })[ch] || ch).join('');
const tg = g => Math.tan(g * RAD), atg = v => Math.atan(v) * DEG;
// Projeção isométrica: x (leste) para a direita-baixo, y (norte) para a direita-cima, z para cima. s = px por metro.
const ISO = (ox, oy, s) => (x, y, z) => [ox + (x + y) * 0.87 * s, oy + (x - y) * 0.5 * s - z * s];
const POLY = (pts, f, extra) => `<polygon points="${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="${f}" ${extra || ''}/>`;
// Refúgio: caixinha laranja centrada em (x, y).
const REFUGIO = (x, y, w, h) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="#F7821F" stroke="#0E2354" stroke-width="1.2" rx="2"/>`;
// Arco de ângulo de a1 a a2 (graus, sentido anti-horário na tela com y para baixo invertido) em volta de (cx, cy).
function ARCO(cx, cy, r, a1, a2, c) { const p = a => [cx + r * Math.cos(a * RAD), cy - r * Math.sin(a * RAD)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); const big = Math.abs(a2 - a1) > 180 ? 1 : 0; const sw = a2 > a1 ? 0 : 1;
  return `<path d="M${cx} ${cy} L${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${big} ${sw} ${x2.toFixed(1)} ${y2.toFixed(1)}Z" fill="${c || '#FBB57A'}" opacity=".8"/>`; }
// Plano cartesiano em SVG: PLOT({xmin,xmax,ymin,ymax,dx,dy,xl,yl,fy,fx}, conteúdo(X,Y)) dentro de 340 × 232.
function PLOT(o, f) {
  const x0 = 46, y0 = 200, W = 284, H = 180, X = v => x0 + (v - o.xmin) / (o.xmax - o.xmin) * W, Y = v => y0 - (v - o.ymin) / (o.ymax - o.ymin) * H; let g = '';
  const lab = v => o.fy ? o.fy(v) : fmt(Math.round(v * 1000) / 1000);
  for (let v = o.xmin; v <= o.xmax + 1e-9; v += o.dx) g += LN(X(v), y0, X(v), y0 - H, '#E5E7EB', 1) + TX(X(v), y0 + 13, o.fx ? o.fx(v) : fmt(Math.round(v * 100) / 100), { fs: 9, c: GRAY, w: 500 });
  for (let v = o.ymin; v <= o.ymax + 1e-9; v += o.dy) g += LN(x0, Y(v), x0 + W, Y(v), '#E5E7EB', 1) + TX(x0 - 4, Y(v) + 3, lab(v), { fs: 9, c: GRAY, w: 500, a: 'end' });
  g += LN(x0, y0, x0 + W, y0, NAVY, 1.6) + LN(x0, y0, x0, y0 - H, NAVY, 1.6) + TX(x0 + W, y0 + 26, o.xl, { fs: 10, a: 'end' }) + TX(x0 + 2, 12, o.yl, { fs: 10, a: 'start' });
  return SVG(340, 232, `<defs><clipPath id="pc"><rect x="${x0}" y="${y0 - H}" width="${W}" height="${H}"/></clipPath></defs>` + g + `<g clip-path="url(#pc)">${f(X, Y)}</g>`);
}
const linha = (pts, X, Y, c, w, dash) => `<polyline points="${pts.map(p => X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' ')}" fill="none" stroke="${c}" stroke-width="${w || 2.5}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const ponto = (x, y, X, Y, c) => `<circle cx="${X(x)}" cy="${Y(y)}" r="5" fill="${c}" stroke="#fff" stroke-width="2"/>`;
// Modelo do ar do refúgio (Livro 2): consumo de O2 por pessoa = 12/33 m³ por dia em repouso; quociente respiratório 0,8.
const AR = { o2pp: 12 / 33, qr: 0.8, o2lim: 19.5, co2lim: 0.5, o20: 21, co20: 0.04 };
