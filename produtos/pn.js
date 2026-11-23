// Figuras da apostila Produtos Notáveis (MatematiClick · DidatiClick).
// A mesma biblioteca desenha as figuras do PDF (via node) e as páginas interativas do site.
(function (root) {
  const NAVY = "#0E2354", ORANGE = "#F7821F", BLUE = "#2457D6", GREEN = "#15803D", RED = "#B91C1C", GRAY = "#6B7280";
  const F = 'font-family="Poppins,system-ui,sans-serif"';
  const r1 = v => Math.round(v * 10) / 10;
  const isNum = v => typeof v === "number" || /^\d+$/.test(String(v));
  const fmt = v => String(v).replace(/-/g, "−");
  function T(x, y, s, size, color, anchor, weight) {
    return `<text x="${r1(x)}" y="${r1(y)}" font-size="${size || 13}" font-weight="${weight || 700}" fill="${color || NAVY}" text-anchor="${anchor || "middle"}" ${F}>${s}</text>`;
  }
  function R(x, y, w, h, fill, extra) {
    return `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="${fill}" ${extra || 'stroke="#fff" stroke-width="2"'}/>`;
  }
  // rótulos de área: com números, faz a conta; com letras, escreve o monômio
  function prod(p, q) {
    const m = v => String(v).match(/^(\d*)([a-z]?)$/);
    const mp = m(p), mq = m(q);
    if (mp && mq) {
      const c = (+(mp[1] || 1)) * (+(mq[1] || 1)), L = mp[2] && mq[2] ? (mp[2] === mq[2] ? mp[2] + "²" : [mp[2], mq[2]].sort().join("")) : (mp[2] || mq[2]);
      return (c === 1 && L ? "" : String(c)) + L;
    }
    if (p === q) return `(${p})²`;
    const par = v => /[ +−-]/.test(String(v)) ? `(${v})` : v;
    return isNum(q) && !isNum(p) ? par(q) + par(p) : par(p) + par(q);
  }
  function fs(w, h, txt) { return Math.max(8, Math.min(16, w / (String(txt).length * 0.62 + 0.4), h * 0.55)); }
  function piece(x, y, w, h, fill, lab, extra) {
    let g = R(x, y, w, h, fill, extra);
    if (lab) g += T(x + w / 2, y + h / 2 + fs(w, h, lab) * 0.36, lab, r1(fs(w, h, lab)), "#fff");
    return g;
  }
  function dimTop(x0, x1, y, lab, color) {
    return `<line x1="${r1(x0 + 1)}" y1="${r1(y)}" x2="${r1(x1 - 1)}" y2="${r1(y)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + `<line x1="${r1(x0 + 1)}" y1="${r1(y - 4)}" x2="${r1(x0 + 1)}" y2="${r1(y + 4)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + `<line x1="${r1(x1 - 1)}" y1="${r1(y - 4)}" x2="${r1(x1 - 1)}" y2="${r1(y + 4)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + T((x0 + x1) / 2, y - 5, lab, 13, color || ORANGE);
  }
  function dimLeft(y0, y1, x, lab, color) {
    return `<line x1="${r1(x)}" y1="${r1(y0 + 1)}" x2="${r1(x)}" y2="${r1(y1 - 1)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + `<line x1="${r1(x - 4)}" y1="${r1(y0 + 1)}" x2="${r1(x + 4)}" y2="${r1(y0 + 1)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + `<line x1="${r1(x - 4)}" y1="${r1(y1 - 1)}" x2="${r1(x + 4)}" y2="${r1(y1 - 1)}" stroke="${color || ORANGE}" stroke-width="1.6"/>`
      + T(x - 6, (y0 + y1) / 2 + 4.5, lab, 13, color || ORANGE, "end");
  }
  function svg(W, H, body, w) {
    return `<svg viewBox="0 0 ${r1(W)} ${r1(H)}" width="${r1(w || W)}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  }

  // (a + b)²: quadrado de lado a + b em 4 peças. o: {s, sep (0..1), la, lb, total, w, so}
  function quad(a, b, o) {
    o = o || {}; const s = o.s || 22, la = o.la ?? a, lb = o.lb ?? b, g = (o.sep || 0) * 16;
    const A = a * s, B = b * s, ox = 62, oy = 34;
    let h = "";
    const P = [
      [ox, oy, A, A, BLUE, prod(la, la)],
      [ox + A + g, oy, B, A, ORANGE, prod(la, lb)],
      [ox, oy + A + g, A, B, ORANGE, prod(la, lb)],
      [ox + A + g, oy + A + g, B, B, NAVY, prod(lb, lb)]];
    P.forEach((p, i) => { if (!o.so || o.so.includes(i)) h += piece(...p); else h += R(p[0], p[1], p[2], p[3], "none", `stroke="${RED}" stroke-width="2" stroke-dasharray="5 4"`); });
    h += dimTop(ox, ox + A, oy - 8, fmt(la)) + dimTop(ox + A + g, ox + A + g + B, oy - 8, fmt(lb));
    h += dimLeft(oy, oy + A, ox - 8, fmt(la)) + dimLeft(oy + A + g, oy + A + g + B, ox - 8, fmt(lb));
    if (o.total) h += `<rect x="${ox}" y="${oy}" width="${r1(A + B + g)}" height="${r1(A + B + g)}" fill="none" stroke="${GREEN}" stroke-width="3"/>`;
    return svg(ox + A + B + g + 12, oy + A + B + g + 10, h, o.w);
  }

  // (a − b)²: quadrado de lado a, de onde tiramos duas faixas a·b. o: {s, la, lb, faixas, w}
  function dif(a, b, o) {
    o = o || {}; const s = o.s || 22, la = o.la ?? a, lb = o.lb ?? b, c = a - b;
    const lc = o.lc ?? (isNum(la) && isNum(lb) ? String(+la - +lb) : `${la} − ${lb}`);
    const A = a * s, B = b * s, C = c * s, ox = 70, oy = 52;
    let h = "";
    h += piece(ox, oy, C, C, BLUE, prod(lc, lc));
    if (!o.faixas) {
      h += piece(ox + C, oy, B, C, ORANGE, "") + piece(ox, oy + C, C, B, ORANGE, "") + piece(ox + C, oy + C, B, B, NAVY, prod(lb, lb));
    } else {
      h += R(ox + C, oy, B, A, ORANGE, `fill-opacity=".55" stroke="${RED}" stroke-width="2" stroke-dasharray="6 4"`);
      h += R(ox, oy + C, A, B, ORANGE, `fill-opacity=".55" stroke="${RED}" stroke-width="2" stroke-dasharray="6 4"`);
      h += R(ox + C, oy + C, B, B, RED, 'fill-opacity=".55"');
      h += T(ox + C + B / 2, oy + C / 2 + 5, "−" + prod(la, lb), r1(Math.min(13, B * .45)), RED);
      h += T(ox + C / 2, oy + C + B / 2 + 5, "−" + prod(la, lb), 13, RED);
      if (o.dupla) h += T(ox + C + B / 2, oy + C + B / 2 + 4, "2×", r1(Math.min(12, B * .4)), "#fff");
    }
    h += `<rect x="${ox}" y="${oy}" width="${A}" height="${A}" fill="none" stroke="${NAVY}" stroke-width="2.2"/>`;
    h += dimTop(ox, ox + C, oy - 8, fmt(lc)) + dimTop(ox + C, ox + A, oy - 8, fmt(lb));
    h += dimTop(ox, ox + A, oy - 30, fmt(la), NAVY);
    h += dimLeft(oy, oy + C, ox - 8, fmt(lc)) + dimLeft(oy + C, oy + A, ox - 8, fmt(lb));
    return svg(ox + A + 12, oy + A + 10, h, o.w);
  }

  // (a + b)(a − b): tira-se b² do canto de a² e a peça de baixo gira para o lado. t de 0 a 1.
  function somaDif(a, b, t, o) {
    o = o || {}; const s = o.s || 20, la = o.la ?? a, lb = o.lb ?? b, c = a - b;
    const lc = o.lc ?? (isNum(la) && isNum(lb) ? String(+la - +lb) : `${la} − ${lb}`);
    const A = a * s, B = b * s, C = c * s, ox = 66, oy = 34;
    t = Math.max(0, Math.min(1, t || 0));
    let h = "";
    h += piece(ox, oy, A, C, BLUE, o.semRot ? "" : prod(la, lc));
    if (t < 0.02) h += R(ox + C, oy + C, B, B, "none", `stroke="${RED}" stroke-width="2" stroke-dasharray="5 4"`) + T(ox + C + B / 2, oy + C + B / 2 + 5, "−" + prod(lb, lb), r1(Math.min(13, B * .42)), RED);
    // peça de baixo: centro e ângulo interpolados
    const c0 = [ox + C / 2, oy + C + B / 2], c1 = [ox + A + B / 2 + (t >= 1 ? 0 : 0), oy + C / 2];
    const lift = Math.sin(Math.PI * t) * 26;
    const cx = c0[0] + (c1[0] - c0[0]) * t, cy = c0[1] + (c1[1] - c0[1]) * t + lift, ang = 90 * t;
    h += `<g transform="translate(${r1(cx)},${r1(cy)}) rotate(${r1(ang)})">${R(-C / 2, -B / 2, C, B, ORANGE)}`
      + (o.semRot ? "" : `<g transform="rotate(${r1(-ang)})">${T(0, 5, prod(lc, lb), r1(Math.min(fs(B, C, prod(lc, lb)), fs(C, B, prod(lc, lb)))), "#fff")}</g>`) + `</g>`;
    if (t >= 0.98) {
      h += `<rect x="${ox}" y="${oy}" width="${A + B}" height="${C}" fill="none" stroke="${GREEN}" stroke-width="3"/>`;
      h += dimTop(ox, ox + A, oy - 8, fmt(la)) + dimTop(ox + A, ox + A + B, oy - 8, fmt(lb));
      h += dimLeft(oy, oy + C, ox - 8, fmt(lc));
      h += `<line x1="${ox}" y1="${oy + C + 16}" x2="${ox + A + B}" y2="${oy + C + 16}" stroke="${GREEN}" stroke-width="1.6"/>` + T(ox + (A + B) / 2, oy + C + 32, fmt(isNum(la) && isNum(lb) ? +la + +lb : `${la} + ${lb}`), 13, GREEN);
    } else {
      h += dimTop(ox, ox + A, oy - 8, fmt(la));
      h += dimLeft(oy, oy + C, ox - 8, fmt(lc)) + dimLeft(oy + C, oy + A, ox - 8, fmt(lb));
    }
    return svg(ox + A + B + 14, oy + Math.max(A, C + 40) + 12, h, o.w);
  }

  // (a + b)³: cubo em 8 blocos, em perspectiva isométrica. e: afastamento (0 a 1).
  const CORES3 = [BLUE, ORANGE, GREEN, NAVY];
  function mix(hex, k) { // k>0 clareia, k<0 escurece
    const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    const f = v => Math.round(k > 0 ? v + (255 - v) * k : v * (1 + k));
    return "#" + [f(r), f(g), f(b)].map(v => v.toString(16).padStart(2, "0")).join("");
  }
  function cubo(a, b, e, o) {
    o = o || {}; const u = o.s || 16, la = o.la ?? "a", lb = o.lb ?? "b", gap = (e || 0) * (o.gap || 2.2) * (a + b) / 4;
    const cs = Math.cos(Math.PI / 6), P = (x, y, z) => [(x - y) * cs * u, (x + y) * 0.5 * u - z * u];
    const boxes = [];
    for (const i of [0, 1]) for (const j of [0, 1]) for (const k of [0, 1]) {
      const nb = i + j + k; if (o.so && !o.so.includes(nb)) continue;
      boxes.push({ x: i ? a + gap : 0, y: j ? a + gap : 0, z: k ? a + gap : 0, dx: i ? b : a, dy: j ? b : a, dz: k ? b : a, nb, i, j, k });
    }
    boxes.sort((p, q) => (p.i + p.j + p.k) - (q.i + q.j + q.k) || (p.k - q.k));
    let h = "", minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    const pts = arr => arr.map(p => { minx = Math.min(minx, p[0]); maxx = Math.max(maxx, p[0]); miny = Math.min(miny, p[1]); maxy = Math.max(maxy, p[1]); return r1(p[0]) + "," + r1(p[1]); }).join(" ");
    const labs = [];
    boxes.forEach(B => {
      const { x, y, z, dx, dy, dz } = B, c = CORES3[B.nb];
      const top = [P(x, y, z + dz), P(x + dx, y, z + dz), P(x + dx, y + dy, z + dz), P(x, y + dy, z + dz)];
      const fx = [P(x + dx, y, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z + dz), P(x + dx, y, z + dz)];
      const fy = [P(x, y + dy, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z + dz), P(x, y + dy, z + dz)];
      const st = `stroke="#fff" stroke-width="1.3" stroke-linejoin="round"`;
      h += `<polygon points="${pts(fx)}" fill="${mix(c, -0.18)}" ${st}/><polygon points="${pts(fy)}" fill="${c}" ${st}/><polygon points="${pts(top)}" fill="${mix(c, 0.3)}" ${st}/>`;
      const nA = 3 - B.nb, lab = (nA ? (nA > 1 ? la + (nA === 3 ? "³" : "²") : la) : "") + (B.nb ? (B.nb > 1 ? lb + (B.nb === 3 ? "³" : "²") : lb) : "");
      const cen = P(x + dx / 2, y + dy, z + dz / 2);
      labs.push([cen, lab]);
    });
    if (o.rot && (e || 0) >= 0.45) labs.forEach(([p, l]) => { h += T(p[0], p[1] + 4.5, l, 12, "#fff"); });
    const pad = 8, W = maxx - minx + 2 * pad, H = maxy - miny + 2 * pad;
    return `<svg viewBox="${r1(minx - pad)} ${r1(miny - pad)} ${r1(W)} ${r1(H)}" width="${r1(o.w || W)}" xmlns="http://www.w3.org/2000/svg">${h}</svg>`;
  }

  // As 8 peças do cubo, separadas por tipo: 1 a³, 3 a²b, 3 ab², 1 b³
  function pecas(a, b, o) {
    o = o || {}; const u = o.s || 11, la = o.la ?? "a", lb = o.lb ?? "b";
    const cs = Math.cos(Math.PI / 6);
    const tipos = [[a, a, a, 0], [a, a, b, 1], [a, b, b, 2], [b, b, b, 3]];
    const nomes = [la + "³", la + "²" + lb, la + lb + "²", lb + "³"], qt = [1, 3, 3, 1];
    let h = "", x0 = 10; const base = (a + 0.5) * u * 1.6 + 30;
    tipos.forEach(([dx, dy, dz, nb], t) => {
      const c = CORES3[nb], w = (dx + dy) * cs * u;
      for (let r = 0; r < qt[t]; r++) {
        const ox = x0 + dy * cs * u, oy = base - (dx + dy) * 0.5 * u;
        const P = (x, y, z) => [ox + (x - y) * cs * u, oy + (x + y) * 0.5 * u - z * u];
        const pp = arr => arr.map(p => r1(p[0]) + "," + r1(p[1])).join(" ");
        const st = `stroke="#fff" stroke-width="1.2" stroke-linejoin="round"`;
        h += `<polygon points="${pp([P(dx, 0, 0), P(dx, dy, 0), P(dx, dy, dz), P(dx, 0, dz)])}" fill="${mix(c, -0.18)}" ${st}/>`;
        h += `<polygon points="${pp([P(0, dy, 0), P(dx, dy, 0), P(dx, dy, dz), P(0, dy, dz)])}" fill="${c}" ${st}/>`;
        h += `<polygon points="${pp([P(0, 0, dz), P(dx, 0, dz), P(dx, dy, dz), P(0, dy, dz)])}" fill="${mix(c, 0.3)}" ${st}/>`;
        x0 += w + 6;
      }
      h += T(x0 - (w + 6) * qt[t] / 2 - 3, base + 22, (qt[t] > 1 ? qt[t] + " × " : "") + nomes[t], 13, c);
      x0 += 14;
    });
    return svg(x0, base + 30, h, o.w);
  }

  // Triângulo de Pascal. o: {hl (linha destacada), miss: ["r,k"], arrow: [r,k], cw, w, lab, val: (r,k)=>texto}
  function binom(n, k) { let c = 1; for (let i = 1; i <= k; i++) c = c * (n - i + 1) / i; return Math.round(c); }
  function pascal(n, o) {
    o = o || {}; const cw = o.cw || 34, ch = 26, gy = 6, lw = o.lab ? 58 : 6, maxw = (n + 1) * cw;
    let h = "";
    const pos = (r, k) => [lw + maxw / 2 - (r + 1) * cw / 2 + k * cw + cw / 2, 8 + r * (ch + gy) + ch / 2];
    if (o.arrow) {
      const [r, k] = o.arrow;
      [[r - 1, k - 1], [r - 1, k]].forEach(([rr, kk]) => { if (kk < 0 || kk > rr) return; const p = pos(rr, kk), q = pos(r, k); h += `<line x1="${r1(p[0])}" y1="${r1(p[1] + 8)}" x2="${r1(q[0])}" y2="${r1(q[1] - 9)}" stroke="${ORANGE}" stroke-width="2.4"/>`; });
    }
    for (let r = 0; r <= n; r++) {
      if (o.lab) h += T(4, pos(r, 0)[1] + 4.5, o.lab === "n" ? `n = ${r}` : `(a + b)${sup(r)}`, 10.5, GRAY, "start", 600);
      for (let k = 0; k <= r; k++) {
        const [x, y] = pos(r, k), miss = o.miss && o.miss.includes(r + "," + k), on = o.hl === r, ar = o.arrow && o.arrow[0] === r && o.arrow[1] === k;
        const fill = miss ? "#fff" : ar ? ORANGE : on ? ORANGE : (k === 0 || k === r) ? "#DCE6FF" : "#EEF3FF";
        h += `<rect data-r="${r}" data-k="${k}" style="cursor:pointer" x="${r1(x - cw / 2 + 2)}" y="${r1(y - ch / 2)}" width="${cw - 4}" height="${ch}" rx="7" fill="${fill}" ${miss ? `stroke="${RED}" stroke-width="1.8" stroke-dasharray="4 3"` : ""}/>`;
        const v = miss ? "?" : (o.val ? o.val(r, k) : binom(r, k));
        h += T(x, y + 4.5, v, String(v).length > 3 ? 10 : 12.5, miss ? RED : (on || ar) ? "#fff" : NAVY).replace("<text ", '<text pointer-events="none" ');
      }
    }
    return svg(lw + maxw + 6, 8 + (n + 1) * (ch + gy) + 2, h, o.w);
  }
  const SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  function sup(n) { return String(n).split("").map(d => SUPS[+d]).join(""); }
  // expansão de (a + b)^n como texto
  function expande(n, a, b, sinal) {
    a = a || "a"; b = b || "b"; const out = [];
    for (let k = 0; k <= n; k++) {
      const c = binom(n, k), ea = n - k, eb = k;
      const um = b === "1", pa = ea ? a + (ea > 1 ? sup(ea) : "") : "", pb = eb && !um ? b + (eb > 1 ? sup(eb) : "") : "";
      let t = (c > 1 ? c : "") + pa + pb;
      if (!pa && !pb) t = String(c);
      out.push((k ? (sinal && k % 2 ? " − " : " + ") : "") + t);
    }
    return out.join("");
  }

  // Completar o quadrado à moda de al-Khwarizmi: x² + bx. modo 4 (quatro faixas) ou 2 (duas faixas).
  function kw(b, o) {
    o = o || {}; const modo = o.modo || 4, X = o.x || 6, s = o.s || 18, k = b / modo, K = k * s, Xs = X * s;
    const pad = 28; let h = "";
    const lk = String(k).replace(".", ",");
    if (modo === 4) {
      const ox = pad + K, oy = pad + K;
      h += piece(ox, oy, Xs, Xs, BLUE, "x²");
      h += piece(ox, oy - K, Xs, K, ORANGE, `${lk}x`) + piece(ox, oy + Xs, Xs, K, ORANGE, `${lk}x`);
      h += piece(ox - K, oy, K, Xs, ORANGE, "") + piece(ox + Xs, oy, K, Xs, ORANGE, "");
      h += T(ox - K / 2, oy + Xs / 2 + 4, `${lk}x`, r1(Math.min(11, K * .32)), "#fff") + T(ox + Xs + K / 2, oy + Xs / 2 + 4, `${lk}x`, r1(Math.min(11, K * .32)), "#fff");
      [[ox - K, oy - K], [ox + Xs, oy - K], [ox - K, oy + Xs], [ox + Xs, oy + Xs]].forEach(([x, y]) => {
        h += o.fechar ? piece(x, y, K, K, NAVY, "") : R(x, y, K, K, "none", `stroke="${RED}" stroke-width="1.8" stroke-dasharray="4 3"`);
      });
      if (o.fechar) h += `<rect x="${ox - K}" y="${oy - K}" width="${Xs + 2 * K}" height="${Xs + 2 * K}" fill="none" stroke="${GREEN}" stroke-width="3"/>`;
      h += T(ox + Xs / 2, oy - K - 6, "x", 13, ORANGE) + T(ox + Xs + K / 2, oy - K - 6, lk, 12, ORANGE);
      return svg(2 * pad + Xs + 2 * K, 2 * pad + Xs + 2 * K, h, o.w);
    }
    const ox = pad + 8, oy = pad;
    h += piece(ox, oy, Xs, Xs, BLUE, "x²") + piece(ox + Xs, oy, K, Xs, ORANGE, `${lk}x`) + piece(ox, oy + Xs, Xs, K, ORANGE, `${lk}x`);
    h += o.fechar ? piece(ox + Xs, oy + Xs, K, K, NAVY, String(k * k).replace(".", ",")) : R(ox + Xs, oy + Xs, K, K, "none", `stroke="${RED}" stroke-width="1.8" stroke-dasharray="4 3"`) + T(ox + Xs + K / 2, oy + Xs + K / 2 + 5, "?", 15, RED);
    if (o.fechar) h += `<rect x="${ox}" y="${oy}" width="${Xs + K}" height="${Xs + K}" fill="none" stroke="${GREEN}" stroke-width="3"/>`;
    h += dimTop(ox, ox + Xs, oy - 8, "x") + dimTop(ox + Xs, ox + Xs + K, oy - 8, lk);
    h += dimLeft(oy, oy + Xs, ox - 8, "x") + dimLeft(oy + Xs, oy + Xs + K, ox - 8, lk);
    return svg(ox + Xs + K + 12, oy + Xs + K + 10, h, o.w);
  }

  const PN = { quad, dif, somaDif, cubo, pecas, pascal, binom, expande, sup, kw, NAVY, ORANGE, BLUE, GREEN, RED, GRAY };
  if (typeof module !== "undefined" && module.exports) module.exports = PN; else root.PN = PN;
})(this);
