
# Sea Riders Vitrine

**Sea Riders Vitrine** est un projet collaboratif visant à créer un site vitrine écoresponsable pour vendre des planches à voile fabriquées à partir de déchets recyclés récupérés des océans et plages.

---

## 🏗️ Architecture du Projet

### Frontend (React.js)
```
seariders-vitrine/
├── public/                  # Contient le fichier HTML de base
│   └── vite.svg             # Image par défaut de Vite
├── src/                     # Code source principal
│   ├── assets/              # Ressources statiques (par exemple, images)
│   │   └── react.svg        # Image par défaut
│   ├── components/          # Composants réutilisables
│   │   └── Navbar.jsx       # Barre de navigation
│   ├── App.css              # Styles globaux
│   ├── App.jsx              # Composant racine
│   ├── index.css            # Styles liés à l'entrée principale
│   ├── main.jsx             # Point d'entrée du projet
│   └── pages/               # Pages principales (à développer)
│       └── Home.jsx         # Page d'accueil
├── package.json             # Dépendances du projet
├── postcss.config.js        # Configuration de PostCSS
├── tailwind.config.js       # Configuration de Tailwind CSS
└── vite.config.js           # Configuration de Vite
├── .gitignore               # Fichiers/dossiers ignorés par Git
└── README.md                # Documentation du projet
```

### Backend *(Phase Future)*
```
seariders-backend/
├── src/                     # Code source principal
│   ├── controllers/         # Gestion des requêtes (produits, utilisateurs, etc.)
│   ├── models/              # Modèles de données pour MongoDB ou MySQL
│   ├── routes/              # Définition des endpoints de l'API REST
│   ├── middlewares/         # Gestion des middlewares (authentification, logs)
│   ├── config/              # Configuration de la base de données et des clés API
│   └── server.js            # Point d'entrée principal du backend
├── package.json             # Dépendances backend
├── .env                     # Variables d'environnement
├── .gitignore               # Fichiers/dossiers ignorés par Git
└── README.md                # Documentation du backend
```

---

## ⚙️ Technologies Utilisées

### Frontend
- **React.js** : Framework JavaScript pour des interfaces utilisateur interactives.
- **Three.js** : Pour la visualisation 3D des planches à voile.
- **Tailwind CSS** : Framework CSS pour un design moderne et rapide.
- **Vite** : Environnement de développement rapide.

### Backend *(Phase Future)*
- **Node.js** avec **Express** : Serveur web et API RESTful.
- **MongoDB** : Base de données NoSQL flexible (option pour MySQL selon besoins).
- **JWT** : Authentification sécurisée.

### Outils Collaboratifs
- **GitHub** : Gestion du code source et collaboration.
- **Trello** ou **Notion** : Suivi des tâches et organisation du projet.
- **Slack** : Communication entre développeurs.

---

## 🌟 Fonctionnalités Clés

1. **Site Vitrine** :
   - Présentation de l'entreprise et des produits.
   - Blog sur l'écologie et les innovations marines.

2. **Visualisation 3D** :
   - Permet de voir et de personnaliser les planches en temps réel.

3. **E-commerce** *(Phase future)* :
   - Panier, paiement et gestion des commandes.

4. **Mobile-Ready** *(Phase future)* :
   - Export possible vers une application mobile avec React Native.

---

## 🌍 Contribution

### Règles Git
1. Créez une branche pour chaque fonctionnalité :
   ```bash
   git checkout -b feature/<nom-fonctionnalité>
   ```

2. Effectuez vos modifications et commitez-les :
   ```bash
   git commit -m "Description de la fonctionnalité"
   ```

3. Poussez votre branche et créez une pull request :
   ```bash
   git push origin feature/<nom-fonctionnalité>
   ```

4. Attendez les validations avant de merger dans `main`.

---

## 📄 Licence

Ce projet est sous licence MIT.

Abdallah