import type { Article } from './types';

export const ARTICLES_PART3: Article[] = [
  {
    id: 'art-46',
    category: 'Ciência',
    title: 'Naves de Vela Solar a Laser atingem 20% da velocidade da luz rumo a Alfa Centauri',
    excerpt: 'Projeto Breakthrough Starshot conclui o primeiro teste em órbita de nanonaves impulsionadas por canhão de laser terrestre de 100 GW.',
    author: 'Marina Duarte',
    date: 'Há 36 dias',
    readTime: '17 min de leitura',
    image: '/art_starship.png',
    tagColor: 'text-orange-400',
    relatedIds: ['art-6', 'art-3', 'art-20'],
    content: `O sonho de enviar sondas feitas pela humanidade para o sistema estelar mais próximo da Terra deu seu primeiro passo prático. A fundação Breakthrough Initiatives concluiu na órbita terrestre o teste de validação das nanonaves "StarChip" impulsionadas por velas solares ópticas ultrafinas de grafeno e refletores dielétricos.

As nanonaves pesam apenas 2 gramas cada e contêm câmeras de 100 megapixels, modems de comunicação a laser, sensores magnéticos e uma bateria de estado sólido de radionucleídeos.

No conceito operacional final, uma frota de 1.000 nanonaves será lançada em órbita e impulsionada por um phased array de lasers em solo localizado no Deserto do Atacama gerando 100 Gigawatts de potência por 3 minutos.

A pressão de radiação dos fótons do laser sobre a vela de 4 metros acelera a nanonave a uma aceleração de 60.000 g, atingindo uma velocidade final de 60.000 km/s — exatos 20% da velocidade da luz.

Nessa velocidade relâmpago, a viagem de 4,37 anos-luz até o sistema Alfa Centauri e ao exoplaneta potencialmente habitável Proxima Centauri b levará apenas 20 anos de viagem (contra os 30.000 anos que um foguete químico convencional levaria). As primeiras imagens em close-up de um exoplaneta habitável podem chegar à Terra antes de 2050.`
  },
  {
    id: 'art-47',
    category: 'Hardware',
    title: 'Telas Micro-LED de Transparência Variável mudam para sempre o design de janelas e smartphones',
    excerpt: 'Samsung e LG apresentam painéis com 90% de transparência que alternam de vidro comum para monitores 4K em milissegundos.',
    author: 'Gabriel Santos',
    date: 'Há 37 dias',
    readTime: '14 min de leitura',
    image: '/art_steam_deck.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-27', 'art-15', 'art-9'],
    content: `A fronteira entre vidros arquitetônicos e displays digitais desapareceu. A Samsung Display e a LG Display revelaram na CES 2026 os primeiros painéis Micro-LED comerciais de Transparência Variável (Dynamic Transparent Micro-LED).

A tecnologia utiliza micro-LEDs inorgânicos microscópicos de nitreto de gálio com tamanho inferior a 10 micrômetros montados sobre um substrato de vidro cristalino ultra-puro com conexões elétricas invisíveis de óxido de índio-estanho (ITO).

Quando o painel está desligado ou em modo transparente, a taxa de transmissão de luz é de 90% — idêntica a uma janela de vidro residencial comum.

Quando ativado, uma camada de cristal líquido polarizado integrada altera seu estado óptico de transparente para opaco em 0,1 milissegundo, criando um fundo preto profundo com contraste infinito e brilho de 4.000 nits.

Janelas de edifícios corporativos e para-brisas de automóveis tornam-se telas de alta definição sob demanda para exibição de informações, mapas de navegação AR e entretenimento sem bloquear a vista externa quando desativadas.`
  },
  {
    id: 'art-48',
    category: 'IA',
    title: 'Agentes de IA na Agronomia de Precisão elevam em 40% a produtividade agrícola sem uso de agrotóxicos',
    excerpt: 'Empresas brasileiras e americanas implantam frotas de drones e micro-robôs gerenciados por IA no Cerrado.',
    author: 'Fernanda Costa',
    date: 'Há 38 dias',
    readTime: '15 min de leitura',
    image: '/art_robotica_ia.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-11', 'art-24', 'art-32'],
    content: `O agronegócio de grande escala passou por uma revolução ecológica sustentável impulsionada por inteligência artificial e robótica de campo. No cerrado brasileiro e no Midwest americano, fazendas de soja, milho e algodão adotaram a plataforma "AgroMind AI", desenvolvida pela Embrapa em parceria com a John Deere e agtechs locais.

A plataforma coordena frotas de drones de varredura multiespectral e micro-robôs terrestres autônomos que percorrem cada fileira de cultivo identificando individualmente a saúde de cada planta.

Em vez de pulverizar defensivos agrícolas e fertilizantes em área total de forma indiscriminada (o que contamina solos e lençóis freáticos), os micro-robôs utilizam visão computacional de alta velocidade para aplicar micro-gotas de defensivos orgânicos dirigidos exclusivamente nas folhas afetadas por pragas ou ervas daninhas.

A precisão cirúrgica reduziu o uso de defensivos agrícolas químicos em 92% e o consumo de água de irrigação em 45%.

Além disso, modelos preditivos de análise de solo e meteorologia cruzados com dados de satélite determinaram os momentos exatos de plantio e colheita, elevando a produtividade por hectare em 40% nas safras de 2025/2026.`
  },
  {
    id: 'art-49',
    category: 'Games',
    title: 'Simuladores de Voo com Física de Aerodinâmica Realista de Camada Limite e Turbulência Quântica',
    excerpt: 'Microsoft Flight Simulator 2026 integra solvers de mecânica dos fluidos computacional usados pela Boeing e Airbus.',
    author: 'Beatriz Lima',
    date: 'Há 39 dias',
    readTime: '15 min de leitura',
    image: '/art_supercomputadores_exascale.png',
    tagColor: 'text-emerald-400',
    relatedIds: ['art-43', 'art-8', 'art-22'],
    content: `O nível de realismo na simulação de aviação civil e militar atingiu a paridade com a engenharia aeronáutica real. O Microsoft Flight Simulator 2026 atualizou seu motor de voo para integrar o solver CFD "Airflow Quantum", desenvolvido em colaboração com engenheiros aerodinâmicos da Boeing e Airbus.

Nas versões anteriores do simulador, o comportamento das aeronaves era calculado por superfícies de sustentação simplificadas e tabelas de dados de arrasto. No Flight Simulator 2026, o ar ao redor do avião é simulado como um fluido contínuo tridimensional com 500 milhões de pontos de grade.

A sustentação das asas, o descolamento da camada limite em ângulos de ataque elevados (stalls), a turbulência de esteira deixada por grandes aeronaves e o efeito solo (ground effect) são calculados fisicamente em tempo real.

Ao pilotar um Boeing 787 em aproximação sob ventos cruzados severos ou um caça F-35 em manobras pós-estol, os controles do manche refletem com precisão absoluta as forças aerodinâmicas reais sobre as superfícies de controle.

Pilotos comerciais e companhias aéreas adotaram o simulador como ferramenta oficial de treinamento de procedimentos de emergência e aproximações em aeroportos desafiadores.`
  },
  {
    id: 'art-50',
    category: 'Hardware',
    title: 'Supercondutores de Pressão Ambiente de 2ª Geração: a busca pelo "Santo Graal" da física atinge estabilidade a 15°C',
    excerpt: 'Laboratórios na Coreia do Sul e EUA sintetizam composto de apatita modificada com sulfeto capaz de conduzir eletricidade sem resistência.',
    author: 'Gabriel Santos',
    date: 'Há 40 dias',
    readTime: '16 min de leitura',
    image: '/art_computacao_quantica.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-12', 'art-14', 'art-31'],
    content: `A física da matéria condensada atingiu a descoberta mais impactante do século. Pesquisadores do KIST (Korea Institute of Science and Technology) em colaboração com o Argonne National Laboratory confirmaram a síntese replicável do composto "LK-99 Rev 4" — um cristal de apatita de chumbo dopado com íons de cobre e enxofre que exibe supercondutividade a temperatura ambiente (15°C) e pressão atmosférica normal.

A supercondutividade é a propriedade física de certos materiais conduzirem corrente elétrica com exatos exatos zero Ohms de resistência e expelirem completamente campos magnéticos internos (Efeito Meissner).

Historicamente, a supercondutividade exigia resfriamento criogênico extremo com hélio líquido (-269°C) ou pressões giga-pascais equivalentes ao centro da Terra.

O novo composto sintetizado a 15°C conduz correntes elétricas sem qualquer perda de energia por calor (efeito Joule).

As implicações para a infraestrutura global são incalculáveis: redes elétricas de transmissão sem perdas de 15% da energia gerada, trens de levitação magnética Maglev de ultra-alta velocidade baratos de construir, e tomógrafos de ressonância magnética hospitalares do tamanho de capacetes sem necessidade de hélio líquido criogênico.

A revolução energética e tecnológica iniciada pela supercondutividade ambiente está apenas começando.`
  }
];
