import React from "react";
import "../css/Boutique.css";

// Import des images
import plancheRouge from "../assets/planches/plancherouge.png";
import plancheVerte from "../assets/planches/plancheverte.png";
import plancheBlanche from "../assets/planches/plancheblanche.png";

const Boutique = () => {
  const produits = [
    {
      id: 1,
      nom: "Planche Sunshine",
      prix: "400 €",
      image: plancheRouge,
    },
    {
      id: 2,
      nom: "Planche Sunshine",
      prix: "400 €",
      image: plancheVerte,
    },
    {
      id: 3,
      nom: "Planche Sunshine",
      prix: "400 €",
      image: plancheBlanche,
    },
  ];

  return (
    <div className="boutique-container">
      {/* Titre principal */}
      <h1 className="boutique-title">NOS PLANCHES</h1>

      {/* Menu de filtres */}
      <div className="boutique-filters">
        <button className="filter-button">Customisation</button>
        <button className="filter-button">Nos voiles</button>
        <button className="filter-button active">Nos planches</button>
        <button className="filter-button">Ailerons</button>
        <button className="filter-button">Mâts</button>
        <button className="filter-button">Afficher les filtres</button>
      </div>

      {/* Barre de recherche et tri */}
      <div className="boutique-search-sort">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Recherche"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="sort-dropdown">
          <button className="sort-button">
            Trier par ▼
          </button>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="produits-list">
        {produits.map((produit) => (
          <div className="produit-card" key={produit.id}>
            <div className="produit-image">
              <img src={produit.image} alt={produit.nom} />
            </div>
            <h2 className="produit-nom">{produit.nom}</h2>
            <hr className="produit-separator" />
            <p className="produit-prix">{produit.prix}</p>
            <button className="produit-button">DÉCOUVRIR</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
