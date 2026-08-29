import { ServiceItem, GalleryPhoto, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Alinhare Pilates e Fisioterapia Integrativa',
  shortName: 'Alinhare',
  category: 'Estúdio de Pilates e Clínica de Fisioterapia Integrativa',
  slogan: 'Movimento pra fortalecer, alinhar e transformar.',
  headlineHero: 'Movimento para fortalecer, alinhar e transformar.',
  subheadlineHero: 'Pilates, fisioterapia e liberação miofascial em Londrina para cuidar do seu corpo com mais consciência, equilíbrio e qualidade de vida.',
  phoneDisplay: '(43) 99189-7341',
  phoneRaw: '5543991897341',
  address: {
    street: 'Rua Lord Lovat, 161',
    neighborhood: 'Jardim Londrilar',
    city: 'Londrina',
    state: 'PR',
    zip: '86010-690',
    full: 'Rua Lord Lovat, 161, Jardim Londrilar, Londrina - PR, 86010-690'
  },
  instagram: {
    handle: '@alinharepilates.londrina',
    url: 'https://www.instagram.com/alinharepilates.londrina/'
  },
  googleReviews: {
    rating: 5.0,
    totalReviews: 40,
    starsText: '5,0 estrelas no Google'
  },
  whatsappMessage: 'Olá! Conheci a Alinhare pelo site e gostaria de saber mais sobre os atendimentos.',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+Lord+Lovat,+161,+Jardim+Londrilar,+Londrina+-+PR,+86010-690',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.048386411516!2d-51.1578!3d-23.3188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4377042be6a3%3A0x0!2sRua%20Lord%20Lovat%2C%20161%20-%20Jardim%20Londrilar%2C%20Londrina%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'
};

export const getWhatsAppLink = (customText?: string) => {
  const text = customText || BUSINESS_INFO.whatsappMessage;
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
};

export const OFFICIAL_LOGO_URL =
  'https://instagram.fpoa1-1.fna.fbcdn.net/v/t51.82787-19/703480388_17873536686668130_2329213846736145406_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=n8FFoVomS-AQ7kNvwEcTxYZ&_nc_oc=AdrJhCWzXehXJhKMU0nmQ6RWxdvZSbC1EsFADvidzT0s57MWFWRGAwi0yxRzV9beq4xqZeX1Godu4d-eDtr1F_9P&_nc_zt=24&_nc_ht=instagram.fpoa1-1.fna&_nc_gid=AcIozdA6ehnejEqhErWmSQ&_nc_ss=7b6a8&oh=00_AQIiBZn9B5XpLvVcVrcUrlLZ7cEy2zHtjq6B8c0VYNuucw&oe=6A97F7C5';

