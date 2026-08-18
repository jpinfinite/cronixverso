/**
 * Cronixverso - Tech & Gaming Affiliate Engine
 * Shopee Link: https://s.shopee.com.br/70JRIblj7k
 * Mercado Livre Link: https://meli.la/1dvC1LN
 */

export const AFFILIATE_CONFIG = {
  shopee: {
    appId: '18320170187',
    partnerId: 'an_18320170187',
    baseShortLink: 'https://s.shopee.com.br/70JRIblj7k',
  },
  mercadoLivre: {
    toolId: '46691314',
    user: 'jonathapereiraoliveirasantos',
    productCode: '2PAVPD-RJ7K',
    baseShortLink: 'https://meli.la/2SDG2D8',
    storeUrl: 'https://www.mercadolivre.com.br/social/jonathapereiraoliveirasantos?matt_tool=46691314&matt_word=jonathapereiraoliveirasantos',
  }
};

export interface TechProduct {
  id: string;
  name: string;
  brand: string;
  category: 'consoles' | 'hardware' | 'armazenamento' | 'perifericos';
  categoryLabel: string;
  description: string;
  priceEstimate: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  searchKeyword: string;
  imageUrl: string;
}

export const FEATURED_TECH_PRODUCTS: TechProduct[] = [
  {
    id: 'ps5-slim-console',
    name: 'Console PlayStation 5 Slim Edição Digital com 1TB SSD',
    brand: 'Sony PlayStation',
    category: 'consoles',
    categoryLabel: 'Consoles & Games',
    description: 'Jogos em 4K até 120 FPS com Ray Tracing e áudio 3D imersivo. Acompanha controle DualSense com gatilhos adaptáveis.',
    priceEstimate: 'R$ 3.499,00',
    rating: 4.9,
    reviewsCount: 3850,
    badge: 'Mais Vendido',
    searchKeyword: 'playstation 5 slim console 1tb ssd original',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'nintendo-switch-oled',
    name: 'Console Nintendo Switch OLED 64GB com Joy-Con',
    brand: 'Nintendo',
    category: 'consoles',
    categoryLabel: 'Consoles & Games',
    description: 'Tela OLED vibrante de 7 polegadas com cores intensas e alto contraste. Perfeito para jogar portátil ou na TV.',
    priceEstimate: 'R$ 1.999,00',
    rating: 4.9,
    reviewsCount: 2940,
    badge: 'Escolha Gamer',
    searchKeyword: 'nintendo switch oled 64gb original',
    imageUrl: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'rtx-4060-gpu',
    name: 'Placa de Vídeo GeForce RTX 4060 8GB GDDR6 DLSS 3',
    brand: 'NVIDIA / Galax / MSI',
    category: 'hardware',
    categoryLabel: 'Hardware & Placas de Vídeo',
    description: 'Arquitetura Ada Lovelace com DLSS 3 e geração de quadros por IA. Desempenho extremo em Full HD e Quad HD.',
    priceEstimate: 'R$ 1.949,00',
    rating: 4.9,
    reviewsCount: 1720,
    badge: 'Melhor Custo-Benefício',
    searchKeyword: 'placa de video geforce rtx 4060 8gb gddr6',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ryzen-7-7800x3d',
    name: 'Processador AMD Ryzen 7 7800X3D (8-Core, 16-Threads, 5.0GHz)',
    brand: 'AMD',
    category: 'hardware',
    categoryLabel: 'Hardware & Processadores',
    description: 'O melhor processador gamer do mundo com tecnologia 3D V-Cache de 96MB L3. Máxima taxa de quadros e estabilidade.',
    priceEstimate: 'R$ 2.699,00',
    rating: 5.0,
    reviewsCount: 1480,
    badge: 'Desempenho Máximo',
    searchKeyword: 'processador amd ryzen 7 7800x3d am5',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'ssd-nvme-2tb-gen4',
    name: 'SSD M.2 NVMe 2TB PCIe 4.0 (Até 7400 MB/s)',
    brand: 'Kingston / Corsair / Netac',
    category: 'armazenamento',
    categoryLabel: 'Armazenamento & Memória',
    description: 'Velocidades ultrarrápidas de leitura e gravação para carregar jogos pesados instantaneamente no PC e no PS5.',
    priceEstimate: 'R$ 699,00',
    rating: 4.9,
    reviewsCount: 4210,
    badge: 'PS5 Compatível',
    searchKeyword: 'ssd m2 nvme 2tb pcie 4.0 7000mbs ps5',
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'monitor-gamer-165hz',
    name: 'Monitor Gamer 27 Polegadas IPS Full HD 165Hz 1ms',
    brand: 'LG / AOC / Samsung',
    category: 'perifericos',
    categoryLabel: 'Periféricos & Setup',
    description: 'Taxa de atualização de 165Hz com AMD FreeSync Premium e painel IPS com fidelidade de cores 99% sRGB.',
    priceEstimate: 'R$ 899,00',
    rating: 4.8,
    reviewsCount: 3120,
    badge: 'Alta Taxa Hz',
    searchKeyword: 'monitor gamer 27 polegadas ips 165hz 1ms',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'teclado-mecanico-rgb',
    name: 'Teclado Mecânico Gamer RGB ABNT2 Switch Red Anti-Ghosting',
    brand: 'Redragon / HyperX',
    category: 'perifericos',
    categoryLabel: 'Periféricos & Setup',
    description: 'Switches mecânicos lineares silenciosos e ultra responsivos com iluminação RGB personalizável e layout brasileiro.',
    priceEstimate: 'R$ 219,00',
    rating: 4.8,
    reviewsCount: 5600,
    badge: 'Campeão de Vendas',
    searchKeyword: 'teclado mecanico gamer switch red rgb abnt2',
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'headset-gamer-71',
    name: 'Headset Gamer 7.1 Surround com Microfone Cancelador de Ruído',
    brand: 'HyperX / Logitech',
    category: 'perifericos',
    categoryLabel: 'Periféricos & Setup',
    description: 'Drivers de 53mm com áudio posicional nítido para ouvir passos e tiros com precisão cirúrgica em jogos competitivos.',
    priceEstimate: 'R$ 289,00',
    rating: 4.9,
    reviewsCount: 4890,
    badge: 'Áudio Espacial',
    searchKeyword: 'headset gamer 7.1 surround microfone cancelamento ruido',
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80'
  }
];

export function getShopeeTechUrl(searchQuery?: string): string {
  if (!searchQuery) {
    return AFFILIATE_CONFIG.shopee.baseShortLink;
  }
  return AFFILIATE_CONFIG.shopee.baseShortLink;
}

export function getMercadoLivreTechUrl(searchQuery?: string): string {
  if (!searchQuery) {
    return AFFILIATE_CONFIG.mercadoLivre.baseShortLink;
  }
  return AFFILIATE_CONFIG.mercadoLivre.baseShortLink;
}
