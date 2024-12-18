import React from "react";
// import "../Products.css";

const products = [
  { id: 1, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
  { id: 2, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
  { id: 3, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
  { id: 4, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
  { id: 5, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
  { id: 6, name: "Planche Sunshine", price: 400, image: "src/assets/BoutiqueNosPlanches.png" },
];

const Products = () => {
  return (
    <div className="products-page">
      {/* En-tête */}
      <header className="products-header">
        <h1>
          sea <span>RIDERS</span>
        </h1>
        <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Engagement</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Section Produits */}
      <section className="products-section">
        <h2>Nos Voiles</h2>

        {/* Filtres */}
        <div className="products-filters">
          <button>Personnaliser</button>
          <button>Key Colors</button>
          <button>Recyclable</button>
          <button>Aluminium</button>
          <button>Mix</button>
        </div>

        {/* Grille des produits */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              <button>Découvrir</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pied de page */}
      <footer className="products-footer">
        <h3>ABONNEZ-VOUS</h3>
        <p>Pour recevoir nos dernières actualités et offres exclusives.</p>
        <div className="newsletter">
          <input type="email" placeholder="Votre email" />
          <button>S'abonner</button>
        </div>
        <p>&copy; 2024 Sea Riders. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Products;
