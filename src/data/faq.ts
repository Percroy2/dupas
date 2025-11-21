export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  'Tous',
  'Terrassement',
  'Assainissement',
  'Aménagement',
  'Bennes',
  'Général',
];

export const faqData: FAQItem[] = [
  // Terrassement
  {
    id: '1',
    category: 'Terrassement',
    question: 'Quels sont les types de terrassement que vous réalisez ?',
    answer: 'Nous réalisons tous types de terrassement : nivellement, décaissement, déblai/remblai, préparation de terrain pour construction, création d\'accès, mise en place de massifs et plateformes drainantes. Nous intervenons aussi bien pour des particuliers que pour des professionnels.',
  },
  {
    id: '2',
    category: 'Terrassement',
    question: 'Quel est le délai moyen pour un terrassement ?',
    answer: 'Le délai dépend de l\'ampleur des travaux. Pour une préparation de terrain standard, comptez entre 2 et 5 jours. Pour des projets plus importants (lotissements, plateformes industrielles), le délai peut s\'étendre à plusieurs semaines. Nous établissons un planning précis lors du devis.',
  },
  {
    id: '3',
    category: 'Terrassement',
    question: 'Faut-il un permis pour faire du terrassement ?',
    answer: 'Cela dépend de l\'ampleur des travaux et de votre commune. Pour des travaux importants ou en zone protégée, un permis de construire ou une déclaration préalable peut être nécessaire. Nous vous conseillons de vous renseigner en mairie. Nous pouvons vous accompagner dans vos démarches administratives.',
  },
  {
    id: '4',
    category: 'Terrassement',
    question: 'Que faites-vous des terres excavées ?',
    answer: 'Nous proposons plusieurs solutions : évacuation vers des centres de traitement agréés, valorisation en partenariat avec des carrières régionales, ou réutilisation sur site si la qualité le permet. Nous privilégions toujours les solutions les plus écologiques et économiques.',
  },
  // Assainissement
  {
    id: '5',
    category: 'Assainissement',
    question: 'Quelle est la différence entre une fosse septique et une micro-station ?',
    answer: 'La fosse septique nécessite un épandage dans le sol, tandis qu\'une micro-station traite les eaux usées de manière plus compacte et autonome. La micro-station est souvent préférée pour les terrains de petite taille ou les sols peu perméables. Nous vous conseillons selon votre situation.',
  },
  {
    id: '6',
    category: 'Assainissement',
    question: 'Combien coûte l\'installation d\'une micro-station ?',
    answer: 'Le coût varie selon la capacité nécessaire (nombre d\'équivalents-habitants), la configuration du terrain, et les travaux de raccordement. Un devis gratuit et personnalisé vous sera établi après une visite de site. Comptez généralement entre 5000€ et 15000€ selon la complexité.',
  },
  {
    id: '7',
    category: 'Assainissement',
    question: 'Quelles sont les normes à respecter pour l\'assainissement ?',
    answer: 'Nous respectons strictement les normes en vigueur établies par le Service Public pour l\'assainissement individuel (SPANC). Cela inclut le respect des pentes, des diamètres de canalisations, des matériaux agréés, et des contrôles qualité. Toutes nos installations sont conformes et contrôlées.',
  },
  {
    id: '8',
    category: 'Assainissement',
    question: 'Quel est le délai pour installer une micro-station ?',
    answer: 'L\'installation complète d\'une micro-station prend généralement entre 3 et 7 jours selon la complexité du terrain et les travaux de raccordement nécessaires. Nous respectons les délais convenus dans le devis.',
  },
  // Aménagement
  {
    id: '9',
    category: 'Aménagement',
    question: 'Proposez-vous la pose d\'enrobé ?',
    answer: 'Oui, nous réalisons la pose d\'enrobé à chaud ou à froid pour vos cours, allées, trottoirs ou parkings. Nous garantissons une finition soignée, durable et esthétique, résistante aux intempéries et au passage répété des véhicules.',
  },
  {
    id: '10',
    category: 'Aménagement',
    question: 'Quelle est la différence entre enrobé à chaud et à froid ?',
    answer: 'L\'enrobé à chaud est plus résistant et durable, idéal pour les parkings et zones de fort trafic. L\'enrobé à froid est plus économique et adapté aux allées piétonnes ou aux réparations ponctuelles. Nous vous conseillons selon votre usage.',
  },
  {
    id: '11',
    category: 'Aménagement',
    question: 'Faites-vous du pavage ?',
    answer: 'Oui, nous réalisons des travaux de pavage pour vos allées, terrasses et espaces extérieurs. Nous travaillons avec des matériaux de qualité et un savoir-faire local pour valoriser vos extérieurs durablement.',
  },
  // Bennes
  {
    id: '12',
    category: 'Bennes',
    question: 'Quels types de bennes proposez-vous ?',
    answer: 'Nous proposons différents types de bennes selon vos besoins : bennes à gravats, bennes à déchets verts, bennes tout-venant. Les capacités varient généralement de 3 à 10 m³. Nous vous conseillons selon le volume de déchets à évacuer.',
  },
  {
    id: '13',
    category: 'Bennes',
    question: 'Combien coûte la location d\'une benne ?',
    answer: 'Le prix dépend de la taille de la benne, de la durée de location, et du type de déchets. Nous établissons un devis gratuit selon vos besoins. La location comprend généralement la livraison, la mise à disposition, et la récupération.',
  },
  {
    id: '14',
    category: 'Bennes',
    question: 'Quel est le délai pour obtenir une benne ?',
    answer: 'Nous pouvons généralement livrer une benne sous 24 à 48h selon nos disponibilités. Pour les urgences, contactez-nous directement et nous ferons notre maximum pour répondre rapidement à votre demande.',
  },
  {
    id: '15',
    category: 'Bennes',
    question: 'Quels déchets peut-on mettre dans une benne ?',
    answer: 'Cela dépend du type de benne. Les bennes à gravats acceptent les matériaux inertes (pierres, béton, carrelage). Les bennes tout-venant acceptent les déchets mixtes. Les déchets dangereux, électroménagers et certains déchets verts nécessitent des bennes spécifiques. Nous vous renseignons lors de la commande.',
  },
  // Général
  {
    id: '16',
    category: 'Général',
    question: 'Dans quelles zones intervenez-vous ?',
    answer: 'Nous intervenons dans tout l\'Avesnois, avec un rayon d\'action d\'environ 40 km autour de Cartignies. Cela inclut notamment Avesnes-sur-Helpe, Fourmies, Maroilles, Le Quesnoy, Maubeuge et les communes environnantes.',
  },
  {
    id: '17',
    category: 'Général',
    question: 'Combien coûte un devis ?',
    answer: 'Tous nos devis sont gratuits et sans engagement. Nous effectuons une visite de site pour établir un devis précis et personnalisé selon vos besoins. Le devis est valable 30 jours.',
  },
  {
    id: '18',
    category: 'Général',
    question: 'Quels sont vos délais d\'intervention ?',
    answer: 'Les délais varient selon la période et l\'ampleur des travaux. En général, nous pouvons intervenir sous 1 à 3 semaines pour les projets standards. Pour les urgences, nous faisons notre maximum pour répondre rapidement. Contactez-nous pour un planning précis.',
  },
  {
    id: '19',
    category: 'Général',
    question: 'Travaillez-vous avec des particuliers et des professionnels ?',
    answer: 'Oui, nous intervenons auprès des particuliers, des professionnels, des collectivités (communes, communautés de communes) et des entreprises. Chaque projet est traité avec le même sérieux et la même qualité d\'exécution.',
  },
  {
    id: '20',
    category: 'Général',
    question: 'Quelles sont vos garanties ?',
    answer: 'Nous garantissons nos travaux : garantie de parfait achèvement (1 an), garantie biennale pour les équipements (2 ans), et garantie décennale pour les dommages compromettant la solidité de l\'ouvrage (10 ans). Nous sommes couverts par une assurance responsabilité civile professionnelle et décennale.',
  },
  {
    id: '21',
    category: 'Général',
    question: 'Comment puis-je vous contacter ?',
    answer: 'Vous pouvez nous contacter par téléphone au +33 6 17 63 18 67, par email à contact@dupas-france.com, ou via le formulaire de contact sur notre site. Nous répondons généralement sous 24h.',
  },
  // Terrassement - Questions supplémentaires
  {
    id: '22',
    category: 'Terrassement',
    question: 'Quels matériels utilisez-vous pour le terrassement ?',
    answer: 'Nous disposons d\'un parc de matériels modernes et entretenus : pelleteuses, chargeuses, bulldozers, compacteurs, et camions bennes. Tous nos engins sont adaptés aux différentes contraintes de terrain et aux délais de vos projets.',
  },
  {
    id: '23',
    category: 'Terrassement',
    question: 'Intervenez-vous sur des terrains difficiles d\'accès ?',
    answer: 'Oui, nous sommes équipés pour intervenir sur des terrains difficiles d\'accès. Nos engins sont adaptés aux différentes configurations de terrain. Nous étudions chaque projet pour proposer la meilleure solution technique.',
  },
  {
    id: '24',
    category: 'Terrassement',
    question: 'Faites-vous de la préparation de terrain pour piscine ?',
    answer: 'Oui, nous réalisons la préparation complète du terrain pour l\'installation de piscines : décaissement, nivellement, et préparation de la plateforme. Nous travaillons en coordination avec les installateurs de piscines.',
  },
  {
    id: '25',
    category: 'Terrassement',
    question: 'Quelle est la profondeur maximale que vous pouvez creuser ?',
    answer: 'Nous pouvons réaliser des fouilles jusqu\'à plusieurs mètres de profondeur selon les besoins du projet. La profondeur dépend des contraintes du terrain, de la nature du sol, et des normes en vigueur. Nous établissons un diagnostic lors de la visite de site.',
  },
  {
    id: '26',
    category: 'Terrassement',
    question: 'Travaillez-vous en hiver ?',
    answer: 'Oui, nous intervenons toute l\'année, y compris en hiver. Cependant, certaines conditions météorologiques extrêmes (gel profond, neige importante) peuvent nécessiter un report des travaux pour garantir la qualité d\'exécution.',
  },
  // Assainissement - Questions supplémentaires
  {
    id: '27',
    category: 'Assainissement',
    question: 'Combien de temps dure l\'installation d\'une micro-station ?',
    answer: 'L\'installation complète d\'une micro-station prend généralement entre 3 et 7 jours ouvrés. Ce délai inclut le terrassement, la pose de la micro-station, le raccordement aux canalisations, et les tests de fonctionnement. Le délai peut varier selon la complexité du terrain.',
  },
  {
    id: '28',
    category: 'Assainissement',
    question: 'Faut-il un entretien pour une micro-station ?',
    answer: 'Oui, une micro-station nécessite un entretien régulier (vidange, contrôle) généralement effectué par un professionnel agréé. La fréquence dépend du modèle et de l\'utilisation. Nous vous fournissons toutes les informations d\'entretien lors de l\'installation.',
  },
  {
    id: '29',
    category: 'Assainissement',
    question: 'Quelle est la différence entre assainissement collectif et individuel ?',
    answer: 'L\'assainissement collectif (tout-à-l\'égout) consiste à raccorder votre habitation au réseau public. L\'assainissement individuel (fosse septique, micro-station) traite les eaux usées sur votre terrain. Le choix dépend de la disponibilité du réseau collectif dans votre secteur.',
  },
  {
    id: '30',
    category: 'Assainissement',
    question: 'Pouvez-vous rénover une ancienne fosse septique ?',
    answer: 'Oui, nous réalisons la rénovation et la mise aux normes d\'anciennes installations d\'assainissement. Nous pouvons remplacer une fosse septique par une micro-station, ou remettre aux normes une installation existante selon les réglementations en vigueur.',
  },
  {
    id: '31',
    category: 'Assainissement',
    question: 'Quels sont les avantages d\'une micro-station par rapport à une fosse septique ?',
    answer: 'Les micro-stations offrent plusieurs avantages : traitement plus efficace des eaux, encombrement réduit, pas besoin d\'épandage dans le sol (idéal pour petits terrains), et rejet d\'eau de meilleure qualité. Elles sont également plus faciles à entretenir.',
  },
  // Aménagement - Questions supplémentaires
  {
    id: '32',
    category: 'Aménagement',
    question: 'Quelle est la durée de vie d\'un enrobé ?',
    answer: 'Un enrobé bien posé peut durer entre 15 et 25 ans selon l\'usage et l\'entretien. L\'enrobé à chaud est généralement plus durable que l\'enrobé à froid. Nous garantissons nos travaux et vous conseillons sur l\'entretien pour maximiser la durée de vie.',
  },
  {
    id: '33',
    category: 'Aménagement',
    question: 'Peut-on poser de l\'enrobé en hiver ?',
    answer: 'L\'enrobé à chaud nécessite des conditions météorologiques favorables (température minimale, pas de pluie). L\'enrobé à froid peut être posé dans des conditions plus variées. Nous planifions les travaux selon les conditions météo pour garantir la qualité.',
  },
  {
    id: '34',
    category: 'Aménagement',
    question: 'Quels matériaux utilisez-vous pour le pavage ?',
    answer: 'Nous travaillons avec différents matériaux de qualité : pavés en béton, pavés en pierre naturelle, dalles, selon vos préférences esthétiques et votre budget. Nous vous conseillons sur le choix des matériaux adaptés à votre projet et à votre usage.',
  },
  {
    id: '35',
    category: 'Aménagement',
    question: 'Faites-vous l\'aménagement complet d\'un jardin ?',
    answer: 'Oui, nous réalisons des aménagements extérieurs complets : création d\'allées, terrasses, espaces verts, clôtures, et tous les travaux de VRD (voirie et réseaux divers). Nous coordonnons les différents corps de métier si nécessaire.',
  },
  {
    id: '36',
    category: 'Aménagement',
    question: 'Quel est le prix au m² pour de l\'enrobé ?',
    answer: 'Le prix varie selon plusieurs facteurs : type d\'enrobé (chaud/froid), épaisseur, surface, accessibilité du chantier, et travaux préparatoires nécessaires. Un devis gratuit et personnalisé vous sera établi après une visite de site. Comptez généralement entre 25€ et 50€ HT/m².',
  },
  // Bennes - Questions supplémentaires
  {
    id: '37',
    category: 'Bennes',
    question: 'Quelle taille de benne choisir ?',
    answer: 'Le choix dépend du volume de déchets à évacuer. Pour un petit chantier ou un débarras, une benne de 3 à 5 m³ suffit. Pour des travaux plus importants, optez pour 7 à 10 m³. Nous vous conseillons selon votre projet pour éviter le surcoût d\'une deuxième benne.',
  },
  {
    id: '38',
    category: 'Bennes',
    question: 'Combien de temps puis-je garder une benne ?',
    answer: 'La durée de location est généralement flexible. Nous convenons ensemble d\'un délai adapté à votre projet. La location standard est d\'une semaine, mais peut être prolongée selon vos besoins. Contactez-nous pour discuter de votre planning.',
  },
  {
    id: '39',
    category: 'Bennes',
    question: 'Livrez-vous les bennes le week-end ?',
    answer: 'Nous livrons généralement en semaine, mais des livraisons le samedi matin peuvent être possibles selon nos disponibilités. Contactez-nous pour discuter de vos contraintes horaires et nous trouverons une solution adaptée.',
  },
  {
    id: '40',
    category: 'Bennes',
    question: 'Que se passe-t-il si la benne est trop pleine ?',
    answer: 'Si la benne est remplie avant la fin de votre projet, vous pouvez commander une deuxième benne ou demander une récupération anticipée. Nous facturons uniquement les bennes effectivement utilisées. Nous vous conseillons sur le choix de la taille pour éviter ce cas.',
  },
  {
    id: '41',
    category: 'Bennes',
    question: 'Puis-je mettre des déchets verts dans une benne à gravats ?',
    answer: 'Non, les bennes à gravats sont réservées aux matériaux inertes (pierre, béton, carrelage). Les déchets verts nécessitent une benne spécifique pour être traités correctement. Nous vous orientons vers la benne adaptée à vos déchets.',
  },
  // Général - Questions supplémentaires
  {
    id: '42',
    category: 'Général',
    question: 'Acceptez-vous les paiements en plusieurs fois ?',
    answer: 'Oui, nous proposons des facilités de paiement selon l\'ampleur des travaux. Les modalités sont définies dans le devis : généralement un acompte à la commande, des acomptes selon l\'avancement, et le solde à la réception. Nous restons flexibles pour vous accompagner.',
  },
  {
    id: '43',
    category: 'Général',
    question: 'Êtes-vous assurés ?',
    answer: 'Oui, nous sommes couverts par une assurance responsabilité civile professionnelle et une assurance décennale conformément à la législation en vigueur. Tous nos travaux sont garantis et assurés.',
  },
  {
    id: '44',
    category: 'Général',
    question: 'Travaillez-vous avec des artisans locaux ?',
    answer: 'Oui, nous privilégions les partenariats locaux avec des artisans et fournisseurs de la région. Cela nous permet de contribuer à l\'économie locale, d\'éviter les délais de transport, et de maintenir des prix compétitifs tout en garantissant la qualité.',
  },
  {
    id: '45',
    category: 'Général',
    question: 'Proposez-vous des devis pour des projets de grande envergure ?',
    answer: 'Absolument. Nous réalisons des devis pour tous types de projets, des petits travaux particuliers aux grands chantiers pour collectivités et entreprises. Nous avons l\'expérience et les moyens pour gérer des projets complexes comme des lotissements ou des plateformes industrielles.',
  },
  {
    id: '46',
    category: 'Général',
    question: 'Quels sont vos horaires d\'intervention ?',
    answer: 'Nous intervenons généralement du lundi au vendredi, de 7h à 18h. Pour les urgences ou les projets spécifiques, nous pouvons adapter nos horaires. Les horaires administratifs (devis, contact) sont du lundi au vendredi de 8h à 18h.',
  },
  {
    id: '47',
    category: 'Général',
    question: 'Faites-vous des travaux d\'urgence ?',
    answer: 'Oui, nous pouvons intervenir en urgence selon nos disponibilités. Pour les situations critiques (rupture de canalisation, effondrement, etc.), contactez-nous directement et nous ferons notre maximum pour répondre rapidement à votre demande.',
  },
  {
    id: '48',
    category: 'Général',
    question: 'Proposez-vous des conseils avant travaux ?',
    answer: 'Oui, lors de la visite de site pour établir le devis, nous vous conseillons sur les meilleures solutions techniques, les matériaux adaptés, et les optimisations possibles. Nous vous accompagnons de l\'étude du projet jusqu\'à la réalisation.',
  },
  {
    id: '49',
    category: 'Général',
    question: 'Respectez-vous les normes environnementales ?',
    answer: 'Absolument. Nous respectons strictement toutes les normes environnementales en vigueur. Nous privilégions les méthodes durables, la valorisation des déblais, et le respect de l\'environnement dans tous nos chantiers. Nous sommes sensibles à la protection de l\'environnement.',
  },
  {
    id: '50',
    category: 'Général',
    question: 'Comment se déroule un chantier type ?',
    answer: 'Un chantier se déroule en plusieurs étapes : 1) Visite de site et devis, 2) Signature du devis et planification, 3) Préparation du chantier (accès, signalisation), 4) Réalisation des travaux avec suivi régulier, 5) Réception des travaux et remise des garanties. Nous vous tenons informé à chaque étape.',
  },
];

