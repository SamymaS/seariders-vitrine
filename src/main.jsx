import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'; // Styles globaux
// import './css/Products.css'; // Style pour la Page Product
import './css/Engagements.css';  // Styles engagement
import './css/Boutique.css'; // Style pour la Page Boutique
import './css/Home.css'; // Style pour la Page Home

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
