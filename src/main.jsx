import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'; // Styles globaux
import './css/products.css'; // Style pour la Page Product

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
