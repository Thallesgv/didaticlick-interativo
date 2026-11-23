// Biblioteca da apostila Múltiplos, divisores e fatoração (DidatiClick · MatematiClick).
// Desenha as mesmas figuras no site e no PDF (o PDF chama estas funções pelo node).
(function (root) {
  const NAVY = '#0E2354', OR = '#F7821F', BL = '#2457D6', GR = '#15803D', RD = '#B91C1C', GY = '#6B7280', LG = '#D7DEEA';
  const PAL = [BL, OR, GR, '#7A4BB5', RD, '#0891B2', '#B45309', '#BE185D', '#4D7C0F', '#9333EA'];
  const F = 'font-family="Poppins,system-ui,sans-serif"';

  const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const divisores = n => { const d = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; };
  const primo = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
  const fatores = n => { const f = []; let p = 2; while (n > 1 && p * p <= n) { while (n % p === 0) { f.push(p); n /= p; } p++; } if (n > 1) f.push(n); return f; };
  const potencias = n => { const r = []; fatores(n).forEach(p => { const u = r[r.length - 1]; if (u && u[0] === p) u[1]++; else r.push([p, 1]); }); return r; };
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const sup = e => String(e).split('').map(c => SUP[+c]).join('');
  const fatoracao = (n, html) => potencias(n).map(([p, e]) => e > 1 ? (html ? `${p}<sup>${e}</sup>` : p + sup(e)) : String(p)).join(' × ');
  const mdc = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  const mmc = (a, b) => a / mdc(a, b) * b;
  const t = (x, y, s, size = 12, color = NAVY, anchor = 'middle', weight = 700) =>
    `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}" ${F}>${s}</text>`;

  // Retângulo de r fileiras com c quadradinhos; o.resto: quadradinhos que sobram numa fileira incompleta.
  function grade(r, c, o = {}) {
    const s = o.s || 16, cor = o.cor || BL, resto = o.resto || 0, ox = o.rot === false ? 4 : 30, oy = o.rot === false ? 4 : 22;
    const H = (r + (resto ? 1 : 0)) * s, W = c * s;
    let g = `<svg viewBox="0 0 ${W + ox + 6} ${H + oy + 6}" width="${o.w || (W + ox + 6) * 1.2}" xmlns="http://www.w3.org/2000/svg">`;
    for (let i = 0; i < r; i++) for (let j = 0; j < c; j++)
      g += `<rect x="${ox + j * s + 1}" y="${oy + i * s + 1}" width="${s - 2}" height="${s - 2}" rx="2.5" fill="${cor}"/>`;
    for (let j = 0; j < resto; j++)
      g += `<rect x="${ox + j * s + 1}" y="${oy + r * s + 1}" width="${s - 2}" height="${s - 2}" rx="2.5" fill="${RD}" fill-opacity=".85"/>`;
    if (resto) g += `<rect x="${ox + .5}" y="${oy + r * s + .5}" width="${W - 1}" height="${s - 1}" rx="3" fill="none" stroke="${RD}" stroke-dasharray="4 3"/>`;
    if (o.rot !== false) {
      g += t(ox + W / 2, oy - 7, c, 13, OR) + t(ox - 7, oy + r * s / 2 + 5, r, 13, OR, 'end');
    }
    return g + '</svg>';
  }

  // Crivo de Eratóstenes. est(n) -> {tipo:'primo'|'riscado'|'um'|'livre'|'alvo', cor}
  function crivo(N, est, o = {}) {
    const C = o.cols || 10, s = o.s || 30, R = Math.ceil(N / C);
    let g = `<svg viewBox="0 0 ${C * s + 4} ${R * s + 4}" width="${o.w || C * s * 1.1}" xmlns="http://www.w3.org/2000/svg">`;
    for (let n = 1; n <= N; n++) {
      const i = Math.floor((n - 1) / C), j = (n - 1) % C, x = 2 + j * s, y = 2 + i * s, e = est(n) || { tipo: 'livre' };
      let fill = '#fff', tc = NAVY, extra = '';
      if (e.tipo === 'primo') { fill = e.cor || OR; tc = '#fff'; }
      else if (e.tipo === 'riscado') { fill = '#F3F4F6'; tc = '#9CA3AF'; extra = `<line x1="${x + 5}" y1="${y + s - 5}" x2="${x + s - 5}" y2="${y + 5}" stroke="${e.cor || GY}" stroke-width="2.2" stroke-linecap="round"/>`; }
      else if (e.tipo === 'um') { fill = '#F3F4F6'; tc = '#9CA3AF'; }
      else if (e.tipo === 'alvo') { fill = '#FEF3C7'; }
      g += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${fill}" stroke="${LG}"/>` + t(x + s / 2, y + s / 2 + s * .17, n, s * .42, tc, 'middle', e.tipo === 'primo' ? 700 : 500) + extra;
    }
    return g + '</svg>';
  }
  // Estado do crivo depois de riscar os múltiplos dos primos da lista ps.
  function crivoEstado(N, ps) {
    const m = {}; m[1] = { tipo: 'um' };
    ps.forEach((p, k) => { m[p] = { tipo: 'primo', cor: PAL[k % PAL.length] }; for (let q = p * 2; q <= N; q += p) if (!m[q]) m[q] = { tipo: 'riscado', cor: PAL[k % PAL.length] }; });
    return n => m[n];
  }

  // Árvore de fatores. nó = número (folha) ou [n, esquerda, direita].
  function arvore(tree, o = {}) {
    const dx = o.dx || 46, dy = o.dy || 50, r = o.r || 17; const nodes = [], edges = []; let leaf = 0, maxd = 0;
    function lay(nd, d) {
      maxd = Math.max(maxd, d);
      if (!Array.isArray(nd)) { const x = leaf++ * dx; nodes.push({ n: nd, x, d, folha: true }); return x; }
      const xl = lay(nd[1], d + 1), xr = lay(nd[2], d + 1), x = (xl + xr) / 2;
      nodes.push({ n: nd[0], x, d }); edges.push([x, d, xl, d + 1], [x, d, xr, d + 1]); return x;
    }
    lay(tree, 0);
    const W = (leaf - 1) * dx + 2 * r + 8, H = maxd * dy + 2 * r + 8, X = x => x + r + 4, Y = d => d * dy + r + 4;
    let g = `<svg viewBox="0 0 ${W} ${H}" width="${o.w || W * 1.1}" xmlns="http://www.w3.org/2000/svg">`;
    edges.forEach(([x1, d1, x2, d2]) => g += `<line x1="${X(x1)}" y1="${Y(d1) + r - 2}" x2="${X(x2)}" y2="${Y(d2) - r + 2}" stroke="${GY}" stroke-width="1.8"/>`);
    nodes.forEach(nd => {
      const p = primo(nd.n) && nd.folha, comp = nd.folha && !p;
      g += `<circle cx="${X(nd.x)}" cy="${Y(nd.d)}" r="${r}" fill="${p ? OR : '#fff'}" stroke="${p ? OR : comp ? RD : NAVY}" stroke-width="2"${comp ? ' stroke-dasharray="4 3"' : ''}/>` +
        t(X(nd.x), Y(nd.d) + 5, nd.n, String(nd.n).length > 3 ? 11 : 13.5, p ? '#fff' : NAVY);
    });
    return g + '</svg>';
  }
  // Árvore "sempre pelo menor primo": [n, p, [n/p, ...]].
  function arvorePadrao(n) { const f = fatores(n); if (f.length < 2) return n; return [n, f[0], arvorePadrao(n / f[0])]; }

  // Divisões sucessivas (dispositivo prático), opcionalmente de vários números ao mesmo tempo (MMC).
  function divsuc(nums, o = {}) {
    nums = [].concat(nums); const rows = []; let cur = nums.slice(); const modo = o.modo || 'fatora';
    while (cur.some(v => v > 1)) {
      let p = 2; if (modo === 'mdc') break;
      while (!cur.some(v => v % p === 0)) p++;
      rows.push({ v: cur.slice(), p, div: cur.map(v => v % p === 0) }); cur = cur.map(v => v % p === 0 ? v / p : v);
    }
    rows.push({ v: cur.slice(), p: null });
    const cw = o.cw || 44, rh = o.rh || 24, k = nums.length, W = k * cw + 56, H = rows.length * rh + 6;
    let g = `<svg viewBox="0 0 ${W} ${H}" width="${o.w || W * 1.15}" xmlns="http://www.w3.org/2000/svg">`;
    rows.forEach((rw, i) => {
      const y = 4 + i * rh + rh * .68;
      rw.v.forEach((v, j) => g += t(k > 1 ? 8 + j * cw + cw / 2 : 8 + cw - 4, y, v, 13.5, rw.div && k > 1 && !rw.div[j] ? GY : NAVY, k > 1 ? 'middle' : 'end', rw.div && k > 1 && !rw.div[j] ? 500 : 600));
      if (rw.p && o.comum && rw.div.every(Boolean)) g += `<circle cx="${k * cw + 26}" cy="${y - 4.5}" r="10" fill="none" stroke="${GR}" stroke-width="2"/>`;
      if (rw.p) g += t(k * cw + (o.comum ? 26 : 22), y, rw.p, 13.5, OR, o.comum ? 'middle' : 'start');
    });
    g += `<line x1="${k * cw + 14}" y1="2" x2="${k * cw + 14}" y2="${H - 2}" stroke="${NAVY}" stroke-width="2"/>`;
    return g + '</svg>';
  }

  // Reta numerada com os múltiplos de a (em cima) e de b (embaixo); os comuns ficam destacados.
  function linha(a, b, N, o = {}) {
    const W = o.W || 560, ox = 14, u = (W - 2 * ox) / N, y0 = 58, H = 104, X = v => ox + v * u, lab = o.lab || (N <= 30 ? 1 : N <= 60 ? 5 : 10);
    let g = `<svg viewBox="0 0 ${W} ${H}" width="${o.w || W}" xmlns="http://www.w3.org/2000/svg">`;
    g += `<line x1="${ox}" y1="${y0}" x2="${W - ox + 4}" y2="${y0}" stroke="${GY}" stroke-width="1.6"/>`; let labs = '';
    for (let v = 0; v <= N; v++) {
      g += `<line x1="${X(v)}" y1="${y0 - (v % lab ? 3 : 5)}" x2="${X(v)}" y2="${y0 + (v % lab ? 3 : 5)}" stroke="${GY}"/>`;
      if (v % lab === 0) labs += t(X(v), y0 + 4 + 13, v, 9.5, GY, 'middle', 600).replace('<text ', '<text stroke="#fff" stroke-width="3" paint-order="stroke" ');
    }
    const arc = (p, cor, up) => { for (let v = 0; v + p <= N; v += p) { const x1 = X(v), x2 = X(v + p), hgt = Math.min(30, 8 + p * u * .25), yy = up ? y0 - 4 : y0 + 4, c = up ? yy - hgt : yy + hgt;
      g += `<path d="M${x1},${yy} Q${(x1 + x2) / 2},${c} ${x2},${yy}" fill="none" stroke="${cor}" stroke-width="1.8"/>`; } };
    if (a) arc(a, BL, true); if (b) arc(b, OR, false);
    g += labs;
    if (a && b) for (let v = mmc(a, b); v <= N; v += mmc(a, b)) g += `<circle cx="${X(v)}" cy="${y0}" r="6.5" fill="${GR}" stroke="#fff" stroke-width="1.5"/>`;
    if (o.legenda !== false) {
      if (a) g += t(ox, 12, (o.na || 'de ' + a + ' em ' + a), 10.5, BL, 'start');
      if (b) g += t(ox, H - 2, (o.nb || 'de ' + b + ' em ' + b), 10.5, OR, 'start');
    }
    return g + '</svg>';
  }

  // Algoritmo de Euclides como retângulo a × b cortado em quadrados.
  function euclides(a, b, o = {}) {
    const W0 = Math.max(a, b), H0 = Math.min(a, b), sc = (o.px || 300) / W0, ox = 4, oy = 4;
    let g = `<svg viewBox="0 0 ${W0 * sc + 8} ${H0 * sc + 8}" width="${o.w || W0 * sc + 8}" xmlns="http://www.w3.org/2000/svg">`;
    let x = 0, y = 0, w = W0, h = H0, k = 0; const passos = [];
    while (w > 0 && h > 0) {
      const lado = Math.min(w, h), n = Math.floor(Math.max(w, h) / lado), cor = PAL[k % PAL.length]; passos.push([Math.max(w, h), lado, n, Math.max(w, h) % lado]);
      for (let i = 0; i < n; i++) {
        const qx = w >= h ? x + i * lado : x, qy = w >= h ? y : y + i * lado;
        g += `<rect x="${ox + qx * sc}" y="${oy + qy * sc}" width="${lado * sc}" height="${lado * sc}" fill="${cor}" fill-opacity=".85" stroke="#fff" stroke-width="2"/>`;
        if (lado * sc >= 16) g += t(ox + (qx + lado / 2) * sc, oy + (qy + lado / 2) * sc + Math.min(14, lado * sc * .3) * .36, lado, Math.min(14, lado * sc * .3), '#fff');
      }
      if (w >= h) { x += n * lado; w -= n * lado; } else { y += n * lado; h -= n * lado; }
      k++;
    }
    g += `<rect x="${ox}" y="${oy}" width="${W0 * sc}" height="${H0 * sc}" fill="none" stroke="${NAVY}" stroke-width="2.5"/>`;
    return o.passos ? passos : g + '</svg>';
  }

  // Fitas de comprimentos dados cortadas em pedaços de tamanho p.
  function fitas(lens, p, o = {}) {
    const M = Math.max(...lens), W = o.W || 520, ox = 46, u = (W - ox - 10) / M, h = 24, gap = 14, H = lens.length * (h + gap) + 4;
    let g = `<svg viewBox="0 0 ${W} ${H}" width="${o.w || W}" xmlns="http://www.w3.org/2000/svg">`;
    lens.forEach((L, i) => {
      const y = 4 + i * (h + gap), cor = PAL[i % 2 ? 1 : 0];
      g += t(ox - 8, y + h * .7, L, 12, cor, 'end');
      const n = p ? Math.floor(L / p) : 0, sobra = p ? L % p : 0;
      if (!p) g += `<rect x="${ox}" y="${y}" width="${L * u}" height="${h}" rx="4" fill="${cor}"/>`;
      for (let k = 0; k < n; k++) g += `<rect x="${ox + k * p * u + 1}" y="${y}" width="${p * u - 2}" height="${h}" rx="4" fill="${cor}"/>` + (p * u > 20 ? t(ox + (k + .5) * p * u, y + h * .7, p, 10.5, '#fff') : '');
      if (sobra) g += `<rect x="${ox + n * p * u + 1}" y="${y}" width="${sobra * u - 2}" height="${h}" rx="4" fill="#fff" stroke="${RD}" stroke-width="1.8" stroke-dasharray="4 3"/>` + (sobra * u > 18 ? t(ox + (n * p + sobra / 2) * u, y + h * .7, sobra, 10.5, RD) : '');
    });
    return g + '</svg>';
  }

  // Diagrama de Venn dos fatores primos: o que é comum fica na interseção.
  function partes(a, b) {
    const fa = fatores(a), fb = fatores(b).slice(), I = [], A = [];
    fa.forEach(p => { const k = fb.indexOf(p); if (k >= 0) { I.push(p); fb.splice(k, 1); } else A.push(p); });
    return { A, I, B: fb };
  }
  function venn(a, b, o = {}) {
    const P = o.partes || partes(a, b), W = 360, H = 230, r = 92, c1 = 128, c2 = 232, cy = 128;
    let g = `<svg viewBox="0 0 ${W} ${H}" width="${o.w || W}" xmlns="http://www.w3.org/2000/svg">`;
    g += `<circle cx="${c1}" cy="${cy}" r="${r}" fill="${BL}" fill-opacity=".12" stroke="${BL}" stroke-width="2.4"/>`;
    g += `<circle cx="${c2}" cy="${cy}" r="${r}" fill="${OR}" fill-opacity=".12" stroke="${OR}" stroke-width="2.4"/>`;
    g += t(c1 - 40, 22, o.la || ('fatores de ' + a), 13, BL) + t(c2 + 40, 22, o.lb || ('fatores de ' + b), 13, OR);
    const put = (arr, x0, cor) => { const n = arr.length, per = 3, rows = Math.ceil(n / per) || 1;
      arr.forEach((v, i) => { const rI = Math.floor(i / per), m = Math.min(per, n - rI * per), x = x0 + (i % per - (m - 1) / 2) * 25, y = cy + (rI - (rows - 1) / 2) * 30 + 6;
        g += `<circle cx="${x}" cy="${y - 5}" r="11.5" fill="#fff" stroke="${cor}" stroke-width="1.6"/>` + t(x, y, v, String(v).length > 2 ? 10 : 13, cor); }); };
    put(P.A, c1 - 46, BL); put(P.I, (c1 + c2) / 2, GR); put(P.B, c2 + 46, OR);
    return g + '</svg>';
  }
  const MD = { NAVY, OR, BL, GR, RD, GY, PAL, fmt, divisores, primo, fatores, potencias, fatoracao, sup, mdc, mmc, grade, crivo, crivoEstado, arvore, arvorePadrao, divsuc, linha, euclides, fitas, partes, venn };
  if (typeof module !== 'undefined' && module.exports) module.exports = MD; else root.MD = MD;
})(typeof window !== 'undefined' ? window : this);
