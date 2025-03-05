import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Planche Sunshine", price: 400, image: "src/assets/planches/plancherouge.png" },
  { id: 2, name: "Planche Sunshine", price: 400, image: "src/assets/planches/BoutiqueAutresPlanches.png" },
  { id: 3, name: "Planche Sunshine", price: 400, image: "src/assets/planches/plancherouge.png" },
  { id: 4, name: "Planche Sunshine", price: 400, image: "src/assets/planches/plancherouge.png" },
  { id: 5, name: "Planche Sunshine", price: 400, image: "src/assets/planches/BoutiqueAutresPlanches.png" },
  { id: 6, name: "Planche Sunshine", price: 400, image: "src/assets/planches/plancherouge.png" },
];

const Products = () => {
  return (
    <div className="products-page">
      <section className="products-section">
        <h2>Nos Planches</h2>
        <div className="products-filters">
          <div className="left-filters">
            <button>Customisation</button>
            <button>Nos voiles</button>
            <button>Nos planches</button>
            <button>Ailerons</button>
            <button>Mâts</button>
            <button>Afficher les filtres</button>
          </div>
          <div className="right-filters">
            <input type="text" placeholder="Recherche" />
            <select>
              <option value="prix">Trier par prix</option>
              <option value="nom">Trier par nom</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <FaShoppingCart className="cart-icon" />
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>

              {/* Lien vers /product/1, /product/2, etc. */}
              <Link to={`/product/${product.id}`}>
                <button>Découvrir</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
