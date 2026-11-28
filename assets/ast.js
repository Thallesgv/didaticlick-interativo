// DidatiClick · A Matemática de um Asteroide: utilidades extras das páginas da pasta ast/ (as básicas vêm de ass.js e fin.js).
const CEU = '#16285E', CEU2 = '#24397A', AMA = '#F4C542', ROCHA = '#8A8F9C', ROCHA_E = '#5E6372', TERRA = '#4A90D9', VERM = '#D9342B';
const SUP = n => String(n).split('').map(ch => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' })[ch] || ch).join('');
// número em notação científica bonita: CI(45000000) = '4,5 × 10⁷'
function SCI(v, cas) { if (v === 0) return '0'; const e = Math.floor(Math.log10(Math.abs(v))); let a = v / Math.pow(10, e); cas = cas === undefined ? 2 : cas; a = Math.round(a * Math.pow(10, cas)) / Math.pow(10, cas); if (Math.abs(a) >= 10) return SCI(a * Math.pow(10, e), cas); return e === 0 ? fmt(a) : fmt(a) + ' × 10' + SUP(e); }
// número "humano": até 1 bilhão por extenso com pontos, depois notação científica
function NUM(v, cas) { if (Math.abs(v) >= 1e9 || (Math.abs(v) < 0.01 && v !== 0)) return SCI(v, cas); const k = Math.pow(10, cas === undefined ? 2 : cas); return fmt(Math.round(v * k) / k); }
// distância em milhões de km, com 1 casa: MI(45081670) = '45,1 milhões de km'
const MI = v => r1(v / 1e6) + ' milhões de km';
// céu estrelado determinístico (semente) num retângulo
function ESTRELAS(x0, y0, w, h, n, seed) { let r = seed || 7, g = ''; const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
  for (let i = 0; i < n; i++) { const x = x0 + rnd() * w, y = y0 + rnd() * h, s = 0.5 + rnd() * 1.3; g += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${s.toFixed(2)}" fill="#fff" opacity="${(0.55 + rnd() * 0.45).toFixed(2)}"/>`; } return g; }
// rocha irregular com crateras, centro (x, y), raio r
function ROCHA_SVG(x, y, r, seed) { let s = seed || 3; const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; const pts = [];
  for (let k = 0; k < 12; k++) { const a = k / 12 * 2 * Math.PI, rr = r * (0.8 + rnd() * 0.25); pts.push([(x + rr * Math.cos(a)).toFixed(1), (y + rr * Math.sin(a) * 0.85).toFixed(1)]); }
  return PG(pts, ROCHA, `stroke="${ROCHA_E}" stroke-width="1"`) + `<circle cx="${x - r * 0.3}" cy="${y - r * 0.2}" r="${r * 0.22}" fill="${ROCHA_E}"/><circle cx="${x + r * 0.35}" cy="${y + r * 0.25}" r="${r * 0.15}" fill="${ROCHA_E}"/>`; }
