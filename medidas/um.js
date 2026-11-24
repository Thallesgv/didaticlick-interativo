// Biblioteca comum da apostila Unidades de Medida (DidatiClick).
// Usada pelas páginas da pasta medidas/ e pelo gerador do PDF (via node),
// para que as figuras do papel e as da tela sejam as mesmas.
(function (root) {
  const NAVY = '#0E2354', OR = '#F7821F', BL = '#2457D6', GR = '#15803D', RD = '#B91C1C', GY = '#6B7280', LG = '#D7DEEA', BR = '#8A5A12';
  const FONT = 'font-family="Poppins, sans-serif"';
  const T = (x, y, s, fs = 13, c = NAVY, w = 700, a = 'middle', extra = '') =>
    `<text x="${x}" y="${y}" font-size="${fs}" font-weight="${w}" fill="${c}" text-anchor="${a}" ${FONT} ${extra}>${s}</text>`;
  const svg = (W, H, body, w) => `<svg viewBox="0 0 ${W} ${H}" width="${w || W}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  // número com vírgula decimal e espaço nos milhares
  function fmt(v) {
    if (typeof v !== 'number') return String(v);
    let s = (Math.round(v * 1e9) / 1e9).toString();
    if (s.includes('e')) s = v.toFixed(12).replace(/0+$/, '').replace(/\.$/, '');
    let [i, d] = s.split('.'); const neg = i.startsWith('-'); if (neg) i = i.slice(1);
    i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return (neg ? '−' : '') + i + (d ? ',' + d : '');
  }

  // ---------------- escadas de unidades ----------------
  const ESC = {
    m: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'],
    g: ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'],
    L: ['kL', 'hL', 'daL', 'L', 'dL', 'cL', 'mL'],
    m2: ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'],
    m3: ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'],
  };
  const POT = { m: 1, g: 1, L: 1, m2: 2, m3: 3 };
  const FATOR = { 1: 10, 2: 100, 3: 1000 };
  // Converte v da unidade de índice i para a de índice j na escada g.
  function converte(v, g, i, j) { const f = FATOR[POT[g]]; return v * Math.pow(f, j - i); }

  // Escadinha: degraus descendo da esquerda para a direita.
  // opt: {de, para} índices destacados; {setas:true} mostra × e ÷ entre degraus.
  function escada(g = 'm', opt = {}) {
    const U = ESC[g], f = FATOR[POT[g]], n = U.length;
    const sw = opt.sw || 62, sh = opt.sh || 26, top = 40, W = n * sw + 70, H = top + n * sh + 34;
    let b = '';
    for (let k = 0; k < n; k++) {
      const x = 10 + k * sw, y = top + k * sh;
      const on = k === opt.de || k === opt.para;
      const fill = k === opt.de ? OR : (k === opt.para ? BL : (U[k].startsWith(g === 'g' ? 'g' : g[0]) && U[k].length <= (g.length > 1 ? 2 : 1) ? '#FFE8D2' : '#EEF3FF'));
      b += `<rect x="${x}" y="${y}" width="${sw}" height="${H - y - 6}" fill="${fill}" stroke="${NAVY}" stroke-width="1.4"/>`;
      b += T(x + sw / 2, y + 19, U[k], 16, on ? '#fff' : NAVY);
    }
    if (opt.setas !== false) {
      for (let k = 0; k < n - 1; k++) {
        const x = 10 + (k + 1) * sw, y = top + k * sh;
        b += `<path d="M${x - 22},${y - 6} Q${x + 2},${y - 20} ${x + 20},${y + 4}" fill="none" stroke="${GR}" stroke-width="1.6"/><polygon points="${x + 20},${y + 4} ${x + 13},${y} ${x + 21},${y - 3}" fill="${GR}"/>`;
        
      }
      b += T(W - 8, top - 18, `descer: × ${fmt(f)}`, 14, GR, 700, 'end');
      b += T(W - 8, top - 1, `subir: ÷ ${fmt(f)}`, 14, RD, 700, 'end');
    }
    return svg(W, H, b, opt.w);
  }

  // Quadro de unidades com os algarismos de um número em cada casa.
  // valor em texto (ex.: '3,45'), unidade de índice u (a casa das unidades do número).
  function quadro(g, valor, u, opt = {}) {
    const U = ESC[g], n = U.length, cw = opt.cw || 54, W = n * cw + 20, H = 76;
    const [ip, dp = ''] = String(valor).replace(/\s/g, '').split(',');
    const casas = Array(n).fill('');
    for (let k = 0; k < ip.length; k++) { const c = u - (ip.length - 1 - k); if (c >= 0 && c < n) casas[c] = ip[k]; }
    for (let k = 0; k < dp.length; k++) { const c = u + 1 + k; if (c < n) casas[c] = dp[k]; }
    const z = [];
    if (opt.virgulaEm != null) {
      const f = casas.map((c, k) => c !== '' ? k : -1).filter(k => k >= 0);
      const lo = Math.min(opt.virgulaEm, f[0] ?? u), hi = Math.max(opt.virgulaEm, f[f.length - 1] ?? u);
      for (let k = lo; k <= hi; k++) if (casas[k] === '') { casas[k] = '0'; z.push(k); }
    }
    let b = '';
    for (let k = 0; k < n; k++) {
      const x = 10 + k * cw;
      b += `<rect x="${x}" y="6" width="${cw}" height="26" fill="${k === u ? OR : NAVY}" stroke="#fff"/>` + T(x + cw / 2, 24, U[k], 13, '#fff');
      b += `<rect x="${x}" y="32" width="${cw}" height="36" fill="#fff" stroke="${LG}" stroke-width="1.4"/>`;
      if (casas[k] !== '') b += T(x + cw / 2, 58, casas[k], 21, z.includes(k) ? GY : NAVY);
    }
    // vírgula depois da casa u
    if (dp.length || opt.virgula) b += `<circle cx="${10 + (u + 1) * cw - 3}" cy="61" r="3.6" fill="${RD}"/>`;
    if (opt.virgulaEm != null) b += `<circle cx="${10 + (opt.virgulaEm + 1) * cw - 3}" cy="61" r="3.6" fill="${GR}"/>`;
    return svg(W, H, b, opt.w);
  }

  // ---------------- medidas do corpo ----------------
  // Braço com cúbito, palmo, polegada e dedo.
  function braco(opt = {}) {
    const W = 470, H = 170;
    let b = '';
    // antebraço
    b += `<path d="M20,70 C60,58 150,56 250,66 L292,66 C300,60 318,55 336,58 L400,62 C414,63 414,74 400,75 L352,76 C366,78 368,88 354,89 L338,89 C342,95 336,100 326,99 L300,97 C286,104 262,104 250,98 L120,104 C80,108 40,104 20,96 Z" fill="#FDE9D8" stroke="${BR}" stroke-width="1.8" stroke-linejoin="round"/>`;
    b += `<path d="M14,64 C8,72 8,94 16,104" fill="none" stroke="${BR}" stroke-width="1.8"/>`;
    // cúbito: cotovelo à ponta do dedo médio
    b += `<line x1="16" y1="30" x2="406" y2="30" stroke="${OR}" stroke-width="2.6"/><line x1="16" y1="22" x2="16" y2="38" stroke="${OR}" stroke-width="2.6"/><line x1="406" y1="22" x2="406" y2="38" stroke="${OR}" stroke-width="2.6"/>`;
    b += T(211, 22, 'cúbito (côvado): do cotovelo à ponta do dedo médio', 13, OR);
    // palmo (largura da mão, 4 dedos) e dedo
    b += `<line x1="300" y1="128" x2="400" y2="128" stroke="${BL}" stroke-width="2.4"/><line x1="300" y1="121" x2="300" y2="135" stroke="${BL}" stroke-width="2.4"/><line x1="400" y1="121" x2="400" y2="135" stroke="${BL}" stroke-width="2.4"/>`;
    b += T(350, 150, 'palmo', 12.5, BL);
    b += `<line x1="380" y1="112" x2="400" y2="112" stroke="${GR}" stroke-width="2.4"/>` + T(390, 165, '', 1);
    b += T(430, 116, 'dedo', 12, GR, 700, 'middle');
    if (opt.real) b += T(211, 166, 'Cúbito real egípcio: 7 palmos = 28 dedos ≈ 52 cm', 12, NAVY, 600);
    return svg(W, H, b, opt.w);
  }

  // Corpo inteiro com braça, pé e passo (desenho de linhas).
  function corpo(opt = {}) {
    const W = 420, H = 262; let b = '';
    const st = `stroke="${NAVY}" stroke-width="4" stroke-linecap="round" fill="none"`;
    b += `<circle cx="150" cy="40" r="17" fill="#FDE9D8" stroke="${NAVY}" stroke-width="3"/>`;
    b += `<line x1="150" y1="57" x2="150" y2="140" ${st}/>`; // tronco
    b += `<line x1="40" y1="78" x2="260" y2="78" ${st}/>`; // braços abertos
    b += `<line x1="150" y1="140" x2="118" y2="222" ${st}/><line x1="150" y1="140" x2="182" y2="222" ${st}/>`;
    b += `<line x1="118" y1="222" x2="92" y2="222" ${st}/><line x1="182" y1="222" x2="212" y2="222" ${st}/>`;
    // braça
    b += `<line x1="40" y1="100" x2="260" y2="100" stroke="${OR}" stroke-width="2.4"/><line x1="40" y1="93" x2="40" y2="107" stroke="${OR}" stroke-width="2.4"/><line x1="260" y1="93" x2="260" y2="107" stroke="${OR}" stroke-width="2.4"/>`;
    b += T(205, 118, 'braça ≈ 2,2 m', 12.5, OR);
    // jarda: do nariz à ponta do polegar, braço esticado
    b += `<line x1="150" y1="62" x2="260" y2="62" stroke="${RD}" stroke-width="2.4"/><line x1="150" y1="55" x2="150" y2="69" stroke="${RD}" stroke-width="2.4"/><line x1="260" y1="55" x2="260" y2="69" stroke="${RD}" stroke-width="2.4"/>`;
    b += T(268, 60, 'jarda ≈ 91 cm', 12.5, RD, 700, 'start');
    // pé
    b += `<line x1="182" y1="234" x2="212" y2="234" stroke="${BL}" stroke-width="2.4"/><line x1="182" y1="228" x2="182" y2="240" stroke="${BL}" stroke-width="2.4"/><line x1="212" y1="228" x2="212" y2="240" stroke="${BL}" stroke-width="2.4"/>`;
    b += T(222, 238, 'pé ≈ 30 cm', 12.5, BL, 700, 'start');
    // passo
    b += `<line x1="118" y1="252" x2="212" y2="252" stroke="${GR}" stroke-width="2" stroke-dasharray="5 4"/>` + T(222, 256, 'passo ≈ 80 cm', 11.5, GR, 700, 'start');
    return svg(W, H, b, opt.w);
  }

  // Mesa medida em palmos de duas pessoas.
  function palmos(comp, pessoas, opt = {}) {
    // pessoas: [{nome, palmo(cm), cor}]
    const W = 440, s = (W - 40) / comp, H = 46 + pessoas.length * 40; let b = '';
    b += `<rect x="20" y="10" width="${comp * s}" height="22" rx="3" fill="#E9D5B5" stroke="${BR}" stroke-width="1.6"/>`;
    b += T(20 + comp * s / 2, 26, opt.rot || 'mesa', 12, BR, 600);
    pessoas.forEach((p, i) => {
      const y = 44 + i * 40, n = Math.floor(comp / p.palmo + 1e-9); let x = 20;
      for (let k = 0; k < n; k++) { b += `<rect x="${x + 1}" y="${y}" width="${p.palmo * s - 2}" height="16" rx="7" fill="${p.cor}" fill-opacity=".85"/>`; x += p.palmo * s; }
      const sobra = comp - n * p.palmo;
      if (sobra > 0.5) b += `<rect x="${x + 1}" y="${y}" width="${sobra * s - 2}" height="16" rx="5" fill="none" stroke="${p.cor}" stroke-dasharray="3 3"/>`;
      b += T(20, y + 31, `${p.nome}: ${n} palmos${sobra > 0.5 ? ' e um pedaço' : ''}`, 11.5, p.cor, 700, 'start');
    });
    return svg(W, H, b, opt.w);
  }

  // ---------------- meridiano ----------------
  function meridiano(opt = {}) {
    const W = 440, H = 300, cx = 150, cy = 150, r = 120; let b = '';
    b += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#EEF3FF" stroke="${NAVY}" stroke-width="2"/>`;
    b += `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="24" fill="none" stroke="${GY}" stroke-dasharray="4 4"/>`;
    b += `<line x1="${cx}" y1="${cy - r - 12}" x2="${cx}" y2="${cy + r + 12}" stroke="${GY}" stroke-dasharray="3 4"/>`;
    // quarto de meridiano (do polo norte ao equador), lado direito
    b += `<path d="M${cx},${cy - r} A${r},${r} 0 0,1 ${cx + r},${cy}" fill="none" stroke="${OR}" stroke-width="5"/>`;
    for (let k = 1; k < 10; k++) { const a = Math.PI / 2 - k * Math.PI / 20; const x1 = cx + (r - 6) * Math.cos(a), y1 = cy - (r - 6) * Math.sin(a), x2 = cx + (r + 6) * Math.cos(a), y2 = cy - (r + 6) * Math.sin(a); b += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${NAVY}" stroke-width="1.4"/>`; }
    b += `<circle cx="${cx}" cy="${cy - r}" r="4.5" fill="${NAVY}"/>` + T(cx, cy - r - 16, 'Polo Norte', 12.5);
    b += T(cx - r + 46, cy + 6, 'Equador', 12, GY, 600);
    b += `<circle cx="${cx + r}" cy="${cy}" r="4.5" fill="${NAVY}"/>`;
    // Paris
    const ap = 49 * Math.PI / 180; const px = cx + r * Math.cos(ap), py = cy - r * Math.sin(ap);
    b += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="5" fill="${RD}"/>` + T(px + 10, py - 6, 'Paris', 12, RD, 700, 'start');
    b += T(cx + r + 8, cy - 100, 'quarto de meridiano', 12, OR, 700, 'start');
    b += T(cx + r + 8, cy - 84, '= 10 000 000 m', 13, OR, 700, 'start');
    b += T(cx + r + 8, cy + 40, '1 metro =', 12.5, NAVY, 700, 'start');
    b += T(cx + r + 8, cy + 58, '1 parte dessas', 12, NAVY, 600, 'start');
    b += T(cx + r + 8, cy + 74, '10 milhões de partes', 12, NAVY, 600, 'start');
    return svg(W, H, b, opt.w);
  }

  // ---------------- balança de dois pratos ----------------
  // esq: [{rot, cor, w}] objetos; dir: lista de massas em gramas (pesos). tilt calculado por mEsq e mDir.
  function balanca(esq, dir, mEsq, mDir, opt = {}) {
    const d = Math.sign(mDir - mEsq) * Math.min(1, Math.abs(mDir - mEsq) / (opt.den || Math.max(200, 0.2 * Math.max(mEsq, mDir))));
    const a = d * 9 * Math.PI / 180, cx = 220, cy = 70, L = 150;
    const x1 = cx - L * Math.cos(a), y1 = cy - L * Math.sin(a), x2 = cx + L * Math.cos(a), y2 = cy + L * Math.sin(a);
    let b = `<rect x="185" y="238" width="70" height="10" rx="3" fill="${NAVY}"/><rect x="216" y="70" width="8" height="170" fill="${NAVY}"/><polygon points="220,56 210,74 230,74" fill="${NAVY}"/>`;
    b += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${NAVY}" stroke-width="6" stroke-linecap="round"/>`;
    const prato = (px, py0, itens) => {
      const py = py0 + 96; let s = `<line x1="${px.toFixed(1)}" y1="${py0.toFixed(1)}" x2="${(px - 62).toFixed(1)}" y2="${py.toFixed(1)}" stroke="${GY}"/><line x1="${px.toFixed(1)}" y1="${py0.toFixed(1)}" x2="${(px + 62).toFixed(1)}" y2="${py.toFixed(1)}" stroke="${GY}"/>`;
      s += `<path d="M${(px - 70).toFixed(1)},${py.toFixed(1)} L${(px + 70).toFixed(1)},${py.toFixed(1)} Q${px.toFixed(1)},${(py + 18).toFixed(1)} ${(px - 70).toFixed(1)},${py.toFixed(1)}Z" fill="#D7DEEA"/>`;
      // empilha itens em linhas de até 130 de largura
      let x = 0, row = 0; const rows = [[]];
      itens.forEach(it => { if (x + it.w > 136) { rows.push([]); row++; x = 0; } rows[row].push(it); x += it.w + 3; });
      rows.forEach((r, ri) => {
        const tw = r.reduce((t, it) => t + it.w + 3, -3); let xx = px - tw / 2;
        r.forEach(it => { const h = it.h || 24, y = py - 2 - ri * 27 - h;
          s += `<rect x="${xx.toFixed(1)}" y="${y.toFixed(1)}" width="${it.w}" height="${h}" rx="${it.r || 4}" fill="${it.cor}"/>`;
          s += T((xx + it.w / 2).toFixed(1), (y + h / 2 + 4.5).toFixed(1), it.rot, it.fs || 10.5, '#fff');
          xx += it.w + 3; });
      });
      return s;
    };
    const pesoItem = g => ({ rot: g >= 1000 ? fmt(g / 1000) + ' kg' : g + ' g', cor: g >= 1000 ? NAVY : (g >= 100 ? BL : OR), w: g >= 1000 ? 46 : (g >= 100 ? 40 : 34), h: g >= 1000 ? 26 : (g >= 100 ? 22 : 18), fs: g >= 100 ? 10.5 : 9.5 });
    b += prato(x1, y1, esq) + prato(x2, y2, dir.map(pesoItem));
    return svg(440, 256, b, opt.w);
  }

  // ---------------- área e volume ----------------
  // Quadrado de 1 unidade dividido em n × n.
  function malha(n = 10, opt = {}) {
    const s = opt.s || 200, o = 26, W = s + o + 14, H = s + o + 12; let b = '';
    b += `<rect x="${o}" y="${o}" width="${s}" height="${s}" fill="#EEF3FF" stroke="${NAVY}" stroke-width="2.4"/>`;
    for (let k = 1; k < n; k++) { const p = o + k * s / n; b += `<line x1="${p}" y1="${o}" x2="${p}" y2="${o + s}" stroke="${BL}" stroke-opacity=".45"/><line x1="${o}" y1="${p}" x2="${o + s}" y2="${p}" stroke="${BL}" stroke-opacity=".45"/>`; }
    b += `<rect x="${o}" y="${o}" width="${s / n}" height="${s / n}" fill="${OR}"/>`;
    b += T(o + s / 2, o - 8, opt.lado || '1 m = 10 dm', 12.5, OR);
    b += T(o - 8, o + s / 2, opt.lado2 || '', 12.5, OR, 700, 'end');
    return svg(W, H, b, opt.w);
  }
  // Cubo isométrico de 1 unidade dividido em n por aresta, com um cubinho destacado.
  function cubo(n = 10, opt = {}) {
    const a = opt.a || 150, k = a / n, ox = 30, oy = 30 + a * 0.5;
    const P = (x, y, z) => [ox + x + y * 0.5, oy + a - z - (-y * 0.0) - y * 0.5 + 0]; // projeção oblíqua simples
    const pt = (x, y, z) => P(x, y, z).map(v => v.toFixed(1)).join(',');
    let b = '';
    const face = (pts, fill) => `<polygon points="${pts.map(p => pt(...p)).join(' ')}" fill="${fill}" stroke="${NAVY}" stroke-width="1.8"/>`;
    b += face([[0, 0, 0], [a, 0, 0], [a, 0, a], [0, 0, a]], '#EEF3FF');
    b += face([[a, 0, 0], [a, a, 0], [a, a, a], [a, 0, a]], '#DCE6FF');
    b += face([[0, 0, a], [a, 0, a], [a, a, a], [0, a, a]], '#F5F8FF');
    for (let i = 1; i < n; i++) {
      const t = i * k, ln = (p, q) => `<line x1="${P(...p)[0].toFixed(1)}" y1="${P(...p)[1].toFixed(1)}" x2="${P(...q)[0].toFixed(1)}" y2="${P(...q)[1].toFixed(1)}" stroke="${BL}" stroke-opacity=".35"/>`;
      b += ln([t, 0, 0], [t, 0, a]) + ln([0, 0, t], [a, 0, t]);
      b += ln([a, t, 0], [a, t, a]) + ln([a, 0, t], [a, a, t]);
      b += ln([t, 0, a], [t, a, a]) + ln([0, t, a], [a, t, a]);
    }
    // cubinho destacado no canto da frente, em baixo, à esquerda
    b += face([[0, 0, 0], [k, 0, 0], [k, 0, k], [0, 0, k]], OR);
    const [lx, ly] = P(a / 2, 0, 0);
    b += T(lx, ly + 18, opt.lado || '1 m = 10 dm', 12.5, OR);
    const W = ox + a * 1.5 + 20, H = oy + a + 30;
    return svg(W.toFixed(0), H.toFixed(0), b, opt.w);
  }
  // Retângulo em malha (área por contagem).
  function retangulo(c, l, opt = {}) {
    const s = opt.s || 22, o = 44; let b = '';
    for (let i = 0; i < c; i++) for (let j = 0; j < l; j++) b += `<rect x="${o + i * s}" y="${o + j * s}" width="${s}" height="${s}" fill="${opt.cor || '#DCE6FF'}" stroke="${BL}" stroke-opacity=".6"/>`;
    b += `<rect x="${o}" y="${o}" width="${c * s}" height="${l * s}" fill="none" stroke="${NAVY}" stroke-width="2.2"/>`;
    b += T(o + c * s / 2, o - 7, opt.top || `${c} ${opt.u || 'm'}`, 12.5, OR);
    b += T(o - 6, o + l * s / 2 + 4, opt.left || `${l} ${opt.u || 'm'}`, 12.5, OR, 700, 'end');
    return svg(o + c * s + 10, o + l * s + 10, b, opt.w);
  }

  // ---------------- tempo ----------------
  function relogio(h, m, opt = {}) {
    const R = opt.r || 80, c = R + 10, W = 2 * c; let b = `<circle cx="${c}" cy="${c}" r="${R}" fill="#fff" stroke="${NAVY}" stroke-width="4"/>`;
    for (let k = 0; k < 60; k++) { const a = k * Math.PI / 30, big = k % 5 === 0, r1 = R - (big ? 11 : 5);
      b += `<line x1="${(c + r1 * Math.sin(a)).toFixed(1)}" y1="${(c - r1 * Math.cos(a)).toFixed(1)}" x2="${(c + (R - 2) * Math.sin(a)).toFixed(1)}" y2="${(c - (R - 2) * Math.cos(a)).toFixed(1)}" stroke="${NAVY}" stroke-width="${big ? 2.4 : 1}"/>`; }
    for (let k = 1; k <= 12; k++) { const a = k * Math.PI / 6; b += T((c + (R - 24) * Math.sin(a)).toFixed(1), (c - (R - 24) * Math.cos(a) + 5).toFixed(1), k, R / 6.2, NAVY, 600); }
    const ah = ((h % 12) + m / 60) * Math.PI / 6, am = m * Math.PI / 30;
    b += `<line x1="${c}" y1="${c}" x2="${(c + R * 0.5 * Math.sin(ah)).toFixed(1)}" y2="${(c - R * 0.5 * Math.cos(ah)).toFixed(1)}" stroke="${NAVY}" stroke-width="6" stroke-linecap="round"/>`;
    b += `<line x1="${c}" y1="${c}" x2="${(c + R * 0.78 * Math.sin(am)).toFixed(1)}" y2="${(c - R * 0.78 * Math.cos(am)).toFixed(1)}" stroke="${OR}" stroke-width="4" stroke-linecap="round"/>`;
    b += `<circle cx="${c}" cy="${c}" r="5" fill="${NAVY}"/>`;
    if (opt.rot) b += T(c, W + 16, opt.rot, 13, NAVY);
    return svg(W, W + (opt.rot ? 24 : 0), b, opt.w);
  }
  // Relógio de sol: haste e sombra.
  function relogioSol(hora = 15, opt = {}) {
    const W = 330, H = 170, cx = 165, cy = 120; let b = `<ellipse cx="${cx}" cy="${cy}" rx="130" ry="40" fill="#FBF6EC" stroke="${BR}" stroke-width="2"/>`;
    for (let k = 6; k <= 18; k++) { const a = Math.PI * (k - 6) / 12; const x = cx - 120 * Math.cos(a), y = cy - 34 * Math.sin(a); b += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${BR}" stroke-opacity=".35"/>`; if (k % 3 === 0) b += T((cx - 134 * Math.cos(a)).toFixed(1), (cy - 38 * Math.sin(a) + (k === 6 || k === 18 ? 4 : -2)).toFixed(1), k + 'h', 10.5, BR, 600); }
    const a = Math.PI * (hora - 6) / 12; const sx = cx - 110 * Math.cos(a), sy = cy - 30 * Math.sin(a);
    b += `<polygon points="${cx},${cy} ${sx.toFixed(1)},${sy.toFixed(1)} ${(sx + 4).toFixed(1)},${(sy + 4).toFixed(1)}" fill="${GY}" fill-opacity=".7"/>`;
    b += `<polygon points="${cx - 4},${cy} ${cx + 4},${cy} ${cx + 30},${cy - 70} ${cx + 22},${cy - 70}" fill="${NAVY}"/>`;
    b += `<circle cx="${hora >= 12 ? 40 : 290}" cy="26" r="14" fill="${OR}"/>`;
    return svg(W, H, b, opt.w);
  }

  // ---------------- termômetros ----------------
  function termometros(c = 37, opt = {}) {
    const W = 410, H = 260, top = 20, bot = 220; let b = '';
    const yC = v => bot - (v + 20) * (bot - top) / 130; // escala de −20 a 110 °C
    [[115, 'Celsius (°C)', v => v], [225, 'Fahrenheit (°F)', v => v * 1.8 + 32], [335, 'Kelvin (K)', v => v + 273]].forEach(([x, nome, f]) => {
      b += `<rect x="${x - 9}" y="${top - 6}" width="18" height="${bot - top + 10}" rx="9" fill="#fff" stroke="${NAVY}" stroke-width="2"/><circle cx="${x}" cy="${bot + 14}" r="15" fill="${RD}"/>`;
      b += `<rect x="${x - 4}" y="${yC(c).toFixed(1)}" width="8" height="${(bot + 4 - yC(c)).toFixed(1)}" fill="${RD}"/>`;
      [-20, 0, 20, 40, 60, 80, 100].forEach(v => { const y = yC(v); const lab = fmt(Math.round(f(v) * 10) / 10);
        b += `<line x1="${x + 9}" y1="${y.toFixed(1)}" x2="${x + 17}" y2="${y.toFixed(1)}" stroke="${NAVY}" stroke-width="1.4"/>` + T(x + 21, (y + 4).toFixed(1), lab, 10.5, GY, 600, 'start'); });
      b += T(x, bot + 46, nome, 12, NAVY);
    });
    b += `<line x1="100" y1="${yC(c).toFixed(1)}" x2="375" y2="${yC(c).toFixed(1)}" stroke="${OR}" stroke-width="1.6" stroke-dasharray="5 4"/>`;
    b += T(225, yC(c) - 6, `${fmt(c)} °C = ${fmt(Math.round((c * 1.8 + 32) * 10) / 10)} °F = ${fmt(c + 273)} K`, 11.5, OR);
    b += T(92, yC(0) + 4, 'gelo', 10.5, BL, 600, 'end') + T(92, yC(100) + 4, 'água ferve', 10.5, RD, 600, 'end');
    return svg(W + 10, H + 26, b, opt.w);
  }
  // TV com a diagonal em polegadas.
  function tv(pol = 50, opt = {}) {
    const W = 300, H = 200; let b = `<rect x="20" y="10" width="260" height="150" rx="6" fill="${NAVY}"/><rect x="28" y="18" width="244" height="134" fill="#2B4A94"/>`;
    b += `<rect x="130" y="160" width="40" height="14" fill="${NAVY}"/><rect x="100" y="174" width="100" height="6" rx="3" fill="${NAVY}"/>`;
    b += `<line x1="32" y1="148" x2="268" y2="22" stroke="${OR}" stroke-width="3"/>`;
    b += T(150, 100, `${pol}"`, 26, '#fff', 700, 'middle', 'transform="rotate(-28 150 92)"');
    b += T(150, 196, `diagonal: ${pol} polegadas ≈ ${fmt(Math.round(pol * 2.54))} cm`, 12, NAVY, 600);
    return svg(W, H + 6, b, opt.w);
  }

  // Segmento de 1 unidade dividido em n partes, com uma destacada.
  function segmento(n = 10, opt = {}) {
    const L = opt.L || 200, o = 10, W = L + 2 * o, H = 60; let b = '';
    b += `<rect x="${o}" y="27" width="${L}" height="8" fill="#111"/><rect x="${o}" y="27" width="${L / n}" height="8" fill="${OR}"/>`;
    for (let k = 0; k <= n; k++) b += `<line x1="${o + k * L / n}" y1="21" x2="${o + k * L / n}" y2="41" stroke="${OR}" stroke-width="1.6"/>`;
    b += T(o + L / 2, 16, opt.lado || '1 m = 10 dm', 12.5, OR);
    return svg(W, H, b, opt.w);
  }

  const UM = { NAVY, OR, BL, GR, RD, GY, fmt, ESC, POT, FATOR, converte, escada, quadro, braco, corpo, palmos, meridiano, balanca, malha, cubo, retangulo, relogio, relogioSol, segmento, termometros, tv };
  if (typeof module !== 'undefined' && module.exports) module.exports = UM; else root.UM = UM;
})(typeof window !== 'undefined' ? window : globalThis);
