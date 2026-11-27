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