export const OFFICIAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: 'Recepção e Acolhimento',
    subtitle: 'Entrada do espaço Alinhare',
    category: 'Recepção',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDwV6UOTKyKIby8iWjDFjQoBj2DRc7aIIVn0PFM5C8d63xZr8bjeUIUeOjST0v14Uu87rNEb7NQ8BaCcR6ya53QHzSmzNV9G_8BfCTbanfjoLUxaGbaP5RS-RQ9ML474RYO2L64a9M01Vn=w243-h406-n-k-no-nu',
    altText: 'Recepção da Alinhare Pilates e Fisioterapia Integrativa em Londrina'
  },
  {
    id: 2,
    title: 'Equipamentos e Studio',
    subtitle: 'Aparelhos completos para Pilates',
    category: 'Equipamentos',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTtaHWanLd8gWvvUIWznrAgL4mgs5z1woHTVRX54R_QZBjOZJFde1oEU4waz9d93MdxCovLIEXLhbNvB17EA0d_PyX775jAqBvAVUcAIULBBTBzGd0mecaK8cJ7AymWLXl_4MGTOjtQyTm=w243-h406-n-k-no-nu',
    altText: 'Equipamentos de Pilates da Alinhare em Londrina'
  },
  {
    id: 3,
    title: 'Ambiente de Treinamento',
    subtitle: 'Prática guiada com foco e ergonomia',
    category: 'Ambiente',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk7-xhycRnBGzDpx8VHmIWr_61KvJnp-ObSabH8gZkcV1t9fTotSYrhog-VQfhmIjGj6ps0NHl2J6U84kzPXzOxw9K3JqJNd_u23Y9nWeYNmwKsPYfwACQY07YVf4m1MH78-lqzrIS_y7mN=w243-h244-n-k-no-nu',
    altText: 'Ambiente do estúdio Alinhare Pilates em Londrina'
  },
  {
    id: 4,
    title: 'Espaço Interno Confortável',
    subtitle: 'Estrutura pensada para o seu bem-estar',
    category: 'Ambiente',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk3F1c_bTZQPaCoQFLi1zF4QtcrJkWa3zsXuEehEhbKAGAUexh94fa9hbmex0YoRw7bm4sNDiqJj2vgvNJnYwC_QaW4yvi4hojuKZfeYM32DBbkpv8HUmLDrV_FLA3IeMcdkmM8FOo-bSt7=w243-h244-n-k-no-nu',
    altText: 'Espaço interno da Alinhare no Jardim Londrilar em Londrina'
  },
  {
    id: 5,
    title: 'Detalhes e Cuidado',
    subtitle: 'Cada canto projetado para acolher',
    category: 'Detalhes',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnEBROTdL0xYVttvvKPb4BH2iZnMT1fogZRx_vG9ygW6yTXDGc2CWRFdozF7stLPBlaLeHyOy_6cwT2Mx6yGMuCUO1zkKGYWO9VvvJKwz2-myvfryvGLgtCA3vLwg61MtexITIc47N36GoX=w243-h244-n-k-no-nu',
    altText: 'Detalhes do estúdio Alinhare Pilates e Fisioterapia em Londrina'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pilates',
    title: 'PILATES',
    tagline: 'Movimento consciente, alinhamento e fortalecimento postural',
    description:
      'Aulas estruturadas com aparelhos específicos de Pilates, promovendo fortalecimento do core, ganho de flexibilidade, estabilidade articular e melhora postural contínua em um ambiente acolhedor.',
    highlights: [
      'Equipamentos dedicados e ambiente tranquilo',
      'Foco em respiração, controle e precisão de movimento',
      'Auxílio direto na prevenção e alívio de dores nas costas',
      'Atendimento no Jardim Londrilar em Londrina'
    ],
    ctaText: 'Conhecer',
    iconName: 'Activity'
  },
  {
    id: 'fisioterapia',
    title: 'FISIOTERAPIA',
    tagline: 'Cuidado individualizado com foco em funcionalidade',
    description:
      'Atendimento fisioterapêutico centrado na sua necessidade, visando restaurar movimentos naturais, reabilitar funções físicas e promover alívio de desconfortos musculares e articulares.',
    highlights: [
      'Avaliação atenta e plano individualizado',
      'Recuperação funcional e mobilidade ativa',
      'Acompanhamento próximo em cada etapa',
      'Prática baseada em evidência e respeito aos limites'
    ],
    ctaText: 'Conhecer',
    iconName: 'HeartPulse'
  },
  {
    id: 'fisioterapia-integrativa',
    title: 'FISIOTERAPIA INTEGRATIVA',
    tagline: 'Olhar global sobre o corpo, saúde e equilíbrio',
    description:
      'Uma abordagem integrada que compreende o corpo em sua totalidade, combinando técnicas manuais e exercícios funcionais para restabelecer o equilíbrio e a harmonia corporal.',
    highlights: [
      'Visão holística da biomecânica e do movimento',
      'Integração entre postura, hábitos e funcionalidade',
      'Atendimento focado em bem-estar duradouro',
      'Espaço sereno para desacelerar e cuidar do corpo'
    ],
    ctaText: 'Conhecer',
    iconName: 'Sparkles'
  },
  {
    id: 'liberacao-miofascial',
    title: 'LIBERAÇÃO MIOFASCIAL',
    tagline: 'Alívio de tensões, melhora da flexibilidade e relaxamento',
    description:
      'Técnicas manuais e instrumentais para atuar sobre a fáscia muscular, desfazendo pontos de tensão, melhorando a circulação local e devolvendo a liberdade aos seus movimentos.',
    highlights: [
      'Redução de contraturas e rigidez muscular',
      'Melhora da amplitude articular e amplitude de movimento',
      'Sensação imediata de leveza e relaxamento',
      'Excelente complemento ao Pilates e à fisioterapia'
    ],
    ctaText: 'Conhecer',
    iconName: 'Layers'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Onde fica a Alinhare Pilates e Fisioterapia em Londrina?',
    answer:
      'A Alinhare está localizada na Rua Lord Lovat, 161, no bairro Jardim Londrilar, em Londrina - PR (CEP 86010-690). Um endereço de fácil acesso, com ambiente tranquilo e acolhedor.'
  },
  {
    id: 'faq-2',
    question: 'Como agendar uma aula de Pilates em Londrina?',
    answer:
      'O agendamento pode ser feito de forma rápida e direta pelo nosso WhatsApp oficial no número (43) 99189-7341. Nossa equipe responderá para encontrar o melhor horário para você.'
  },
  {
    id: 'faq-3',
    question: 'A Alinhare oferece fisioterapia em Londrina?',
    answer:
      'Sim! A Alinhare oferece atendimentos de Fisioterapia e Fisioterapia Integrativa em Londrina, com foco em cuidado individualizado, funcionalidade, consciência corporal e saúde do movimento.'
  },
  {
    id: 'faq-4',
    question: 'Onde fazer liberação miofascial em Londrina?',
    answer:
      'Na Alinhare, realizamos sessões de liberação miofascial no Jardim Londrilar, indicadas para alívio de tensões musculares, dores e melhora da flexibilidade corporal.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona o Pilates?',
    answer:
      'O Pilates é um método de movimento consciente que trabalha o corpo de forma global, utilizando aparelhos específicos e exercícios no solo. Foca em controle, respiração, fortalecimento da musculatura profunda (core), alinhamento postural e ganho de mobilidade.'
  },
  {
    id: 'faq-6',
    question: 'Como entrar em contato com a Alinhare?',
    answer:
      'Você pode entrar em contato diretamente pelo WhatsApp pelo número (43) 99189-7341 ou acompanhar nossas novidades e rotina pelo Instagram oficial @alinharepilates.londrina.'
  }
];

export const NAV_LINKS = [
  { name: 'Início', href: '#inicio' },
  { name: 'Pilates', href: '#pilates' },
  { name: 'Fisioterapia', href: '#fisioterapia' },
  { name: 'Liberação Miofascial', href: '#liberacao-miofascial' },
  { name: 'O Espaço', href: '#espaco' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contato' }
];
