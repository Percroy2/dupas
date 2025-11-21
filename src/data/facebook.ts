// Configuration Facebook
// Pour obtenir un Access Token :
// 1. Allez sur https://developers.facebook.com/
// 2. Créez une application
// 3. Obtenez un token d'accès avec les permissions pages_read_engagement, pages_read_user_content
// 4. Obtenez l'ID de votre page Facebook

export const facebookConfig = {
  // ID de la page Facebook (exemple: "DupasTerrassement" ou l'ID numérique)
  pageId: import.meta.env.VITE_FACEBOOK_PAGE_ID || '',
  
  // Access Token (à mettre dans un fichier .env pour la sécurité)
  accessToken: import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN || '',
  
  // Nombre de posts à afficher
  postsLimit: 10,
  
  // URL de la page Facebook (pour le lien "Voir plus")
  pageUrl: 'https://www.facebook.com/DupasTerrassement',
};

// Types pour les posts Facebook
export interface FacebookPost {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
  likes?: {
    summary: {
      total_count: number;
    };
  };
  comments?: {
    summary: {
      total_count: number;
    };
  };
  shares?: {
    count: number;
  };
}

export interface FacebookApiResponse {
  data: FacebookPost[];
  paging?: {
    next?: string;
    previous?: string;
  };
}

// Données mockées pour le développement et la démo
export const mockFacebookPosts: FacebookPost[] = [
  {
    id: 'mock-1',
    message: 'Nouveau chantier terminé à Avesnes-sur-Helpe ! 🏗️\n\nNous avons réalisé le terrassement complet et la pose d\'une micro-station pour cette nouvelle construction. Un projet mené avec rigueur et dans les délais.\n\nMerci à nos clients pour leur confiance ! 🙏',
    created_time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/services/terrassement.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 24 } },
    comments: { summary: { total_count: 5 } },
    shares: { count: 3 },
  },
  {
    id: 'mock-2',
    message: '🚛 Nouvelle benne disponible !\n\nBesoin d\'une benne pour vos travaux ? Nous livrons et récupérons directement sur votre chantier dans tout l\'Avesnois.\n\nContactez-nous pour réserver la vôtre ! 📞',
    created_time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/services/benne.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 18 } },
    comments: { summary: { total_count: 2 } },
    shares: { count: 1 },
  },
  {
    id: 'mock-3',
    message: 'Travaux d\'assainissement en cours à Fourmies.\n\nInstallation d\'une micro-station conforme aux normes en vigueur. Notre équipe intervient avec du matériel adapté pour garantir un résultat durable.\n\n#Terrassement #Assainissement #Avesnois',
    created_time: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/services/assainissement.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 31 } },
    comments: { summary: { total_count: 7 } },
    shares: { count: 4 },
  },
  {
    id: 'mock-4',
    message: 'Aménagement extérieur terminé ! 🌳\n\nCréation d\'une allée en pavage et aménagement des espaces verts pour ce particulier à Maroilles. Un projet qui allie esthétique et fonctionnalité.\n\nMerci pour cette belle réalisation !',
    created_time: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/services/amenagement.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 42 } },
    comments: { summary: { total_count: 8 } },
    shares: { count: 6 },
  },
  {
    id: 'mock-5',
    message: 'Pose d\'enrobé réalisée pour un parking d\'entreprise à Le Quesnoy.\n\nTravail soigné et respect des délais. L\'enrobé à chaud garantit une résistance optimale aux intempéries et au passage des véhicules.\n\n#Enrobé #TravauxPublics',
    created_time: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/services/enrobe.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 28 } },
    comments: { summary: { total_count: 4 } },
    shares: { count: 2 },
  },
  {
    id: 'mock-6',
    message: '🎉 Nouvelle année, nouveaux projets !\n\nL\'équipe Dupas Terrassement vous souhaite une excellente année 2025. Nous sommes prêts à vous accompagner dans tous vos projets de terrassement et d\'assainissement.\n\nMerci pour votre confiance !',
    created_time: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    full_picture: '/images/history.jpg',
    permalink_url: 'https://www.facebook.com/DupasTerrassement',
    likes: { summary: { total_count: 56 } },
    comments: { summary: { total_count: 12 } },
    shares: { count: 8 },
  },
];

