import type { Article } from './types';

export const ARTICLES_PART4: Article[] = [
  {
    id: 'art-51',
    category: 'IA',
    title: 'Modelos de Raciocínio Matemático Formal provam o primeiro teorema inédito em Teoria dos Números',
    excerpt: 'DeepMind AlphaProof e OpenAI o3 resolvem conjectura matemática em aberto há 80 anos na Teoria dos Números.',
    author: 'Lucas Mendes',
    date: 'Há 41 dias',
    readTime: '16 min de leitura',
    image: '/art_inteligencia_artificial_geral.png',
    tagColor: 'text-cyan-400',
    relatedIds: ['art-7', 'art-21', 'art-12'],
    content: `A inteligência artificial alcançou a fronteira da matemática pura abstrata. O sistema "AlphaProof 2", desenvolvido pela Google DeepMind em parceria com matemáticos da medalha Fields da União Matemática Internacional, apresentou a prova formal e verificável da Conjectura de Erdos-Straus para números primos de grandes dimensões — um problema de Teoria dos Números que permanecia não resolvido desde 1948.

O AlphaProof utiliza a linguagem de programação formal Lean 4 para verificar a validade lógica de cada passo da demonstração matemática, garantindo que não existam alucinações ou erros de raciocínio.

O modelo combinou aprendizado por reforço com busca em árvore estendida no espaço latente de provas formais, gerando uma demonstração de 4.200 linhas de código Lean que foi totalmente validada pelos compiladores de verificação lógica.

A comunidade internacional de matemática celebrou o feito como a confirmação de que sistemas de IA deixaram de ser meros calculadores numéricos para se tornarem parceiros de descoberta científica abstrata de nível elite.`
  },
  {
    id: 'art-52',
    category: 'Hardware',
    title: 'Processadores Neuromórficos de Spikes: chips que imitam o cérebro humano consomem 1 Watt para IA avançada',
    excerpt: 'Intel Loihi 3 e BrainChip Akida 2 trazem arquitetura baseada em impulsos elétricos de sinapses biológicas.',
    author: 'Gabriel Santos',
    date: 'Há 42 dias',
    readTime: '15 min de leitura',
    image: '/art_neurotecnologia_bci.png',
    tagColor: 'text-purple-400',
    relatedIds: ['art-18', 'art-31', 'art-9'],
    content: `A arquitetura de computação von Neumann tradicional de CPU/GPU encontrou sua alternativa biológica. A Intel apresentou o chip neuromórfico "Loihi 3", contendo 100 milhões de neurônios artificiais de spikes e 100 bilhões de sinapses programáveis no mesmo circuito de silício.

Em vez de processar matrizes numéricas continuamente como as GPUs convencionais (consumindo centenas de Watts), os chips neuromórficos operam por impulsos elétricos esparsos (spikes), consumindo energia apenas quando um neurônio efetivamente dispara um sinal — exatamente como o cérebro humano.

O chip Loihi 3 processa tarefas complexas de reconhecimento de padrões visuais e sensoriamento tátil consumindo apenas 1,2 Watt de energia — 1.000 vezes menos energia que uma GPU de data center.

A tecnologia é ideal para robótica espacial, drones autônomos em áreas remotas e próteses robóticas que exigem inferência de IA local com bateria de longa duração.`
  },
  {
    id: 'art-53',
    category: 'Ciência',
    title: 'Energia Solar Espacial (SBSP): satélites coletores transmitem 1 GW de energia por micro-ondas para a Terra',
    excerpt: 'JAXA e Caltech realizam a primeira transmissão contínua de eletricidade gerada no espaço para usina receptora em solo.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 43 dias',
    readTime: '16 min de leitura',
    image: '/art_starship.png',
    tagColor: 'text-orange-400',
    relatedIds: ['art-6', 'art-14', 'art-20'],
    content: `A energia solar no espaço não sofre a interrupção da noite nem a atenuação das nuvens atmosféricas. A Agência de Exploração Aeroespacial do Japão (JAXA) em parceria com a Caltech colocou em operação o primeiro satélite demonstrador de Energia Solar Espacial (Space-Based Solar Power — SBSP), denominado "SOLARIS-1".

Posicionado em órbita geoestacionária a 36.000 km de altitude, o satélite possui um arranjo de painéis solares ultraleves de 2 quilômetros quadrados que captam a radiação solar ininterrupta com intensidade 8 vezes maior que na superfície terrestre.

A eletricidade gerada é convertida em um feixe concentrado de micro-ondas de frequência de 5,8 GHz e transmitida com precisão milimétrica para uma antena receptora (rectenna) instalada em uma área desértica no Japão.

A rectenna converte as micro-ondas de volta em energia elétrica de corrente alternada com eficiência de conversão de 82%, injetando 1 Gigawatt constante na rede elétrica nacional.

A tecnologia promete fornecer energia limpa ininterrupta 24/7 para qualquer ponto do planeta Terra, independente de condições climáticas.`
  },
  {
    id: 'art-54',
    category: 'Games',
    title: 'Áudio Espacial Ray-Traced 3D em Tempo Real simula reverberação e oclusão de som em materiais de jogos',
    excerpt: 'Dolby Atmos e Steam Audio 3.0 trazem acústica física perfeita onde cada som rebate realisticamente nas superfícies.',
    author: 'Beatriz Lima',
    date: 'Há 44 dias',
    readTime: '14 min de leitura',
    image: '/art_vr_gaming.png',
    tagColor: 'text-emerald-400',
    relatedIds: ['art-15', 'art-8', 'art-43'],
    content: `A imersão sonora nos jogos de computador atingiu a mesma precisão física da computação gráfica por ray tracing. A Dolby Laboratories e a Valve lançaram o motor de áudio "Steam Audio RayTraced 3.0", que substitui os efeitos de eco pré-configurados por simulação física de fótons sonoros (acoustical ray tracing) em tempo real.

O motor calcula como as ondas de som emitidas por passos de inimigos, disparos ou conversas se propagam pelo ambiente 3D, refletindo em superfícies de concreto, absorvendo em carpetes de tecido e difratando ao redor de quinas e portas abertas.

Em um jogo de sobrevivência como Silent Hill 5 ou Resident Evil 9, se um monstro caminha no corredor do andar superior atrás de uma parede de gesso, o jogador escuta o som abafado exatamente na direção e distância corretas, identificando o tipo de piso e material da parede pelo timbre da reverberação.

Para eSports competitivos em fones de ouvido estéreo convencionais, a tecnologia entrega uma vantagem tática sem precedentes na localização espacial de adversários.`
  },
  {
    id: 'art-55',
    category: 'IA',
    title: 'Agentes de IA na Ciberdefesa de Redes Elétricas neutralizam 100% das tentativas de ataques cibernéticos em tempo real',
    excerpt: 'Sistema autônomo implantado nas grades de energia da Europa e EUA impede sequestros cibernéticos de infraestrutura crítica.',
    author: 'Pedro Nascimento',
    date: 'Há 45 dias',
    readTime: '15 min de leitura',
    image: '/art_ciberseguranca.png',
    tagColor: 'text-rose-400',
    relatedIds: ['art-13', 'art-[32]', 'art-11'],
    content: `A proteção da infraestrutura crítica energética do mundo ocidental ganhou um escudo autônomo impenetrável. A Agência de Cibersegurança e Infraestrutura dos EUA (CISA) e a ENISA europeia implantaram a plataforma de ciberdefesa por IA "GridShield AI" em mais de 3.000 usinas elétricas e subestações de alta tensão.

O GridShield opera como uma rede de agentes de IA de isolamento imunológico que monitora pacotes de comunicação industrial nos protocolos SCADA e Modbus em tempo real.

Quando hackers estatais tentam injetar comandos maliciosos para desligar disjuntores de alta tensão ou alterar a frequência de geradores (como nos ataques de ransomware de 2024), a IA detecta a anomalia comportamental em 0,5 milissegundo.

O sistema isola instantaneamente o segmento de rede comprometido, cria um ambiente honeypot virtual para enganar os atacantes e reencaminha o tráfego elétrico sem causar interrupção no fornecimento de energia para a população.

Nos primeiros 6 meses de operação, o GridShield neutralizou 1.450 tentativas de intrusão cibernética avançada sem necessitar de intervenção humana.`
  }
];
