const items = document.querySelectorAll('.item');
const redacaoContainer = document.getElementById('redacaoContainer');
const initialContent = document.getElementById('initialContent');
const redacaoTitle = document.getElementById('redacaoTitle');
const redacaoContent = document.getElementById('redacaoContent');
const btnBack = document.getElementById('btnBack');

const redacoes = {
  1: {
    title: 'O crescente Uso de Procedimentos estéticos por jovens',
    content: `
      <p>Nos últimos anos os precedimentos estéticos entre os jovens vem aumentando cada vez mais, esses procedimentos tem como propósito: Reconstruir narizes, remover o excesso de gordura localizada entre outros. O que influencia muitos dos jovens virem a fazer procedimentos pode ser por influencia das redes sociais que promovem um padrão de beleza muito alto trazendo a tona filtros, edições de imagem e perfis de influencers que reforcam que a beleza é a base do sucesso e da realização pessoal sobre isso, os jovens comecam a adiquirir a comparação. O que acaba levando a maioria dos jovens a decorrer a harmonizações e cirurgias.</p>
      <p>Além disso a faixa etária dos jovens que buscam por essas mudanças são de 18 a 25 anos de idade, e claro os adolecentes que já adiquiriram inseguranças, baixa auto estima que já acabam pensando em procedimentos, que acreditam que essa pode ser a solução.</p>
      <p>Outro ponto é o quão facilitado é encontrar clinicas e a competividade de preços que acabam sendo mais viáveis. Entretanto, esses procedimentos usados indefinidamente podem causar riscos e problemas emocionais. É claro que deve ser debatido sobre a saúde mental e a aceitação para evitar que os procedimentos venham a aumentar cada vez mais entre os jovens.</p>
    `
  },
  2: {
    title: 'Acessibilidade e inclusão de pessoas com deficiência',
    content: `
      <p>A acessibilidade e a inclusão de pessoas com deficiência no Brasil representam um desafio contínuo e essencial para a construção de uma sociedade mais justa e igualitária. Apesar de avanços legais, como a Lei Brasileira de Inclusão (Lei n° 13.146/2015), ainda existem muitas barreiras físicas, sociais e culturais que dificultam a plena participação dessas pessoas na vida cofidiana.</p>
      <p>A acessibilidade vai além da adaptação arquitetônica de espaços públicos e privados. Ela envolve também o acesso à educação, ao mercado de trabalho, à cultura, à saúde e aos meios de comunicação. Garantir esses direitos é fundamental para que as pessoas com deficiência possam exercer sua cidadania de forma plena.</p>
      <p>Entretanto, a realidade mostra que ainda faltam investimentos em infraestrutura adequada e, principalmente, em conscientização social.</p>
      <p>A inclusão depende da mudança de mentalidade coletiva, que deve enxergar a pessoa com deficiência como sujeito de direitos e não como alguém a ser apenas assistido. O respeito à diversidade e a promoção da igualdade de oportunidades são passos indispensáveis para transformar a sociedade. Portanto, é necessário que o poder público, as empresas e a população atuem juntos na eliminação de barreiras, assegurando que a acessibilidade seja um direito efetivo e não apenas uma previsão legal.</p>
    `
  },
  3: {
    title: 'Qualidade de vida e bem-estar',
    content: `
      <p>A qualidade de vida e o bem-estar são aspectos que podem decair ou melhorar com base em vários fatores como a nossa saúde, tendo acesso a médicos com melhor especialidade e com mais acesso a população e melhorar a infraestrutura dos hospitais. Outro ponto seria a educação que nos contribuem para novos emprego, faculdades e ainda mais para nosso conhecimento. Além disso precisamos falar sobre nossa segurança e no ambiente onde vivemos, com transportes mais eficazes áreas mais limpas e verdes, assim nós podemos sim ter uma qualidade de vida melhor.</p>
      <p>No final todos esses fatores podem ajudar a melhor a qualidade de vida e no bem estar da população. Para isso é essencial que os políticos priorizem nossos lares, invistam em políticas públicas eficientes e garantam que cada cidadão tenha oportunidade e condições adequadas. Afinal tudo isso é um direito que todos nós deveríamos ter e com a união da população e o governo podemos mudar isso.</p>
    `
  },
  4: {
    title: 'Mudanças climáticas e os desafios no Brasil',
    content: `
      <p>As mudanças climaticas representam um dos maiores desafios contetemporâneos e afetam diretamente o Brasil. O aumento da temperatura média, a intensificação de eventos extremos, como secas prolongadas e enchentes, e o avanço do desmatamento comprometem a biodiversidade, enconomia e a qualidade de vida da população.</p>
      <p>No semiário nordestino, por exemplo, a escassez hidrica agrava a insegurança alimentar e aumenta o êxodo e dificulta o desenvolvimento econômico.</p>
      <p>Já na Amazônia, desmatamento e as queimadas contribuem para o aumento das emissões de gases de efeito estufa, prejudicando o equilibrio climatico global. Diante desse cenario, torna-se urgente a adoção de políticas públicas que incentivam a justiça social e preservação ambiental duradoura, o uso de energias renóvaveis e a transição para uma enconomia sustentavel.</p>
      <p>Além disso, é fundamental promover a conscientização da sociedade, para que individuos e comidades participem ativamente da mitigação dos impactos climaticos. Assim, o Brasil poderá conciliar desenvolvimento e preservação.</p>
    `
  },
  5: {
    title: 'Os impactos do lixo eletrônico',
    content: `
      <p>O lixo eletrônico é um dos maiores desafios ambientais da atualidade. Com o avanço tecnológico, cresce o consumo de aparelhos como celulares, computadores e televisores, que rapidamente se tornam obsoletos.</p>
      <p>O descarte inadequado desses equipamentos gera sérios impactos, pois muitos contêm metais pesados, como chumbo e mercúrio, capazes de contaminar o solo, a água e até a cadeia alimentar, prejudicando a saúde humana e animal.</p>
      <p>Além disso, a prática de trocar aparelhos constantemente, impulsionada pela obsolescência programada, aumenta consideravelmente a quantidade de resíduos produzidos, revelando um padrão de consumo realmente insustentável.</p>
      <p>A ausência de políticas públicas eficazes e a falta de conscientização da população agravam o problema, dificultando o reaproveitamento de materiais valiosos e essenciais.</p>
      <p>Portanto, é fundamental investir em educação ambiental, promover a economia circular e incentivar a coleta seletiva Somente com ações conjuntas será possível reduzir significativamente os danos causados pelo lixo eletrônico e proteger o meio ambiente.</p>
    `
  },
  6: {
    title: 'O consumo de ultraprocessados e suas consequências à saúde',
    content: `
      <p>Na sociedade contemporânea, marcada pela rapidez e pela busca constante por praticidade, a alimentação desempenha papel essencial na qualidade de vida. Nesse contexto, os alimentos ultraprocessados — ricos em açúcares, sódio, conservantes e gorduras — tornaram-se cada vez mais presentes nas mesas brasileiras. Embora ofereçam conveniência e durabilidade, seu consumo excessivo gera sérias consequências à saúde e impõe desafios para o bem-estar coletivo.</p>
      <p>Em primeiro lugar, é notório que os ultraprocessados contribuem significativamente para o avanço de doenças crônicas não transmissíveis, como obesidade, hipertensão e diabetes tipo 2. A Organização Mundial da Saúde alerta que essas enfermidades estão entre as principais causas de morte no planeta, e sua incidência cresce proporcionalmente ao aumento do consumo de produtos industrializados. Esse cenário não apenas compromete a longevidade e a qualidade de vida dos indivíduos, mas também sobrecarrega o sistema público de saúde, que precisa arcar com os custos do tratamento dessas doenças evitáveis.</p>
      <p>Além disso, a difusão desse padrão alimentar é impulsionada por estratégias de marketing agressivas da indústria. Embalagens chamativas, personagens infantis e propagandas que associam esses alimentos a prazer e praticidade criam uma falsa percepção de benefício, induzindo principalmente crianças e jovens a escolhas prejudiciais. Tal manipulação evidencia a vulnerabilidade do consumidor diante de um mercado que prioriza o lucro em detrimento da saúde coletiva.</p>
      <p>Diante disso, faz-se necessário que o Estado, em conjunto com instituições de ensino e saúde, invista em campanhas de conscientização que promovam hábitos alimentares mais saudáveis. Paralelamente, políticas públicas devem garantir maior acesso a frutas, verduras e produtos da agricultura familiar, tornando-os financeiramente mais acessíveis que os ultraprocessados. Dessa forma, será possível combater a epidemia de doenças associadas a má alimentação e construir uma sociedade mais saudável e consciente de suas escolhas nutricionais.</p>
    `
  },
  7: {
    title: 'Fatores e efeitos da dependência em jogos de apostas na web',
    content: `
      <p>Na atualidade, com o avanço das tecnologias digitais, os jogos de apostas tornaram-se cada vez mais acessíveis e atrativos. Essa prática, muita das vezes associada ao lazer, pode evoluir para a dependência, trazendo sérias consequências ao individuo e a sociedade.</p>
      <p>Entre os fatores que estimulam esse vício, destacam-se a facilidade de acesso a sites e aplicativos, a promessa de ganhos rápidos e a intensa publicidade que relaciona o jogo a status e diversão.</p>
      <p>Além disso, questão emocionais, como a fuga de problemas e a busca por adrenalina, reforçam o comportamento compulsivo.</p>
      <p>Os efeitos, por sua vez são preocupantes. No ambito individual, observa-se endividamento, perda da oportunidade e fragilidade nos vínculos familiares. No coletivo, ha sobrecarga nos serviços de saúde mental e impacto econômicos negativos.</p>
      <p>Portanto, a dependência em jogos de aposta deve ser tratada como problema social. Campanhas educativas e maior regulação da publicidade são medidas essenciais para reduzir seus dados e preservar a saúde coletiva.</p>
    `
  },
  8: {
    title: 'A importância do trabalho voluntário no combate às desigualdades sociais',
    content: `
      <p>O trabalho voluntário é uma das formas mais significativas de promover a solidariedade e reduzir as desigualdades sociais. Em um país como o Brasil, onde há grande disparidade entre classes, o voluntariado atua como um elo de empatia e transformação, aproximando pessoas de diferentes realidades e fortalecendo e senso de comunidade.</p>
      <p>Ao dedicar tempo e esforço para ajudar o próximo, o voluntário contribui não apenas com ações pontuais, como doações e serviços, mas também com iniciativas que promovem educação, saúde e inclusão social. Essas atividades ajudam a suprir lacunas deixando pelo poder público e estimulam o desenvolvimento humano em regiões vulneráveis.</p>
      <p>Além disso, o trabalho voluntário incentiva a responsabilidade social, despertando a consciencia de que pequenas atitudes podem gerar grandes mudanças.</p>
      <p>Mais do que um gesto de caridade, o voluntariado é um ato de cidadania. Ele fortalecendo valores como empatia, respeito e cooperação, essenciais para a construção de uma sociedade mais justa e igualitária.</p>
    `
  },
  9: {
    title: 'Adultização infantil – consequências da perda irreparável da infância',
    content: `
      <p>A perda irreparável da infância constitui um desafio social de profundas dimensões, pois compromete não apenas o desenvolvimento individual, mas também o futuro coletivo. A infância, etapa marcada pela descoberta, proteção e formação de valores, torna-se fragilizada quando crianças são expostas precocemente a responsabilidades adultas, violência, trabalho infantil ou negligência. Essas vivências aceleram processos emocionais e cognitivos que deveriam ocorrer gradualmente, rompendo o espaço de imaginação e segurança essencial ao crescimento saudável.</p>
      <p>As consequências dessa ruptura manifestam-se de diversas maneiras. No âmbito psicológico, a ausência de uma infância plena pode gerar traumas, ansiedade e dificuldade de estabelecer relações afetivas estáveis. Em termos sociais, indivíduos que tiveram sua infância abreviada tendem a enfrentar maiores obstáculos educacionais, perpetuando ciclos de desigualdade. Além disso, a sociedade perde a oportunidade de cultivar cidadãos mais criativos, empáticos e preparados para a vida em comunidade.</p>
      <p>Diante desse cenário, torna-se urgente estabelecer políticas públicas eficazes que garantam proteção integral às crianças. Investimentos em educação de qualidade, programas de assistência social e campanhas de conscientização são fundamentais para assegurar que a infância seja vivida em sua plenitude. Proteger essa fase é, portanto, preservar um dos pilares essenciais para a construção de uma sociedade mais justa e humana.</p>
    `
  },
  10: {
    title: 'Caminhos para combater o etarismo nas relações sociais',
    content: `<p>Texto para o tema 10 ainda não enviado.</p>`
  },
  11: {
    title: 'A importância da educação financeira para os jovens',
    content: `
      <p>A educação financeira é um tema de grande relevância na sociedade contemporânea, especialmente para os jovens que estão iniciando sua vida adulta. Em um mundo marcado pelo consumo constante e pela facilidade de acesso ao crédito, compreender como administrar o próprio dinheiro torna-se essencial para garantir estabilidade e independência econômica no futuro.</p>
      <p>Infelizmente, muitos jovens crescem sem receber orientações adequadas sobre finanças, o que os torna vulneráveis ao endividamento e à má gestão dos recursos. A ausência dessa formação nas escolas contribui para a perpetuação de um ciclo de dificuldades econômicas, pois o desconhecimento sobre orçamento, poupança e investimentos impede o desenvolvimento de uma relação saudável com o dinheiro.</p>
      <p>A inserção da educação financeira no currículo escolar, portanto, é uma medida necessária para formar cidadãos mais conscientes e preparados. Com o aprendizado sobre planejamento financeiro, os jovens podem estabelecer metas, priorizar gastos e compreender a importância de investir no próprio futuro.</p>
      <p>Dessa forma, a educação financeira não se limita apenas à economia individual, mas também contribui para o fortalecimento da sociedade como um todo, promovendo responsabilidade, autonomia e bem-estar coletivo. Educar financeiramente os jovens é, portanto, um investimento no futuro do país.</p>
    `
  },
  12: {
    title: 'Desafios para a valorização da cultura popular brasileira',
    content: `
      <p>A cultura popular brasileira, marcada pela diversidade e pela criatividade do povo, é um dos maiores patrimônios do país. Manifestações como o samba, o frevo, o bumba meu boi e o cordel expressam a identidade nacional e preservam tradições que atravessam gerações. No entanto, apesar de sua importância, a valorização da cultura popular ainda enfrenta inúmeros desafios na sociedade contemporânea.</p>
      <p>Um dos principais obstáculos é a falta de incentivo governamental e de políticas públicas efetivas voltadas à preservação dessas manifestações. Muitos grupos culturais sobrevivem com recursos limitados, o que dificulta a continuidade de suas atividades. Além disso, a globalização e o avanço das mídias digitais promovem a valorização de produtos culturais estrangeiros, reduzindo o espaço destinado às expressões locais e tradicionais.</p>
      <p>Outro fator preocupante é o preconceito cultural, que faz com que manifestações populares sejam vistas como inferiores ou menos sofisticadas. Essa visão elitista enfraquece o reconhecimento do valor histórico e artístico dessas práticas.</p>
      <p>Portanto, para superar tais desafios, é fundamental investir em educação cultural e ampliar o apoio a projetos comunitários. Valorizar a cultura popular brasileira é reconhecer a força e a riqueza do próprio povo, garantindo que suas tradições continuem vivas e respeitadas.</p>
    `
  },
  13: {
    title: 'Caminhos para a universalização do saneamento básico no Brasil',
    content: `
      <p>O saneamento básico é um direito fundamental garantido pela Constituição Federal e essencial para a dignidade humana. No entanto, milhões de brasileiros ainda vivem sem acesso a água tratada, coleta de esgoto e manejo adequado de resíduos. Essa realidade reflete desigualdades sociais e regionais que comprometem a saúde pública e o meio ambiente.</p>
      <p>Um dos principais entraves à universalização do saneamento básico é a falta de investimentos e de planejamento eficiente. Muitas cidades, especialmente nas regiões Norte e Nordeste, sofrem com infraestrutura precária e gestão ineficaz dos recursos disponíveis. Além disso, a burocracia e a corrupção em alguns setores dificultam a execução de projetos e o cumprimento das metas estabelecidas pelo novo Marco Legal do Saneamento.</p>
      <p>Para reverter esse cenário, é necessário fortalecer parcerias entre o setor público e o privado, garantindo transparência e fiscalização. Investir em tecnologias sustentáveis e em educação ambiental também é essencial para promover o uso consciente da água e a preservação dos recursos naturais.</p>
      <p>Assim, a universalização do saneamento básico no Brasil depende de políticas públicas comprometidas com a igualdade social e com o desenvolvimento sustentável, assegurando a todos os cidadãos condições dignas de vida e saúde.</p>
    `
  },
  14: {
    title: 'O papel do esporte como ferramenta de transformação social',
    content: `
      <p>O saneamento básico é um direito essencial para a dignidade humana e um pilar do desenvolvimento sustentável. No entanto, no Brasil, milhões de pessoas ainda vivem sem acesso à água tratada e à coleta de esgoto, o que evidencia profundas desigualdades sociais e regionais. Essa carência impacta diretamente a saúde pública, a educação e o meio ambiente, perpetuando ciclos de pobreza e exclusão.</p>
      <p>Para que a universalização do saneamento se torne realidade, é fundamental a implementação efetiva do Marco Legal do Saneamento (Lei n° 14.026/2020), que estabelece metas ambiciosas de cobertura até 2033. Contudo, mais do que normas, são necessários investimentos contínuos, parcerias entre o setor público e privado e uma gestão eficiente dos recursos hídricos.</p>
      <p>Alem disso, políticas públicas devem priorizar regiões historicamente negligenciadas, como comunidades rurais e periferias urbanas, garantindo equidade no acesso.</p>
      <p>A educação ambiental também desempenha papel essencial, pois incentiva o uso consciente da água e a preservação dos mananciais. Assim, por meio da união entre governo, sociedade e iniciativa privada, o Brasil poderá superar os desafios estruturais e assegurar um futuro em que o saneamento básico seja, de fato, um direito universal e não um privilégio de poucos.</p>
    `
  }
};

function showRedacao(id) {
  const redacao = redacoes[id];
  if (!redacao) return;
  redacaoTitle.textContent = `${id}. ${redacao.title.toUpperCase()}`;
  redacaoContent.innerHTML = redacao.content;
  initialContent.style.display = 'none';
  redacaoContainer.style.display = 'flex';
}

function backToInitial() {
  redacaoContainer.style.display = 'none';
  initialContent.style.display = 'flex';
}

items.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    showRedacao(id);
  });
});

btnBack.addEventListener('click', backToInitial);