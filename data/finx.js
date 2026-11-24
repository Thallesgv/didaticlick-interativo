window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};window.APOSTILAS=window.APOSTILAS||{};window.FIN=window.FIN||{cls:{},ord:{},av:{}};
['forca','mem','quem','caca','cartas'].forEach(k=>FIN[k]=FIN[k]||{});
// Educação Financeira · livros complementares (Caderno, Matemática sem Calculadora, Dicionário, Histórias, Empreender, Jogos, Guia do Professor)
Object.assign(FIN.cls,{
"mito-juros":{title:"Verdade ou mito? Juros e inflação",sub:"Leia cada frase e decida: é verdade ou é mito?",baldes:[["Verdade","#15803D"],["Mito","#B91C1C"]],
 itens:[["Nos juros compostos, os juros de um mês também rendem juros no mês seguinte.",0,"É o “juros sobre juros”."],["Inflação de 5% quer dizer que todos os preços subiram exatamente 5%.",1,"É uma média: uns sobem mais, outros menos, alguns caem."],
 ["Dobrar a taxa de juros simples dobra os juros recebidos.",0,"Nos juros simples, os juros são proporcionais à taxa."],["Se o salário sobe 4% e a inflação é 6%, o poder de compra aumentou.",1,"Diminuiu: os preços subiram mais que o salário."],
 ["Pela regra do 72, a 6% ao ano o dinheiro dobra em cerca de 12 anos.",0,"72 ÷ 6 = 12."],["Um aumento de 10% seguido de um desconto de 10% volta ao preço inicial.",1,"100 → 110 → 99: fica 1% abaixo."],
 ["Pagar só o mínimo da fatura do cartão faz a dívida crescer com juros altíssimos.",0,"É o crédito rotativo."],["Com inflação, guardar dinheiro embaixo do colchão mantém o poder de compra.",1,"Perde poder de compra mês a mês."]]},
"golpe-ou-nao2":{title:"Golpe ou não? (versão desafio)",chat:true,sub:"Mensagens um pouco mais difíceis. Procure os sinais: pressa, link, pedido de senha, código ou dinheiro, promessa boa demais.",baldes:[["É golpe","#B91C1C"],["É segura","#15803D"]],
 itens:[["Seu código de verificação do WhatsApp chegou por SMS. Um “funcionário do suporte” liga e pede que você o diga para “confirmar a conta”.",0,"Quem tem o código rouba sua conta. Nunca passe códigos.","Ligação de número desconhecido"],
 ["Compra aprovada no app do seu banco, no valor que você mesmo acabou de pagar no mercado.",1,"Notificação do app oficial sobre uma compra sua.","App do banco"],
 ["“Olá! Sua encomenda está retida. Pague a taxa de R$ 7,90 neste link para liberar.”",0,"Taxa pequena por link é isca clássica: confira no site oficial dos Correios ou da loja.","SMS"],
 ["A escola manda o boleto da formatura pelo aplicativo oficial que todos os pais usam, com o mesmo valor combinado na reunião.",1,"Canal oficial, valor combinado, sem pressa.","App da escola"],
 ["Vaga de emprego: “ganhe R$ 300 por dia curtindo vídeos, só precisa depositar R$ 50 para liberar as tarefas”.",0,"Pagar para trabalhar é golpe da tarefa.","Mensagem de desconhecido"],
 ["Seu primo liga de vídeo, mostra o rosto e pede para você devolver os R$ 20 do lanche de ontem.",1,"Você reconhece a pessoa e a dívida existe.","Chamada de vídeo"],
 ["Um site com preços 60% abaixo de todas as outras lojas aceita só Pix e foi criado há uma semana.",0,"Preço bom demais + só Pix + site novo = loja falsa.","Anúncio em rede social"]]},
"perfil":{title:"Que perfil de investidor?",sub:"Leia a frase e classifique o perfil da pessoa.",baldes:[["Conservador","#0E2354"],["Moderado","#F7821F"],["Arrojado","#B91C1C"]],
 itens:[["“Não quero de jeito nenhum ver meu dinheiro diminuir, nem por um mês.”",0,"Prioriza segurança."],["“Aceito umas oscilações em parte do dinheiro para ganhar um pouco mais no longo prazo.”",1,"Equilibra segurança e retorno."],
 ["“Topo grandes quedas temporárias em busca de um retorno bem maior daqui a 20 anos.”",2,"Alta tolerância ao risco."],["“Metade na renda fixa, metade em ações e fundos imobiliários.”",1,"Mistura equilibrada."],["“Tudo no Tesouro Selic e em CDB com liquidez diária.”",0,"Só investimentos de baixo risco."],["“Quase tudo em ações de empresas pequenas.”",2,"Muito risco."]]},
"custo-negocio":{title:"Custo fixo ou custo variável?",sub:"Na barraca de brigadeiros, cada gasto é fixo (não muda com a quantidade vendida) ou variável (cresce a cada brigadeiro)?",baldes:[["Custo fixo","#0E2354"],["Custo variável","#F7821F"]],
 itens:[["Leite condensado",1,"Mais brigadeiros, mais latas."],["Aluguel da mesa na feira",0,"O mesmo valor, venda 10 ou 100."],["Forminhas de papel",1,"Uma por brigadeiro."],["Cartaz da barraca",0,"Feito uma vez só."],["Chocolate granulado",1,"Depende da quantidade."],["Panela comprada para o negócio",0,"Não depende de quantos você vende."],["Embalagem de presente para cada caixinha",1,"Uma por venda."],["Taxa de inscrição na feira da escola",0,"Valor único."]]},
"propaganda":{title:"Propaganda honesta ou enganosa?",sub:"O Código de Defesa do Consumidor proíbe propaganda enganosa. Classifique cada anúncio da feira da escola.",baldes:[["Honesta","#15803D"],["Enganosa","#B91C1C"]],
 itens:[["“Brigadeiro gourmet, feito com chocolate 50% cacau” (e é mesmo).",0,"Informação verdadeira."],["“O melhor suco do mundo, cura o cansaço!”",1,"Promessa que não dá para cumprir."],["“De R$ 5 por R$ 3” num produto que sempre custou R$ 3.",1,"Falso desconto."],["“Pulseira artesanal, R$ 8. Cores sujeitas à disponibilidade.”",0,"Preço e condição claros."],["Foto do pote cheio de brigadeiros, mas o pote vendido tem metade.",1,"Imagem que engana sobre a quantidade."],["“Contém glúten e leite” na etiqueta do bolo.",0,"Informação importante para quem tem alergia."],["“Últimas unidades!” logo na abertura da feira, com a caixa cheia.",1,"Falsa escassez para apressar a compra."]]},
"sinais-golpe":{title:"Sinal de alerta ou normal?",sub:"Estas frases foram ditas por golpistas famosos ou por empresas sérias. Cada uma é sinal de alerta ou é normal?",baldes:[["Sinal de alerta","#B91C1C"],["Normal","#15803D"]],
 itens:[["“Retorno de 50% em 45 dias, garantido.”",0,"Promessa de Ponzi em 1920."],["“Rentabilidade passada não garante rentabilidade futura.”",1,"Aviso obrigatório em fundos sérios."],["“Não pergunte como funciona, a estratégia é secreta.”",0,"Quem não explica de onde vem o lucro esconde algo."],["“Ganhe mais trazendo novos investidores.”",0,"Estrutura de pirâmide."],["“A empresa é registrada na CVM e você pode consultar.”",1,"Dá para conferir no site oficial."],["“Os ganhos nunca caem, todo mês o mesmo lucro alto.”",0,"Madoff mostrava ganhos estáveis demais por décadas."],["“Este investimento tem risco e pode haver perdas.”",1,"Honestidade sobre o risco."],["“As vagas acabam hoje, decida já!”",0,"Pressa para você não pensar."]]}
});
Object.assign(FIN.ord,{
"planos-brasil":{title:"Os planos contra a inflação",sub:"Ponha em ordem os planos e fatos da luta do Brasil contra a inflação.",de:"mais antigo",ate:"mais recente",
 itens:[["Criação do Cruzeiro, substituindo o réis (1942)","Primeira grande troca de moeda do século XX."],["Plano Cruzado: preços congelados e os “fiscais do Sarney” (1986)","Funcionou por alguns meses e a inflação voltou."],["Plano Collor: bloqueio do dinheiro das contas e da poupança (1990)","Um choque que marcou uma geração."],["URV, a moeda virtual que preparou o Real (março de 1994)","Todos os preços passaram a ser mostrados também em URV."],["Nasce o Real (1º de julho de 1994)","1 real = 2.750 cruzeiros reais."],["Começa o regime de metas de inflação (1999)","O Copom passa a perseguir uma meta para a inflação."]]},
"crises":{title:"Bolhas e crises na linha do tempo",sub:"Coloque as crises em ordem.",de:"mais antiga",ate:"mais recente",
 itens:[["Febre das tulipas na Holanda (1637)","Um bulbo chegou a valer mais que uma casa."],["Encilhamento no Brasil (1890–1891)","Emissão de dinheiro e empresas de fachada logo após a República."],["Quebra da Bolsa de Nova York (1929)","Início da Grande Depressão."],["Bolha da internet (2000)","Empresas “.com” sem lucro valiam bilhões."],["Crise das hipotecas nos EUA (2008)","Empréstimos de casa a quem não podia pagar."]]},
"inventos":{title:"Invenções que mudaram o dinheiro",sub:"Ordene as invenções.",de:"mais antiga",ate:"mais recente",
 itens:[["Primeiras moedas cunhadas, na Lídia (cerca de 600 a.C.)","Atual Turquia."],["Papel-moeda na China (século XI)","Notas da dinastia Song."],["Cartão Diners Club, o primeiro cartão de pagamento de uso geral (1950)","Nasceu de um jantar sem carteira."],["Primeiro caixa eletrônico, em Londres (1967)","Barclays, em Enfield."],["Bitcoin (2009)","Primeira criptomoeda."],["Pix (novembro de 2020)","Pagamentos instantâneos do Banco Central."]]},
"etapas-feira":{title:"As etapas da feira da turma",sub:"Ponha as etapas do projeto na ordem certa.",de:"primeiro",ate:"por último",
 itens:[["Pesquisar o que os colegas gostariam de comprar","Antes de produzir, ouça o cliente."],["Calcular custos e definir o preço","Para saber se dá lucro."],["Pedir autorização e combinar o dia com a escola","Regras primeiro."],["Comprar os ingredientes e produzir","Com a lista e o orçamento na mão."],["Divulgar e vender no dia da feira","Cartaz, atendimento e troco."],["Fazer a prestação de contas e decidir o destino do lucro","Transparência com todos."]]}
});
Object.assign(FIN.av,{
"mesada-semana":{title:"Uma semana com R$ 50",vars:{d:["💰",50,v=>R0(v)],f:["😊",3]},nos:{
 ini:{t:"Segunda-feira. Théo recebeu <b>R$ 50</b> para a semana toda: lanche da escola (R$ 6 por dia, 5 dias) e passagem do ônibus de sábado (R$ 10). Os amigos chamam para um açaí de R$ 15 hoje.",
  ops:[["Vai no açaí: a semana é longa!","acai",{d:-15,f:1}],["Faz as contas antes: lanche + ônibus = R$ 40","contas"]]},
 contas:{t:"Sobram R$ 10 livres. Ele pode gastar nisso o que quiser sem faltar o essencial. E o açaí?",ops:[["Divide um açaí de R$ 15 com um amigo (R$ 7,50)","divide",{d:-7.5,f:1}],["Leva lanche de casa na quarta e economiza R$ 6","casa",{d:6}]]},
 divide:{t:"Sábado chega e o dinheiro dá certinho para o ônibus. Sobram R$ 2,50.",fim:"Semana fechada no azul 🏆",lic:"Primeiro o essencial (necessidades), depois o desejo com o que sobra. Fazer a conta antes evita surpresas."},
 casa:{t:"Sábado chega e Théo ainda tem R$ 16 sobrando. Ele vai ao açaí com os amigos no sábado à tarde e ainda guarda R$ 1.",fim:"Planejou e aproveitou 🏆",lic:"Pequenas trocas (lanche de casa) abrem espaço para os desejos sem faltar o necessário."},
 acai:{t:"Quinta-feira, Théo percebe que tem R$ 23 e ainda precisa de 2 lanches (R$ 12) e do ônibus (R$ 10).",ops:[["Fica sem lanche na sexta","sem",{f:-2}],["Pede R$ 10 emprestado à irmã","emp",{d:10}]]},
 sem:{t:"Sexta-feira com fome. Pelo menos o ônibus de sábado está garantido.",fim:"Aprendeu do jeito difícil",lic:"Gastar com o desejo antes de garantir o essencial fez faltar dinheiro para uma necessidade."},
 emp:{t:"Ele fecha a semana, mas começa a próxima devendo R$ 10 à irmã, que já tem uma semana mais apertada.",fim:"Semana no vermelho",lic:"Pegar emprestado para cobrir um gasto de desejo empurra o problema para a frente. Planejar antes evitaria a dívida."}}},
"crediario":{title:"O celular no crediário",vars:{d:["💰",1200,v=>R0(v)]},nos:{
 ini:{t:"Ana ganhou R$ 1.200 no estágio e quer um celular de <b>R$ 1.200 à vista</b>. Na loja, o vendedor oferece: “Leva hoje em <b>12 × R$ 139</b>, sem entrada!”. O que ela faz?",
  ops:[["Aceita as 12 parcelas: cabem no bolso","parc"],["Faz a conta: 12 × 139 = R$ 1.668","conta"],["Pergunta se há desconto à vista","desc"]]},
 parc:{t:"No 5º mês, o estágio acaba e Ana não consegue pagar duas parcelas. Vêm multa, juros e o nome dela vai para o cadastro de inadimplentes.",fim:"Parcela que não coube",lic:"Antes de parcelar, pense: a renda continua por todos os meses? E qual o custo total? O crediário saía R$ 468 mais caro."},
 conta:{t:"Ana percebe que pagaria R$ 468 a mais, cerca de 39% sobre o preço. Ela pede o CET (Custo Efetivo Total), que a loja é obrigada a informar.",ops:[["Compra à vista com o dinheiro do estágio","vista"],["Compra um modelo de R$ 800 à vista e guarda o resto","modelo",{d:-800}]]},
 desc:{t:"O gerente dá <b>10% de desconto</b> no Pix: R$ 1.080.",ops:[["Compra à vista com desconto","vdesc",{d:-1080}],["Prefere parcelar mesmo assim","parc"]]},
 vista:{t:"Ana pagou R$ 1.200 e ficou sem nenhuma reserva.",fim:"Sem dívida, mas sem reserva",lic:"Pagar à vista evitou juros. Mas gastar tudo deixa você sem reserva para imprevistos. Pechinchar ou escolher um modelo mais barato teria sido ainda melhor."},
 vdesc:{t:"Ela pagou R$ 1.080 e guardou R$ 120 para começar a reserva de emergência.",fim:"Negociou bem 🏆",lic:"Perguntar pelo desconto à vista e pelo CET muda o preço. Quem paga à vista tem poder de negociação."},
 modelo:{t:"Com R$ 400 guardados, Ana começa a reserva de emergência e o celular de R$ 800 atende tudo o que ela precisa.",fim:"A melhor escolha 🏆",lic:"Separar desejo de necessidade abriu espaço para a reserva, sem dívida e sem juros."}}},
"tulipas":{title:"A febre das tulipas (1637)",vars:{d:["🪙 florins",300,v=>v+' fl']},nos:{
 ini:{t:"Holanda, dezembro de 1636. Todos falam de bulbos de tulipa. Um bulbo raro, que valia 300 florins, hoje vale 900. Você, um padeiro, tem <b>300 florins</b> guardados (o que ganha em um ano). O vizinho diz: “Compre agora, amanhã vale o dobro!”.",
  ops:[["Compra um bulbo comum com todas as economias","compra",{d:-300}],["Pergunta: por que uma flor valeria tanto?","pensa"]]},
 compra:{t:"Janeiro de 1637: o bulbo vale 600! Os amigos dizem para esperar mais.",ops:[["Vende e embolsa o lucro","vende",{d:600}],["Segura: vai subir mais","segura"],["Pega dinheiro emprestado para comprar outro bulbo","dobra",{d:-300}]]},
 vende:{t:"Você vendeu a 600. Em fevereiro, os preços despencam.",fim:"Sorte, não estratégia",lic:"Você ganhou porque saiu antes da queda, mas ninguém sabia quando seria. Numa bolha, muitos que entram por último perdem tudo."},
 segura:{t:"Fevereiro de 1637: num leilão em Haarlem, ninguém aparece para comprar. Em poucos dias, o bulbo vale quase nada.",fim:"A bolha estourou",lic:"Preço que sobe só porque todos esperam que suba mais é uma bolha. Quando os compradores somem, o preço desaba."},
 dobra:{t:"Fevereiro: os preços despencam. Você tem dois bulbos que ninguém quer e uma dívida de 300 florins.",fim:"Bolha + dívida",lic:"Pegar emprestado para apostar numa alta multiplica o prejuízo quando a bolha estoura."},
 pensa:{t:"Você percebe que ninguém compra tulipas para plantar: compram para revender mais caro. Decide guardar o dinheiro.",fim:"Não entrou na bolha 🛡️",lic:"Quando o preço de algo sobe sem relação com sua utilidade, só porque alguém vai pagar mais amanhã, é sinal de bolha. Historiadores discutem o tamanho real da crise, mas a lição ficou."}}},
"ponzi":{title:"Boston, 1920: o negócio do senhor Ponzi",vars:{d:["💵",1000,v=>'US$ '+v]},nos:{
 ini:{t:"Boston, 1920. Charles Ponzi promete <b>50% de lucro em 45 dias</b> com um esquema de cupons postais internacionais. Filas dobram a esquina. Você tem <b>US$ 1.000</b>.",
  ops:[["Entra com tudo","entra",{d:-1000}],["Pergunta: quantos cupons existem no mundo?","pergunta"]]},
 entra:{t:"Em 45 dias você recebe US$ 1.500! O dinheiro veio rápido.",ops:[["Coloca tudo de novo e chama a família","volta",{d:500}],["Sai com o lucro e não volta","sai",{d:1500}]]},
 sai:{t:"Você saiu com US$ 500 de lucro. Em agosto de 1920, o esquema desaba.",fim:"Saiu a tempo, com o dinheiro dos outros",lic:"Seus US$ 500 de lucro vieram do dinheiro de quem entrou depois. Esse tipo de golpe, que paga os antigos com o dinheiro dos novos, ganhou o nome de “esquema Ponzi”."},
 volta:{t:"Agosto de 1920: um jornal mostra que Ponzi precisaria de milhões de cupons, muito mais do que existiam. Ponzi é preso. Seu dinheiro e o da família somem.",fim:"O esquema desabou",lic:"O lucro nunca veio dos cupons: vinha do dinheiro dos novos investidores. Quando eles param de chegar, o esquema desaba e os últimos perdem tudo."},
 pergunta:{t:"Um jornalista do Boston Post faz a mesma pergunta: para dar lucro a todos, Ponzi precisaria de muito mais cupons do que circulavam no mundo. A conta não fecha.",fim:"A conta que não fecha 🛡️",lic:"Perguntar “de onde vem o lucro?” e fazer a conta é a melhor defesa contra golpes. Se ninguém explica, desconfie."}}},
"ideia-feira":{title:"O que vender na feira?",vars:{c:["💡 ideia",0],l:["📈 chance de lucro",1]},nos:{
 ini:{t:"A turma vai montar uma barraca na feira da escola. Bruno quer vender o que <b>ele</b> gosta: miniaturas de dinossauro pintadas à mão. A Lia sugere outra coisa. O que vocês fazem?",
  ops:[["Começam logo a pintar dinossauros","dino",{c:1}],["Fazem uma pesquisa rápida com 30 colegas","pesq",{l:2}]]},
 dino:{t:"Cada miniatura leva 2 horas para pintar e custa R$ 12 de material. Os colegas acham lindo, mas poucos pagariam mais de R$ 10.",ops:[["Insistem mesmo assim","prej",{l:-1}],["Voltam e fazem a pesquisa","pesq",{l:2}]]},
 pesq:{t:"Resultado: 22 de 30 colegas comprariam algo para comer no intervalo; 18 pagariam até R$ 4. Brigadeiro e pipoca doce lideram.",ops:[["Brigadeiro: custo de R$ 0,90, venda a R$ 2,50","brig",{l:2}],["Pipoca doce: custo de R$ 0,60, venda a R$ 2","pip",{l:2}]]},
 brig:{t:"Vendem 120 brigadeiros, com lucro de R$ 1,60 cada, menos R$ 30 de custo fixo.",fim:"Lucro de R$ 162 🏆",lic:"Começar pelo problema do cliente (o que ele quer e quanto pagaria) é o primeiro passo de qualquer negócio. Paixão importa, mas o cliente decide."},
 pip:{t:"Vendem 150 saquinhos, com lucro de R$ 1,40 cada, menos R$ 25 de custo fixo.",fim:"Lucro de R$ 185 🏆",lic:"Pesquisa simples, custo baixo e preço que o cliente aceita: receita de um bom pequeno negócio."},
 prej:{t:"Vendem 6 miniaturas a R$ 10. Gastaram R$ 120 em material.",fim:"Prejuízo de R$ 60",lic:"Um produto lindo que o cliente não quer pagar não vira negócio. Teste a ideia antes de investir tempo e dinheiro."}}},
"cliente-reclama":{title:"O cliente reclamou",vars:{r:["⭐ reputação",3]},nos:{
 ini:{t:"Na feira, um cliente volta à barraca: “Paguei R$ 5 no pote de brigadeiro e veio com 4, mas o cartaz diz 6!”. Vocês olham: o cartaz diz mesmo 6.",
  ops:[["“Problema seu, já pagou!”","grosso",{r:-3}],["Pede desculpas e completa o pote","certo",{r:1}],["Diz que o cartaz está errado e não faz nada","nega",{r:-2}]]},
 certo:{t:"O cliente agradece e, no intervalo seguinte, volta com dois amigos.",ops:[["Corrigem o processo: contam os brigadeiros na frente do cliente","proc",{r:1}]]},
 proc:{t:"Ninguém mais reclama e o pote de 6 vira o mais vendido.",fim:"Cliente satisfeito volta 🏆",lic:"O que o anúncio promete é obrigação: o Código de Defesa do Consumidor manda cumprir a oferta. Resolver bem uma reclamação gera confiança e novos clientes."},
 grosso:{t:"O cliente conta para todo mundo. As vendas caem pela metade.",fim:"Reputação perdida",lic:"Quem anuncia tem de cumprir a oferta (Código de Defesa do Consumidor). E um cliente mal atendido conta para muita gente."},
 nega:{t:"O cliente leva a reclamação à coordenação, que pede para vocês cumprirem o cartaz.",fim:"A oferta obriga",lic:"Pelo Código de Defesa do Consumidor, a oferta anunciada obriga quem anuncia. Erro no cartaz se corrige antes de vender, não depois."}}}
});
Object.assign(FIN.mem,{
"inventos":{title:"Memória das invenções do dinheiro",sub:"Ligue cada invenção ao lugar e à época em que surgiu (cartas laranjas).",n:6,pares:[
 ["Moeda cunhada","Lídia, por volta de 600 a.C.","Atual Turquia: pedaços de electro (ouro + prata) com o selo do rei."],["Papel-moeda","China, século XI","Notas da dinastia Song, mais leves que sacos de moedas."],
 ["Banco moderno","Itália, Idade Média","Famílias como os Medici, em Florença."],["Cartão de pagamento","Estados Unidos, 1950","Diners Club."],["Caixa eletrônico","Londres, 1967","Banco Barclays, em Enfield."],["Pix","Brasil, 2020","Banco Central do Brasil."],
 ["Bolsa de valores","Amsterdã, século XVII","Ações da Companhia das Índias Orientais."],["Microcrédito","Bangladesh, anos 1970","Muhammad Yunus, Nobel da Paz de 2006."]]},
"investimentos":{title:"Memória dos investimentos",sub:"Ligue cada investimento à sua característica principal (cartas laranjas).",n:8,pares:[
 ["Tesouro Selic","liquidez diária, quase não oscila"],["Tesouro Prefixado","taxa conhecida na compra"],["Tesouro IPCA+","inflação + uma taxa"],["CDB","empréstimo a um banco, com FGC"],
 ["LCI e LCA","sem IR para pessoa física"],["Poupança","rende pela Selic e pela TR"],["Ação","pedacinho de uma empresa"],["FII","aluguéis de imóveis"],["ETF","copia um índice, como o Ibovespa"]]},
"jd":{title:"Memória do dinheiro",sub:"Ligue cada palavra ao seu significado (cartas laranjas).",n:8,pares:[
 ["Orçamento","plano de receitas e despesas"],["Juros","aluguel do dinheiro"],["Inflação","preços sobem, dinheiro compra menos"],["Reserva de emergência","dinheiro para imprevistos"],
 ["Lucro","receita menos custos"],["Desejo","seria bom ter"],["Necessidade","preciso para viver bem"],["Pix","pagamento instantâneo"],["Escambo","troca sem dinheiro"],["Meta","objetivo com valor e prazo"]]}
});
Object.assign(FIN.quem,{
"hd":{title:"Quem sou eu? Personagens do dinheiro",sub:"Personagens e fatos reais das Histórias do Dinheiro.",cartas:[
 {r:"Charles Ponzi",dicas:["Fui imigrante italiano nos Estados Unidos.","Prometia 50% de lucro em 45 dias.","Meu nome virou o de um tipo de golpe."],fim:"Em 1920, em Boston."},
 {r:"Bernard Madoff",dicas:["Fui presidente da Nasdaq, uma bolsa americana.","Mostrava lucros estáveis demais, por décadas.","Fui preso em 2008, no maior esquema de pirâmide da história."],fim:"Foi condenado a 150 anos de prisão."},
 {r:"Muhammad Yunus",dicas:["Sou economista de Bangladesh.","Emprestei pequenas quantias a mulheres pobres que os bancos recusavam.","Ganhei o Nobel da Paz em 2006."],fim:"Criou o Grameen Bank, o banco do microcrédito."},
 {r:"Satoshi Nakamoto",dicas:["Ninguém sabe quem eu sou de verdade.","Publiquei um texto em 2008 sobre um dinheiro eletrônico.","Criei o bitcoin."],fim:"Pode ser uma pessoa ou um grupo."},
 {r:"Rui Barbosa",dicas:["Fui jurista e escritor brasileiro.","Fui o primeiro ministro da Fazenda da República.","Minha política de crédito fácil levou ao Encilhamento."],fim:"Em 1890–1891."},
 {r:"Frank McNamara",dicas:["Esqueci a carteira num jantar em Nova York.","Tive a ideia de um cartão para pagar depois.","Fundei o Diners Club em 1950."],fim:"O primeiro cartão de pagamento de uso geral."},
 {r:"Creso",dicas:["Fui rei da Lídia.","Meu reino cunhou algumas das primeiras moedas de ouro e de prata puros.","Até hoje se diz “rico como” eu."],fim:"Viveu no século VI a.C."}]},
"enigmas":{title:"Quem sou eu? Palavras do dinheiro",sub:"Adivinhe a palavra pelas dicas.",cartas:[
 {r:"Inflação",dicas:["Sou um balão que incha.","Quando eu cresço, o dinheiro compra menos.","O IPCA me mede."]},{r:"Juros",dicas:["Sou o aluguel de algo.","Quem empresta me recebe; quem pega emprestado me paga.","Posso ser simples ou compostos."]},
 {r:"Orçamento",dicas:["Sou um plano.","Tenho duas colunas: o que entra e o que sai.","Sem mim, o dinheiro some e ninguém sabe para onde foi."]},{r:"Pix",dicas:["Não sou sigla.","Funciono 24 horas, todos os dias.","Nasci em 2020, no Banco Central."]},
 {r:"Cofrinho",dicas:["Muitas vezes tenho forma de porco.","Tenho uma fenda em cima.","Guardo moedas para uma meta."]},{r:"Troco",dicas:["Volto para você.","Apareço quando você paga com mais do que deve.","Antigamente, às vezes vinha em balas."]},
 {r:"Escambo",dicas:["Sou mais antigo que o dinheiro.","Trigo por sal, peixe por tecido.","Sou a troca direta."]},{r:"Dívida",dicas:["Sou o que se deve.","Cresço com juros se ninguém me paga.","Posso levar o nome ao cadastro de inadimplentes."]}]}
});
Object.assign(FIN.caca,{
"jd1":{title:"Caça-palavras do dinheiro",sub:"Ache as 10 palavras do mundo do dinheiro.",n:12,palavras:["moeda","juros","pix","cofrinho","troco","lucro","meta","banco","inflação","orçamento"],
 def:{moeda:"dinheiro de metal",juros:"aluguel do dinheiro",pix:"pagamento instantâneo",cofrinho:"onde se guardam as moedas",troco:"o que volta quando se paga a mais",lucro:"receita menos custos",meta:"objetivo com valor e prazo",banco:"guarda e empresta dinheiro","inflação":"aumento geral dos preços","orçamento":"plano de receitas e despesas"}},
"jd2":{title:"Caça-palavras dos investimentos",sub:"Ache as 10 palavras dos investimentos.",n:12,palavras:["tesouro","selic","ação","bolsa","risco","liquidez","cdb","poupança","dividendo","ipca"],
 def:{tesouro:"Tesouro Direto: empréstimo ao governo",selic:"taxa básica de juros","ação":"pedacinho de uma empresa",bolsa:"onde se negociam ações",risco:"chance de perder",liquidez:"rapidez para virar dinheiro",cdb:"empréstimo a um banco","poupança":"aplicação mais conhecida do Brasil",dividendo:"lucro dividido com os acionistas",ipca:"índice oficial de inflação"}}
});
Object.assign(FIN.cartas,{
"rumo":{title:"Cartas do Rumo à meta",sub:"Jogando com o tabuleiro impresso da apostila? Quando cair numa casa ⚠️, 🛍️, 🕵️ ou ❓, tire uma carta aqui e procure a do tipo certo, ou use os botões abaixo.",
 como:"<p>Tire cartas até sair uma do tipo da sua casa (o tipo aparece em laranja). Nas cartas 🕵️ e ❓, toque em “Ver comentário” para conferir a resposta.</p>",cartas:[
 ["⚠️ Imprevisto","O celular caiu e a tela trincou. Pague R$ 40.","📱"],["⚠️ Imprevisto","Perdeu o casaco no passeio. Pague R$ 30.","🧥"],["⚠️ Imprevisto","O pneu da bicicleta furou. Pague R$ 15.","🚲"],["⚠️ Imprevisto","A mochila rasgou. Pague R$ 35.","🎒"],["⚠️ Imprevisto","Multa da biblioteca. Pague R$ 5.","📚"],
 ["🛍️ Tentação","Jogo novo: R$ 60. Comprou? Pague e ganhe 1 ⭐.","🎮"],["🛍️ Tentação","Lanche no shopping: R$ 20. Comprou? Pague e ganhe 1 ⭐.","🍔"],["🛍️ Tentação","Tênis em promoção: R$ 50. Comprou? Pague e ganhe 1 ⭐.","👟"],["🛍️ Tentação","Cinema com pipoca: R$ 25. Comprou? Pague e ganhe 1 ⭐.","🍿"],
 ["🕵️ Golpe ou não?","“Você ganhou um iPhone! Pague só o frete de R$ 19,90 pelo link.”","📩","<b>Golpe.</b> Prêmio que você não pediu + link + pagamento. Acertou: ganhe R$ 10. Errou: pague R$ 40."],
 ["🕵️ Golpe ou não?","O banco liga e pede a senha do cartão para cancelar uma compra.","☎️","<b>Golpe.</b> Banco nunca pede senha. Acertou: +R$ 10. Errou: −R$ 40."],
 ["🕵️ Golpe ou não?","A loja do bairro dá 10% de desconto no Pix, no próprio caixa.","🏪","<b>Seguro.</b> Desconto comum à vista. Acertou: +R$ 10. Errou: −R$ 40."],
 ["🕵️ Golpe ou não?","Perfil novo com a foto do seu primo pede R$ 300 urgente.","👤","<b>Golpe</b> do falso parente. Acertou: +R$ 10. Errou: −R$ 40."],
 ["❓ Pergunta","Quanto é 10% de R$ 80?","🧮","<b>R$ 8.</b> Acertou: ganhe R$ 15."],["❓ Pergunta","Juros sobre juros têm que nome?","🧮","<b>Juros compostos.</b> Acertou: ganhe R$ 15."],["❓ Pergunta","Quem define a meta da taxa Selic?","🏦","<b>O Copom</b>, do Banco Central. Acertou: ganhe R$ 15."],
 ["❓ Pergunta","Para que serve a reserva de emergência?","🛟","<b>Para imprevistos.</b> Acertou: ganhe R$ 15."],["❓ Pergunta","Pela regra do 72, a 8% ao ano o dinheiro dobra em quantos anos?","⏳","<b>9 anos</b> (72 ÷ 8). Acertou: ganhe R$ 15."]]},
"enigmas":{title:"Enigmas do dinheiro",sub:"Tire um enigma, pense com calma (vale usar papel) e só depois veja a resposta.",cartas:[
 ["Enigma das moedas","Tenho R$ 1,00 em 6 moedas, mas nenhuma é de R$ 0,50. Que moedas são?","🪙","Uma resposta: 3 de R$ 0,25 (R$ 0,75) + 2 de R$ 0,10 (R$ 0,20) + 1 de R$ 0,05. Total: R$ 1,00 em 6 moedas."],
 ["O troco esquisito","Paguei uma conta de R$ 7,40 com uma nota de R$ 10 e recebi o troco no menor número possível de moedas e notas. Quantas peças recebi e quais?","💵","Troco de R$ 2,60: uma nota de R$ 2, uma moeda de R$ 0,50 e uma de R$ 0,10. Três peças."],
 ["A bicicleta","Comprei uma bicicleta por R$ 300, vendi por R$ 350, comprei de volta por R$ 400 e vendi por R$ 450. Lucrei quanto?","🚲","R$ 100. Primeira operação: +50. Segunda: +50. O “prejuízo” de recomprar mais caro é ilusão."],
 ["O dobro do dobro","Uma conta de investimento dobra a cada 9 anos. Se hoje tem R$ 500, quanto terá em 27 anos?","📈","27 anos = 3 dobras: 500 → 1.000 → 2.000 → 4.000. R$ 4.000."],
 ["Promoção ou pegadinha?","Loja A: 30% de desconto. Loja B: 20% e depois mais 10% sobre o novo preço. Qual é mais barata?","🏷️","A loja A. Na B: 100 → 80 → 72, ou seja, 28% de desconto."],
 ["O cofrinho do Léo","Léo guarda R$ 1 no dia 1, R$ 2 no dia 2, R$ 3 no dia 3, e assim por diante. Quanto terá depois de 20 dias?","🐷","1 + 2 + … + 20 = 20 × 21 ÷ 2 = R$ 210."],
 ["Os três amigos","Três amigos pagam R$ 30 por uma pizza (R$ 10 cada). O dono devolve R$ 5. Eles ficam com R$ 1 cada e dão R$ 2 de gorjeta. Pagaram 3 × 9 = 27, mais 2 de gorjeta = 29. Cadê o R$ 1?","🍕","Não falta nada: os R$ 27 já incluem os R$ 2 da gorjeta (25 da pizza + 2). Não se soma a gorjeta de novo. 27 + 3 devolvidos = 30."],
 ["A meta da Bia","Bia quer R$ 360 em um ano. Já tem R$ 60. Quanto precisa guardar por mês?","🎯","Faltam R$ 300 em 12 meses: R$ 25 por mês."]]},
"quebra-gelo":{title:"Perguntas quebra-gelo",sub:"Para abrir a aula: tire uma carta e deixe a turma conversar por 2 ou 3 minutos.",cartas:[
 ["Quebra-gelo","Se você ganhasse R$ 100 hoje, o que faria com eles? Por quê?","💭"],["Quebra-gelo","Qual foi a última coisa que você comprou e se arrependeu?","💭"],["Quebra-gelo","Qual é a diferença entre ser rico e ter uma vida boa?","💭"],
 ["Quebra-gelo","Você prefere R$ 100 hoje ou R$ 120 daqui a um ano? E R$ 200 daqui a um ano?","💭"],["Quebra-gelo","Que propaganda já te fez querer algo que você nem precisava?","💭"],
 ["Quebra-gelo","Quanto você acha que custa, por mês, manter uma casa como a sua?","💭"],["Quebra-gelo","Que profissão você quer ter? Quanto acha que ela paga?","💭"],["Quebra-gelo","Se você abrisse um negócio amanhã, o que venderia?","💭"]]},
"dilemas":{title:"Dilemas do dinheiro",sub:"Situações sem resposta única. Tire uma carta, discuta em grupo e justifique a escolha.",cartas:[
 ["Dilema","Seu amigo pediu R$ 50 emprestado e ainda não pagou os R$ 20 do mês passado. Você empresta?","🤝","Pontos para discutir: confiança, combinados por escrito, emprestar só o que você pode perder."],
 ["Dilema","Você juntou R$ 300 para uma bicicleta. A família passa por um aperto. O que fazer?","🚲","Metas mudam; ajudar a família também é uma escolha de valores. Discuta prioridades."],
 ["Dilema","O caixa te deu R$ 10 de troco a mais. Ninguém viu.","💵","Honestidade, o prejuízo do funcionário, a confiança no comércio."],
 ["Dilema","Todo mundo na turma tem o tênis da moda. O seu ainda está bom.","👟","Pressão do grupo, desejo x necessidade, o valor de pertencer."],
 ["Dilema","Um influenciador indica uma aposta on-line “garantida”. Seus amigos estão ganhando.","🎰","Na aposta a casa sempre ganha no longo prazo; quem ganha conta, quem perde se cala."],
 ["Dilema","Você pode comprar um celular hoje em 12 vezes ou esperar 6 meses e pagar à vista com desconto.","📱","Custo total, juros, risco de perder a renda, valor de ter agora."],
 ["Dilema","Sua avó quer pôr as economias num investimento que promete 5% ao mês.","👵","Sinal de golpe: retorno alto e garantido. Como conversar com ela?"]]},
"perguntas":{title:"Perguntas para o quiz em equipes",sub:"O professor tira uma carta e lê. A equipe que responder certo primeiro marca ponto no placar da sala.",cartas:[
 ["Nível 1","Quanto é 25% de R$ 80?","🧮","R$ 20."],["Nível 1","Cite uma despesa fixa e uma variável de uma família.","🏠","Ex.: aluguel (fixa); luz, mercado (variáveis)."],["Nível 1","O que é escambo?","🔁","Troca direta de mercadorias, sem dinheiro."],
 ["Nível 1","Banco pode pedir sua senha por telefone?","☎️","Nunca."],["Nível 1","Meta SMART: o que quer dizer o T?","🎯","Temporal: ter prazo."],["Nível 2","O que é o Copom?","🏦","Comitê de Política Monetária do Banco Central, que define a meta da Selic."],
 ["Nível 2","R$ 1.000 a 10% ao mês em juros compostos: quanto em 2 meses?","📈","R$ 1.210."],["Nível 2","Qual índice mede a inflação oficial do Brasil?","📊","O IPCA, do IBGE."],["Nível 2","Até quanto o FGC garante por CPF por instituição?","🛡️","R$ 250 mil."],
 ["Nível 3","LCI e LCA pagam imposto de renda para pessoa física?","🏠","Não, são isentas."],["Nível 3","O que é liquidez?","💧","A rapidez para transformar um investimento em dinheiro sem perder valor."],["Nível 3","Qual título do Tesouro é indicado para a reserva de emergência?","🛟","Tesouro Selic."],
 ["Nível 3","O que é diversificar?","🧺","Não pôr todos os ovos na mesma cesta: espalhar o dinheiro em investimentos diferentes."]]},
"ideias":{title:"Desafios de criatividade",sub:"Tire um desafio e, em 5 minutos, invente um negócio que resolva o problema. Diga: quem é o cliente, o que você vende e por quanto.",cartas:[
 ["Problema","Os alunos chegam com fome ao treino depois da aula.","🏃"],["Problema","Os celulares da turma vivem sem bateria na hora da saída.","🔋"],["Problema","Os pais não têm tempo de levar o cachorro para passear.","🐕"],
 ["Problema","Muitos livros didáticos usados ficam parados no fim do ano.","📚"],["Problema","Os idosos do prédio têm dificuldade com o celular.","👵"],["Problema","As garrafas plásticas da festa junina vão para o lixo.","♻️"],
 ["Problema","Os alunos do 6º ano se perdem nos primeiros dias de aula.","🗺️"],["Problema","Ninguém lembra o aniversário dos colegas da turma.","🎂"]]},
"imprevistos-feira":{title:"E se der errado na feira?",sub:"Tire um imprevisto e combine, em grupo, o que fazer. Melhor pensar antes do que no dia!",cartas:[
 ["Imprevisto","Chove forte e a feira passa para o pátio coberto, com metade do espaço.","🌧️"],["Imprevisto","Acaba o troco logo na primeira hora.","🪙"],["Imprevisto","O brigadeiro derrete no sol.","☀️"],
 ["Imprevisto","Um colega da equipe fica doente no dia.","🤒"],["Imprevisto","A barraca vizinha vende o mesmo produto por R$ 1 a menos.","🏷️"],["Imprevisto","Sobra metade da produção no fim da feira.","📦"],["Imprevisto","Um cliente diz que tem alergia e pergunta os ingredientes.","🥜"]]},
"debate":{title:"Debate: investir e consumir",sub:"Temas para debate em dois grupos (a favor e contra). Cada grupo tem 3 minutos.",cartas:[
 ["Debate","“Jovem deve começar a investir antes de ter emprego.”","🗣️"],["Debate","“Apostas on-line deveriam ser proibidas para menores e com propaganda restrita.”","🗣️"],["Debate","“É melhor alugar do que comprar a casa própria.”","🗣️"],
 ["Debate","“O Pix acabou com a necessidade de ter dinheiro em papel.”","🗣️"],["Debate","“Escolas deveriam ter aula de educação financeira todos os anos.”","🗣️"],["Debate","“Juros altos são bons para o país.”","🗣️"],["Debate","“Influenciador que indica investimento deveria ter certificação.”","🗣️"]]}
});
Object.assign(window.QUIZ,{
"fince-m1":{title:"Caderno de Exercícios · Módulo 1 · Dinheiro, escolhas e orçamento",qs:[
{q:"Qual destas é uma necessidade?",o:["Remédio receitado pelo médico","Um segundo videogame","Tênis de marca igual ao do amigo","Assinatura de mais um streaming"],a:0,e:"Necessidade é o que precisamos para viver bem."},
{q:"Renda de R$ 2.000 e despesas de R$ 2.150 é um orçamento:",o:["deficitário","superavitário","equilibrado","investido"],a:0,e:"Gasta mais do que ganha."},
{q:"Pagar uma compra de R$ 13,70 com R$ 20: troco de",o:["R$ 6,30","R$ 7,30","R$ 6,70","R$ 7,70"],a:0,e:"13,70 → 14 (0,30) → 20 (6): R$ 6,30."},
{q:"Custo de oportunidade é:",o:["aquilo de que você abre mão ao escolher","o preço com desconto","o juro do cartão","o troco"],a:0,e:"Toda escolha tem uma renúncia."},
{q:"Despesa que aparece só em certas épocas, como o material escolar, é:",o:["eventual","fixa","variável","obrigatória"],a:0,e:"Planeje-se para ela com antecedência."}]},
"fince-m2":{title:"Caderno de Exercícios · Módulo 2 · Porcentagem, juros e inflação",qs:[
{q:"15% de R$ 60 é:",o:["R$ 9","R$ 6","R$ 15","R$ 10"],a:0,e:"10% = 6; 5% = 3; total 9."},
{q:"R$ 500 a 2% ao mês, juros simples, 5 meses: juros de",o:["R$ 50","R$ 10","R$ 100","R$ 52"],a:0,e:"2% de 500 = 10 por mês × 5."},
{q:"R$ 1.000 a 10% ao mês, juros compostos, 2 meses: montante de",o:["R$ 1.210","R$ 1.200","R$ 1.100","R$ 1.020"],a:0,e:"1.000 → 1.100 → 1.210."},
{q:"Salário subiu 5% e a inflação foi 8%. O poder de compra:",o:["caiu","subiu","ficou igual","dobrou"],a:0,e:"Os preços subiram mais que o salário."},
{q:"Pela regra do 72, a 12% ao ano o dinheiro dobra em cerca de:",o:["6 anos","12 anos","72 anos","3 anos"],a:0,e:"72 ÷ 12 = 6."}]},
"fince-m3":{title:"Caderno de Exercícios · Módulo 3 · Bancos, crédito e segurança",qs:[
{q:"CET quer dizer:",o:["Custo Efetivo Total","Crédito Especial Temporário","Cadastro de Empréstimos e Títulos","Conta Especial Tarifada"],a:0,e:"Inclui juros, tarifas e impostos."},
{q:"Ao pagar só o mínimo da fatura, o restante entra no:",o:["crédito rotativo","Pix","FGC","Tesouro Selic"],a:0,e:"Um dos juros mais altos do país."},
{q:"Pedir o código que chegou por SMS “para confirmar a conta” é sinal de:",o:["golpe","segurança","promoção","atualização do app"],a:0,e:"Nunca passe códigos de verificação."},
{q:"Quem regula e fiscaliza os bancos no Brasil é:",o:["o Banco Central","a B3","o IBGE","o Procon"],a:0,e:"O BC supervisiona as instituições financeiras."},
{q:"12 × R$ 139 por um produto de R$ 1.200 à vista: pago a mais",o:["R$ 468","R$ 139","R$ 368","R$ 1.668"],a:0,e:"12 × 139 = 1.668; 1.668 − 1.200 = 468."}]},
"fince-m4":{title:"Caderno de Exercícios · Módulo 4 · Investimentos e planejamento",qs:[
{q:"O melhor lugar para a reserva de emergência é:",o:["Tesouro Selic ou CDB com liquidez diária","ações de uma empresa","CDB que vence em 5 anos","aposta on-line"],a:0,e:"Precisa de segurança e liquidez."},
{q:"Um CDB de 110% do CDI, com CDI a 10%, rende cerca de:",o:["11% ao ano","10% ao ano","110% ao ano","1,1% ao ano"],a:0,e:"110% de 10% = 11%."},
{q:"Diversificar é:",o:["espalhar o dinheiro em vários investimentos","pôr tudo no que mais rendeu","sacar todo mês","investir só em poupança"],a:0,e:"Não ponha todos os ovos na mesma cesta."},
{q:"Uma meta de R$ 600 em 12 meses pede guardar:",o:["R$ 50 por mês","R$ 60 por mês","R$ 12 por mês","R$ 600 por mês"],a:0,e:"600 ÷ 12 = 50 (sem contar os juros)."},
{q:"Qual tem isenção de IR para pessoa física?",o:["LCI","CDB","Tesouro Prefixado","Tesouro IPCA+"],a:0,e:"LCI e LCA são isentas."}]},
"finmc-m1":{title:"Matemática sem Calculadora · Módulo 1 · Contas com dinheiro",qs:[
{q:"R$ 4,85 + R$ 3,15 =",o:["R$ 8,00","R$ 7,90","R$ 8,10","R$ 7,00"],a:0,e:"85 + 15 = 100 centavos = R$ 1."},
{q:"Troco de R$ 50 numa compra de R$ 32,60:",o:["R$ 17,40","R$ 18,40","R$ 17,60","R$ 27,40"],a:0,e:"32,60 → 33 (0,40) → 50 (17)."},
{q:"6 × R$ 1,99 é mais ou menos:",o:["R$ 12","R$ 6","R$ 10","R$ 14"],a:0,e:"1,99 ≈ 2; exato: 12 − 0,06 = 11,94."},
{q:"Estimando: R$ 9,90 + R$ 5,10 + R$ 19,90 ≈",o:["R$ 35","R$ 30","R$ 40","R$ 25"],a:0,e:"10 + 5 + 20 = 35."},
{q:"R$ 45 divididos por 4 amigos dá:",o:["R$ 11,25","R$ 11,50","R$ 12,25","R$ 10,25"],a:0,e:"44 ÷ 4 = 11; 1 ÷ 4 = 0,25."}]},
"finmc-m2":{title:"Matemática sem Calculadora · Módulo 2 · Porcentagem de cabeça",qs:[
{q:"10% de R$ 230 =",o:["R$ 23","R$ 2,30","R$ 230","R$ 32"],a:0,e:"Tire um zero."},
{q:"5% de R$ 240 =",o:["R$ 12","R$ 24","R$ 5","R$ 120"],a:0,e:"Metade de 10% (24)."},
{q:"R$ 80 com 25% de desconto:",o:["R$ 60","R$ 55","R$ 20","R$ 75"],a:0,e:"25% = um quarto = 20."},
{q:"Dois descontos de 50% seguidos dão desconto total de:",o:["75%","100%","50%","25%"],a:0,e:"100 → 50 → 25: pagou 25%, desconto de 75%."},
{q:"Aumento de 20% e depois desconto de 20%:",o:["fica 4% mais barato","volta ao preço","fica 4% mais caro","fica igual"],a:0,e:"100 → 120 → 96."}]},
"finmc-m3":{title:"Matemática sem Calculadora · Módulo 3 · Juros de cabeça",qs:[
{q:"R$ 300 a 3% ao mês, juros simples, 4 meses: juros de",o:["R$ 36","R$ 12","R$ 9","R$ 312"],a:0,e:"9 por mês × 4."},
{q:"A 9% ao ano, o dinheiro dobra em cerca de:",o:["8 anos","9 anos","18 anos","4 anos"],a:0,e:"72 ÷ 9 = 8."},
{q:"R$ 200 a 10% ao mês, juros compostos, 3 meses:",o:["R$ 266,20","R$ 260,00","R$ 230,00","R$ 266,00"],a:0,e:"200 → 220 → 242 → 266,20."},
{q:"Para dobrar em 6 anos, a taxa precisa ser de cerca de:",o:["12% ao ano","6% ao ano","72% ao ano","18% ao ano"],a:0,e:"72 ÷ 6 = 12."},
{q:"Juros compostos crescem mais rápido porque:",o:["os juros rendem juros","a taxa aumenta","o banco quer","são simples"],a:0,e:"A base de cálculo cresce a cada período."}]},
"finmc-m4":{title:"Matemática sem Calculadora · Módulo 4 · Comparar preços",qs:[
{q:"Qual é mais barato por kg? 2 kg por R$ 9 ou 5 kg por R$ 21",o:["5 kg por R$ 21","2 kg por R$ 9","são iguais","não dá para saber"],a:0,e:"R$ 4,50 contra R$ 4,20 por kg."},
{q:"Leve 3, pague 2 equivale a um desconto de cerca de:",o:["33%","50%","30%","66%"],a:0,e:"Paga 2 de 3: 1/3 de desconto."},
{q:"À vista R$ 900 ou 10 × R$ 99. A mais no parcelado:",o:["R$ 90","R$ 99","R$ 9","R$ 990"],a:0,e:"990 − 900."},
{q:"Pacote de 12 rolos por R$ 18 dá por rolo:",o:["R$ 1,50","R$ 1,20","R$ 2,00","R$ 0,66"],a:0,e:"18 ÷ 12."},
{q:"Embalagem maior só é vantagem se:",o:["você usar tudo antes de estragar","tiver cor bonita","for importada","for mais pesada"],a:0,e:"Desperdício anula a economia."}]}
});
Object.assign(window.QUIZ,{
"findc-m1":{title:"Dicionário Curioso · Módulo 1 · A a C",qs:[
{q:"A palavra “banco” vem:",o:["da bancada dos cambistas italianos","de um banco de praça de Lisboa","do nome de um rei","do árabe"],a:0,e:"Os cambistas trabalhavam atrás de bancadas."},
{q:"“Bolsa” vem de:",o:["uma família de Bruges","um saco de moedas romano","uma palavra tupi","uma deusa grega"],a:0,e:"Família Van der Beurse."},
{q:"“Crédito” vem do latim credere, que quer dizer:",o:["acreditar","emprestar","cobrar","guardar"],a:0,e:"Quem dá crédito confia."},
{q:"“Armazém” e “magazine” vêm da mesma palavra:",o:["árabe","grega","inglesa","alemã"],a:0,e:"al-makhzan, “o depósito”."},
{q:"“Capital” vem de caput, que quer dizer:",o:["cabeça","casa","cofre","capitão"],a:0,e:"Cabeças de gado eram riqueza."}]},
"findc-m2":{title:"Dicionário Curioso · Módulo 2 · D a I",qs:[
{q:"“Dinheiro” vem do denário, moeda:",o:["romana","grega","egípcia","portuguesa"],a:0,e:"Denarius, de prata."},
{q:"“Dólar” vem de uma moeda cunhada:",o:["num vale da Boêmia","em Londres","em Nova York","na Espanha"],a:0,e:"O Thaler de Joachimsthal."},
{q:"“Economia” significa, em grego:",o:["regra da casa","dinheiro guardado","troca justa","mercado livre"],a:0,e:"oikos + nomos."},
{q:"“Fisco” vem de:",o:["um cesto de vime","uma fivela","uma fiscalização romana","um peixe"],a:0,e:"fiscus, onde se guardavam os impostos."},
{q:"“Inflação” vem de inflare, que quer dizer:",o:["inchar","queimar","cair","contar"],a:0,e:"Os preços incham como um balão."}]},
"findc-m3":{title:"Dicionário Curioso · Módulo 3 · J a P",qs:[
{q:"“Moeda” vem do templo da deusa:",o:["Juno Moneta","Atena","Vênus","Ísis"],a:0,e:"Onde os romanos cunhavam moedas."},
{q:"“Pecúnia” vem de pecus, que quer dizer:",o:["gado","peixe","pedra","pena"],a:0,e:"O gado era riqueza."},
{q:"O símbolo £ da libra é:",o:["um L de libra","um E de esterlina","um S cortado","uma balança"],a:0,e:"Libra, unidade de peso."},
{q:"O Pix é sigla de:",o:["nada: não é sigla","Pagamento Instantâneo X","Pague Imediatamente Xis","Programa de Integração"],a:0,e:"O Banco Central diz que não é sigla."},
{q:"O nome “Argentina” vem do latim argentum, que quer dizer:",o:["prata","ouro","rio","terra"],a:0,e:"E Río de la Plata, rio da Prata."}]},
"findc-m4":{title:"Dicionário Curioso · Módulo 4 · Q a Z",qs:[
{q:"“Real” vem do latim regalis, que quer dizer:",o:["do rei","de verdade","de prata","do reino de Portugal apenas"],a:0,e:"Plural antigo: réis."},
{q:"“Salário” está ligado a:",o:["sal","sala","salto","saúde"],a:0,e:"salarium."},
{q:"Um tostão valia:",o:["100 réis","20 réis","1.000 réis","1 real"],a:0,e:"E o vintém, 20 réis."},
{q:"“Zero”, “cifra” e “cifrão” vêm da palavra árabe sifr, que quer dizer:",o:["vazio","número","dinheiro","conta"],a:0,e:"O zero veio da Índia, pelos árabes."},
{q:"“Quitar” uma dívida é:",o:["pagá-la toda e ficar livre","fazer outra dívida","pedir desconto","atrasar"],a:0,e:"De quite, livre."}]},
"finhd-m1":{title:"Histórias do Dinheiro · Módulo 1 · Do réis ao Real",qs:[
{q:"Em que ano nasceu o Real?",o:["1994","1986","1990","2000"],a:0,e:"1º de julho de 1994."},
{q:"A URV foi:",o:["uma moeda virtual de transição","uma nota de papel","um banco","um imposto"],a:0,e:"Preparou a chegada do Real."},
{q:"Os “fiscais do Sarney” vigiavam:",o:["o congelamento de preços","os bancos","as fronteiras","as eleições"],a:0,e:"Plano Cruzado, 1986."},
{q:"O Plano Collor (1990) ficou marcado por:",o:["bloquear o dinheiro de contas e da poupança","criar o Pix","criar o Real","acabar com o cheque"],a:0,e:"Foi um grande choque."},
{q:"1 real equivalia a quantos cruzeiros reais?",o:["2.750","1.000","100","27,50"],a:0,e:"CR$ 2.750 = R$ 1."}]},
"finhd-m2":{title:"Histórias do Dinheiro · Módulo 2 · Bolhas e crises",qs:[
{q:"Na febre das tulipas, os bulbos subiam porque:",o:["todos esperavam revender mais caro","as flores curavam doenças","o rei mandou","faltava comida"],a:0,e:"É o que define uma bolha."},
{q:"O Encilhamento aconteceu logo depois da:",o:["Proclamação da República","Independência","Abolição do tráfico","Segunda Guerra"],a:0,e:"1890–1891."},
{q:"A quebra da Bolsa de Nova York foi em:",o:["1929","1945","1914","2008"],a:0,e:"Começo da Grande Depressão."},
{q:"A crise de 2008 começou com:",o:["hipotecas de quem não podia pagar","a febre das tulipas","o Pix","a hiperinflação brasileira"],a:0,e:"Crise do subprime."},
{q:"Um sinal de bolha é:",o:["preço que sobe sem relação com a utilidade","preço estável","produto útil","lucro explicado"],a:0,e:"Sobe porque alguém vai pagar mais amanhã."}]},
"finhd-m3":{title:"Histórias do Dinheiro · Módulo 3 · Golpes famosos",qs:[
{q:"Ponzi prometia:",o:["50% em 45 dias","1% ao mês","dobrar em 10 anos","nada"],a:0,e:"Boston, 1920."},
{q:"Num esquema Ponzi, os antigos são pagos com:",o:["o dinheiro dos novos","os lucros da empresa","juros do Tesouro","impostos"],a:0,e:"Quando os novos param, desaba."},
{q:"Madoff chamava a atenção por:",o:["ganhos estáveis demais por décadas","perder sempre","ser desconhecido","não aceitar clientes"],a:0,e:"Retorno sem oscilação é suspeito."},
{q:"Antes de investir, você pode consultar se a empresa é autorizada:",o:["na CVM e no Banco Central","numa rede social","com o vendedor","num grupo de mensagens"],a:0,e:"Sites oficiais."},
{q:"A melhor pergunta contra golpes é:",o:["de onde vem o lucro?","qual é a cor do logo?","quantos seguidores tem?","é bonito?"],a:0,e:"Se ninguém explica, desconfie."}]},
"finhd-m4":{title:"Histórias do Dinheiro · Módulo 4 · Ideias que mudaram o dinheiro",qs:[
{q:"As primeiras moedas cunhadas surgiram na:",o:["Lídia","China","Grécia","Roma"],a:0,e:"Por volta de 600 a.C."},
{q:"O papel-moeda surgiu primeiro na:",o:["China","Inglaterra","Itália","Holanda"],a:0,e:"Século XI."},
{q:"O primeiro caixa eletrônico foi instalado em:",o:["Londres, 1967","Nova York, 1950","São Paulo, 1980","Tóquio, 1990"],a:0,e:"Barclays, em Enfield."},
{q:"Muhammad Yunus ficou famoso pelo:",o:["microcrédito","bitcoin","cartão de crédito","Pix"],a:0,e:"Nobel da Paz de 2006."},
{q:"O Pix foi lançado em:",o:["2020","2010","2015","2022"],a:0,e:"Novembro de 2020."}]},
"finee-m1":{title:"Empreender na Escola · Módulo 1 · Da ideia ao negócio",qs:[
{q:"Todo negócio começa por:",o:["um problema de alguém","um logotipo","um empréstimo","uma loja"],a:0,e:"Quem resolve um problema tem cliente."},
{q:"Proposta de valor é:",o:["por que o cliente escolheria você","o preço de custo","o lucro","o nome da empresa"],a:0,e:"O benefício que você entrega."},
{q:"Antes de produzir, o mais barato é:",o:["testar a ideia com possíveis clientes","comprar todo o material","alugar um espaço","fazer propaganda"],a:0,e:"Pesquisa e protótipo."},
{q:"Empreendedor social é quem:",o:["resolve um problema da comunidade","só busca lucro","trabalha no governo","não tem clientes"],a:0,e:"O lucro pode servir a uma causa."},
{q:"MEI quer dizer:",o:["Microempreendedor Individual","Mercado de Empresas Inovadoras","Meta Empresarial Interna","Moeda Eletrônica Instantânea"],a:0,e:"Formaliza pequenos negócios (maiores de 18 anos)."}]},
"finee-m2":{title:"Empreender na Escola · Módulo 2 · Custos, preço e lucro",qs:[
{q:"O aluguel da mesa da feira é custo:",o:["fixo","variável","nenhum","eventual do cliente"],a:0,e:"Não muda com a quantidade."},
{q:"Lucro =",o:["receita − custos","preço × quantidade","custo − receita","receita + custos"],a:0,e:"O que sobra."},
{q:"Preço R$ 3, custo variável R$ 1, custo fixo R$ 40. Ponto de equilíbrio:",o:["20 unidades","40 unidades","13 unidades","10 unidades"],a:0,e:"40 ÷ (3 − 1) = 20."},
{q:"Margem por unidade é:",o:["preço − custo variável","preço + custo","custo fixo ÷ preço","receita total"],a:0,e:"O que sobra em cada venda."},
{q:"Preço muito alto costuma:",o:["vender menos","sempre aumentar o lucro","vender mais","não mudar nada"],a:0,e:"O lucro máximo fica no meio do caminho."}]},
"finee-m3":{title:"Empreender na Escola · Módulo 3 · Vender com ética",qs:[
{q:"Anunciar “de R$ 5 por R$ 3” num produto que sempre custou R$ 3 é:",o:["propaganda enganosa","estratégia honesta","desconto real","obrigatório"],a:0,e:"Falso desconto."},
{q:"O que o anúncio promete:",o:["obriga quem anunciou","pode ser ignorado","só vale por escrito","vale só para adultos"],a:0,e:"Código de Defesa do Consumidor."},
{q:"Informar alergênicos (glúten, leite, amendoim) é:",o:["cuidado obrigatório com o cliente","exagero","proibido","opcional sempre"],a:0,e:"Pode salvar uma vida."},
{q:"Um cliente bem atendido depois de uma reclamação tende a:",o:["voltar e indicar","nunca voltar","pedir dinheiro","reclamar mais"],a:0,e:"Confiança gera clientes."},
{q:"Público-alvo é:",o:["quem tem mais chance de comprar","toda a cidade","os concorrentes","os fornecedores"],a:0,e:"Para quem você vende."}]},
"finee-m4":{title:"Empreender na Escola · Módulo 4 · A feira da turma",qs:[
{q:"A primeira etapa do projeto da feira é:",o:["pesquisar o que os colegas comprariam","comprar ingredientes","fazer o cartaz","dividir o lucro"],a:0,e:"Ouça o cliente primeiro."},
{q:"O livro-caixa registra:",o:["todas as entradas e saídas","só as vendas","só os nomes da equipe","os sonhos da turma"],a:0,e:"Para a prestação de contas."},
{q:"Fundo de troco serve para:",o:["ter moedas e notas pequenas no começo","pagar a equipe","comprar mais produtos","guardar o lucro"],a:0,e:"Sem troco, perde venda."},
{q:"Prestação de contas é:",o:["mostrar a todos quanto entrou, saiu e sobrou","esconder o lucro","pagar impostos","pedir dinheiro"],a:0,e:"Transparência."},
{q:"Se sobrar metade da produção, para a próxima feira é melhor:",o:["produzir menos ou testar a demanda antes","produzir o dobro","subir muito o preço","desistir"],a:0,e:"Aprenda com os números."}]},
"finjd-m1":{title:"Jogos e Desafios · Módulo 1 · Rumo à meta",qs:[
{q:"Nas casas 💹 o cofrinho rende 10%. Quem tem R$ 200 guardados ganha:",o:["R$ 20","R$ 10","R$ 2","R$ 200"],a:0,e:"10% de 200."},
{q:"Por que guardar cedo ajuda no jogo?",o:["o rendimento é sobre o que já está guardado","o dado favorece","porque sim","não ajuda"],a:0,e:"Como nos juros compostos."},
{q:"Sem reserva, um imprevisto pode obrigar a:",o:["pegar empréstimo e pagar juros","ganhar estrelas","andar mais casas","nada"],a:0,e:"A reserva protege."},
{q:"Na casa 🕵️, “banco liga e pede a senha” é:",o:["golpe","seguro","promoção","pergunta"],a:0,e:"Banco nunca pede senha."},
{q:"As estrelas ⭐ das tentações mostram que:",o:["desejos têm valor, mas com moderação","comprar é sempre errado","só desejos importam","nada"],a:0,e:"Equilíbrio."}]},
"finjd-m2":{title:"Jogos e Desafios · Módulo 2 · Enigmas",qs:[
{q:"1 + 2 + 3 + … + 10 =",o:["55","50","45","100"],a:0,e:"10 × 11 ÷ 2."},
{q:"Desconto de 20% e depois mais 10% equivale a:",o:["28%","30%","32%","25%"],a:0,e:"100 → 80 → 72."},
{q:"Com R$ 1, quantas balas de R$ 0,15 dá para comprar?",o:["6","7","5","10"],a:0,e:"6 × 0,15 = 0,90; 7 × 0,15 = 1,05."},
{q:"Dobrando a cada 8 anos, R$ 100 viram R$ 800 em:",o:["24 anos","16 anos","32 anos","8 anos"],a:0,e:"3 dobras."},
{q:"Faltam R$ 240 para a meta em 8 meses. Por mês:",o:["R$ 30","R$ 24","R$ 32","R$ 20"],a:0,e:"240 ÷ 8."}]},
"finjd-m3":{title:"Jogos e Desafios · Módulo 3 · Palavras",qs:[
{q:"Troca direta, sem dinheiro:",o:["escambo","câmbio","crédito","fiado"],a:0,e:"Mais antigo que a moeda."},
{q:"Rapidez para virar dinheiro sem perder valor:",o:["liquidez","rentabilidade","risco","inflação"],a:0,e:"Uma das pontas do tripé."},
{q:"Índice oficial de inflação:",o:["IPCA","PIB","CDI","FGC"],a:0,e:"Calculado pelo IBGE."},
{q:"Receita menos custos:",o:["lucro","dividendo","imposto","troco"],a:0,e:"O que sobra."},
{q:"Objetivo com valor e prazo:",o:["meta","sonho","desejo","orçamento"],a:0,e:"Meta é sonho com data e valor."}]},
"finjd-m4":{title:"Jogos e Desafios · Módulo 4 · Mercadinho",qs:[
{q:"Arroz: 5 × 1 kg a R$ 6,20 ou 1 × 5 kg a R$ 24,90. Economia no pacote de 5 kg:",o:["R$ 6,10","R$ 5,00","R$ 1,30","R$ 7,10"],a:0,e:"31,00 − 24,90."},
{q:"Leve 3, pague 2 com pacotes de R$ 7,90: você paga",o:["R$ 15,80","R$ 23,70","R$ 7,90","R$ 11,85"],a:0,e:"2 × 7,90."},
{q:"O chocolate perto do caixa é exemplo de:",o:["compra por impulso","necessidade","investimento","imposto"],a:0,e:"Fica ali de propósito."},
{q:"Antes de ir ao mercado, o melhor é:",o:["fazer uma lista","ir com fome","levar o cartão sem limite","não olhar preços"],a:0,e:"Lista e orçamento."},
{q:"Preço por unidade serve para:",o:["comparar embalagens diferentes","saber a marca","pagar menos imposto","nada"],a:0,e:"Divida o preço pela quantidade."}]},
"fingp-m1":{title:"Guia do Professor · Módulo 1 · A série na sala",qs:[
{q:"Na BNCC, a Educação Financeira aparece como:",o:["tema contemporâneo transversal","disciplina obrigatória separada","só no ensino médio","atividade extraclasse proibida"],a:0,e:"Integra várias áreas, com destaque para Matemática."},
{q:"A ordem sugerida da série é:",o:["Nível 1, Nível 2, Nível 3, com os complementos em paralelo","só o Nível 3","complementos antes de tudo","qualquer uma sem plano"],a:0,e:"Os complementos aprofundam cada nível."},
{q:"Os QR codes de desafio (círculo laranja) levam a:",o:["resoluções passo a passo","respostas sem explicação","vídeos pagos","cadastro"],a:0,e:"Tente antes de escanear."},
{q:"A OLITEF tem prova de:",o:["20 questões de 5 alternativas, sem calculadora","10 questões abertas","redação","prova oral"],a:0,e:"Formato usado nos exercícios ESTILO OLITEF."},
{q:"As ferramentas da sala têm:",o:["placar, cronômetro e sorteio","notas dos alunos","chat","cadastro"],a:0,e:"Para jogos em equipe."}]},
"fingp-m2":{title:"Guia do Professor · Módulo 2 · Aulas do Nível 1",qs:[
{q:"Uma boa abertura de aula de educação financeira é:",o:["uma pergunta ou dilema do dia a dia","uma lista de definições","uma prova","um vídeo longo"],a:0,e:"Comece pelo cotidiano."},
{q:"O jogo do escambo (feira) mostra:",o:["a dupla coincidência de desejos","os juros compostos","a Selic","o IR"],a:0,e:"Por que o dinheiro foi inventado."},
{q:"Na aula de orçamento, o produto final pode ser:",o:["o orçamento de uma família fictícia","uma redação sobre dinheiro","um desenho livre","nada"],a:0,e:"Planilha simples."},
{q:"Para trabalhar golpes, o recurso mais engajador é:",o:["a história interativa do falso parente","um ditado","a leitura do CDC inteiro","uma lista de leis"],a:0,e:"Decisões com consequências."},
{q:"Rodas de conversa sobre dinheiro devem:",o:["respeitar a realidade de cada família","expor a renda dos alunos","comparar famílias","julgar escolhas"],a:0,e:"Nunca peça a renda real da família."}]},
"fingp-m3":{title:"Guia do Professor · Módulo 3 · Aulas dos Níveis 2 e 3",qs:[
{q:"Para explicar a Selic, o jogo indicado é:",o:["o Copom da turma","o mercadinho","a forca","o caça-palavras"],a:0,e:"A turma decide os juros."},
{q:"O simulador do cartão mostra:",o:["o efeito do rotativo em 6 meses","o preço do ouro","o PIB","o IR"],a:0,e:"Pagar o mínimo custa caro."},
{q:"Um bom debate para o Nível 3 é:",o:["apostas on-line e propaganda","a cor das notas","o nome das moedas","o horário da aula"],a:0,e:"Tema atual e polêmico."},
{q:"No projeto final do Nível 3, o aluno:",o:["monta um plano para uma meta sua","faz uma prova","compra ações de verdade","abre conta em banco"],a:0,e:"Plano com valor, prazo e onde guardar."},
{q:"Cuidado ao falar de investimentos:",o:["não recomendar produtos ou empresas específicas","indicar ações quentes","prometer retorno","pedir dados dos pais"],a:0,e:"Educar, não aconselhar."}]},
"fingp-m4":{title:"Guia do Professor · Módulo 4 · Projetos e avaliação",qs:[
{q:"A feira da turma trabalha:",o:["custos, preço, lucro e ética","só matemática pura","só leitura","só artes"],a:0,e:"Projeto completo."},
{q:"Uma rubrica de avaliação descreve:",o:["níveis de desempenho em cada critério","só a nota final","a frequência","o comportamento"],a:0,e:"Critérios claros."},
{q:"O torneio do tabuleiro pode ser jogado:",o:["impresso, com as cartas no celular, ou todo no celular","só no computador","só impresso","só em casa"],a:0,e:"As duas versões têm as mesmas regras."},
{q:"Para preparar a OLITEF, o Caderno de Exercícios traz:",o:["questões por tema com comentários","simulados completos","só respostas","nada"],a:0,e:"Questões ESTILO OLITEF comentadas."},
{q:"Uma boa autoavaliação do aluno pergunta:",o:["o que ele mudou nos próprios hábitos","a renda da família","quanto ele gastou","o salário dos pais"],a:0,e:"Foco no aprendizado e nas atitudes."}]}
});
