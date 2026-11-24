window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};window.APOSTILAS=window.APOSTILAS||{};window.FIN=window.FIN||{cls:{},ord:{},av:{}};
// Educação Financeira · Nível 2 · Intermediário
Object.assign(FIN.cls,{
"sfn-quem":{title:"Quem faz isso?",sub:"Cada carta descreve uma tarefa do Sistema Financeiro Nacional. Quem é o responsável?",
 baldes:[["CMN","#0E2354"],["Banco Central","#2457D6"],["Copom","#7A4BB5"],["CVM","#0E9AA7"],["Tesouro Nacional","#15803D"],["FGC","#F7821F"]],
 itens:[["Fixa a meta de inflação do país",0,"O CMN é o órgão máximo e define a meta de inflação."],["Define a meta da taxa Selic 8 vezes por ano",2,"O Copom é o comitê do Banco Central que decide a Selic."],
 ["Fiscaliza bancos e cooperativas de crédito",1,"Supervisionar os bancos é papel do Banco Central."],["Fiscaliza a bolsa, as ações e os fundos",3,"A CVM cuida do mercado de valores mobiliários."],
 ["Vende títulos públicos para financiar o governo",4,"O Tesouro administra o dinheiro do governo e emite os títulos."],["Devolve até R$ 250 mil se um banco quebrar",5,"É a garantia do FGC, por CPF e por instituição."],
 ["Emite o real e cuida do Pix",1,"O Banco Central emite a moeda e criou o Pix."],["Define as regras da moeda e do crédito",0,"Fazer as regras é papel do CMN."],
 ["Pune empresa que engana investidores na bolsa",3,"A CVM fiscaliza e pune irregularidades no mercado de capitais."],["Paga as despesas do governo federal",4,"O Tesouro é o 'caixa' do governo."]],
 fim:"Resumo: o CMN escreve as regras, o Banco Central e a CVM apitam o jogo, o Copom ajusta os juros, o Tesouro cuida do caixa do governo e o FGC é a rede de proteção."},
"pib-componentes":{title:"Monte o PIB",sub:"PIB = C + I + G + (X − M). Cada carta é um gasto. Em que parte do PIB ele entra?",
 baldes:[["C · consumo","#0E2354"],["I · investimento","#2457D6"],["G · governo","#15803D"],["X · exportação","#F7821F"],["M · importação","#B91C1C"]],
 itens:[["Uma família compra comida no mercado",0,"Gasto das famílias é consumo."],["Uma fábrica compra máquinas novas",1,"Bens que vão produzir mais no futuro são investimento."],
 ["O governo constrói uma escola",2,"Gasto do governo."],["O Brasil vende soja para a China",3,"Venda para fora é exportação."],["Uma loja brasileira compra celulares feitos na Coreia",4,"Compra de fora é importação: é descontada."],
 ["Você paga um corte de cabelo",0,"Serviço comprado pela família: consumo."],["Uma empresa constrói um galpão",1,"Investimento."],["Salário dos professores da rede pública",2,"Gasto do governo."],
 ["Uma fábrica vende aviões para outro país",3,"Exportação."],["Turistas brasileiros gastam no exterior",4,"É como comprar serviço de fora: importação."]],
 fim:"Importação entra com sinal de menos porque o produto foi feito em outro país: não é produção interna."},
"divida-boa":{title:"Dívida que vale a pena ou cilada?",sub:"Crédito pode ajudar ou atrapalhar. Para cada situação, decida.",
 baldes:[["Pode valer a pena","#15803D"],["Cilada","#B91C1C"]],
 itens:[["Financiar um curso técnico que aumenta a sua renda",0,"Investir em você pode se pagar."],["Pagar só o mínimo da fatura do cartão",1,"O resto vai para o rotativo, com juros altíssimos."],
 ["Usar o cheque especial todo mês",1,"Juros muito altos: é só para emergência de poucos dias."],["Financiar uma casa com parcela parecida com o aluguel",0,"Pode valer a pena se couber no orçamento."],
 ["Empréstimo para apostar em bets",1,"Apostar não é investir, e com dinheiro emprestado é pior ainda."],["Comprar uma máquina de costura para trabalhar e vender roupas",0,"Ferramenta de trabalho que gera renda."],
 ["Parcelar em 12 vezes um tênis por impulso",1,"Compra por impulso parcelada compromete o orçamento por um ano."],["Trocar uma dívida cara por outra mais barata para quitar a primeira",0,"Portabilidade para juros menores ajuda."],
 ["Pegar empréstimo para 'investir' em promessa de 10% ao mês",1,"Promessa boa demais: provável pirâmide."]]}
});
Object.assign(FIN.ord,{
"inflacao-brasil":{title:"Os planos contra a inflação",sub:"O Brasil tentou várias vezes vencer a inflação. Ponha os fatos em ordem.",de:"mais antigo",ate:"mais recente",
 itens:[["Criação do Banco Central (1964)","Lei 4.595, que organizou o Sistema Financeiro Nacional."],["Plano Cruzado (1986)","Congelou preços; a inflação voltou meses depois."],["Plano Collor (1990)","Bloqueou o dinheiro das contas e da poupança."],
 ["URV e Plano Real (1994)","A Unidade Real de Valor preparou a chegada do real em julho."],["Metas de inflação (1999)","O CMN passou a fixar uma meta anual para a inflação."],["Pix (2020)","Já num Brasil de inflação controlada."]]}
});
Object.assign(FIN.av,{
"hiperinflacao":{title:"Um mês em 1993",vars:{d:["💵",100,v=>v.toFixed(0)+' mil cruzeiros']},nos:{
 ini:{t:"Março de 1993. A inflação está em uns <b>30% ao mês</b>. Seu pai recebeu o salário hoje e você ganhou <b>100 mil cruzeiros</b> de mesada para o mês. O lanche custa 10 mil hoje. O que você faz?",
  ops:[["Gasta tudo hoje no mercado, antes que os preços subam","gastou"],["Guarda o dinheiro na gaveta para usar no mês","gaveta"],["Põe na poupança, que paga correção","poup"]]},
 gastou:{t:"No mercado, a fila é enorme: todo mundo teve a mesma ideia. A moça da remarcação passa trocando etiquetas com uma maquininha. Você enche a sacola com 10 lanches de 10 mil.",ops:[["Voltar para casa","fimG"]]},
 gaveta:{t:"Quatro semanas depois, o lanche já custa uns <b>13 mil</b>. Com os 100 mil da gaveta, dá para comprar só 7 lanches e meio.",ops:[["Entender o que aconteceu","fimV"]]},
 poup:{t:"A poupança corrigiu o dinheiro mais ou menos junto com a inflação. No fim do mês, você tem uns 130 mil, e o lanche custa 13 mil. Dá para 10 lanches, como no começo.",ops:[["Entender o que aconteceu","fimP"]]},
 fimG:{t:"Gastar tudo no dia do salário era o que muitas famílias faziam: comprar o mês inteiro de uma vez, antes da remarcação.",fim:"Corrida ao mercado",lic:"Com hiperinflação, o dinheiro perde a função de reserva de valor: ninguém quer ficar com ele na mão. Planejar fica quase impossível."},
 fimV:{t:"O dinheiro parado perdeu <b>quase um quarto</b> do poder de compra em um mês.",fim:"O dinheiro derreteu",lic:"Isso é inflação: o mesmo valor compra menos. A 30% ao mês, os preços multiplicam por mais de 20 em um ano."},
 fimP:{t:"Você protegeu o poder de compra, mas não ficou mais rico: só não perdeu.",fim:"Protegido, mas sem ganho real",lic:"Ganho real é render acima da inflação. Em 1994, o Plano Real criou a URV e depois o real e trouxe a inflação para baixo."}}},
"primeiro-cartao":{title:"O primeiro cartão do Léo",vars:{d:["💳 dívida",0,v=>R0(v)],j:["🔥 juros pagos",0,v=>R0(v)]},nos:{
 ini:{t:"Léo, 18 anos, ganhou o primeiro cartão de crédito com limite de R$ 1.500. Seu salário de estagiário é R$ 1.200. No primeiro mês, uma loja oferece um fone de R$ 600 em 10 × R$ 60 ou R$ 540 no Pix. Ele tem R$ 700 guardados.",
  ops:[["Paga R$ 540 no Pix","m2"],["Parcela em 10 × R$ 60 no cartão","m2p",{d:600}]]},
 m2:{t:"Mês 2. Os amigos combinam uma viagem: R$ 900. Léo não tem esse dinheiro.",ops:[["Passa no cartão e paga só o mínimo da fatura depois","rot",{d:900}],["Junta por 4 meses e vai na próxima viagem","bom"]]},
 m2p:{t:"Mês 2. Os amigos combinam uma viagem: R$ 900. Ele já tem R$ 60 por mês do fone no cartão por 10 meses.",ops:[["Passa no cartão e paga só o mínimo da fatura depois","rot",{d:900}],["Junta por 4 meses e vai na próxima viagem","bom2"]]},
 rot:{t:"A fatura vem alta e Léo paga só o mínimo. O resto entra no rotativo a uns 12% ao mês. Três meses depois, a dívida passou de R$ 1.300.",ops:[["Liga para o banco e troca por um empréstimo pessoal mais barato","troca",{j:250}],["Continua pagando o mínimo","bola",{j:700,d:500}]]},
 troca:{t:"Com um empréstimo de juros menores, Léo para a bola de neve e corta gastos até quitar.",fim:"Saiu do buraco",lic:"Dívida cara se troca por mais barata e se paga primeiro. Melhor ainda: não entrar no rotativo."},
 bola:{t:"A dívida cresce todo mês, o limite estoura e o nome de Léo vai para o cadastro de inadimplentes.",fim:"Bola de neve",lic:"O mínimo da fatura é uma armadilha: o resto vira rotativo, um dos créditos mais caros do país."},
 bom:{t:"Léo usa o cartão só para o que consegue pagar na fatura inteira e viaja quatro meses depois, sem dívida.",fim:"Cartão no controle 🏆",lic:"Usado assim, o cartão é só um meio de pagamento prático, sem juros."},
 bom2:{t:"Léo viaja quatro meses depois. O fone parcelado ocupou R$ 60 do orçamento por 10 meses, mas sem rotativo.",fim:"Quase perfeito",lic:"Parcelar custou R$ 60 a mais que o Pix, mas a decisão de esperar pela viagem evitou a bola de neve."}}}
});
Object.assign(window.QUIZ,{
"fin2-m1":{title:"Educação Financeira 2 · Módulo 1 · Sistema Financeiro Nacional",qs:[
{q:"O órgão máximo do Sistema Financeiro Nacional, que fixa a meta de inflação, é o:",o:["CMN","Copom","FGC","B3"],a:0,e:"O Conselho Monetário Nacional."},
{q:"Quem fiscaliza bancos e cooperativas?",o:["CVM","Banco Central","Tesouro","IBGE"],a:1,e:"O Banco Central supervisiona as instituições financeiras."},
{q:"A CVM fiscaliza:",o:["seguros","a bolsa e os fundos","a poupança","os impostos"],a:1,e:"O mercado de valores mobiliários."},
{q:"R$ 300 mil num único banco que quebrou: o FGC devolve:",o:["R$ 300 mil","R$ 250 mil","R$ 150 mil","nada"],a:1,e:"Até R$ 250 mil por CPF por instituição."},
{q:"Banco paga 8% a quem investe e cobra 30% de quem toma emprestado. O spread é:",o:["38 pontos","22 pontos","8 pontos","30 pontos"],a:1,e:"30 − 8 = 22."}]},
"fin2-m2":{title:"Educação Financeira 2 · Módulo 2 · Juros simples e compostos",qs:[
{q:"R$ 500 a juros simples de 2% ao mês por 6 meses rendem:",o:["R$ 30","R$ 60","R$ 100","R$ 12"],a:1,e:"10 por mês × 6 = 60."},
{q:"R$ 1.000 a 10% ao ano compostos, em 2 anos, viram:",o:["R$ 1.200","R$ 1.210","R$ 1.100","R$ 1.300"],a:1,e:"1.100 e depois 1.210."},
{q:"Pela regra do 72, a 6% ao ano o dinheiro dobra em:",o:["6 anos","12 anos","72 anos","8 anos"],a:1,e:"72 ÷ 6 = 12."},
{q:"Juros sobre juros é característica dos juros:",o:["simples","compostos","negativos","fixos"],a:1,e:"Os juros entram no saldo e também rendem."},
{q:"Montante é:",o:["só os juros","capital + juros","a taxa","o tempo"],a:1,e:"M = C + J."}]},
"fin2-m3":{title:"Educação Financeira 2 · Módulo 3 · Inflação",qs:[
{q:"O índice oficial de inflação do Brasil é o:",o:["IGP-M","IPCA","CDI","PIB"],a:1,e:"Calculado pelo IBGE."},
{q:"Uma cesta de R$ 200 passou a custar R$ 210. A inflação da cesta foi:",o:["10%","5%","2%","21%"],a:1,e:"10/200 = 5%."},
{q:"Com inflação, o poder de compra do dinheiro:",o:["aumenta","diminui","não muda","dobra"],a:1,e:"O mesmo dinheiro compra menos."},
{q:"O real foi criado em:",o:["1986","1990","1994","2002"],a:2,e:"1º de julho de 1994."},
{q:"Rendeu 7% com inflação de 4%. Ganho real aproximado:",o:["11%","3%","7%","4%"],a:1,e:"7 − 4 ≈ 3%."}]},
"fin2-m4":{title:"Educação Financeira 2 · Módulo 4 · Selic, Copom e PIB",qs:[
{q:"Para frear a inflação alta, o Copom costuma:",o:["baixar a Selic","subir a Selic","imprimir dinheiro","congelar preços"],a:1,e:"Juros maiores reduzem o consumo a prazo."},
{q:"A meta de inflação desde 2025 é de:",o:["3% ao ano","10% ao ano","1% ao mês","6% ao ano"],a:0,e:"Com tolerância de 1,5 ponto para mais ou para menos."},
{q:"No PIB = C + I + G + (X − M), a letra M representa:",o:["moeda","importações","mercado","meta"],a:1,e:"Importações são descontadas."},
{q:"C = 50, I = 20, G = 25, X = 15, M = 10. O PIB é:",o:["120","100","110","95"],a:1,e:"50 + 20 + 25 + 5 = 100."},
{q:"O Copom se reúne por ano:",o:["4 vezes","8 vezes","12 vezes","1 vez"],a:1,e:"Cerca de a cada 45 dias."}]},
"fin2-m5":{title:"Educação Financeira 2 · Módulo 5 · Crédito e dívidas",qs:[
{q:"R$ 800 à vista ou 10 × R$ 95. Quanto a mais no parcelado?",o:["R$ 95","R$ 150","R$ 50","R$ 0"],a:1,e:"950 − 800 = 150."},
{q:"Pagar só o mínimo da fatura leva o resto para o:",o:["FGC","rotativo","Tesouro","Pix"],a:1,e:"Crédito rotativo, com juros altíssimos."},
{q:"CET significa:",o:["Custo Efetivo Total","Conta Especial de Troco","Crédito em Tempo","Cadastro Estadual"],a:0,e:"Inclui juros, tarifas, seguros e impostos."},
{q:"Em geral, prazo maior num empréstimo significa:",o:["menos juros no total","mais juros no total","nenhum juro","juros iguais"],a:1,e:"Mesmo com parcela menor."},
{q:"A parte da parcela que devolve o valor emprestado é a:",o:["amortização","inflação","Selic","multa"],a:0,e:"O resto da parcela são juros."}]}
});
Object.assign(window.RES,{
"fin2-q1-4":{title:"Educação Financeira 2 · Módulo 1 · Desafio",enun:"Uma pessoa tem R$ 400 mil no Banco A, R$ 200 mil no Banco B e R$ 100 mil no Tesouro Direto. Os bancos A e B quebram. Quanto ela recupera?",steps:[
["O FGC cobre até R$ 250 mil por CPF em cada instituição. No Banco A há mais que isso.","Banco A: recebe 250 mil (perde 150 mil)"],["No Banco B, o valor está abaixo do limite.","Banco B: recebe os 200 mil"],
["O Tesouro Direto não depende do FGC: é garantido pelo governo federal e não quebrou junto com os bancos.","Tesouro: 100 mil continuam lá"],["Some tudo.","250 + 200 + 100 = 550 mil"]],ans:"Resposta: R$ 550 mil. Para não perder nada, ela deveria ter dividido os R$ 400 mil entre dois bancos."},
"fin2-q2-6":{title:"Educação Financeira 2 · Módulo 2 · Desafio",enun:"Ana aplicou R$ 1.000 a juros simples de 10% ao ano e Beto aplicou R$ 1.000 a juros compostos de 10% ao ano. Depois de 3 anos, quanto Beto tem a mais?",steps:[
["Juros simples: 10% de 1.000 por ano, sempre sobre o valor inicial.","100 por ano × 3 = 300 → Ana tem 1.300"],["Juros compostos, ano 1: 10% de 1.000.","1.000 + 100 = 1.100"],["Ano 2: 10% de 1.100.","1.100 + 110 = 1.210"],["Ano 3: 10% de 1.210.","1.210 + 121 = 1.331"],["Diferença.","1.331 − 1.300 = 31"]],ans:"Resposta: Beto tem R$ 31 a mais."},
"fin2-q3-6":{title:"Educação Financeira 2 · Módulo 3 · Desafio",enun:"Com inflação de 10% ao ano por 2 anos seguidos, um produto de R$ 100 passa a custar quanto? E a inflação acumulada é de 20%?",steps:[
["Ano 1: 10% de 100.","100 + 10 = 110"],["Ano 2: os 10% são sobre 110, não sobre 100.","110 + 11 = 121"],["Acumulada: de 100 para 121.","21%"]],ans:"Resposta: R$ 121; a inflação acumulada é de 21%, e não de 20%, porque é composta."},
"fin2-q5-6":{title:"Educação Financeira 2 · Módulo 5 · Desafio",enun:"Joana pegou um empréstimo a juros compostos de 10% ao mês e pagou tudo de uma vez, depois de 2 meses, com R$ 363. Quanto pegou?",steps:[
["Volte no tempo: no mês 2, o valor foi multiplicado por 1,1. Divida 363 por 1,1.","363 ÷ 1,1 = 330"],["No mês 1, também. Divida 330 por 1,1.","330 ÷ 1,1 = 300"],["Confira indo para frente.","300 → 330 → 363"]],ans:"Resposta: R$ 300."}
});
