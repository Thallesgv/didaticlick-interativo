window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};
// Dados de quiz e resolução da apostila Polinômios (mesclados em site/data por merge_data.py)
Object.assign(window.QUIZ,{
"polinomios-m1":{title:"Polinômios · Módulo 1: Letras no lugar de números",qs:[
{q:"Qual é o perímetro de um retângulo de lados a e b?",o:["ab","2a + 2b","a + b","4ab"],a:1,e:"Perímetro é a soma dos 4 lados: a + b + a + b = 2a + 2b."},
{q:"Qual é a área de um quadrado de lado 3x?",o:["12x","6x","9x²","3x²"],a:2,e:"Área = lado · lado = 3x · 3x = 9x²."},
{q:"Qual é o valor numérico de 2x² − x para x = 3?",o:["15","33","9","12"],a:0,e:"2 · 3² − 3 = 2 · 9 − 3 = 18 − 3 = 15."},
{q:"Qual é o valor de a − 2b para a = 1 e b = −3?",o:["−5","−7","5","7"],a:3,e:"1 − 2 · (−3) = 1 + 6 = 7. Use parênteses ao trocar a letra por um número negativo."},
{q:"Um caderno custa c reais e uma caneta custa 3 reais a menos que o caderno. Quanto custam 2 cadernos e 1 caneta?",o:["2c − 3","3c − 3","3c + 3","5c"],a:1,e:"2 cadernos: 2c. 1 caneta: c − 3. Total: 2c + c − 3 = 3c − 3."}]},
"polinomios-m2":{title:"Polinômios · Módulo 2: Termos semelhantes",qs:[
{q:"Qual termo é semelhante a 5ab²?",o:["5a²b","−ab²","5ab","5b²"],a:1,e:"Termos semelhantes têm a mesma parte literal (mesmas letras com os mesmos expoentes): ab²."},
{q:"7x − 2x + x é igual a:",o:["6x","5x","4x","6x³"],a:0,e:"7 − 2 + 1 = 6. A parte literal x continua a mesma: 6x."},
{q:"Qual é a forma mais simples de 3a + 2b?",o:["5ab","5a","3a + 2b","6ab"],a:2,e:"a e b não são semelhantes, então não se juntam. A expressão já está simplificada."},
{q:"4y² + 3y − y² + 2y é igual a:",o:["8y²","5y² + 5y","3y² + y","3y² + 5y"],a:3,e:"y²: 4 − 1 = 3. y: 3 + 2 = 5. Resultado: 3y² + 5y."},
{q:"Qual igualdade é verdadeira para qualquer valor de x?",o:["x + x = 2x","x + x = x²","x · x = 2x","2x + 3 = 5x"],a:0,e:"Somar x com x dá duas vezes x. Já x · x = x² e 2x + 3 não se juntam."}]},
"polinomios-m3":{title:"Polinômios · Módulo 3: Somar e subtrair polinômios",qs:[
{q:"(3x + 2) + (5x − 7) é igual a:",o:["8x − 5","8x + 9","8x − 9","15x − 5"],a:0,e:"3x + 5x = 8x e 2 − 7 = −5."},
{q:"(6a − b) − (2a + 3b) é igual a:",o:["4a + 2b","4a − 2b","4a − 4b","8a − 4b"],a:2,e:"O sinal de menos troca os sinais de dentro: 6a − b − 2a − 3b = 4a − 4b."},
{q:"Um triângulo tem lados x + 2, 2x − 1 e 3x. Qual é o perímetro?",o:["6x + 1","6x + 3","5x + 1","6x − 1"],a:0,e:"x + 2x + 3x = 6x e 2 − 1 = 1. Perímetro: 6x + 1."},
{q:"Se A = x² + 2x e B = 3x² − x, então A − B é:",o:["4x² + x","−2x² + x","−2x² + 3x","2x² − 3x"],a:2,e:"x² + 2x − 3x² + x = −2x² + 3x."},
{q:"Um retângulo tem perímetro 10x + 6 e um dos lados mede 2x + 1. Quanto mede o outro lado?",o:["3x + 2","8x + 5","6x + 4","4x + 2"],a:0,e:"Meio perímetro: 5x + 3. Outro lado: 5x + 3 − (2x + 1) = 3x + 2."}]},
"polinomios-m4":{title:"Polinômios · Módulo 4: Multiplicar polinômios",qs:[
{q:"2x · 5x é igual a:",o:["7x²","10x","10x²","7x"],a:2,e:"Multiplicamos os coeficientes (2 · 5 = 10) e as partes literais (x · x = x²)."},
{q:"x(x + 6) é igual a:",o:["x² + 6x","x² + 6","2x + 6","x + 6x"],a:0,e:"O x multiplica cada termo dos parênteses: x · x + x · 6 = x² + 6x."},
{q:"(x + 2)(x + 5) é igual a:",o:["x² + 10","x² + 7x + 7","x² + 10x + 7","x² + 7x + 10"],a:3,e:"x · x + 5x + 2x + 2 · 5 = x² + 7x + 10."},
{q:"Qual é a área de um retângulo de lados 2x + 1 e x + 3?",o:["2x² + 3","2x² + 7x + 3","2x² + 6x + 3","3x + 4"],a:1,e:"2x · x + 2x · 3 + 1 · x + 1 · 3 = 2x² + 6x + x + 3 = 2x² + 7x + 3."},
{q:"(x + 4)² é igual a:",o:["x² + 16","x² + 4x + 16","x² + 8x + 16","2x + 8"],a:2,e:"(x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16. Não esqueça os dois retângulos 4x!"}]}
});
Object.assign(window.RES,{
"polinomios-q1-6":{title:"Polinômios · Módulo 1 · Exercício 6 (desafio)",enun:"Um terreno retangular tem largura x metros, e o comprimento é o dobro da largura mais 3 metros. Escreva o perímetro e a área do terreno e calcule-os para x = 10.",steps:[
["Traduzimos o comprimento: o dobro da largura é 2x; mais 3 metros dá 2x + 3.","comprimento = 2x + 3"],
["Perímetro: somamos os quatro lados (duas larguras e dois comprimentos) e juntamos os termos semelhantes.","P = x + x + (2x + 3) + (2x + 3) = 6x + 6"],
["Área: largura vezes comprimento. O x multiplica cada termo dos parênteses.","A = x · (2x + 3) = 2x² + 3x"],
["Para x = 10, trocamos a letra pelo número.","P = 6 · 10 + 6 = 66 m"],
["E a área:","A = 2 · 10² + 3 · 10 = 200 + 30 = 230 m²"],
["Conferindo com as medidas: o terreno tem 10 m por 23 m. Perímetro 10 + 23 + 10 + 23 = 66 e área 10 · 23 = 230. Confere!",""]],ans:"Resposta: P = 6x + 6 e A = 2x² + 3x; para x = 10, P = 66 m e A = 230 m²"},
"polinomios-q3-2c":{title:"Polinômios · Módulo 3 · Exercício 2c",enun:"Calcule (x² − 2x + 1) − (−x² + 2x − 1).",steps:[
["O sinal de menos antes do segundo parêntese troca o sinal de todos os termos de dentro.","x² − 2x + 1 + x² − 2x + 1"],
["Juntamos os termos semelhantes: x² com x², x com x, número com número.","(x² + x²) + (−2x − 2x) + (1 + 1)"],
["Somamos os coeficientes.","2x² − 4x + 2"],
["Conferindo com x = 3: (9 − 6 + 1) − (−9 + 6 − 1) = 4 − (−4) = 8, e 2 · 9 − 12 + 2 = 8. Confere!",""]],ans:"Resposta: 2x² − 4x + 2"},
"polinomios-q3-6":{title:"Polinômios · Módulo 3 · Exercício 6 (desafio)",enun:"A figura em forma de L é formada por um retângulo de 3x por x e, em cima dele, no canto esquerdo, um quadrado de lado x. Calcule o perímetro e a área da figura.",steps:[
["Contamos os lados do contorno, começando no canto de baixo à esquerda e indo no sentido horário: subindo, x + x = 2x; o topo do quadrado, x; descendo do quadrado até o retângulo, x; o topo do retângulo que sobra, 3x − x = 2x; descendo, x; a base, 3x.","2x + x + x + 2x + x + 3x"],
["Juntamos os termos semelhantes.","P = 10x"],
["Repare: é o mesmo perímetro do retângulo de 3x por 2x que “envolve” a figura, porque os degraus só mudam de lugar.",""],
["A área é a soma das duas partes: retângulo 3x · x e quadrado x · x.","A = 3x² + x² = 4x²"]],ans:"Resposta: perímetro 10x e área 4x²"},
"polinomios-q4-3b":{title:"Polinômios · Módulo 4 · Exercício 3b",enun:"Calcule (2x + 3)(x − 1).",steps:[
["Cada termo do primeiro parêntese multiplica cada termo do segundo (propriedade distributiva). São 2 · 2 = 4 produtos.","2x · x + 2x · (−1) + 3 · x + 3 · (−1)"],
["Calculamos cada produto, cuidando dos sinais.","2x² − 2x + 3x − 3"],
["Juntamos os termos semelhantes: −2x + 3x = x.","2x² + x − 3"],
["Conferindo com x = 2: (4 + 3)(2 − 1) = 7 e 2 · 4 + 2 − 3 = 7. Confere!",""]],ans:"Resposta: 2x² + x − 3"},
"polinomios-q4-6":{title:"Polinômios · Módulo 4 · Exercício 6 (desafio)",enun:"Um terreno retangular mede x metros por x + 10 metros. A largura foi aumentada em 2 m e o comprimento diminuído em 2 m. A área aumentou ou diminuiu? Quanto?",steps:[
["Área antes: largura vezes comprimento.","x(x + 10) = x² + 10x"],
["Novas medidas: largura x + 2 e comprimento x + 10 − 2 = x + 8.","(x + 2)(x + 8)"],
["Multiplicamos termo a termo.","x² + 8x + 2x + 16 = x² + 10x + 16"],
["Comparamos: a nova área tem 16 a mais, seja qual for o valor de x.","(x² + 10x + 16) − (x² + 10x) = 16"],
["Conferindo com x = 5: antes 5 · 15 = 75; depois 7 · 13 = 91. Diferença 16. Confere!",""]],ans:"Resposta: a área aumentou 16 m²"}
});
