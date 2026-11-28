// DidatiClick · A Matemática de um Inverno sem Fim: utilidades extras das páginas da pasta inv/ (as básicas vêm de ass.js e fin.js).
const LAVA = '#E5482B', LAVA_C = '#FFB13B', ROCHA = '#4A4E5A', ROCHA_E = '#2C2F38', CINZA_C = '#C9CDD6', GELO = '#BFD6EE', CEU = '#9CB3CF', TERRA = '#C9A57A', MAR = '#7FB2E0';
const CI = (x, y, r, f, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra || ''}/>`;
// Plano cartesiano em SVG: PLOT({xmin,xmax,ymin,ymax,dx,dy,xl,yl,fy,fx}, conteúdo(X,Y)) dentro de 340 × 232.
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
const SUP = n => String(n).split('').map(ch => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' })[ch] || ch).join('');
// Vulcão de perfil: base centrada em (x, y), largura w, altura h; fumaça opcional.
function VULCAO(x, y, w, h, fumaca) {
  let g = PG([[x - w / 2, y], [x - w * 0.09, y - h], [x + w * 0.09, y - h], [x + w / 2, y]], ROCHA) + PG([[x - w / 2, y], [x - w * 0.09, y - h], [x - w * 0.02, y - h], [x - w * 0.12, y]], ROCHA_E);
  if (fumaca) [[0, -1.25, 0.12], [-0.08, -1.45, 0.1], [0.08, -1.5, 0.11], [0, -1.7, 0.13]].forEach(([dx, dy, r]) => g += CI(x + dx * w, y + dy * h, r * w, CINZA_C, 'opacity=".9"'));
  return g;
}
// Prédio de n andares com base em (x, y): largura w, andar de altura ha; desloc = deslocamento do topo (balanço), em px.
function PREDIO(x, y, n, w, ha, desloc, cor) {
  let g = ''; const H = n * ha;
  for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n, d0 = desloc * Math.sin(t0 * Math.PI / 2), d1 = desloc * Math.sin(t1 * Math.PI / 2);
    g += PG([[x - w / 2 + d0, y - i * ha], [x + w / 2 + d0, y - i * ha], [x + w / 2 + d1, y - (i + 1) * ha], [x - w / 2 + d1, y - (i + 1) * ha]], cor || '#94A3B8', 'stroke="#fff" stroke-width="1"');
    for (let j = 0; j < 3; j++) g += RC(x - w / 2 + (d0 + d1) / 2 + 3 + j * (w - 6) / 3, y - (i + 1) * ha + 3, (w - 6) / 3 - 3, ha - 6, '#E0ECFA'); }
  return g;
}
