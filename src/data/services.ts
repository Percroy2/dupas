export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: 'terrassement',
    title: 'TERRASSEMENT',
    description: 'Nivellement, décaissement, préparation et aménagement de terrain avant construction. Que ce soit pour une maison, un bâtiment ou un aménagement extérieur, nous réalisons un travail précis et durable, dans le respect des sols et des normes techniques.',
    image: '/images/TERRASSEMENT-2-WEB.webp',
  },
  {
    id: 'assainissement',
    title: 'ASSAINISSEMENT / MICRO-STATIONS',
    description: 'Raccordement au tout-à-l\'égout, pose de fosses septiques ou de micro-stations, création de tranchées et systèmes de relevage. Nous vous garantissons des installations fiables, conformes et adaptées à la configuration de votre terrain.',
    image: '/images/MICRO-STATION-WEB.webp',
  },
  {
    id: 'amenagement',
    title: 'AMÉNAGEMENT EXTÉRIEUR',
    description: 'Donnez forme à vos extérieurs : allées, parkings, chemins d\'accès ou espaces verts. Nous intervenons du début à la finition pour créer des espaces fonctionnels et esthétiques, à la hauteur de vos envies.',
    image: '/images/ENROBE-2-WEB-1024x768.webp',
  },
  {
    id: 'enrobe',
    title: 'ENROBÉ',
    description: 'Pose d\'enrobé à chaud ou à froid pour vos cours, allées, trottoirs ou parkings. Une finition soignée, durable et esthétique, résistante aux intempéries et au passage répété des véhicules.',
    image: '/images/ENROBE-2-WEB-1024x768.webp',
  },
  {
    id: 'benne',
    title: 'BENNE À GRAVATS',
    description: 'Mise à disposition de bennes pour vos chantiers, travaux ou débarras. Nous livrons et récupérons directement sur site pour vous simplifier la gestion des déchets et gagner du temps.',
    image: '/images/BENNE-A-GRAVATS-2-WEB.webp',
  },
  {
    id: 'pavage',
    title: 'PAVAGE',
    description: 'Allier solidité et esthétique, c\'est tout l\'art du pavage. Chez nous, chaque projet est réalisé avec soin, depuis la préparation du sol jusqu\'à la pose finale. Nous travaillons avec des matériaux de qualité et un savoir-faire local pour valoriser vos extérieurs durablement.',
    image: '/images/ENROBE-1-WEB-1024x768.webp',
  },
  {
    id: 'transport',
    title: 'TRANSPORT',
    description: 'Transport de matériaux, terre, gravats ou enrobés : nous assurons la logistique complète de vos chantiers. Notre flotte de camions bennes permet des livraisons rapides et sécurisées sur l\'ensemble du secteur.',
    image: '/images/TRANSPORT-1-WEB.webp',
  },
];

