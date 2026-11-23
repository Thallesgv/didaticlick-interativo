// Biblioteca comum dos sistemas de numeração (DidatiClick · MatematiClick).
// Usada pelas páginas da pasta numeracao/ e pelo gerador da apostila (via node), para que
// as figuras do papel e as da tela sejam idênticas.
(function (root) {
  const NAVY = '#0E2354', OR = '#F7821F', BL = '#2457D6', GR = '#15803D', RD = '#B91C1C', BR = '#8A5A12', PU = '#7A4BB5';
  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // ---------------- Egípcio (aditivo, base 10) ----------------
  // Cada símbolo é desenhado numa célula de altura 46 (linha de base em y = 40).
  const EG = [
    { v: 1, nome: 'traço', plural: 'traços', w: 9, cor: NAVY,
      d: c => `<line x1="4" y1="20" x2="4" y2="40" stroke="${c}" stroke-width="2.8" stroke-linecap="round"/>` },
    { v: 10, nome: 'calcanhar', plural: 'calcanhares', w: 20, cor: BL,
      d: c => `<path d="M3,40 L3,27 a7,8 0 0,1 14,0 L17,40" fill="none" stroke="${c}" stroke-width="2.8"/>` },
    { v: 100, nome: 'corda enrolada', plural: 'cordas enroladas', w: 25, cor: OR,
      d: c => `<path d="M10,24 a3,3 0 1,1 3,3 a6,6 0 1,1 -6,-6 a9,9 0 1,1 9,9" fill="none" stroke="${c}" stroke-width="2.5"/><line x1="19" y1="33" x2="19" y2="40" stroke="${c}" stroke-width="2.5"/>` },
    { v: 1000, nome: 'flor de lótus', plural: 'flores de lótus', w: 22, cor: GR,
      d: c => `<path d="M11,40 L11,15" stroke="${c}" stroke-width="2.4"/><path d="M11,15 q-8,-2 -7,-10 q6,1 7,7 q1,-6 7,-7 q1,8 -7,10z" fill="${c}"/><path d="M11,40 q-6,0 -7,-6 M11,40 q6,0 7,-6" stroke="${c}" stroke-width="2" fill="none"/>` },
    { v: 10000, nome: 'dedo', plural: 'dedos', w: 16, cor: BR,
      d: c => `<path d="M4,40 L4,11 Q4,3 10,4 Q14,5 13,9 L10,10 Q9,10.5 9,13 L9,40 Z" fill="${c}"/>` },
    { v: 100000, nome: 'girino', plural: 'girinos', w: 22, cor: PU,
      d: c => `<ellipse cx="9" cy="32" rx="6.5" ry="6" fill="${c}"/><circle cx="7" cy="31" r="1.3" fill="#fff"/><path d="M14,28 Q21,22 16,15 Q12,10 17,5" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>` },
    { v: 1000000, nome: 'deus Heh', plural: 'deuses Heh', w: 28, cor: RD,
      d: c => `<circle cx="14" cy="9" r="3.6" fill="${c}"/><path d="M14,13 L14,29 M14,18 L6,9 M14,18 L22,9 M14,29 L7,35 L11,40 M14,29 L21,40" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>` },
  ];
  function egCounts(n) { const c = []; for (let k = 0; k < 7; k++) { c.push(k < 6 ? Math.floor(n / 10 ** k) % 10 : Math.floor(n / 1e6)); } return c; }
  // counts[k] = quantos símbolos de valor 10^k. Desenha do maior (esquerda) para o menor.
  function egSVG(counts, opt = {}) {
    const s = opt.scale || 1.4; const maxRow = opt.maxRow || 5;
    const twoRows = counts.some(k => k > maxRow - 1) && !opt.oneRow;
    const H = twoRows ? 86 : 46; let x = 4; const parts = [];
    for (let k = 6; k >= 0; k--) {
      const n = counts[k]; if (!n) continue; const S = EG[k];
      if (!twoRows || n <= maxRow - 1) {
        const y = twoRows ? 20 : 0;
        for (let i = 0; i < n; i++) { parts.push(`<g transform="translate(${x + i * S.w},${y})">${S.d(S.cor)}</g>`); }
        x += n * S.w + 7;
      } else {
        const top = Math.ceil(n / 2), bot = n - top;
        for (let i = 0; i < top; i++) parts.push(`<g transform="translate(${x + i * S.w},0)">${S.d(S.cor)}</g>`);
        const off = (top - bot) * S.w / 2;
        for (let i = 0; i < bot; i++) parts.push(`<g transform="translate(${x + off + i * S.w},40)">${S.d(S.cor)}</g>`);
        x += top * S.w + 7;
      }
    }
    const W = Math.max(x - 3, 20);
    const w = opt.width || W * s;
    return `<svg viewBox="0 0 ${W} ${H}" width="${w.toFixed ? w.toFixed(0) : w}" xmlns="http://www.w3.org/2000/svg">${parts.join('')}</svg>`;
  }
  const egipcio = (n, opt) => egSVG(egCounts(n), opt);
  const egSimbolo = (k, w, h) => `<svg viewBox="0 0 ${EG[k].w} 46" ${h ? `height="${h}"` : `width="${w || EG[k].w * 1.4}"`} xmlns="http://www.w3.org/2000/svg">${EG[k].d(EG[k].cor)}</svg>`;

  // ---------------- Romano ----------------
  const ROM = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const RV = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  function romano(n) { let r = ''; for (const [v, s] of ROM) while (n >= v) { r += s; n -= v; } return r; }
  // Até 3 999 999: a parte dos milhares (≥ 4) vai com traço em cima (vale × 1 000).
  function romanoGrande(n) {
    if (n < 4000) return { barra: '', resto: romano(n) };
    const mil = Math.floor(n / 1000), r = n % 1000; return { barra: romano(mil), resto: romano(r) };
  }
  function romanoHTML(n) { const g = romanoGrande(n); return (g.barra ? `<span style="text-decoration:overline">${g.barra}</span>` : '') + g.resto; }
  function romanoPassos(n) { const p = []; for (const [v, s] of ROM) while (n >= v) { p.push([s, v]); n -= v; } return p; }
  // Lê um numeral romano e explica se ele segue as regras.
  function lerRomano(txt) {
    const s = txt.toUpperCase().replace(/\s/g, '');
    if (!s) return { ok: false, erro: 'Digite um numeral romano.' };
    const bad = s.match(/[^IVXLCDM]/); if (bad) return { ok: false, erro: `O símbolo “${bad[0]}” não existe no sistema romano. Use só I, V, X, L, C, D e M.` };
    let m = s.match(/([VLD]).*\1/); if (m) return { ok: false, erro: `${m[1]} não pode aparecer duas vezes: ${m[1]}${m[1]} seria ${2 * RV[m[1]]}, que já tem símbolo próprio (${romano(2 * RV[m[1]])}).` };
    m = s.match(/(I{4,}|X{4,}|C{4,}|M{4,})/); if (m) return { ok: false, erro: `${m[1][0]} aparece ${m[1].length} vezes seguidas. Cada símbolo se repete no máximo 3 vezes.` };
    let tot = 0; const passos = [];
    for (let i = 0; i < s.length; i++) {
      const a = RV[s[i]], b = RV[s[i + 1]] || 0;
      if (a < b) {
        const par = s[i] + s[i + 1];
        if (!['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].includes(par)) {
          const dica = s[i] === 'V' || s[i] === 'L' || s[i] === 'D' ? `${s[i]} nunca é colocado antes de um símbolo maior para subtrair.` : `${s[i]} só pode subtrair dos dois símbolos logo acima dele (${s[i] === 'I' ? 'V e X' : s[i] === 'X' ? 'L e C' : 'D e M'}).`;
          return { ok: false, erro: `${par} não vale: ${dica}` };
        }
        passos.push([par, b - a, true]); tot += b - a; i++;
      } else { passos.push([s[i], a, false]); tot += a; }
    }
    const certo = romano(tot);
    if (certo !== s) return { ok: false, valor: tot, erro: `Os símbolos somam ${fmt(tot)}, mas não estão na forma correta. Os romanos escreviam ${certo}.` };
    return { ok: true, valor: tot, passos };
  }

  // ---------------- Babilônico (base 60) ----------------
  function bDigits(n) { if (n === 0) return [0]; const d = []; while (n > 0) { d.unshift(n % 60); n = Math.floor(n / 60); } return d; }
  const wedge = (x, y, c) => `<path d="M${x},${y} L${x + 10},${y} L${x + 5},${y + 7} Z" fill="${c}"/><line x1="${x + 5}" y1="${y + 6}" x2="${x + 5}" y2="${y + 26}" stroke="${c}" stroke-width="2.2"/>`;
  const corner = (x, y, c) => `<path d="M${x + 13},${y} L${x},${y + 8} L${x + 13},${y + 16}" fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/><path d="M${x},${y + 8} l5,-1.5 l0,3 z" fill="${c}"/>`;
  // Desenha um algarismo babilônico (1 a 59). Retorna [svg, largura].
  function bGlyph(d, x0, c) {
    const t = Math.floor(d / 10), u = d % 10; let s = '', x = x0;
    if (t) { const cols = t <= 3 ? 1 : 2; for (let i = 0; i < t; i++) { const col = Math.floor(i / 3), row = i % 3; s += corner(x + col * 12, 2 + row * 13 + (t <= 2 ? 6 : 0), c); } x += cols * 12 + 8; }
    if (u) { const per = u <= 3 ? u : (u === 4 ? 2 : 3); const rows = Math.ceil(u / per); for (let i = 0; i < u; i++) { const r = Math.floor(i / per), k = i % per; s += wedge(x + k * 9, 4 + r * (rows === 1 ? 0 : 13) + (rows === 1 ? 6 : 0), c); } x += per * 9 + 4; }
    return [s, Math.max(x - x0, 14)];
  }
  function babilonico(n, opt = {}) {
    const ds = opt.digits || bDigits(n); const cores = [NAVY, OR, BL, GR]; const gap = opt.gap || (opt.rotulos ? 34 : 14); let x = opt.rotulos ? 24 : 6, parts = [], labels = [];
    ds.forEach((d, i) => {
      const pos = ds.length - 1 - i; const c = opt.cores ? cores[pos % 4] : NAVY; let w;
      if (d === 0) {
        if (opt.zero) { parts.push(`<path d="M${x + 2},${x * 0 + 22} l8,-10 M${x + 2},34 l8,-10" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`); w = 14; }
        else { w = 20; }
      } else { const [s, ww] = bGlyph(d, x, c); parts.push(s); w = ww; }
      labels.push([x + w / 2, pos, d]); x += w + gap;
    });
    const W = x - gap + (opt.rotulos ? 24 : 6); const H = opt.rotulos ? 70 : 46;
    let lab = '';
    if (opt.rotulos) labels.forEach(([cx, pos, d]) => { lab += `<text x="${cx}" y="58" font-size="9" font-weight="700" fill="${opt.cores ? cores[pos % 4] : NAVY}" text-anchor="middle" font-family="Poppins,sans-serif">${d}×${fmt(60 ** pos)}</text>`; });
    return `<svg viewBox="0 0 ${W} ${H}" width="${(opt.width || W * (opt.scale || 1.3)).toFixed(0)}" xmlns="http://www.w3.org/2000/svg">${parts.join('')}${lab}</svg>`;
  }

  // ---------------- Maia (base 20, vertical) ----------------
  function mDigits(n) { if (n === 0) return [0]; const d = []; while (n > 0) { d.unshift(n % 20); n = Math.floor(n / 20); } return d; }
  function mGlyph(d, cx, y0, c) { // célula 56 x 40, centro cx
    if (d === 0) return `<ellipse cx="${cx}" cy="${y0 + 20}" rx="17" ry="9" fill="#FFF7EF" stroke="${c}" stroke-width="2"/><path d="M${cx - 12},${y0 + 18} q12,-6 24,0 M${cx - 13},${y0 + 23} q13,-5 26,0" fill="none" stroke="${c}" stroke-width="1.6"/>`;
    const b = Math.floor(d / 5), p = d % 5; let s = ''; const hb = 7, gap = 3; const tot = b * (hb + gap) + (p ? 12 : 0);
    let y = y0 + 20 + tot / 2;
    for (let i = 0; i < b; i++) { y -= hb; s += `<rect x="${cx - 22}" y="${y}" width="44" height="${hb}" rx="2.5" fill="${c}"/>`; y -= gap; }
    if (p) { const yy = y - 6; for (let i = 0; i < p; i++) s += `<circle cx="${cx - (p - 1) * 6 + i * 12}" cy="${yy}" r="4.6" fill="${c}"/>`; }
    return s;
  }
  function maia(n, opt = {}) {
    const ds = opt.digits || mDigits(n); const cores = [NAVY, OR, BL, GR]; const L = ds.length; const cell = 46;
    const W = opt.rotulos ? 150 : 60; const H = L * cell + 6; let s = '';
    ds.forEach((d, i) => {
      const pos = L - 1 - i; const c = opt.cores ? cores[pos % 4] : NAVY; const y0 = 4 + i * cell;
      if (i) s += `<line x1="4" y1="${y0 - 3}" x2="${W - 4}" y2="${y0 - 3}" stroke="#D7DEEA" stroke-dasharray="3 3"/>`;
      s += mGlyph(d, 30, y0, c);
      if (opt.rotulos) s += `<text x="62" y="${y0 + 25}" font-size="11" font-weight="700" fill="${c}" font-family="Poppins,sans-serif">${d} × ${fmt(20 ** pos)}</text>`;
    });
    return `<svg viewBox="0 0 ${W} ${H}" width="${(opt.width || W * (opt.scale || 1)).toFixed(0)}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
  }

  // ---------------- Bases ----------------
  function emBase(n, b) { if (n === 0) return [0]; const d = []; while (n > 0) { d.unshift(n % b); n = Math.floor(n / b); } return d; }
  function divisoes(n, b) { const r = []; while (n >= b) { r.push([n, Math.floor(n / b), n % b]); n = Math.floor(n / b); } r.push([n, 0, n]); return r; }

  // ---------------- Por extenso (até 999 999 999 999) ----------------
  const U = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  const D = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  const C = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  function ate999(n) {
    if (n === 100) return 'cem'; const c = Math.floor(n / 100), r = n % 100, p = [];
    if (c) p.push(C[c]);
    if (r) { if (r < 20) p.push(U[r]); else { const d = Math.floor(r / 10), u = r % 10; p.push(u ? D[d] + ' e ' + U[u] : D[d]); } }
    return p.join(' e ');
  }
  function extenso(n) {
    if (n === 0) return 'zero';
    const cl = [['', ''], ['mil', 'mil'], ['milhão', 'milhões'], ['bilhão', 'bilhões']]; const g = [];
    let k = 0; while (n > 0) { g.push(n % 1000); n = Math.floor(n / 1000); k++; }
    const parts = [];
    for (let i = g.length - 1; i >= 0; i--) {
      const v = g[i]; if (!v) continue;
      let t = i === 1 && v === 1 ? 'mil' : ate999(v) + (i ? ' ' + (v === 1 ? cl[i][0] : cl[i][1]) : '');
      parts.push([t, v, i]);
    }
    let out = '';
    parts.forEach(([t, v, i], j) => {
      if (j === 0) out = t;
      else { const last = j === parts.length - 1; const e = last && (v < 100 || v % 100 === 0); out += (e ? ' e ' : (parts[j - 1][2] === 1 ? ' ' : ', ')) + t; }
    });
    return out;
  }

  const API = { NAVY, OR, BL, GR, RD, BR, PU, fmt, EG, egCounts, egSVG, egipcio, egSimbolo, romano, romanoGrande, romanoHTML, romanoPassos, lerRomano, bDigits, babilonico, mDigits, maia, emBase, divisoes, extenso };
  if (typeof module !== 'undefined' && module.exports) module.exports = API; else root.SN = API;
})(this);
