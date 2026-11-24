window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};window.APOSTILAS=window.APOSTILAS||{};window.FIN=window.FIN||{cls:{},ord:{},av:{}};
// Educação Financeira · Nível 3 · Avançado
Object.assign(FIN.cls,{
"pre-pos-hibrido":{title:"Prefixado, pós-fixado ou híbrido?",sub:"Leia a remuneração de cada título e classifique.",
 baldes:[["Prefixado","#0E2354"],["Pós-fixado","#F7821F"],["Híbrido","#15803D"]],
 itens:[["CDB que paga 12% ao ano",0,"Taxa conhecida no dia da aplicação."],["CDB que paga 105% do CDI",1,"Acompanha um índice: só no fim se sabe quanto rendeu."],
 ["Tesouro IPCA + 6% ao ano",2,"Parte acompanha a inflação, parte é fixa."],["Tesouro Selic",1,"Acompanha a Selic."],["Tesouro Prefixado 2029",0,"O nome já diz."],
 ["LCI de 90% do CDI",1,"Percentual de um índice."],["Debênture de IPCA + 7%",2,"Inflação + taxa fixa."],["Tesouro Educa+",2,"Corrigido pela inflação mais uma taxa."],["Poupança",1,"Depende da Selic e da TR."]]},
"titulo-sonho":{title:"Um título para cada sonho",sub:"Cada carta é o sonho de uma pessoa da família. Qual título do Tesouro Direto combina mais?",
 baldes:[["Selic","#0E2354"],["Prefixado","#2457D6"],["IPCA+","#15803D"],["Educa+","#F7821F"],["RendA+","#7A4BB5"]],
 itens:[["A mãe quer uma reserva para emergências, que possa sacar a qualquer dia",0,"Tesouro Selic: oscila muito pouco e tem liquidez diária."],
 ["O tio quer saber hoje exatamente quanto vai receber daqui a 3 anos",1,"No Prefixado a taxa é definida na compra."],
 ["O pai quer pagar a faculdade da Lara, que começa em 6 anos",3,"O Educa+ paga 60 parcelas mensais, corrigidas pela inflação, a partir da data escolhida."],
 ["A avó quer um complemento de renda na aposentadoria",4,"O RendA+ paga 240 parcelas mensais (20 anos)."],
 ["O primo quer investir por 20 anos sem perder para a inflação",2,"O IPCA+ garante a inflação mais uma taxa no vencimento."],
 ["A Lara quer guardar a mesada para uma bicicleta em 8 meses",0,"Prazo curto e precisa do dinheiro inteiro: Tesouro Selic."]],
 fim:"Quanto mais cedo se começa, menor o valor mensal para chegar ao mesmo objetivo: o tempo trabalha a favor com os juros compostos."},
"produto-rv":{title:"Que investimento é esse?",sub:"Cada carta descreve um produto de renda variável. Qual é?",
 baldes:[["Ação","#0E2354"],["FII","#F7821F"],["ETF","#2457D6"],["BDR","#15803D"],["Fiagro","#7A4BB5"]],
 itens:[["Um pedacinho de uma empresa, que dá direito a parte do lucro",0,"Ação."],["Cotas de um fundo dono de shoppings e galpões, que distribui aluguéis",1,"Fundo imobiliário."],
 ["Um fundo que copia o Ibovespa: uma compra, dezenas de empresas",2,"ETF, o fundo de índice."],["Recibo negociado na B3 que representa ações de empresa estrangeira",3,"BDR."],
 ["Fundo que investe em terras e títulos do agronegócio",4,"Fiagro."],["Código terminado em 3, com direito a voto",0,"Ação ordinária."],["Comprar o 'álbum inteiro' em vez de figurinha por figurinha",2,"ETF."],
 ["Ser 'dono' de um pedacinho de vários prédios de escritórios",1,"FII de tijolo."]]},
"onde-guardar":{title:"Onde guardar?",sub:"Para cada objetivo, escolha o lugar mais adequado, pensando em prazo, risco e liquidez.",
 baldes:[["Tesouro Selic ou CDB com liquidez diária","#0E2354"],["Tesouro IPCA+ ou Prefixado longo","#15803D"],["Ações e ETFs (longo prazo, aceitando risco)","#F7821F"]],
 itens:[["Reserva de emergência",0,"Precisa de segurança e liquidez."],["Bicicleta daqui a 8 meses",0,"Prazo curto: não dá para correr risco."],
 ["Aposentadoria daqui a 40 anos, aceitando sobe e desce",2,"Em prazos muito longos, a renda variável pode render mais, com risco."],["Faculdade daqui a 10 anos, protegida da inflação",1,"IPCA+ (ou Educa+)."],
 ["Dinheiro do intercâmbio do ano que vem",0,"Prazo curto."],["Parte do patrimônio de longo prazo para ser sócio de empresas",2,"Renda variável, diversificada."]]}
});
Object.assign(FIN.ord,{
"liquidez":{title:"Do mais líquido ao menos líquido",sub:"Liquidez é a rapidez para virar dinheiro sem perder valor. Ordene.",de:"mais líquido",ate:"menos líquido",
 itens:[["Dinheiro na carteira","Já é dinheiro."],["Conta digital ou Tesouro Selic","Resgate em até um dia útil."],["CDB com liquidez diária","Resgate a qualquer dia."],["CDB que vence em 3 anos, sem resgate antes","Só no vencimento."],["Um apartamento","Vender pode levar meses."]]},
"risco":{title:"Do menor ao maior risco",sub:"Ordene do investimento de menor risco ao de maior risco.",de:"menor risco",ate:"maior risco",
 itens:[["Tesouro Selic","Garantido pelo governo federal, quase sem oscilação."],["CDB de banco grande (com FGC)","Risco do banco, com garantia até R$ 250 mil."],["Debênture de empresa sólida","Sem FGC: depende da empresa."],["ETF do Ibovespa","Renda variável, mas diversificada."],["Ações de uma única empresa pequena","Concentrado e volátil."]]},
"historia-bolsa":{title:"A história da bolsa no Brasil",sub:"Ordene os fatos da história da bolsa.",de:"mais antigo",ate:"mais recente",
 itens:[["Fundada a Bolsa Livre em São Paulo (1890)","Origem da Bovespa."],["Criado o Ibovespa (1968)","O principal índice de ações do país."],["Nasce a BM&FBovespa (2008)","União da Bovespa com a BM&F."],["Criação da B3 (2017)","União da BM&FBovespa com a Cetip."]]}
});
Object.assign(FIN.av,{
"heranca":{title:"Os R$ 10 mil da Bia",vars:{d:["💰",10000,v=>R0(v)]},nos:{
 ini:{t:"Bia, 19 anos, recebeu <b>R$ 10.000</b> de herança da avó. Ela não tem reserva de emergência e sonha com um intercâmbio em 2 anos e, um dia, uma casa. Um amigo diz: \"Põe tudo numa ação que vai bombar!\". O que ela faz primeiro?",
  ops:[["Põe tudo na ação indicada pelo amigo","acao"],["Separa uma reserva de emergência no Tesouro Selic","res"],["Deixa parado na conta corrente","conta"]]},
 acao:{t:"Seis meses depois, a empresa divulga um prejuízo e a ação cai 40%. A Bia tem agora uns R$ 6.000. Na mesma semana, o notebook dela quebra.",ops:[["Vende as ações no prejuízo para comprar o notebook","perda",{d:-4000}],["Pega empréstimo no cheque especial","pior",{d:-4600}]]},
 conta:{t:"Um ano depois, o dinheiro parado não rendeu nada e a inflação de uns 4% comeu parte do poder de compra.",fim:"Dinheiro dormindo",lic:"Dinheiro parado na conta corrente perde para a inflação. Mesmo a reserva de emergência deve render (Tesouro Selic, CDB de liquidez diária)."},
 res:{t:"Bia separa R$ 4.000 de reserva no Tesouro Selic. E os R$ 6.000 restantes?",ops:[["Intercâmbio em 2 anos: Tesouro Prefixado ou CDB que vence na data","inter"],["Tudo em ações, para crescer rápido","meio"]]},
 inter:{t:"Ela ainda guarda um pouco por mês num ETF do Ibovespa, pensando na casa, para daqui a muitos anos.",fim:"Cada dinheiro no seu lugar 🏆",lic:"Primeiro a reserva (segura e líquida), depois cada objetivo com o investimento do seu prazo, e a renda variável só para o longo prazo, diversificada."},
 meio:{t:"As ações oscilam. Na data do intercâmbio, a bolsa está em queda de 15% e o dinheiro não dá.",fim:"Prazo errado",lic:"Renda variável não combina com objetivos de prazo curto: o preço pode estar baixo justamente no mês em que você precisa."},
 perda:{t:"O prejuízo, que era só no papel, virou prejuízo de verdade.",fim:"Sem reserva, sem escolha",lic:"Sem reserva de emergência, um imprevisto obriga a vender investimentos na hora errada."},
 pior:{t:"Os juros do cheque especial somam-se ao prejuízo das ações.",fim:"Dois prejuízos",lic:"Cheque especial é um dos créditos mais caros. A ordem certa é: reserva primeiro, investimento depois."}}},
"convite-piramide":{title:"O convite do clube",vars:{d:["💰",500,v=>R0(v)]},nos:{
 ini:{t:"Um colega convida Caio para um \"clube de investimentos\": entra com R$ 500 e recebe 20% ao mês. \"Meu primo já ganhou!\", diz o colega. Para ganhar mais, Caio precisa trazer 3 amigos. O que ele faz?",
  ops:[["Entra na hora: o primo já ganhou!","entrou",{d:-500}],["Pergunta: de onde vem o lucro?","pergunta"],["Procura o nome da empresa nos sites do Banco Central e da CVM","pesquisa"]]},
 pergunta:{t:"O colega responde: \"É um robô que opera criptomoedas, ninguém sabe direito, mas paga sempre!\". E insiste: \"As vagas acabam hoje!\"",ops:[["Desconfia da pressa e pesquisa a empresa","pesquisa"],["Entra para não perder a vaga","entrou",{d:-500}]]},
 pesquisa:{t:"Caio não encontra autorização da empresa em lugar nenhum e acha um alerta da CVM sobre esquemas parecidos.",fim:"Pirâmide evitada 🛡️",lic:"Sinais clássicos: retorno alto e garantido, lucro que ninguém explica, pressa e necessidade de trazer gente nova. Quem paga os antigos é o dinheiro dos novos."},
 entrou:{t:"No primeiro mês, Caio recebe R$ 100. Animado, convence 3 amigos a entrarem. No terceiro mês, os pagamentos param e o site sai do ar.",ops:[["Ver o que aconteceu","fim"]]},
 fim:{t:"Caio perdeu R$ 400 (pagou 500 e recebeu 100), e os amigos que ele trouxe perderam tudo.",fim:"A pirâmide desabou",lic:"Os R$ 100 que Caio recebeu vieram do dinheiro de quem entrou depois. Quando as entradas param, a pirâmide desaba e a maioria perde. Pirâmide é crime."}}}
});
Object.assign(window.QUIZ,{
"fin3-m1":{title:"Educação Financeira 3 · Módulo 1 · Renda fixa",qs:[
{q:"Um CDB de 110% do CDI é:",o:["prefixado","pós-fixado","híbrido","renda variável"],a:1,e:"Acompanha um índice."},
{q:"Com o CDI a 10% ao ano, um CDB de 90% do CDI rende cerca de:",o:["9%","10%","11%","90%"],a:0,e:"90% de 10 = 9."},
{q:"Liquidez é:",o:["o lucro","a rapidez para virar dinheiro sem perder valor","o risco de calote","a inflação"],a:1,e:"Dinheiro na mão tem liquidez máxima."},
{q:"O risco de quem pegou emprestado não pagar é o risco:",o:["de mercado","de crédito","de liquidez","cambial"],a:1,e:"O famoso calote."},
{q:"Lucro de R$ 1.000 resgatado depois de 2 anos paga de IR:",o:["R$ 225","R$ 150","R$ 200","nada"],a:1,e:"15% depois de 720 dias."}]},
"fin3-m2":{title:"Educação Financeira 3 · Módulo 2 · Tesouro Direto",qs:[
{q:"Ao comprar um título do Tesouro Direto, você empresta dinheiro para:",o:["um banco","o governo federal","a B3","uma empresa"],a:1,e:"Títulos públicos financiam o governo."},
{q:"O título ideal para a reserva de emergência é o:",o:["Tesouro Selic","Prefixado 2035","IPCA+ 2045","RendA+"],a:0,e:"Liquidez diária e quase sem oscilação."},
{q:"O Educa+ paga, a partir da data escolhida:",o:["60 parcelas mensais","240 parcelas","um só valor","juros semestrais"],a:0,e:"5 anos de parcelas para os estudos."},
{q:"IPCA + 6% num ano de IPCA 4% rende cerca de:",o:["6%","4%","10%","24%"],a:2,e:"4 + 6 ≈ 10%."},
{q:"Os títulos do Tesouro têm o menor risco de crédito porque:",o:["têm FGC","são garantidos pelo governo federal","são da bolsa","rendem pouco"],a:1,e:"Não precisam do FGC."}]},
"fin3-m3":{title:"Educação Financeira 3 · Módulo 3 · Poupança, CDB, LCI e LCA",qs:[
{q:"A poupança rende:",o:["todo dia útil","uma vez por mês, no aniversário","só no fim do ano","de hora em hora"],a:1,e:"Quem saca antes perde o mês."},
{q:"São isentas de IR para pessoas físicas:",o:["CDB e debênture","poupança, LCI e LCA","ações","Tesouro Selic"],a:1,e:"Poupança, LCI e LCA."},
{q:"CDI 10%, mais de 2 anos: CDB de 100% do CDI rende líquido:",o:["10%","8,5%","9%","15%"],a:1,e:"10 − 15% de 10 = 8,5."},
{q:"Debêntures costumam pagar mais porque:",o:["têm FGC","têm mais risco e não têm FGC","são do governo","rendem diariamente"],a:1,e:"Mais risco exige mais retorno."},
{q:"Com a Selic acima de 8,5%, a poupança rende:",o:["0,5% ao mês + TR","70% da Selic","100% do CDI","nada"],a:0,e:"É a regra atual."}]},
"fin3-m4":{title:"Educação Financeira 3 · Módulo 4 · Renda variável e a B3",qs:[
{q:"Quem compra uma ação vira:",o:["credor","sócio","cliente do FGC","fiscal"],a:1,e:"Dono de um pedacinho da empresa."},
{q:"Parte do lucro distribuída aos acionistas se chama:",o:["dividendo","spread","CDI","CET"],a:0,e:"Dividendos."},
{q:"O termômetro da bolsa brasileira é o:",o:["IPCA","Ibovespa","CDI","PIB"],a:1,e:"Calculado desde 1968."},
{q:"Um fundo que copia um índice e é negociado na bolsa é um:",o:["FII","ETF","CDB","BDR"],a:1,e:"Fundo de índice."},
{q:"Diversificar é:",o:["pôr tudo numa só ação","misturar investimentos diferentes","só usar a poupança","pagar o mínimo"],a:1,e:"Não pôr todos os ovos na mesma cesta."}]},
"fin3-m5":{title:"Educação Financeira 3 · Módulo 5 · Pirâmides, apostas e promessas",qs:[
{q:"Numa pirâmide, o 'lucro' dos primeiros vem:",o:["de um negócio real","do dinheiro de quem entra depois","do governo","do FGC"],a:1,e:"Por isso sempre desaba."},
{q:"Cada um traz 5 pessoas. No nível 3 há:",o:["15","25","125","625"],a:2,e:"5 × 5 × 5 = 125."},
{q:"Apostas de quota fixa no Brasil são proibidas para:",o:["maiores de 60","menores de 18","estudantes","ninguém"],a:1,e:"Menores de 18 anos."},
{q:"Aposta de R$ 10, chance 1 em 10, prêmio R$ 80. Em média, a cada R$ 100 apostados perde-se:",o:["R$ 0","R$ 20","R$ 80","R$ 10"],a:1,e:"Paga 100, ganha em média 80."},
{q:"Promessa de 20% ao mês garantido indica:",o:["ótimo investimento","provável golpe","Tesouro Direto","poupança"],a:1,e:"Retorno alto e garantido não existe."}]},
"fin3-m6":{title:"Educação Financeira 3 · Módulo 6 · O meu plano",qs:[
{q:"Bicicleta de R$ 720 em 8 meses pede guardar por mês:",o:["R$ 80","R$ 90","R$ 72","R$ 100"],a:1,e:"720 ÷ 8 = 90."},
{q:"Lucro de R$ 1,20 por brigadeiro. Para lucrar R$ 30 vende-se:",o:["20","25","30","36"],a:1,e:"30 ÷ 1,20 = 25."},
{q:"Para uma meta de 8 meses, o melhor lugar é:",o:["ações","Tesouro Selic ou CDB com liquidez","bets","debênture de 10 anos"],a:1,e:"Prazo curto: segurança e liquidez."},
{q:"6 × R$ 130 contra R$ 720 à vista: o parcelado custa a mais:",o:["R$ 60","R$ 30","R$ 130","R$ 0"],a:0,e:"780 − 720 = 60."},
{q:"Se um imprevisto atrapalhar o plano, o melhor é:",o:["desistir","ajustar prazo ou renda extra","pegar cheque especial","apostar"],a:1,e:"Ajustar o plano, não abandonar."}]}
});
Object.assign(window.RES,{
"fin3-q1-6":{title:"Educação Financeira 3 · Módulo 1 · Desafio",enun:"Felipe lucrou R$ 800 num CDB resgatado depois de 3 anos. Quanto pagou de IR e quanto ficou de lucro líquido?",steps:[
["3 anos são mais de 720 dias. Qual a alíquota da tabela regressiva?","15%"],["O imposto é sobre o lucro, não sobre o valor investido.","15% de 800 = 10% (80) + 5% (40) = 120"],["Lucro líquido.","800 − 120 = 680"]],ans:"Resposta: R$ 120 de IR e R$ 680 de lucro líquido."},
"fin3-q3-6":{title:"Educação Financeira 3 · Módulo 3 · Desafio",enun:"CDI a 12% ao ano, mais de 2 anos: CDB de 100% do CDI ou LCA de 88% do CDI?",steps:[
["CDB bruto: 100% de 12%.","12%"],["Desconte 15% de IR sobre o rendimento.","15% de 12 = 1,8 → 12 − 1,8 = 10,2%"],["LCA: 88% de 12%, sem IR.","0,88 × 12 = 10,56%"],["Compare.","10,56% > 10,2%"]],ans:"Resposta: a LCA rende mais, mesmo pagando um percentual menor do CDI."},
"fin3-q5-6":{title:"Educação Financeira 3 · Módulo 5 · Desafio",enun:"Numa pirâmide em que cada pessoa precisa trazer 5 novas, em que nível o total de pessoas daquele nível passa da população do Brasil (cerca de 213 milhões)?",steps:[
["Cada nível multiplica por 5.","5, 25, 125, 625, 3.125, ..."],["Pule alguns: 5 elevado a 10.","5¹⁰ = 9.765.625 (quase 10 milhões)"],["Mais um nível.","5¹¹ = 48.828.125"],["E mais um.","5¹² = 244.140.625"]],ans:"Resposta: no nível 12 seriam 244 milhões de pessoas, mais que todo o Brasil."}
});
