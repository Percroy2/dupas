export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  date?: string;
  location?: string;
}

export const galleryCategories = [
  'Tous',
  'Terrassement',
  'Assainissement',
  'Aménagement',
  'Enrobé',
  'Pavage',
];

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Terrassement pour construction neuve',
    description: 'Préparation complète du terrain pour une maison individuelle à Avesnes-sur-Helpe. Nivellement, décaissement et mise en place des fondations.',
    category: 'Terrassement',
    image: '/images/TERRASSEMENT-2-WEB.webp',
    beforeImage: '/images/TERRASSEMENT-WEB-1024x768.webp',
    afterImage: '/images/TERRASSEMENT-2-WEB.webp',
    date: '2024',
    location: 'Avesnes-sur-Helpe',
  },
  {
    id: '2',
    title: 'Installation micro-station',
    description: 'Installation complète d\'une micro-station conforme aux normes en vigueur. Raccordement réseau et aménagement extérieur inclus.',
    category: 'Assainissement',
    image: '/images/MICRO-STATION-WEB.webp',
    beforeImage: '/images/TRICEL-WEB-1024x768.webp',
    afterImage: '/images/MICRO-STATION-WEB.webp',
    date: '2024',
    location: 'Fourmies',
  },
  {
    id: '3',
    title: 'Aménagement extérieur complet',
    description: 'Création d\'une allée en pavage, aménagement des espaces verts et pose d\'un portail. Projet clé-en-main pour un particulier.',
    category: 'Aménagement',
    image: '/images/ENROBE-2-WEB-1024x768.webp',
    beforeImage: '/images/ENROBE-1-WEB-1024x768.webp',
    afterImage: '/images/ENROBE-2-WEB-1024x768.webp',
    date: '2024',
    location: 'Maroilles',
  },
  {
    id: '4',
    title: 'Pose d\'enrobé pour parking',
    description: 'Réalisation d\'un parking en enrobé à chaud pour une entreprise. Surface de 500m² avec marquage au sol.',
    category: 'Enrobé',
    image: '/images/ENROBE-2-WEB-1024x768.webp',
    beforeImage: '/images/ENROBE-1-WEB-1024x768.webp',
    afterImage: '/images/ENROBE-2-WEB-1024x768.webp',
    date: '2024',
    location: 'Le Quesnoy',
  },
  {
    id: '5',
    title: 'Pavage d\'allée principale',
    description: 'Pavage soigné d\'une allée d\'accès avec matériaux de qualité. Finition esthétique et durable.',
    category: 'Pavage',
    image: '/images/ENROBE-1-WEB-1024x768.webp',
    beforeImage: '/images/ENROBE-1-WEB-1024x768.webp',
    afterImage: '/images/ENROBE-2-WEB-1024x768.webp',
    date: '2024',
    location: 'Cartignies',
  },
  {
    id: '6',
    title: 'Terrassement pour lotissement',
    description: 'Travaux de terrassement et pose de réseaux VRD pour un lotissement de 15 lots. Projet réalisé pour une commune.',
    category: 'Terrassement',
    image: '/images/TERRASSEMENT-WEB-1024x768.webp',
    beforeImage: '/images/TERRASSEMENT-WEB-1024x768.webp',
    afterImage: '/images/TERRASSEMENT-2-WEB.webp',
    date: '2023',
    location: 'Dompierre',
  },
  {
    id: '7',
    title: 'Raccordement tout-à-l\'égout',
    description: 'Raccordement d\'une habitation au réseau d\'assainissement collectif. Création de tranchées et pose de canalisations.',
    category: 'Assainissement',
    image: '/images/TRICEL-WEB-1024x768.webp',
    beforeImage: '/images/TRICEL-WEB-1024x768.webp',
    afterImage: '/images/MICRO-STATION-WEB.webp',
    date: '2024',
    location: 'Saint-Hilaire-sur-Helpe',
  },
  {
    id: '8',
    title: 'Transport de matériaux',
    description: 'Livraison de matériaux et transport de gravats pour un chantier. Flotte de camions bennes pour tous vos besoins.',
    category: 'Aménagement',
    image: '/images/TRANSPORT-1-WEB.webp',
    beforeImage: '/images/BENNE-A-GRAVATS-2-WEB.webp',
    afterImage: '/images/TRANSPORT-1-WEB.webp',
    date: '2024',
    location: 'Avesnelles',
  },
];

