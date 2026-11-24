window.QUIZ=window.QUIZ||{};window.RES=window.RES||{};window.APOSTILAS=window.APOSTILAS||{};window.FIN=window.FIN||{cls:{},ord:{},av:{}};
// Educação Financeira · Nível 1 · Iniciante
Object.assign(FIN.cls,{
"desejo-necessidade":{title:"Desejo ou necessidade?",sub:"Para cada carta, decida: é uma necessidade (preciso para viver bem) ou um desejo (seria legal ter)? Pense na situação descrita.",
 baldes:[["Necessidade","#0E2354"],["Desejo","#F7821F"]],
 itens:[["Remédio receitado pelo médico",0,"Saúde é necessidade."],["O celular lançado ontem, sendo que o seu funciona",1,"Trocar um celular que funciona é desejo."],
 ["Passagem de ônibus para ir à escola",0,"Transporte para estudar é necessidade."],["Skin nova no jogo",1,"Itens de jogo são desejo."],
 ["Conta de luz",0,"Energia em casa é necessidade."],["Terceiro tênis da moda",1,"Ter mais um tênis da moda é desejo."],
 ["Tênis para ir à escola, porque o seu rasgou",0,"Aqui o tênis é necessidade: o antigo não serve mais."],["Lanche no shopping com os amigos",1,"Lazer é bom, mas é desejo."],
 ["Arroz e feijão do mês",0,"Alimentação básica é necessidade."],["Assinatura de mais um streaming",1,"Entretenimento extra é desejo."],
 ["Material escolar da lista",0,"Estudar é necessidade."],["Fone sem fio novo, tendo um com fio que funciona",1,"Trocar o que funciona é desejo."]],
 fim:"Repare: a mesma coisa (um tênis) pode ser necessidade ou desejo. Depende da situação. A pergunta mágica é: eu preciso disso agora?"},
"fixa-variavel":{title:"Fixa, variável ou eventual?",sub:"Classifique cada despesa da família: fixa (mesmo valor todo mês), variável (muda de mês para mês) ou eventual (aparece só em certas épocas).",
 baldes:[["Fixa","#0E2354"],["Variável","#F7821F"],["Eventual","#15803D"]],
 itens:[["Aluguel",0,"Mesmo valor todo mês."],["Conta de luz",1,"Depende do consumo."],["Material escolar",2,"Aparece no início do ano."],["Plano de internet",0,"Valor fixo combinado."],
 ["Mercado",1,"Muda conforme as compras."],["IPVA do carro",2,"Cobrado uma vez por ano."],["Mensalidade da escola",0,"Mesmo valor todo mês."],["Conta de água",1,"Depende do consumo."],
 ["Presentes de Natal",2,"Só em dezembro."],["Prestação da geladeira",0,"Parcela igual todo mês."],["Transporte por aplicativo",1,"Depende de quantas corridas."],["Conserto do carro",2,"Acontece de vez em quando."]],
 fim:"As eventuais são as que mais pegam as famílias de surpresa. Planeje: divida o valor delas por 12 e guarde um pouco todo mês."},
"golpe-chat":{title:"Golpe ou mensagem segura?",chat:true,sub:"Você vai ver mensagens que chegaram no celular. Decida: é golpe ou é segura? Procure os sinais de alerta: pressa, pedido de senha ou de dinheiro, link estranho, promessa boa demais.",
 baldes:[["É golpe 🚨","#B91C1C"],["Parece segura ✅","#15803D"]],
 itens:[["Oi, mãe! Troquei de número. Me faz um Pix de R$ 800 agora? Depois te explico.",0,"Número novo + pedido urgente de dinheiro: ligue para o número antigo antes.","Número desconhecido"],
 ["Seu CPF tem R$ 1.240 esquecidos. Pague a taxa de R$ 49,90 neste link para liberar: bit.ly/xyz",0,"A consulta oficial é grátis e só no site valoresareceber.bcb.gov.br. Ninguém cobra taxa.","SMS"],
 ["Aqui é do seu banco. Sua conta foi invadida! Faça um Pix para a conta de segurança que vou passar.",0,"Não existe 'conta de segurança'. Desligue e ligue você mesmo para o banco.","Ligação"],
 ["Lembrete da escola: a reunião de pais é quinta, às 19h, no auditório.",1,"Não pede dinheiro, senha nem clique: informação comum.","Grupo da escola"],
 ["PARABÉNS!!! Você ganhou um iPhone. Responda com seus dados e o código que chegou por SMS.",0,"Prêmio que você não concorreu + pedido de código = golpe.","Número desconhecido"],
 ["Sua compra foi aprovada. Acompanhe a entrega pelo aplicativo oficial da loja.",1,"Não pede nada e manda usar o aplicativo oficial.","Loja onde você comprou"],
 ["Investimento garantido: 20% ao mês, sem risco. Últimas vagas! Entre no grupo.",0,"Retorno alto, garantido e com pressa: sinal clássico de pirâmide.","Rede social"],
 ["Vovó, chego no sábado às 10h para o almoço, tá? Beijo!",1,"Mensagem comum de alguém que você conhece, sem pedir nada.","Neto (número salvo)"],
 ["Seu pacote está retido. Pague R$ 12,90 de taxa no link para liberar a entrega.",0,"Falsa taxa de entrega: confira no site oficial dos Correios ou da transportadora.","SMS"],
 ["O código de verificação do seu WhatsApp é 482-911. Não compartilhe com ninguém.",1,"Mensagem automática segura. O perigo é alguém te pedir esse código depois!","WhatsApp"]],
 fim:"Regra de ouro: banco, governo e lojas sérias nunca pedem senha, código ou Pix por mensagem. Na dúvida, desligue e confirme por outro caminho."},
"verdade-porcentagem":{title:"Verdade ou pegadinha?",sub:"Cada carta traz uma frase sobre porcentagem. É verdade ou é pegadinha? Faça a conta de cabeça.",
 baldes:[["Verdade","#15803D"],["Pegadinha","#B91C1C"]],
 itens:[["10% de 350 é 35.",0,"Dividir por 10: 35."],["Dois descontos de 20% seguidos dão 40% de desconto.",1,"100 → 80 → 64: desconto total de 36%."],
 ["Subir 10% e depois cair 10% volta ao preço inicial.",1,"200 → 220 → 198. Não volta."],["50% de 80 é o mesmo que 80 ÷ 2.",0,"Metade é 50%."],
 ["25% é o mesmo que um quarto.",0,"25/100 = 1/4."],["5% de 300 é 30.",1,"10% é 30; 5% é 15."],["150% de 40 é 60.",0,"40 + metade de 40 = 60."],
 ["Um desconto de 30% em R$ 200 deixa o produto por R$ 170.",1,"30% de 200 é 60: fica R$ 140."],["1% de 2.500 é 25.",0,"Dividir por 100."],["Se 9 de 36 alunos usam óculos, isso é 25%.",0,"9/36 = 1/4 = 25%."]]}
});
Object.assign(FIN.ord,{
"linha-dinheiro":{title:"A linha do tempo do dinheiro",sub:"Coloque as formas de pagamento na ordem em que surgiram, da mais antiga para a mais recente.",de:"mais antigo",ate:"mais recente",
 itens:[["Escambo: troca direta","Há milhares de anos, antes de qualquer moeda."],["Moedas-mercadoria: sal, gado, conchas","Produtos que todo mundo aceitava."],["Moedas de metal cunhadas","Lídia, por volta do século VII a.C."],["Papel-moeda oficial","China, por volta do século XI."],["Cartão de crédito","Popularizou-se no século XX."],["Pix","Lançado pelo Banco Central em novembro de 2020."]]},
"moedas-brasil":{title:"As moedas do Brasil",sub:"O Brasil trocou de moeda várias vezes por causa da inflação. Ponha em ordem, da mais antiga para a mais nova.",de:"mais antiga",ate:"atual",
 itens:[["Réis","Da colônia até 1942."],["Cruzeiro (1942)","A primeira troca no século XX."],["Cruzeiro novo (1967)","Cortou três zeros."],["Cruzado (1986)","Plano Cruzado."],["Cruzado novo (1989)","Mais três zeros cortados."],["Cruzeiro real (1993)","A última antes do real."],["Real (1994)","Criado pelo Plano Real, está aí até hoje."]]}
});
Object.assign(FIN.av,{
"mes-julia":{title:"O mês da Júlia",vars:{d:["💰",150,v=>R0(v)],g:["🐷 guardado",0,v=>R0(v)]},nos:{
 ini:{t:"Dia 1º. Júlia recebeu <b>R$ 150</b> de mesada. Ela quer um fone de R$ 120 daqui a alguns meses. O que ela faz primeiro?",ops:[["Separa R$ 30 no cofrinho na hora (pague-se primeiro)","d5",{d:-30,g:30}],["Deixa para guardar o que sobrar no fim do mês","d5b"]]},
 d5:{t:"Dia 5. Na saída da escola, a turma vai ao shopping comer. O lanche custa R$ 35.",ops:[["Vai e paga o lanche","d12",{d:-35}],["Propõe um piquenique: cada um leva algo de casa (R$ 10)","d12",{d:-10}]]},
 d5b:{t:"Dia 5. Na saída da escola, a turma vai ao shopping comer. O lanche custa R$ 35. Ainda não guardou nada.",ops:[["Vai e paga o lanche","d12",{d:-35}],["Propõe um piquenique: cada um leva algo de casa (R$ 10)","d12",{d:-10}]]},
 d12:{t:v=>`Dia 12. Aparece um anúncio: "Só hoje! Capinha de celular de R$ 45 por R$ 29!". A capinha da Júlia ainda está boa. Ela tem ${R0(v.d)}.`,ops:[["Compra: é promoção!","d20",{d:-29}],["Usa a regra das 48 horas e espera","d20"]]},
 d20:{t:v=>`Dia 20. É aniversário da melhor amiga. Um presente legal custa R$ 40, e um presente feito à mão custa R$ 15 de material. Júlia tem ${R0(v.d)}.`,ops:[["Compra o presente de R$ 40","d28",{d:-40}],["Faz o presente à mão (R$ 15)","d28",{d:-15}]]},
 d28:{t:v=>`Dia 28. Fim do mês. Sobraram ${R0(v.d)} na carteira. O que fazer com a sobra?`,ops:[["Guarda tudo o que sobrou no cofrinho",v=>v.d<0?'neg':'fim',{}],["Gasta com doces, afinal o mês está acabando",v=>v.d<0?'neg':'fim2']]},
 neg:{t:"A conta não fechou: Júlia gastou mais do que tinha e precisou pedir dinheiro emprestado para a irmã.",fim:"Mês no vermelho",lic:"Quando a despesa passa da receita, vira dívida. Anotar os gastos e pagar-se primeiro evita isso."},
 fim:{t:v=>{const g=v.g+v.d;return `Fim do mês! Júlia guardou <b>${R0(g)}</b>. No ritmo deste mês, o fone de R$ 120 chega em ${g>0?Math.ceil(120/g)+' meses':'… nunca'}.`},fim:"Mês concluído",lic:"Pequenas escolhas (piquenique, presente feito à mão, esperar 48 horas) viram dinheiro guardado. Jogue de novo e tente chegar ao fone em menos meses!"},
 fim2:{t:v=>`Fim do mês! Júlia guardou <b>${R0(v.g)}</b>.`,fim:"Mês concluído (mas a sobra virou doce)",lic:"Quem guarda só o que sobra quase nunca guarda nada. Tente de novo separando primeiro a parte da meta."}}},
"falso-parente":{title:"A mensagem do 'sobrinho'",vars:{s:["🛡️ segurança",3]},nos:{
 ini:{t:"Tia Rosa recebe no WhatsApp: <i>\"Oi, tia! Troquei de número, salva aí. Tô numa enrascada, preciso pagar um boleto hoje. Me faz um Pix de R$ 900? Amanhã te devolvo.\"</i> A foto é do sobrinho Davi. O que ela faz?",
  ops:[["Faz o Pix na hora: é o Davi, ele precisa!","perdeu",{s:-3}],["Liga para o número antigo do Davi","ligou",{s:1}],["Responde: 'Qual o nome do seu cachorro?'","pergunta",{s:1}]]},
 pergunta:{t:"A pessoa responde: <i>\"Ah tia, que pergunta, rs. Tô sem tempo, o boleto vence em 1 hora! Faz logo, por favor!\"</i>",ops:[["Desconfia da pressa e liga para o número antigo","ligou",{s:1}],["Fica com dó e faz o Pix","perdeu",{s:-3}]]},
 ligou:{t:"O Davi atende o número de sempre: <i>\"Que Pix, tia? Eu tô na aula! Não troquei de número.\"</i> Era golpe. O que Tia Rosa faz agora?",ops:[["Bloqueia e denuncia o número no WhatsApp e avisa a família","salva",{s:1}],["Só apaga a conversa","meio"]]},
 perdeu:{t:"Pouco depois, Tia Rosa liga para o Davi de verdade, que diz que não pediu nada. Era golpe e o dinheiro foi para a conta de um golpista. E agora?",ops:[["Liga para o banco na hora e pede o MED do Pix, depois faz boletim de ocorrência","med"],["Fica com vergonha e não conta para ninguém","calou"]]},
 med:{t:"O banco registra a contestação pelo MED (Mecanismo Especial de Devolução) e tenta bloquear o dinheiro na conta do golpista. Quanto mais rápido o aviso, maior a chance de recuperar.",fim:"Agiu rápido depois do erro",lic:"Qualquer pessoa pode cair num golpe. O importante é avisar o banco imediatamente, registrar boletim de ocorrência e alertar a família."},
 calou:{t:"Sem aviso ao banco, o dinheiro some de vez, e o golpista tenta o mesmo golpe com outros parentes.",fim:"Golpe completo",lic:"Vergonha é o melhor amigo do golpista. Contar rápido para o banco e para a família protege você e os outros."},
 meio:{t:"Ela se salvou, mas o golpista continua usando a foto do Davi com outros parentes.",fim:"Salva, mas dava para ajudar mais",lic:"Denunciar e avisar a família impede que o golpe pegue outra pessoa."},
 salva:{t:"Tia Rosa não perdeu nada e ainda protegeu os outros parentes. A família combina uma 'palavra secreta' para pedidos de dinheiro.",fim:"Golpe desarmado! 🛡️",lic:"Os três passos: desconfiar da pressa, confirmar por outro caminho (ligar para o número antigo) e denunciar."}}}
});
Object.assign(window.QUIZ,{
"fin1-m1":{title:"Educação Financeira 1 · Módulo 1 · A história do dinheiro",qs:[
{q:"A troca direta de mercadorias, sem dinheiro, se chama:",o:["escambo","inflação","crédito","juros"],a:0,e:"Escambo é trocar um bem diretamente por outro."},
{q:"A palavra pecúnia (dinheiro) vem do latim pecus, que significa:",o:["sal","ouro","gado","concha"],a:2,e:"Por muito tempo, ter gado era ter riqueza."},
{q:"As primeiras moedas cunhadas surgiram:",o:["no Brasil colônia","no reino da Lídia","na China do século XX","em Roma, em 1500"],a:1,e:"Por volta do século VII a.C., na Lídia, onde hoje é a Turquia."},
{q:"O papel-moeda tem valor principalmente por causa da:",o:["qualidade do papel","confiança em quem o emite","cor da cédula","quantidade de tinta"],a:1,e:"Sem confiança, o papel não compraria nada."},
{q:"Comparar que um celular vale 10 tênis é usar o dinheiro como:",o:["meio de troca","reserva de valor","unidade de medida","pagamento futuro"],a:2,e:"O dinheiro mede o valor de tudo na mesma escala."}]},
"fin1-m2":{title:"Educação Financeira 1 · Módulo 2 · Desejos, necessidades e escolhas",qs:[
{q:"Qual destas é uma necessidade?",o:["Skin de jogo","Remédio receitado","Terceiro tênis da moda","Mais um streaming"],a:1,e:"Saúde é necessidade."},
{q:"Davi escolheu o controle e ficou sem a camisa do time. A camisa é o:",o:["custo de oportunidade","lucro","juro","troco"],a:0,e:"É aquilo de que ele abriu mão ao escolher."},
{q:"\"Só hoje! Últimas unidades!\" é um gatilho de:",o:["prova social","urgência","economia","qualidade"],a:1,e:"A pressa faz a gente comprar sem pensar."},
{q:"Pacote de 6 latas por R$ 15 sai, por lata, a:",o:["R$ 2,00","R$ 2,50","R$ 3,00","R$ 1,50"],a:1,e:"15 ÷ 6 = 2,50."},
{q:"A regra das 48 horas sugere:",o:["comprar logo antes que acabe","esperar dois dias antes de uma compra não planejada","parcelar em 48 vezes","gastar tudo em dois dias"],a:1,e:"Se depois de dois dias ainda fizer sentido, compre."}]},
"fin1-m3":{title:"Educação Financeira 1 · Módulo 3 · Orçamento",qs:[
{q:"Qual é uma despesa variável?",o:["Aluguel","Conta de luz","Mensalidade","Prestação"],a:1,e:"Muda com o consumo."},
{q:"Renda de R$ 3.000 e despesas de R$ 3.200 é uma situação de:",o:["superávit","equilíbrio","déficit","lucro"],a:2,e:"Sai mais do que entra."},
{q:"Pela regra 50-30-20, quem ganha R$ 2.000 guardaria:",o:["R$ 200","R$ 400","R$ 600","R$ 1.000"],a:1,e:"20% de 2.000 = 400."},
{q:"O primeiro passo para montar um orçamento é:",o:["pedir um empréstimo","anotar tudo o que entra e sai","cortar todo o lazer","comprar à vista"],a:1,e:"Sem anotar, não se sabe para onde o dinheiro vai."},
{q:"IPVA e material escolar são despesas:",o:["fixas","variáveis","eventuais","proibidas"],a:2,e:"Aparecem em certas épocas do ano."}]},
"fin1-m4":{title:"Educação Financeira 1 · Módulo 4 · Porcentagem",qs:[
{q:"15% de 80 é:",o:["8","12","15","16"],a:1,e:"10% = 8; 5% = 4; total 12."},
{q:"Uma bolsa de R$ 120 com 25% de desconto sai por:",o:["R$ 90","R$ 95","R$ 100","R$ 30"],a:0,e:"25% de 120 = 30; 120 − 30 = 90."},
{q:"R$ 200 sobe 10% e depois cai 10%. Fica:",o:["R$ 200","R$ 198","R$ 202","R$ 180"],a:1,e:"220 × 0,9 = 198."},
{q:"18 de 72 alunos é:",o:["18%","20%","25%","30%"],a:2,e:"18/72 = 1/4 = 25%."},
{q:"Pagar 70% do preço é ter desconto de:",o:["70%","30%","7%","130%"],a:1,e:"100% − 70% = 30%."}]},
"fin1-m5":{title:"Educação Financeira 1 · Módulo 5 · Poupar com metas",qs:[
{q:"Uma meta de R$ 480 em 8 meses pede guardar por mês:",o:["R$ 48","R$ 60","R$ 80","R$ 40"],a:1,e:"480 ÷ 8 = 60."},
{q:"\"Pague-se primeiro\" quer dizer:",o:["pagar as contas atrasadas","guardar assim que receber","comprar à vista","emprestar para si mesmo"],a:1,e:"Separe a parte de guardar antes de gastar."},
{q:"A reserva de emergência recomendada é de:",o:["1 semana de gastos","3 a 6 meses de despesas","1 ano de salário","R$ 100"],a:1,e:"De 3 a 6 meses das despesas mensais."},
{q:"A reserva de emergência deve ficar num lugar:",o:["arriscado e que rende muito","seguro e que dá para sacar a qualquer dia","que só libera em 5 anos","na mão de um amigo"],a:1,e:"Segurança e liquidez."},
{q:"Comprar uma casa é uma meta de:",o:["curto prazo","médio prazo","longo prazo","nenhum prazo"],a:2,e:"Mais de 5 anos."}]},
"fin1-m6":{title:"Educação Financeira 1 · Módulo 6 · Dinheiro seguro",qs:[
{q:"O banco liga pedindo sua senha. Você:",o:["informa, é o banco","desliga e liga para o número do cartão","manda por mensagem","passa só metade"],a:1,e:"Banco nunca pede senha."},
{q:"O MED do Pix serve para:",o:["fazer Pix mais rápido","tentar devolver dinheiro de golpe ou fraude","pagar boletos","cobrar juros"],a:1,e:"Mecanismo Especial de Devolução."},
{q:"O site oficial de valores esquecidos termina em:",o:[".com",".bcb.gov.br",".net",".app"],a:1,e:"Sites do Banco Central terminam em .bcb.gov.br."},
{q:"Promessa de 20% ao mês garantido é sinal de:",o:["ótimo investimento","golpe","poupança","Tesouro Direto"],a:1,e:"Retorno alto e garantido não existe."},
{q:"Esquemas que pagam os antigos com o dinheiro dos novos levam o nome de:",o:["Ponzi","Pix","Copom","Real"],a:0,e:"Charles Ponzi, 1920."}]}
});
Object.assign(window.RES,{
"fin1-q1-4":{title:"Educação Financeira 1 · Módulo 1 · Exercício 4 (desafio)",enun:"Um real de 1994 não compra hoje o mesmo que comprava naquele ano. Que função do dinheiro foi enfraquecida?",steps:[
["Lembre as quatro funções: meio de troca, unidade de medida, reserva de valor e pagamento no futuro. Qual delas fala de guardar dinheiro para depois?","Reserva de valor"],
["O que aconteceu com os preços entre 1994 e hoje?","Subiram muito: é a inflação acumulada."],
["Se os preços sobem, o mesmo real guardado compra menos coisas.","O poder de compra caiu."]],ans:"Resposta: a função de reserva de valor, enfraquecida pela inflação."},
"fin1-q4-4":{title:"Educação Financeira 1 · Módulo 4 · Exercício 4 (desafio)",enun:"Um produto de R$ 100 teve dois descontos seguidos de 10%. Qual o preço final e o desconto total?",steps:[
["Primeiro desconto: 10% de 100.","100 − 10 = 90"],["O segundo desconto é sobre o novo preço, 90, e não sobre 100.","10% de 90 = 9; 90 − 9 = 81"],
["Desconto total em reais: 100 − 81.","R$ 19, ou seja, 19% de 100"]],ans:"Resposta: R$ 81, com 19% de desconto no total (e não 20%)."},
"fin1-q5-4":{title:"Educação Financeira 1 · Módulo 5 · Exercício 4 (desafio)",enun:"Quanto você teria guardando R$ 50 por mês durante 24 meses a 0,8% ao mês?",steps:[
["Sem juros, seriam 24 depósitos de R$ 50.","24 × 50 = R$ 1.200"],["Com juros compostos, cada depósito rende pelo tempo que fica guardado: o primeiro rende 23 meses, o último quase nada.","Os primeiros depósitos rendem mais."],
["A Calculadora do Cidadão faz a conta exata. Informe: 24 meses, 0,8% ao mês, depósito de R$ 50.","Cerca de R$ 1.320"],["Juros = total − depósitos.","1.320 − 1.200 ≈ R$ 120"]],ans:"Resposta: cerca de R$ 1.320, dos quais uns R$ 120 são juros."}
});
