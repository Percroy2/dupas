export interface Review {
  id: string;
  author: string;
  date: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Tiffany Verneveaux',
    date: '23/06/2023',
    content: 'Devis rapide, prise de rendez-vous rapide ! Travailleurs au top ! Merci encore !',
    rating: 5,
  },
  {
    id: '2',
    author: 'Philippe EVRARD',
    date: '28/04/2023',
    content: '',
    rating: 5,
  },
  {
    id: '3',
    author: 'Vangermee Patrick',
    date: '21/09/2021',
    content: 'Responsable très professionnel, propose ce qu\'il y a de mieux pour son client sans exagération',
    rating: 5,
  },
  {
    id: '4',
    author: 'guy delcroix',
    date: '04/07/2021',
    content: '',
    rating: 5,
  },
  {
    id: '5',
    author: 'brigitteguy delcroix',
    date: '24/06/2021',
    content: '',
    rating: 5,
  },
  {
    id: '6',
    author: 'A. Dx',
    date: '18/09/2020',
    content: '',
    rating: 5,
  },
  {
    id: '7',
    author: 'Sylvie Richet',
    date: '20/10/2019',
    content: 'Entreprise très professionnelle. Travaux effectués en 2018, aucun problème.',
    rating: 5,
  },
];

