# Site Dupas Terrassement

Site web moderne et professionnel pour Dupas Terrassement, entreprise de terrassement et d'assainissement à Cartignies.

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build moderne et rapide
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Routage côté client

## Structure du projet

```
dupas-terrassement/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── History.tsx
│   │   ├── Reviews.tsx
│   │   └── Contact.tsx
│   ├── pages/           # Pages de l'application
│   │   ├── Home.tsx
│   │   ├── Offers.tsx
│   │   ├── News.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── data/            # Données statiques
│   │   ├── services.ts
│   │   ├── reviews.ts
│   │   └── contact.ts
│   ├── App.tsx          # Composant principal avec routing
│   ├── main.tsx         # Point d'entrée React
│   └── index.css        # Styles globaux avec Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Installation

1. Installer les dépendances :
```bash
npm install
# ou
pnpm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
# ou
pnpm dev
```

3. Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Build pour la production

```bash
npm run build
# ou
pnpm build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Migration vers WordPress

Ce projet a été conçu pour faciliter une migration future vers WordPress :

- **Structure modulaire** : Chaque composant correspond à une section réutilisable
- **Séparation des données** : Les contenus sont dans des fichiers séparés (`src/data/`)
- **Classes Tailwind standardisées** : Facilement convertibles en classes CSS WordPress
- **Pas de logique complexe** : Le code est simple et déclaratif

### Étapes de migration suggérées :

1. Convertir les composants React en templates PHP/HTML
2. Utiliser les données de `src/data/` pour créer des Custom Post Types ou des champs ACF
3. Adapter les classes Tailwind en classes CSS WordPress ou utiliser Tailwind dans WordPress
4. Convertir React Router en navigation WordPress standard

## Fonctionnalités

- ✅ Navigation responsive avec menu mobile
- ✅ Section Hero avec call-to-action et image de fond
- ✅ Grille de services (7 services) avec images et animations
- ✅ Section "Notre histoire" avec image et animations
- ✅ Avis clients Google avec animations au scroll
- ✅ Formulaire de contact avec animations
- ✅ Footer complet avec mentions légales
- ✅ Bandeau de consentement aux cookies
- ✅ Design responsive (mobile-first)
- ✅ Animations dynamiques au scroll (fade-in, slide-up, etc.)
- ✅ Images avec placeholders automatiques
- ✅ Effets hover avancés sur les cartes et images

## Personnalisation

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.js` :
- `primary` : Couleur principale (rouge)
- `secondary` : Couleur secondaire (noir/gris)
- `black` : Noir pur

### Contenu

Les contenus sont modifiables dans :
- `src/data/services.ts` - Services proposés (avec chemins d'images)
- `src/data/reviews.ts` - Avis clients
- `src/data/contact.ts` - Informations de contact

### Images

Les images doivent être placées dans le dossier `public/images/` :
- Voir `public/images/README.md` pour la structure complète
- Les images ont des placeholders SVG automatiques si elles ne sont pas trouvées
- Format recommandé : JPG ou WebP optimisés

### Animations

Le site utilise un système d'animations au scroll basé sur Intersection Observer :
- Hook personnalisé : `src/hooks/useScrollAnimation.ts`
- Composant wrapper : `src/components/AnimatedSection.tsx`
- Animations disponibles : fade, slide-up, slide-down, slide-left, slide-right

### Intégration Facebook

La page Actualités affiche automatiquement les posts de votre page Facebook.

#### Configuration

1. **Créer un fichier `.env`** à la racine du projet :
```bash
VITE_FACEBOOK_PAGE_ID=votre_page_id
VITE_FACEBOOK_ACCESS_TOKEN=votre_access_token
```

2. **Obtenir l'ID de votre page Facebook** :
   - Allez sur votre page Facebook
   - L'ID se trouve dans l'URL ou dans les paramètres de la page
   - Exemple : `https://www.facebook.com/DupasTerrassement` → ID = `DupasTerrassement`

3. **Obtenir un Access Token** :
   - Allez sur [Facebook Developers](https://developers.facebook.com/)
   - Créez une nouvelle application
   - Ajoutez le produit "Facebook Login"
   - Générez un token avec les permissions :
     - `pages_read_engagement`
     - `pages_read_user_content`
   - Ou utilisez un token de page permanent

4. **Redémarrer le serveur** après avoir créé le fichier `.env`

#### Fonctionnalités

- Affichage automatique des 10 derniers posts
- Images, texte, dates et statistiques (likes, commentaires, partages)
- Animations au scroll cohérentes avec le reste du site
- Liens directs vers les posts Facebook
- Gestion d'erreur avec messages explicites
- État de chargement avec skeletons

#### Alternative sans API

Si vous ne souhaitez pas utiliser l'API Facebook, vous pouvez :
- Afficher un widget Facebook embed
- Utiliser un flux RSS si disponible
- Intégrer manuellement des posts

## Licence

© 2025 Dupas Terrassement - Tous droits réservés

