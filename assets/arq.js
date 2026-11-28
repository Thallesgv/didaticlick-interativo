// DidatiClick · A Matemática na Arqueologia: utilidades extras das páginas da pasta arq/ (as básicas vêm de ass.js e fin.js).
const AREIA = '#EBD5A6', AREIA_E = '#D2B47C', TERRA = '#B5774A', TERRA_E = '#7E4E2E', CONCHA = '#FBF4EA', AGUA = '#BFD9F2', AGUA_E = '#4F8CC0', PAPEL = '#FFF8EC', SOL = '#F6C35A', CER = '#C8693A';
const CIR = (x, y, r, f, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${extra || ''}/>`;
const ELI = (x, y, rx, ry, f, extra) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${extra || ''}/>`;
const PL = (pts, c, w, dash) => `<polyline points="${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}" fill="none" stroke="${c}" stroke-width="${w || 2}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const vg = v => fmt(v).replace(/,(\d*?)0+$/, (m, d) => d ? ',' + d : '');
