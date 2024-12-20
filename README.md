
# Sea Riders Vitrine

**Sea Riders Vitrine** est un projet collaboratif visant à créer un site vitrine écoresponsable pour vendre des planches à voile fabriquées à partir de déchets recyclés récupérés des océans et plages.

---

## 🏗️ Architecture du Projet

### Frontend (React.js)
```
seariders-vitrine/
├── public/                      # Fichiers publics accessibles directement
│   └── vite.svg                 # Exemple d'icône par défaut (à supprimer/changer)
├── src/
│   ├── assets/                  # Ressources statiques (toutes les images/modèles utilisés)
│   │       ├── boutons/
│   │       ├── images/
│   │       └── logos/
│   │
│   ├── components/              # Composants réutilisables
│   │           ├── Navbar.jsx
│   │           └── Footer.jsx
│   ├── css/
│   │      ├── main.css          # Styles globaux (peut inclure Tailwind CSS)
│   │      └── products.css
│   │
│   ├── pages/                   # Pages principales du site
│   │       ├── About.jsx 
│   │       ├── Contact.jsx
│   │       ├── Engagements.jsx
│   │       ├── Home.jsx
│   │       ├── Inscription.jsx
│   │       ├── Product.jsx
│   │       └── Shop.jsx     
│   ├── App.jsx                  # Composant racine définissant les routes
│   └── main.jsx                 # Point d'entrée de l'application                
└── ... 


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

## 📄 Auteurs 
   ```bash
   - Samy Boudaoud M1 DevIOT
   - Abdallah Merad B2 Info
   - Hugo Bisserier B2 Info
   ```

---
## 📄 Licence

Ce projet est sous licence MIT.
