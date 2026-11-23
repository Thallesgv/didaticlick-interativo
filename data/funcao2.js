window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};
Object.assign(window.QUIZ,{
"funcao2-m1":{title:"Função do 2º grau · Módulo 1: A parábola e seus movimentos",qs:[
{q:"Qual é o vértice da parábola y = (x − 3)² + 2?",o:["(−3, 2)","(3, −2)","(3, 2)","(2, 3)"],a:2,e:"Na forma a(x − xv)² + yv, temos xv = 3 e yv = 2. O vértice é (3, 2)."},
{q:"A parábola y = −x² + 1 tem concavidade:",o:["para baixo","para cima","para a direita","depende de x"],a:0,e:"a = −1 < 0: a parábola “abre” para baixo."},
{q:"A parábola y = (x + 4)² é a parábola y = x² deslocada:",o:["4 para a direita","4 para cima","4 para baixo","4 para a esquerda"],a:3,e:"(x + 4)² = (x − (−4))²: xv = −4. O vértice vai para x = −4, à esquerda."},
{q:"Qual parábola é a mais fechada?",o:["y = 0,2x²","y = −x²","y = 5x²","y = 2x²"],a:2,e:"Quanto maior |a|, mais fechada. O maior |a| é 5."},
{q:"Deslocando y = x² 2 unidades para a direita e 1 para cima, obtemos:",o:["y = (x + 2)² + 1","y = (x − 2)² + 1","y = (x − 1)² + 2","y = (x − 2)² − 1"],a:1,e:"Direita 2: x − 2 dentro do quadrado. Cima 1: + 1 fora."}]},
"funcao2-m2":{title:"Função do 2º grau · Módulo 2: Lendo a forma canônica",qs:[
{q:"Qual é o vértice de f(x) = 3(x + 1)² − 6?",o:["(1, −6)","(−1, −6)","(−1, 6)","(3, −6)"],a:1,e:"x + 1 = x − (−1): xv = −1. E yv = −6."},
{q:"Qual é o valor máximo de f(x) = −(x − 2)² + 7?",o:["2","−7","não tem máximo","7"],a:3,e:"a < 0: o vértice (2, 7) é ponto de máximo. O valor máximo é yv = 7."},
{q:"Quais são os zeros de f(x) = (x − 1)² − 4?",o:["3 e −1","1 e −4","5 e −3","2 e −2"],a:0,e:"(x − 1)² = 4 → x − 1 = 2 ou x − 1 = −2 → x = 3 ou x = −1."},
{q:"Quantos zeros reais tem y = −3(x − 2)² − 1?",o:["dois","um","nenhum","três"],a:2,e:"a < 0 e yv < 0: o vértice está abaixo do eixo x e a parábola abre para baixo. Não toca o eixo x."},
{q:"Qual é o eixo de simetria de f(x) = 2(x − 5)² + 3?",o:["x = 3","x = 5","x = −5","y = 3"],a:1,e:"O eixo de simetria é a reta vertical que passa pelo vértice: x = xv = 5."}]},
"funcao2-m3":{title:"Função do 2º grau · Módulo 3: Da canônica à forma geral",qs:[
{q:"Na forma geral, (x − 2)² + 3 é:",o:["x² + 7","x² − 4x + 7","x² − 4x + 1","x² − 2x + 7"],a:1,e:"(x − 2)² = x² − 4x + 4. Somando 3: x² − 4x + 7."},
{q:"Na forma canônica, x² + 8x + 10 é:",o:["(x + 4)² − 6","(x + 4)² + 10","(x + 8)² − 54","(x − 4)² − 6"],a:0,e:"x² + 8x = (x + 4)² − 16. Então x² + 8x + 10 = (x + 4)² − 6."},
{q:"Qual é o xv de f(x) = 2x² − 12x + 1?",o:["−3","6","12","3"],a:3,e:"xv = −b/(2a) = 12/4 = 3."},
{q:"Qual é o vértice de f(x) = x² − 6x + 8?",o:["(3, −1)","(−3, 8)","(3, 1)","(6, 8)"],a:0,e:"xv = 6/2 = 3 e yv = f(3) = 9 − 18 + 8 = −1."},
{q:"Se f(x) = a(x − xv)² + yv tem a = 1 e xv = 5, quanto vale b na forma geral?",o:["5","10","−10","−5"],a:2,e:"b = −2a·xv = −2 · 1 · 5 = −10."}]},
"funcao2-m4":{title:"Função do 2º grau · Módulo 4: Máximos e mínimos",qs:[
{q:"A altura de uma bola é h(t) = −5(t − 1)² + 5, em metros. Qual é a altura máxima?",o:["1 m","5 m","10 m","−5 m"],a:1,e:"a < 0, então o vértice é máximo: yv = 5 m, no instante t = 1 s."},
{q:"Dois números têm soma 10. Qual é o maior produto possível entre eles?",o:["25","24","10","100"],a:0,e:"P = x(10 − x) = −(x − 5)² + 25. Máximo 25, com 5 e 5."},
{q:"Com 24 m de cerca, qual é a maior área retangular que se pode cercar?",o:["24 m²","32 m²","144 m²","36 m²"],a:3,e:"Lados x e 12 − x: A = −(x − 6)² + 36. Máximo 36 m², quadrado 6 por 6."},
{q:"O lucro de uma loja é L(x) = −(x − 30)² + 900. Para qual x o lucro é máximo?",o:["900","0","30","−30"],a:2,e:"O lucro máximo acontece no vértice: x = xv = 30."},
{q:"A altura de uma bola é h(t) = −5t² + 10t. Qual é a altura máxima?",o:["5 m","10 m","15 m","20 m"],a:0,e:"h(t) = −5(t² − 2t) = −5(t − 1)² + 5. Máximo 5 m em t = 1 s."}]}
});
Object.assign(window.RES,{
"funcao2-q1-6":{title:"Função do 2º grau · Módulo 1 · Exercício 6 (desafio)",enun:"Uma parábola tem a mesma abertura de y = x², concavidade para baixo e vértice (−2, 5). Escreva sua lei e calcule onde ela corta o eixo y.",steps:[
["Mesma abertura de y = x² e concavidade para baixo: |a| = 1 e a < 0.","a = −1"],
["O vértice dá xv = −2 e yv = 5. Na forma canônica, x − xv = x − (−2) = x + 2.","f(x) = −(x + 2)² + 5"],
["O gráfico corta o eixo y quando x = 0.","f(0) = −(0 + 2)² + 5 = −4 + 5 = 1"],
["O ponto é (0, 1). Repare: por simetria, (−4, 1) também está na parábola.",""]],ans:"Resposta: f(x) = −(x + 2)² + 5; corta o eixo y em (0, 1)"},
"funcao2-q2-6":{title:"Função do 2º grau · Módulo 2 · Exercício 6 (desafio)",enun:"Uma parábola tem zeros 1 e 7 e valor mínimo −9. Escreva sua lei na forma canônica.",steps:[
["Os zeros são simétricos em relação ao eixo de simetria. Então xv é a média dos zeros.","xv = (1 + 7)/2 = 4"],
["O valor mínimo é o yv.","yv = −9"],
["Falta descobrir a. Escrevemos a forma canônica com a desconhecido.","f(x) = a(x − 4)² − 9"],
["Usamos um zero: f(1) = 0.","a(1 − 4)² − 9 = 0  →  9a = 9  →  a = 1"],
["A lei é:","f(x) = (x − 4)² − 9"],
["Conferindo: f(7) = 9 − 9 = 0 e, como a = 1 > 0, o vértice é mínimo. Confere!",""]],ans:"Resposta: f(x) = (x − 4)² − 9"},
"funcao2-q3-6":{title:"Função do 2º grau · Módulo 3 · Exercício 6 (desafio)",enun:"Para que valor de k o vértice da parábola f(x) = x² − 6x + k fica sobre o eixo x?",steps:[
["Completamos o quadrado: x² − 6x = (x − 3)² − 9.","f(x) = (x − 3)² − 9 + k"],
["Na forma canônica, o yv é o que fica fora do quadrado.","yv = k − 9"],
["O vértice está sobre o eixo x quando yv = 0.","k − 9 = 0  →  k = 9"],
["Então f(x) = (x − 3)²: a parábola toca o eixo x só no ponto (3, 0). Pela fórmula, Δ = 36 − 36 = 0: raiz dupla. Confere!",""]],ans:"Resposta: k = 9"},
"funcao2-q4-4":{title:"Função do 2º grau · Módulo 4 · Exercício 4",enun:"O lucro diário de uma lanchonete, em reais, é L(p) = −2p² + 80p − 600, em que p é o preço do lanche. Qual preço dá o maior lucro, e qual é esse lucro?",steps:[
["Colocamos −2 em evidência nos termos com p.","L(p) = −2(p² − 40p) − 600"],
["Completamos o quadrado dentro do parêntese: p² − 40p = (p − 20)² − 400.","L(p) = −2[(p − 20)² − 400] − 600"],
["Distribuímos o −2.","L(p) = −2(p − 20)² + 800 − 600"],
["Forma canônica:","L(p) = −2(p − 20)² + 200"],
["Como a = −2 < 0, o vértice é ponto de máximo: p = 20 e L = 200.",""],
["Conferindo: L(20) = −800 + 1600 − 600 = 200. Confere!",""]],ans:"Resposta: preço de R$ 20,00 e lucro máximo de R$ 200,00"},
"funcao2-q4-5":{title:"Função do 2º grau · Módulo 4 · Exercício 5 (desafio)",enun:"Com 60 m de tela, quer-se cercar uma área retangular encostada num muro, que forma o quarto lado. Quais medidas dão a maior área?",steps:[
["Chamamos de x os dois lados perpendiculares ao muro. O lado paralelo ao muro usa o resto da tela.","lado paralelo = 60 − 2x"],
["A área é o produto dos lados.","A(x) = x(60 − 2x) = −2x² + 60x"],
["Colocamos −2 em evidência e completamos o quadrado.","A(x) = −2(x² − 30x) = −2[(x − 15)² − 225]"],
["Forma canônica:","A(x) = −2(x − 15)² + 450"],
["a < 0: máximo no vértice, x = 15. O lado paralelo mede 60 − 30 = 30.",""],
["Conferindo: 15 · 30 = 450 m², e a tela usada é 15 + 15 + 30 = 60 m. Confere!",""]],ans:"Resposta: 15 m por 30 m (lado de 30 m paralelo ao muro), com área de 450 m²"}
});
