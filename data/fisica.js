// Física · dados das páginas interativas (quizzes, resoluções e roteiros PhET)
window.QUIZ=Object.assign(window.QUIZ||{},{
"movimento-m1":{title:"Movimento · Módulo 1: Referencial, posição e deslocamento",qs:[
{q:"Um passageiro está sentado num ônibus em movimento. Em relação ao motorista, o passageiro está:",o:["em movimento, porque o ônibus anda","em repouso, porque a distância entre eles não muda","em movimento, porque a rua passa por ele","em repouso só quando o ônibus para"],a:1,e:"Repouso e movimento dependem do referencial. A posição do passageiro em relação ao motorista não muda, então ele está em repouso em relação ao motorista."},
{q:"Um avião em voo horizontal solta uma caixa. Desprezando o ar, como o piloto vê a trajetória da caixa?",o:["Uma curva para trás","Uma curva para a frente","Uma reta inclinada","Uma reta vertical, logo abaixo do avião"],a:3,e:"A caixa continua com a mesma velocidade horizontal do avião. Para o piloto, ela cai em linha reta. Para quem está no chão, a trajetória é uma curva (parábola)."},
{q:"Um carro sai do km 30 de uma estrada, vai até o km 90 e volta até o km 70. O deslocamento foi de:",o:["40 km","60 km","80 km","100 km"],a:0,e:"Deslocamento = posição final − posição inicial = 70 − 30 = 40 km."},
{q:"No mesmo percurso (km 30 → km 90 → km 70), a distância percorrida foi de:",o:["40 km","60 km","80 km","100 km"],a:2,e:"Somamos os trechos: 60 km na ida (30 → 90) e 20 km na volta (90 → 70). Total: 80 km."},
{q:"Uma atleta completa 3 voltas numa pista de 400 m e para no ponto de partida. Deslocamento e distância percorrida são:",o:["0 m e 1 200 m","1 200 m e 0 m","400 m e 1 200 m","1 200 m e 1 200 m"],a:0,e:"Ela termina onde começou, então o deslocamento é zero. A distância percorrida é 3 · 400 = 1 200 m."}]},
"movimento-m2":{title:"Movimento · Módulo 2: Velocidade média",qs:[
{q:"72 km/h correspondem a:",o:["7,2 m/s","20 m/s","36 m/s","259,2 m/s"],a:1,e:"Para passar de km/h para m/s, dividimos por 3,6: 72 ÷ 3,6 = 20 m/s."},
{q:"Um ciclista percorre 30 km em 1 h 30 min. Sua velocidade média é:",o:["15 km/h","30 km/h","20 km/h","45 km/h"],a:2,e:"1 h 30 min = 1,5 h. vm = 30 ÷ 1,5 = 20 km/h."},
{q:"Quanto tempo um ônibus leva para percorrer 180 km com velocidade média de 60 km/h?",o:["2 h","3 h","3 h 30 min","4 h"],a:1,e:"Δt = Δs ÷ vm = 180 ÷ 60 = 3 h."},
{q:"Uma família viaja 100 km em 1 h, para 30 min para lanchar e viaja mais 50 km em 30 min. A velocidade média da viagem toda é:",o:["75 km/h","100 km/h","50 km/h","150 km/h"],a:0,e:"Distância total: 150 km. Tempo total, contando a parada: 1 + 0,5 + 0,5 = 2 h. vm = 150 ÷ 2 = 75 km/h."},
{q:"Um carro faz 60 km a 60 km/h e mais 60 km a 30 km/h. A velocidade média no percurso todo é:",o:["45 km/h","50 km/h","90 km/h","40 km/h"],a:3,e:"Tempos: 60 ÷ 60 = 1 h e 60 ÷ 30 = 2 h. vm = 120 ÷ 3 = 40 km/h. Não é a média das velocidades (45)."}]},
"movimento-m3":{title:"Movimento · Módulo 3: Movimento uniforme",qs:[
{q:"Na função s = 50 − 5t (SI), a posição inicial e a velocidade são:",o:["s₀ = 50 m e v = 5 m/s","s₀ = 5 m e v = 50 m/s","s₀ = 50 m e v = −5 m/s","s₀ = −5 m e v = 50 m/s"],a:2,e:"Comparando com s = s₀ + v·t: s₀ = 50 m e v = −5 m/s. O sinal negativo indica movimento retrógrado."},
{q:"Para s = 50 − 5t (SI), em que instante o móvel passa pela origem (s = 0)?",o:["5 s","10 s","45 s","250 s"],a:1,e:"0 = 50 − 5t → 5t = 50 → t = 10 s."},
{q:"No gráfico s × t de um movimento uniforme, a velocidade é dada pela:",o:["inclinação da reta","área sob a reta","posição inicial","altura do ponto final"],a:0,e:"No MU, o gráfico s × t é uma reta. A inclinação (Δs ÷ Δt) é a velocidade."},
{q:"Um móvel tem velocidade constante de 8 m/s. No gráfico v × t, a área entre 0 e 5 s vale:",o:["13 m","1,6 m","8 m","40 m"],a:3,e:"A área sob o gráfico v × t é o deslocamento: 8 · 5 = 40 m."},
{q:"Um trem de 150 m, a 15 m/s, atravessa uma ponte de 300 m. Quanto tempo leva a travessia completa?",o:["10 s","20 s","30 s","45 s"],a:2,e:"O trem só termina a travessia quando o último vagão sai da ponte: percorre 300 + 150 = 450 m. Δt = 450 ÷ 15 = 30 s."}]},
"movimento-m4":{title:"Movimento · Módulo 4: Movimento uniformemente variado",qs:[
{q:"Um carro vai de 0 a 20 m/s em 5 s. Sua aceleração média é:",o:["4 m/s²","100 m/s²","0,25 m/s²","15 m/s²"],a:0,e:"a = Δv ÷ Δt = 20 ÷ 5 = 4 m/s². A velocidade aumenta 4 m/s a cada segundo."},
{q:"Na função v = 10 − 2t (SI), o movimento é:",o:["acelerado, com a = 2 m/s²","retardado, com a = −2 m/s²","uniforme, com v = 10 m/s","retardado, com a = −10 m/s²"],a:1,e:"Comparando com v = v₀ + a·t: v₀ = 10 m/s e a = −2 m/s². Velocidade positiva e aceleração negativa: o movimento é retardado."},
{q:"Para v = 10 − 2t (SI), em que instante o móvel para?",o:["2 s","8 s","5 s","10 s"],a:2,e:"Parar significa v = 0: 0 = 10 − 2t → t = 5 s."},
{q:"Um corpo parte do repouso com a = 3 m/s². Que distância percorre nos primeiros 4 s?",o:["12 m","48 m","6 m","24 m"],a:3,e:"Δs = v₀·t + a·t²/2 = 0 + 3 · 16 ÷ 2 = 24 m."},
{q:"No gráfico v × t de um MUV, o que representam a inclinação da reta e a área sob ela?",o:["velocidade e aceleração","aceleração e deslocamento","deslocamento e aceleração","posição e velocidade"],a:1,e:"A inclinação da reta v × t é a aceleração (Δv ÷ Δt). A área sob a reta é o deslocamento."}]}
});
window.RES=Object.assign(window.RES||{},{
"movimento-q2-5":{title:"Movimento · Módulo 2 · Exercício 5 (desafio)",enun:"Um carro percorre os primeiros 60 km de uma estrada a 60 km/h e os 60 km seguintes a 120 km/h. Qual foi a velocidade média no percurso todo?",steps:[
["Cuidado com a armadilha: a resposta não é a média das velocidades, (60 + 120) ÷ 2 = 90 km/h. A velocidade média é sempre distância total ÷ tempo total.","vm = Δs total ÷ Δt total"],
["Tempo do 1º trecho: Δt = Δs ÷ v.","Δt₁ = 60 ÷ 60 = 1 h"],
["Tempo do 2º trecho.","Δt₂ = 60 ÷ 120 = 0,5 h"],
["Somamos distâncias e tempos.","Δs = 120 km  e  Δt = 1,5 h"],
["Dividimos.","vm = 120 ÷ 1,5 = 80 km/h"],
["Por que deu menos que 90? O carro passou mais tempo no trecho lento (1 h) do que no rápido (0,5 h), então o trecho lento pesa mais na média.",""]],ans:"Resposta: 80 km/h"},
"movimento-q3-5":{title:"Movimento · Módulo 3 · Exercício 5",enun:"Dois carros andam na mesma estrada, um em direção ao outro. As funções horárias são sA = 20t e sB = 300 − 10t (SI). Em que instante e em que posição eles se encontram?",steps:[
["Lendo as funções: A sai da origem a 20 m/s; B sai da posição 300 m a −10 m/s (indo para trás, em direção a A).",""],
["No encontro, os dois estão na mesma posição ao mesmo tempo.","sA = sB"],
["Igualamos as funções.","20t = 300 − 10t"],
["Somamos 10t aos dois lados.","30t = 300"],
["Dividimos por 30.","t = 10 s"],
["Substituímos t = 10 s em qualquer uma das funções.","sA = 20 · 10 = 200 m"],
["Conferindo com B: sB = 300 − 10 · 10 = 200 m. Confere!",""]],ans:"Resposta: encontram-se em t = 10 s, na posição 200 m"},
"movimento-q4-3":{title:"Movimento · Módulo 4 · Exercício 3",enun:"Um carro a 72 km/h freia com aceleração constante de −4 m/s² até parar. Quanto tempo leva e que distância percorre até parar?",steps:[
["Primeiro, colocamos tudo no SI: 72 km/h ÷ 3,6 = 20 m/s.","v₀ = 20 m/s,  a = −4 m/s²,  v = 0"],
["Tempo até parar: usamos v = v₀ + a·t com v = 0.","0 = 20 − 4t  →  t = 5 s"],
["Distância: como não precisamos do tempo, a equação de Torricelli é a mais direta.","v² = v₀² + 2·a·Δs"],
["Substituímos os valores.","0 = 400 + 2 · (−4) · Δs"],
["Resolvemos.","8·Δs = 400  →  Δs = 50 m"],
["Conferindo pela área do gráfico v × t: é um triângulo de base 5 s e altura 20 m/s. Área = 5 · 20 ÷ 2 = 50 m. Confere!",""]],ans:"Resposta: 5 s e 50 m"},
"movimento-q4-4":{title:"Movimento · Módulo 4 · Exercício 4",enun:"Um carro parte do repouso e acelera de modo uniforme até 12 m/s em 4 s. Depois mantém essa velocidade até t = 10 s. Qual é a aceleração no início e qual é o deslocamento total?",steps:[
["Aceleração no trecho de 0 a 4 s.","a = Δv ÷ Δt = 12 ÷ 4 = 3 m/s²"],
["O deslocamento é a área sob o gráfico v × t. Dividimos a figura em duas partes.",""],
["De 0 a 4 s: triângulo de base 4 e altura 12.","A₁ = 4 · 12 ÷ 2 = 24 m"],
["De 4 a 10 s: retângulo de base 6 e altura 12.","A₂ = 6 · 12 = 72 m"],
["Somamos as áreas.","Δs = 24 + 72 = 96 m"]],ans:"Resposta: a = 3 m/s² e Δs = 96 m"}
});
// Roteiros das simulações PhET (abertas pela página sim.html?id=...)
window.SIMS={
"movimento-phet-forcas":{title:"Forças e Movimento: Noções Básicas",tema:"Movimento · Módulo 4",
url:"https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_pt_BR.html",
intro:"Nesta simulação você empurra um objeto e vê a velocidade dele mudar. Vamos usá-la para ver a aceleração acontecendo.",
passos:["Abra a tela <b>Aceleração</b>.","Marque <b>Velocidade</b> e <b>Valores</b> para ver o velocímetro com números.","Coloque o <b>atrito em zero</b> (ponteiro todo para a esquerda).","Aplique uma força constante de 100 N e observe o velocímetro: quanto a velocidade aumenta a cada segundo?","Agora dobre a força para 200 N. O que acontece com o ritmo em que a velocidade aumenta?","Por fim, aplique a força para o lado contrário enquanto o objeto anda. O movimento fica acelerado ou retardado?"],
pergunta:"Com força constante e sem atrito, a velocidade aumenta sempre a mesma quantidade a cada segundo. Isso é um movimento uniformemente variado (MUV): a aceleração é constante."}
};
// Página própria da apostila (QR da capa): só os materiais desta apostila
window.APOSTILAS=Object.assign(window.APOSTILAS||{},{
"movimento":{title:"Física · Movimento",mods:[
{t:"Módulo 1 · Referencial, posição e deslocamento",l:[["Simulador: depende do referencial","fisica/referencial.html"],["Quiz do Módulo 1","quiz.html?id=movimento-m1"]]},
{t:"Módulo 2 · Velocidade média",l:[["Resolução: exercício 5 (desafio)","resolucao.html?id=movimento-q2-5"],["Quiz do Módulo 2","quiz.html?id=movimento-m2"]]},
{t:"Módulo 3 · Movimento uniforme",l:[["Simulador: carrinho e gráficos (MU)","fisica/movimento.html?modo=mu"],["Resolução: exercício 5","resolucao.html?id=movimento-q3-5"],["Quiz do Módulo 3","quiz.html?id=movimento-m3"]]},
{t:"Módulo 4 · Movimento uniformemente variado",l:[["PhET: Forças e Movimento (com roteiro)","sim.html?id=movimento-phet-forcas"],["Simulador: carrinho e gráficos (MUV)","fisica/movimento.html?modo=muv"],["Resolução: exercício 3","resolucao.html?id=movimento-q4-3"],["Resolução: exercício 4","resolucao.html?id=movimento-q4-4"],["Quiz do Módulo 4","quiz.html?id=movimento-m4"]]}]}
});
