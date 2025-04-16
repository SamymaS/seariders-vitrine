import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'; // Styles globaux
import './css/Boutique.css'; // Style pour la Page Boutique
import './css/Home.css'; // Style pour la Page Home
import './css/Products.css'; // Style pour la Page Products
import './css/Contact.css'; // Style pour la Page Products
import './css/ProductsCustom.css'; // Style pour la Page Personnalisation
import './css/ProductDetail.css'; // Style pour la Page Détail Produit
import './css/Checkout.css'; // Style pour la Page Paiement

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
