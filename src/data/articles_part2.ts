import type { Article } from './types';

export const ARTICLES_PART2: Article[] = [
  {
    id: 'art-36',
    category: 'IA',
    title: 'Modelos de Linguagem Multimodais Nativos: o fim da distinção entre texto, áudio, vídeo e imagem',
    excerpt: 'OpenAI e Google revelam arquiteturas unificadas que processam todos os tipos de mídia na mesma camada de atenção.',
    author: 'Lucas Mendes',
    date: 'Há 26 dias',
    readTime: '16 min de leitura',
    image: '/art_openai_o3.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-7', 'art-28', 'art-1'],
    content: `A evolução dos modelos de inteligência artificial atingiu um limiar unificado. Durante os primeiros anos da revolução dos Transformers, sistemas de IA eram divididos em silos especializados: modelos de texto (LLMs), modelos de visão computacional (CNNs e Vision Transformers) e modelos de síntese de áudio (Vocoders). Em 2026, a abordagem fragmentada foi totalmente substituída por Arquiteturas Multimodais Nativas de Token Único.

Desenvolvidos por OpenAI (modelo Omnia 1) e Google DeepMind (Gemini Omni), esses sistemas convertem pixels, quadros de vídeo, ondas sonoras de microfone e caracteres de texto em uma mesma representação latente unificada.

A consequência prática é que o modelo não "traduz" uma imagem para texto antes de entender seu significado. Ele "enxerga" a imagem diretamente através do mesmo mecanismo de atenção que processa frases, permitindo raciocínio espacial e temporal sobre o mundo físico sem perda de informação na conversão.

Em demonstrações de robótica e assistência ao vivo, o modelo analisa o vídeo de uma câmera a 60 FPS enquanto escuta o áudio de uma conversa, respondendo com síntese de voz nativa com latência de apenas 120 milissegundos — mais rápido do que o tempo de reação humana pré-pensado.

A unificação multimodal abre caminho para assistentes virtuais de presença contínua que acompanham visualmente a vida de seus usuários através de óculos inteligentes, oferecendo suporte contextual instantâneo em qualquer tarefa física ou digital.`
  },
  {
    id: 'art-37',
    category: 'Hardware',
    title: 'Processadores de Vidro (Glass Substrates): Intel e AMD abandonam o silício orgânico em favor do vidro sintético',
    excerpt: 'Nova tecnologia de substrato permite conexão de chiplets com densidade 10x maior e zero deformação térmica em 500W.',
    author: 'Gabriel Santos',
    date: 'Há 27 dias',
    readTime: '15 min de leitura',
    image: '/art_2nm_chip.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-9', 'art-23', 'art-[31]'],
    content: `A indústria de semicondutores transicionou a base física onde os chips são montados. A Intel e a AMD iniciaram a fabricação em massa de processadores de alto desempenho utilizando substratos de vidro sintético cristalino (Glass Substrates), aposentando definitivamente os velhos substratos orgânicos baseados em resina epóxi e fibra de vidro que dominaram a eletrônica nos últimos 40 anos.

O problema com os substratos orgânicos tradicionais era a deformação mecânica sob estresse térmico: quando um processador moderno consome 400W a 500W, o substrato orgânico dilata de forma desigual, quebrando as micro-esferas de solda (micro-bumps) de apenas 25 micrômetros que conectam os diferentes chiplets.

O vidro sintético, por outro lado, possui uma estabilidade térmica quase perfeita e superfície microscopicamente plana, permitindo reduzir o espaçamento entre conexões de chiplets (pitch) de 50 micrômetros para menos de 5 micrômetros.

Isso permite empacotar até 64 chiplets de cálculo e memória no mesmo pacote de processador com 10 vezes mais densidade de interconexão e eficiência energética brutalmente superior.

Além disso, o vidro permite a abertura de vias ópticas diretas (Through-Glass Vias — TGVs) para transmissão de dados por feixes de luz laser, unindo a tecnologia de substratos de vidro à computação fotônica.`
  },
  {
    id: 'art-38',
    category: 'Ciência',
    title: 'Captura Direta de Ar (DAC) por Energia Solar Concentrada: usinas eliminam gigatoneladas de CO₂ da atmosfera',
    excerpt: 'Climeworks e Occidental Petroleum inauguram o maior complexo de remoção de carbono do Texas alimentado por energia solar.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 28 dias',
    readTime: '16 min de leitura',
    image: '/art_fusao_nuclear.png',
    tagColor: 'text-orange-400',
    relatedIds: ['art-14', 'art-34', 'art-25'],
    content: `A descarbonização da atmosfera terrestre ganhou sua primeira ferramenta de escala planetária. A Climeworks em parceria com a Occidental Petroleum colocou em operação o complexo "Stratis 1" no deserto do Texas, a maior usina de Captura Direta de Ar (Direct Air Capture — DAC) da história, capaz de retirar 5 milhões de toneladas de dióxido de carbono (CO₂) diretamente da atmosfera por ano.

O grande obstáculo histórico do DAC era o alto consumo de energia elétrica e térmica necessário para dessorver o CO₂ capturado nos filtros sólidos de aminas. A usina Stratis 1 resolveu o problema utilizando espelhos de Energia Solar Concentrada (CSP) com coletores térmicos de sais fundidos que atingem 650°C sem consumir um único Watt da rede elétrica convencional.

O ar atmosférico é aspirado por ventiladores industriais alimentados por painéis solares bifaciais, passando por contatores químicos que absorvem o CO₂ seletivamente.

Uma vez saturados, os filtros são aquecidos pelo calor dos sais fundidos solares, liberando o CO₂ gasoso com 99,9% de pureza.

O gás capturado é então pressurizado a 150 atmosferas e injetado em formações rochosas basálticas profundas a 2,5 km de profundidade, onde reage mineralmente com cálcio e magnésio para transformar-se em pedra calcária sólida em menos de dois anos, garantindo sequestro permanente por milhões de anos.`
  },
  {
    id: 'art-39',
    category: 'Games',
    title: 'Holografia de Mesa para Jogos de Estratégia: displays volátricos 3D sem necessidade de óculos',
    excerpt: 'Looking Glass e Sony lançam telas holográficas espaciais que projetam maquetes interativas flutuando sobre a mesa.',
    author: 'Beatriz Lima',
    date: 'Há 29 dias',
    readTime: '15 min de leitura',
    image: '/art_vr_gaming.png',
    tagColor: 'text-emerald-400',
    relatedIds: ['art-15', 'art-22', 'art-8'],
    content: `Os jogos de estratégia em tempo real (RTS) e RPGs de mesa virtuais ganharam uma nova dimensão física. A Looking Glass Factory em colaboração com a Sony introduziu a linha de displays holográficos de mesa "Spatial Table 3D". A tecnologia permite que múltiplos jogadores ao redor da mesma mesa vejam e interajam com maquetes virtuais tridimensionais flutuando no ar sem precisar usar qualquer tipo de óculos de realidade virtual ou aumentada.

A tela utiliza um painel lenticular de micro-precisão de 8K combinado com rastreamento ocular dinâmico de alta velocidade (Eye-Tracking Multi-View). O sistema projeta 100 perspectivas angulares diferentes da mesma cena 3D simultaneamente em um campo de visão de 160 graus.

Quando um jogador se move ao redor da mesa, a paralaxe da imagem muda exatamente como mudaria se ele estivesse olhando para um tabuleiro físico real com miniaturas.

Jogos de estratégia como Civilization VIII e Warhammer 40.000 Digital Edition foram adaptados para a tecnologia, permitindo que os comandantes peguem unidades virtuais com as mãos via sensores de movimento Leap Motion e emitam ordens táticas de ataque diretamente na maquete holográfica.

A tecnologia holográfica de mesa finalmente realiza a visão clássica de ficção científica vista em filmes como Star Wars, transformando salas de estar em centros de comando interativos.`
  },
  {
    id: 'art-40',
    category: 'IA',
    title: 'Agentes de IA na Educação Personalizada: cada estudante do mundo ganha um tutor socrático sob medida',
    excerpt: 'Plataforma desenvolvida com apoio da UNESCO adapta o currículo em tempo real ao ritmo e perfil cognitivo de cada aluno.',
    author: 'Fernanda Costa',
    date: 'Há 30 dias',
    readTime: '16 min de leitura',
    image: '/art_openai_o3.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-21', 'art-24', 'art-7'],
    content: `A democratização do ensino de altíssima qualidade alcançou um marco sem precedentes. Um consórcio global liderado pela Khan Academy e financiado pela UNESCO lançou a plataforma "SocratesAI", que disponibiliza gratuitamente para estudantes de mais de 100 países um tutor autônomo baseado em inteligência artificial adaptativa.

Diferente de videoaulas estáticas ou testes padronizados de múltipla escolha, o SocratesAI atua como um tutor socrático individualizado 24 horas por dia. O sistema não fornece respostas prontas para os deveres de casa dos alunos: em vez disso, faz perguntas orientadoras que guiam o estudante na descoberta dos conceitos por conta própria.

Utilizando modelos de avaliação cognitiva contínua, a IA identifica o momento exato em que um estudante apresenta lacunas de aprendizado em disciplinas de matemática, física ou programação.

Se um aluno de 14 anos demonstra dificuldade em equações quadráticas devido à incompreensão de frações aprendidas anos antes, a IA adapta temporariamente a linguagem da explicação, gerando exemplos baseados nos hobbies favoritos do aluno (como futebol, videogames ou música).

Em testes de larga escala aplicados a 500 mil estudantes na Índia, Brasil e Nigéria, o grupo acompanhado pelo SocratesAI apresentou evolução no aprendizado 3,2 vezes mais rápida em comparação com turmas de ensino tradicional em salas de aula convencionais.`
  },
  {
    id: 'art-41',
    category: 'Hardware',
    title: 'Armazenamento Magneto-Óptico de 100 Terabytes por Disco de Polímero cristalino',
    excerpt: 'Sony e Universidade de Xangai criam mídias ópticas 3D de 100 camadas capazes de substituir gavetas inteiras de servidores.',
    author: 'Gabriel Santos',
    date: 'Há 31 dias',
    readTime: '15 min de leitura',
    image: '/art_supercomputadores_exascale.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-30', 'art-23', 'art-19'],
    content: `A tecnologia de discos ópticos ressurgiu com força devastadora no mercado de arquivamento de data centers. Pesquisadores da Universidade de Ciência e Tecnologia de Xangai em parceria com a Sony lançaram a tecnologia de discos magneto-ópticos 3D de alta densidade (AIE-DD), capazes de armazenar até 100 Terabytes de dados em um único disco do tamanho e espessura de um DVD convencional.

O avanço foi alcançado utilizando um filme de polímero fotossensível dopado com moléculas de alta emissão induzida por agregação (AIE). Diferente dos discos Blu-ray que gravam dados em apenas 2 a 4 camadas bidimensionais na superfície, o novo disco grava dados em 100 camadas tridimensionais empilhadas no volume do material com espaçamento de apenas 1 micrômetro entre camadas.

A leitura e escrita são realizadas por um laser femtossegundo duplo de nitreto de gálio que altera o estado luminescente dos pontos no polímero em escala nanométrica.

Cada disco de 100 TB consome zero energia elétrica quando armazenado em prateleiras, com vida útil estimada em mais de 100 anos sem degradação do material.

A tecnologia reduz o espaço físico exigido por data centers de backup em 99%, permitindo que racks inteiros de discos rígidos pesados sejam substituídos por pequenos gaveteiros de mídias ópticas de ultra-alta densidade.`
  },
  {
    id: 'art-42',
    category: 'Ciência',
    title: 'Rins Bioartificiais Implantáveis com Células-Tronco dispensam a hemodiálise definitiva em doentes renais',
    excerpt: 'Projeto Kidney Project do UCSF completa ensaios humanos com bioreator cirúrgico de filtração contínua.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 32 dias',
    readTime: '17 min de leitura',
    image: '/art_biotecnologia_crispr.png',
    tagColor: 'text-blue-400',
    relatedIds: ['art-17', 'art-10', 'art-18'],
    content: `Mais de 2 milhões de pessoas no mundo que dependem de sessões exaustivas de hemodiálise semanal para sobreviver têm agora uma perspectiva real de cura definitiva. O consórcio The Kidney Project, liderado pela Universidade da Califórnia em São Francisco (UCSF) e pela Vanderbilt University, concluiu com sucesso a primeira fase de ensaios cirúrgicos do Rim Bioartificial Implantável em humanos.

O dispositivo tem o tamanho de um smartphone e é implantado cirurgicamente na cavidade abdominal do paciente, conectado diretamente às artérias e veias renais primárias e à bexiga.

O rim bioartificial é composto por duas partes integradas: um hemofiltro de silício nanoporoso que remove toxinas metabólicas e excesso de água do sangue acionado exclusivamente pela pressão arterial do próprio paciente (sem necessidade de bombas externas ou baterias), e um bioreator com células tubulares renais humanas cultivadas a partir de células-tronco pluripotentes induzidas (iPSCs).

As células tubulares renais no bioreator realizam as funções biológicas complexas de reabsorção de nutrientes, eletrólitos e regulação da pressão arterial que nenhuma máquina de hemodiálise externa consegue replicar.

Como as células são protegidas por membranas de silício contra o sistema imunológico do paciente, a tecnologia elimina a necessidade de drogas imunossupressoras rejeição-zero. Todos os pacientes do ensaio clínico puderam descontinuar a hemodiálise completamente, recuperando estilo de vida normal.`
  },
  {
    id: 'art-43',
    category: 'Games',
    title: 'Motores de Física Quântica em Tempo Real aceleram simulações de fluidos e destruição de cenários',
    excerpt: 'NVIDIA PhysX 6 introduz solver de dinâmica de fluidos baseado em placas gráficas que calcula bilhões de partículas sem engasgos.',
    author: 'Beatriz Lima',
    date: 'Há 33 dias',
    readTime: '15 min de leitura',
    image: '/art_rtx5090.png',
    tagColor: 'text-emerald-400',
    relatedIds: ['art-22', 'art-2', 'art-8'],
    content: `A física nos jogos de videogame deu o maior salto qualitativo em mais de vinte anos. A NVIDIA lançou a suíte de física em tempo real PhysX 6, construída para rodar nativamente nos Tensor Cores das placas GeForce RTX de última geração. O motor abandona a física baseada em rigidez simplificada e aproximações de partículas para adotar a dinâmica de fluidos computacional (CFD) de grau industrial.

O recurso mais impressionante é o "Unified Particle Solver", que simula bilhões de partículas simultâneas de água, lama, fumaça, fogo e destruição de concreto na mesma estrutura de dados integrada.

Em um jogo de combate como Battlefield: 2026, quando um edifício de 30 andares desmorona sob fogo de artilharia, a destruição não é uma animação pré-calculada: cada tijolo, vergalhão e nuvem de poeira se despedaçam fisicamente com base na força do impacto, massa do projétil e resistência dos materiais.

Os fluidos agora possuem viscosidade dinâmica realista: a água de um rio flui e desvia de obstáculos construídos pelos jogadores em tempo real, preenchendo depressões no terreno e interagindo fisicamente com a vestimenta dos personagens.

A física unificada transforma o próprio cenário em elemento tático de jogabilidade imprevisível e anatomicamente correto.`
  },
  {
    id: 'art-44',
    category: 'IA',
    title: 'IA no Design de Proteínas Sintéticas: AlphaFold 4 projeta enzimas capazes de decompor plásticos nos oceanos',
    excerpt: 'Google DeepMind e Universidade de Portsmouth sintetizam super-enzimas que devoram PET e poliuretano em 24 horas.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 34 dias',
    readTime: '16 min de leitura',
    image: '/art_inteligencia_artificial_geral.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-10', 'art-21', 'art-17'],
    content: `A poluição por plásticos nos oceanos e aterros sanitários ganhou uma solução biotecnológica projetada por Inteligência Artificial. A Google DeepMind apresentou a quarta geração do seu modelo de previsão e design de estruturas biológicas, o AlphaFold 4, capaz de criar proteínas e enzimas totalmente sintéticas do zero (de novo protein design) que não existem na natureza.

Em colaboração com o Centre for Enzyme Innovation da Universidade de Portsmouth, os pesquisadores utilizaram o AlphaFold 4 para projetar a super-enzima "PETase-X".

A PETase-X foi desenhada com um sítio ativo otimizado para se acoplar com afinidade perfeita às cadeias de polímeros de Tereftalato de Polietileno (PET) e Poliuretano, que normalmente levariam 450 anos para se decompor no meio ambiente.

Em testes de laboratório industrial, a enzima sintética depolimerizou garrafas plásticas PET completas e espumas de poliuretano em seus monômeros básicos (ácido tereftálico e etilenoglicol) em apenas 18 horas a temperatura de 45°C.

Os monômeros resultantes do processo de digestão enzimática possuem 100% de pureza e podem ser reutilizados imediatamente para fabricar novos plásticos de qualidade virgem, criando uma economia circular perfeita sem necessidade de refinar novo petróleo.`
  },
  {
    id: 'art-45',
    category: 'Hardware',
    title: 'Redes Locais Wi-Fi 7e e LIFI óptico atingem 40 Gbps sem fio dentro de escritórios e residências',
    excerpt: 'Qualcomm e Philips lançam roteadores híbridos que transmitem dados por luz visível e rádio em alta frequência.',
    author: 'Gabriel Santos',
    date: 'Há 35 dias',
    readTime: '14 min de leitura',
    image: '/art_redes_6g_satelites.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-20', 'art-31', 'art-8'],
    content: `A conectividade sem fio em ambientes fechados atingiu velocidades que superam a maioria das conexões de cabo de rede Ethernet CAT8. A Qualcomm em parceria com a Signify (antiga Philips Lighting) lançou a primeira arquitetura de rede doméstica híbrida Wi-Fi 7e / LiFi (Light Fidelity).

A tecnologia combina transmissões de rádio de 6 GHz de canal ultra-largo (320 MHz) com transmissão de dados por ondas de luz LED infravermelha invisível a olho nu emitida pelas próprias lâmpadas do teto do ambiente.

O LiFi óptico atinge velocidades diretas de 40 Gbps por lâmpada com latência de apenas 0,2 milissegundos e zero interferência de radiofrequência com vizinhos. Como a luz não atravessa paredes sólidas, a segurança da rede LiFi é absoluta: ninguém fora da sala física consegue interceptar os dados.

Quando o usuário se desloca pela casa carregando um laptop ou headset VR, o modem alterna imperceptivelmente (seamless handover) entre a conexão LiFi sob a lâmpada e a rede Wi-Fi 7e de 6 GHz.

A tecnologia elimina gargalos de transmissão sem fio para streaming de realidade virtual 8K não-comprimido e transferências de arquivos de centenas de Gigabytes em segundos.`
  }
];
