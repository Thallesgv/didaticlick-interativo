# Monta as páginas hist/*.html a partir de hist/src/*.html (primeira linha: <!--T: título-->).
import os, glob, re
D = os.path.dirname(os.path.abspath(__file__))
head, foot = open(os.path.join(D, '_head.html')).read(), open(os.path.join(D, '_foot.html')).read()
for f in sorted(glob.glob(os.path.join(D, '[!_]*.html'))):
    s = open(f).read()
    t = re.match(r'<!--T:\s*(.*?)-->\n', s)
    body = s[t.end():]
    html, scr = body.split('<script>', 1) if '<script>' in body else (body, '')
    out = head.replace('__T__', t.group(1)) + html + foot + ('<script>' + scr if scr else '') + '\n</body>\n</html>\n'
    open(os.path.join(D, '..', os.path.basename(f)), 'w').write(out)
    print('ok', os.path.basename(f))
