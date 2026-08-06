import type { Article } from './types';

export const ARTICLES_PART5: Article[] = [
  {
    id: 'art-56',
    category: 'Ciência',
    title: 'Terapia Genética Anti-Envelhecimento Reverte Idade Biológica em 10 Anos nos Primeiros Ensaios Humanos',
    excerpt: 'Fatores de Yamanaka parciais aplicados via terapia de RNA mensageiro rejuvenescem tecidos cardíacos e vasculares.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 46 dias',
    readTime: '17 min de leitura',
    image: '/art_biotecnologia_crispr.png',
    tagColor: 'text-blue-400',
    relatedIds: ['art-17', 'art-42', 'art-10'],
    content: `O rejuvenescimento celular controlado deixou de ser ficção científica e tornou-se uma terapia médica real. O Salk Institute em parceria com a Altos Labs publicou no Journal of Clinical Investigation os resultados da Fase II dos ensaios clínicos da terapia de reprogramação celular epigenética "Rejuvenate-mRNA".

A terapia utiliza vetores de RNA mensageiro encapsulados em nanopartículas lipídicas para induzir temporariamente quatro fatores de transcrição (os Fatores de Yamanaka: Oct4, Sox2, Klf4 e c-Myc) nos tecidos de pacientes com doenças vasculares degenerativas.

A indução pulsada de 48 horas redefiniu os marcadores de metilação do DNA celular (o relógio epigenético de Horvath) para um estado idêntico ao de células 10 anos mais jovens, sem apagar a identidade funcional das células e sem induzir a formação de teratomas ou câncer.

Nos 60 pacientes acompanhados, exames de ressonância magnética e marcadores séricos demonstraram rejuvenescimento da elasticidade arterial, aumento da densidade mitocôndrial nos tecidos cardíacos e melhora da capacidade cognitiva.

A tecnologia abre caminho para tratar a principal causa subjacente de doenças crônicas no mundo: o próprio envelhecimento biológico dos tecidos.`
  },
  {
    id: 'art-57',
    category: 'Hardware',
    title: 'Chiplets 3D Interconnect com Micro-Fluídica Integrada: refrigeração líquida dentro do próprio chip de silício',
    excerpt: 'TSMC N2X com tecnologia de canais micro-fluídicos gravados a laser remove 1.000W de calor por centímetro quadrado.',
    author: 'Gabriel Santos',
    date: 'Há 47 dias',
    readTime: '15 min de leitura',
    image: '/art_2nm_chip.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-9', 'art-37', 'art-2'],
    content: `A remoção de calor de chips de supercomputadores atingiu a escala microscópica do próprio silício. A TSMC apresentou a tecnologia de empacotamento 3D "CoWoS-DirectCool", que grava canais micro-fluídicos de 10 micrômetros de diâmetro diretamente entre as camadas de silício dos chiplets do processador.

Nas tecnologias tradicionais de resfriamento líquido, o líquido refrigerante passa por um bloco de cobre afixado do lado de fora do capô metálico (IHS) do chip. A transferência de calor é limitada pela resistência térmica das pastas térmicas e da tampa metálica.

Na nova tecnologia da TSMC, um refrigerante dielétrico fluorado circula diretamente dentro dos canais micro-fluídicos esculpidos a laser a fração de milímetros das junções de transistores de maior dissipação.

Isso permite dissipar mais de 1.000 Watts por centímetro quadrado com diferença de temperatura de apenas 5°C entre o chip e o fluido.

A refrigeração interna permite que GPUs de IA operem em frequências de boost de 4,5 GHz sem qualquer throttling térmico, dobrando o desempenho por watt do sistema.`
  },
  {
    id: 'art-58',
    category: 'Games',
    title: 'Realidade Mista Pass-Through em Óculos de Sol: a fusão definitiva do mundo real com jogos virtuais',
    excerpt: 'Apple Vision Air e Meta Ray-Ban Display pesam apenas 75g e entregam gráficos holográficos sob luz solar direta.',
    author: 'Beatriz Lima',
    date: 'Há 48 dias',
    readTime: '15 min de leitura',
    image: '/art_vr_gaming.png',
    tagColor: 'text-emerald-400',
    relatedIds: ['art-15', 'art-8', 'art-39'],
    content: `Os pesados e volumosos visores de realidade virtual tornaram-se itens do passado. A Apple e a Meta lançaram seus óculos de realidade mista no formato de óculos de sol convencionais: o Apple Vision Air e o Meta Ray-Ban Display Pro, ambos pesando apenas 75 gramas.

Os óculos utilizam visores Micro-LED Waveguide com brilho de 5.000 nits, permitindo visualizar hologramas 3D perfeitamente nítidos mesmo sob a luz direta do sol na praia ou na rua.

Sensores de rastreamento espacial SLAM integrados nas armações mapeiam o ambiente ao redor em tempo real, permitindo que jogos de realidade aumentada (AR) transformem parques públicos em campos de batalha virtuais ou prédios reais em cenários de invasão alienígena.

Com integração de modems 6G e baterias de alta densidade integradas nas hastes dos óculos com autonomia de 6 horas, a computação espacial finalmente tornou-se um item de moda e uso diário indispensável.`
  },
  {
    id: 'art-59',
    category: 'IA',
    title: 'Sistemas de IA de Raciocínio Jurídico Autônomo reduzem o acúmulo de processos judiciais em 78%',
    excerpt: 'Tribunais na Estônia, Brasil e Reino Unido utilizam IA para elaboração de minutas de sentenças em causas repetitivas.',
    author: 'Fernanda Costa',
    date: 'Há 49 dias',
    readTime: '15 min de leitura',
    image: '/art_openai_o3.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-7', 'art-40', 'art-24'],
    content: `A morosidade do sistema judiciário que afligia milhões de cidadãos em todo o mundo encontrou uma solução de eficiência baseada em Inteligência Artificial. Os ministérios da Justiça da Estônia, Reino Unido e o Conselho Nacional de Justiça (CNJ) do Brasil implementaram o sistema de análise jurídica "JurisAI".

O JurisAI é um modelo especializado de linguagem treinado em toda a jurisprudência, constituição e códigos de leis nacionais, capaz de analisar autos de processos judiciais de milhares de páginas em segundos.

Em causas repetitivas de Direito do Consumidor, cobranças indevidas e disputas previdenciárias, o sistema analisa os documentos anexados pelas partes, verifica a autenticidade das provas com modelos de visão e gera uma minuta de sentença fundamentada na jurisprudência pacificada dos tribunais superiores.

A minuta é submetida ao juiz titular, que revisa a fundamentação e assina a decisão digitalmente com apenas um clique.

O tempo médio de julgamento de causas cíveis simples caiu de 2,5 anos para apenas 4 dias, eliminando o acúmulo de milhões de processos pendentes nos tribunais.`
  },
  {
    id: 'art-60',
    category: 'Ciência',
    title: 'Telescópio Espacial Habitable Worlds Observatory (HWO) inicia busca por assinaturas de oxigênio em 100 exoplanetas',
    excerpt: 'NASA e ESA iniciam a construção do super-telescópio óptico de 6 metros munido de coronógrafo de supressão estelar.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 50 dias',
    readTime: '16 min de leitura',
    image: '/art_james_webb.png',
    tagColor: 'text-blue-400',
    relatedIds: ['art-3', 'art-29', 'art-6'],
    content: `A busca científica pela confirmação definitiva de vida extraterrestre deu seu passo decisivo. A NASA e a ESA iniciaram a montagem final do Habitable Worlds Observatory (HWO), o telescópio espacial de próxima geração projetado especificamente para detectar atmosferas com oxigênio e ozônio em planetas similares à Terra.

Diferente do James Webb que observa no infravermelho, o HWO observará no espectro óptico e ultravioleta com um espelho de 6 metros de diâmetro estabilizado atomicamente em picômetros.

O segredo do HWO é seu coronógrafo óptico de última geração, capaz de bloquear a luz ofuscante da estrela hospedeira em 10 bilhões de vezes, permitindo fotografar diretamente o tênue ponto de luz refletido pelo exoplaneta ao seu redor.

O objetivo da missão é analisar a atmosfera de 100 exoplanetas parecidos com a Terra em estrelas próximas (até 50 anos-luz) buscando a "assinatura de vida tríplice": presença simultânea de oxigênio molecular (O₂), ozônio (O₃) e metano (CH₄) em equilíbrio fotoquímico.

A comunidade científica projeta que o HWO fornecerá a confirmação definitiva de vida em outro planeta antes do final da década de 2030.`
  }
];
