// DidatiClick · Educação Financeira: utilidades comuns das páginas interativas (pasta fin/).
window.FIN = window.FIN || { cls: {}, ord: {}, av: {} };
['forca', 'mem', 'quem', 'caca', 'cartas'].forEach(k => FIN[k] = FIN[k] || {});
const LS = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };
const R$ = (v, c) => 'R$ ' + (c === 0 ? fmt(Math.round(v)) : Number(v).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
const R0 = v => 'R$ ' + String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const pct = (v, d) => (Math.round(v * Math.pow(10, d || 1)) / Math.pow(10, d || 1)).toString().replace('.', ',') + '%';
const TX = (x, y, s, o) => { o = o || {}; return `<text x="${x}" y="${y}" font-size="${o.fs || 11}" font-weight="${o.w || 600}" text-anchor="${o.a || 'middle'}" fill="${o.c || '#0E2354'}" font-family="Poppins">${s}</text>`; };
const SVG = (W, H, g) => `<svg viewBox="0 0 ${W} ${H}" width="${W}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;
// Gráfico de linhas. series: [{v:[...], cor, nome, tr}], rotX: i=>texto
function grafico(series, o) {
  o = o || {}; const W = o.w || 340, H = o.h || 210, pl = 48, pr = 10, pt = 14, pb = 26;
  const n = Math.max(...series.map(s => s.v.length)), mx = o.max || Math.max(...series.flatMap(s => s.v)) * 1.08, mn = o.min || 0;
  const sx = i => pl + i / Math.max(n - 1, 1) * (W - pl - pr), sy = v => H - pb - (v - mn) / (mx - mn || 1) * (H - pt - pb);
  let g = '';
  for (let k = 0; k <= 4; k++) { const v = mn + (mx - mn) * k / 4, y = sy(v); g += `<line x1="${pl}" y1="${y}" x2="${W - pr}" y2="${y}" stroke="#EEF2F7"/>` + TX(pl - 4, y + 3, o.fy ? o.fy(v) : R0(v), { fs: 9, a: 'end', c: '#6B7280', w: 400 }); }
  const passo = Math.ceil(n / 8);
  for (let i = 0; i < n; i += passo) g += TX(sx(i), H - 9, o.rotX ? o.rotX(i) : i, { fs: 9, c: '#6B7280', w: 400 });
  series.forEach(s => { const d = s.v.map((v, i) => (i ? 'L' : 'M') + sx(i).toFixed(1) + ',' + sy(v).toFixed(1)).join('');
    g += `<path d="${d}" fill="none" stroke="${s.cor}" stroke-width="${s.lw || 3}"${s.tr ? ' stroke-dasharray="6 4"' : ''} stroke-linejoin="round"/>`;
    if (s.pontos) s.v.forEach((v, i) => g += `<circle cx="${sx(i)}" cy="${sy(v)}" r="3" fill="${s.cor}"/>`); });
  if (o.extra) g += o.extra(sx, sy);
  const leg = series.filter(s => s.nome).map((s, i) => `<rect x="${pl + 4 + i * 150}" y="2" width="12" height="4" fill="${s.cor}"/>` + TX(pl + 20 + i * 150, 8, s.nome, { fs: 9, a: 'start' })).join('');
  return SVG(W, H, leg + g);
}
// Pizza: partes [{v, cor, nome}]
function pizza(partes, r) {
  r = r || 70; const S = partes.reduce((a, p) => a + p.v, 0) || 1; let a0 = -Math.PI / 2, g = '';
  partes.forEach(p => { const a1 = a0 + 2 * Math.PI * p.v / S, big = a1 - a0 > Math.PI ? 1 : 0, cx = 90, cy = 85;
    if (p.v / S > 0.999) g += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${p.cor}"/>`;
    else if (p.v > 0) g += `<path d="M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${big} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z" fill="${p.cor}" stroke="#fff" stroke-width="2"/>`;
    const am = (a0 + a1) / 2; if (p.v / S > 0.06) g += TX(cx + r * 0.62 * Math.cos(am), cy + r * 0.62 * Math.sin(am) + 4, Math.round(100 * p.v / S) + '%', { fs: 11, c: '#fff' });
    a0 = a1; });
  const leg = partes.map((p, i) => `<rect x="185" y="${30 + i * 22}" width="12" height="12" rx="3" fill="${p.cor}"/>` + TX(203, 40 + i * 22, p.nome, { fs: 11, a: 'start', w: 500 })).join('');
  return SVG(340, 170, g + leg);
}
const CORES_FIN = ['#0E2354', '#F7821F', '#2457D6', '#15803D', '#7A4BB5', '#0E9AA7', '#B91C1C'];
// Cabeçalho/rodapé padrão
function rodape() { return `<footer>DidatiClick · Clique e Aprenda · <a href="https://www.instagram.com/didaticlick/" target="_blank" rel="noopener" style="color:var(--orange);font-weight:600;text-decoration:none">@didaticlick</a></footer>`; }
// Controle deslizante livre (não trava depois do OK dos desafios)
function SL(id, lo, hi, st, v, cb, show) {
  const el = $(id), i = el.querySelector('input'), s = el.querySelector('span'); i.min = lo; i.max = hi; i.step = st; i.value = v;
  const sh = () => { s.textContent = show ? show(+i.value) : fmt(+i.value); }; sh(); i.oninput = () => { sh(); cb && cb(+i.value); };
  return { get: () => +i.value, set: x => { i.value = x; sh(); } };
}
