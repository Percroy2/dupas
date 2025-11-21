# Configuration Facebook pour la page Actualités

Ce guide vous explique comment configurer l'affichage des posts Facebook sur la page Actualités.

## Étape 1 : Créer le fichier .env

Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```env
VITE_FACEBOOK_PAGE_ID=votre_page_id
VITE_FACEBOOK_ACCESS_TOKEN=votre_access_token
```

## Étape 2 : Obtenir l'ID de votre page Facebook

### Méthode 1 : Via l'URL
- Allez sur votre page Facebook
- L'ID est le nom d'utilisateur dans l'URL
- Exemple : `https://www.facebook.com/DupasTerrassement` → ID = `DupasTerrassement`

### Méthode 2 : Via les paramètres
1. Allez sur votre page Facebook
2. Cliquez sur "Paramètres" → "À propos"
3. Faites défiler jusqu'à "ID de la page"

## Étape 3 : Obtenir un Access Token

### Option A : Token de page (recommandé pour la production)

1. Allez sur [Facebook Developers](https://developers.facebook.com/)
2. Créez une nouvelle application (ou utilisez une existante)
3. Ajoutez le produit "Facebook Login"
4. Dans "Outils" → "Explorateur Graph API" :
   - Sélectionnez votre page dans "Page"
   - Cliquez sur "Générer un token d'accès"
   - Sélectionnez les permissions :
     - `pages_read_engagement`
     - `pages_read_user_content`
   - Copiez le token généré

### Option B : Token utilisateur (pour le développement)

1. Allez sur [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Sélectionnez votre application
3. Cliquez sur "Générer un token d'accès"
4. Sélectionnez les permissions nécessaires
5. Copiez le token

⚠️ **Note** : Les tokens utilisateur expirent après quelques heures. Pour la production, utilisez un token de page permanent.

## Étape 4 : Créer un token permanent (production)

Pour un token qui ne expire pas :

1. Allez sur [Facebook Developers](https://developers.facebook.com/)
2. Sélectionnez votre application
3. Allez dans "Outils" → "Explorateur Graph API"
4. Sélectionnez votre page
5. Cliquez sur "Générer un token d'accès"
6. Sélectionnez les permissions
7. Cliquez sur "i" à côté du token pour voir les détails
8. Cliquez sur "Échanger pour un token de longue durée"
9. Copiez le nouveau token (valide 60 jours)

Pour un token permanent :
- Utilisez l'API pour échanger le token de longue durée contre un token permanent
- Ou utilisez un service de gestion de tokens

## Étape 5 : Redémarrer le serveur

Après avoir créé le fichier `.env`, redémarrez le serveur de développement :

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez-le
npm run dev
# ou
pnpm dev
```

## Vérification

1. Allez sur la page `/actualites`
2. Les posts Facebook devraient s'afficher automatiquement
3. Si une erreur apparaît, vérifiez :
   - Que le fichier `.env` est bien à la racine du projet
   - Que les variables commencent par `VITE_`
   - Que les valeurs sont correctes (sans guillemets)
   - Que le serveur a été redémarré

## Dépannage

### Erreur : "Configuration Facebook manquante"
- Vérifiez que le fichier `.env` existe
- Vérifiez que les noms des variables sont corrects
- Redémarrez le serveur

### Erreur : "Erreur API Facebook: 400"
- Vérifiez que l'ID de la page est correct
- Vérifiez que le token est valide
- Vérifiez que le token a les bonnes permissions

### Erreur : "Erreur API Facebook: 401"
- Le token a expiré, générez-en un nouveau
- Vérifiez que le token est toujours valide

### Aucun post ne s'affiche
- Vérifiez que votre page Facebook a des posts publics
- Vérifiez que les posts ne sont pas privés
- Vérifiez la console du navigateur pour les erreurs

## Sécurité

⚠️ **Important** :
- Ne commitez jamais le fichier `.env` dans Git
- Le fichier `.env` est déjà dans `.gitignore`
- Ne partagez jamais votre Access Token publiquement
- Utilisez des tokens avec des permissions minimales nécessaires

## Support

Pour plus d'informations :
- [Documentation Facebook Graph API](https://developers.facebook.com/docs/graph-api)
- [Guide des tokens Facebook](https://developers.facebook.com/docs/facebook-login/guides/access-tokens)

