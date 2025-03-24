import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/ProductDetail.css"; // <-- votre CSS pour le style
import { CartContext } from "../context/CartContext";

// On importe directement les images pour que Vite/React résolvent le chemin
import plancheRouge from "../assets/planches/plancherouge.png";
import plancheBoutique from "../assets/planches/BoutiqueAutresPlanches.png";

// On définit un tableau de 6 produits, cohérent avec Products.jsx
const allProducts = [
  {
    id: 1,
    name: "Planche Sunshine",
    subTitle: "MID LENGTH",
    description: "Une planche rouge idéale pour débuter ou progresser en toute sécurité.",
    size: "5.0 m²",
    weight: "3.7 kg",
    price: 400,
    mainImage: plancheRouge,
    colors: ["Rouge", "Bleu", "Vert"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 1…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 1)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 1)"
    }
  },
  {
    id: 2,
    name: "Planche Sunshine",
    subTitle: "FAST & LIGHT",
    description: "Une planche polyvalente pour naviguer dans toutes les conditions.",
    size: "5.5 m²",
    weight: "4.0 kg",
    price: 400,
    mainImage: plancheBoutique,
    colors: ["Orange", "Noir"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 2…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 2)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 2)"
    }
  },
  {
    id: 3,
    name: "Planche Sunshine",
    subTitle: "MID LENGTH",
    description: "Une planche rouge, stable et maniable pour toutes les allures.",
    size: "5.0 m²",
    weight: "3.7 kg",
    price: 400,
    mainImage: plancheRouge,
    colors: ["Rouge", "Bleu", "Vert"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 3…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 3)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 3)"
    }
  },
  {
    id: 4,
    name: "Planche Sunshine",
    subTitle: "MID LENGTH",
    description: "Une planche rouge pour des sensations de glisse en toute simplicité.",
    size: "5.0 m²",
    weight: "3.7 kg",
    price: 400,
    mainImage: plancheRouge,
    colors: ["Rouge", "Bleu", "Vert"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 4…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 4)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 4)"
    }
  },
  {
    id: 5,
    name: "Planche Sunshine",
    subTitle: "FAST & LIGHT",
    description: "Une planche légère et rapide, parfaite pour gagner en performance.",
    size: "5.5 m²",
    weight: "4.0 kg",
    price: 400,
    mainImage: plancheBoutique,
    colors: ["Orange", "Noir"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 5…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 5)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 5)"
    }
  },
  {
    id: 6,
    name: "Planche Sunshine",
    subTitle: "MID LENGTH",
    description: "Une planche rouge pour un maximum de plaisir sur l'eau.",
    size: "5.0 m²",
    weight: "3.7 kg",
    price: 400,
    mainImage: plancheRouge,
    colors: ["Rouge", "Bleu", "Vert"],
    details: {
      caracteristique: "Caractéristiques détaillées pour la planche ID 6…",
      technique: "Descriptif technique : matériaux, résistance, etc. (ID 6)",
      entretien: "Entretien et conseils : rinçage, stockage… (ID 6)"
    }
  }
];

function ProductDetail() {
  const { id } = useParams(); // Récupère l'ID dans l'URL (/product/1, etc.)
  const product = allProducts.find((p) => p.id === parseInt(id));
  const { addToCart, cartItems } = useContext(CartContext);

  // État pour gérer l'ouverture/fermeture des sections repliables
  const [openSection, setOpenSection] = useState(null);
  // État pour gérer la couleur sélectionnée
  const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : null);
  // État pour afficher un message de confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Animation de clic sur bouton
  const [buttonAnimation, setButtonAnimation] = useState(false);
  // Vérifier si le produit est déjà dans le panier
  const [isInCart, setIsInCart] = useState(false);

  // Vérifier si le produit est déjà dans le panier avec la couleur sélectionnée
  useEffect(() => {
    if (product && selectedColor) {
      const productInCart = cartItems.some(
        item => item.id === product.id && item.selectedColor === selectedColor
      );
      setIsInCart(productInCart);
    }
  }, [product, selectedColor, cartItems]);

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    // Animation du bouton
    setButtonAnimation(true);
    setTimeout(() => setButtonAnimation(false), 300);
    
    // Ajout au panier
    addToCart(product, selectedColor);
    
    // Message de confirmation
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  // Si aucun produit ne correspond, message d'erreur
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Produit introuvable</h2>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <h1 className="detail-title">NOS VOILES</h1>

      {/* Partie haute : image + infos */}
      <div className="detail-content">
        {/* Colonne gauche : image */}
        <div className="detail-image-section">
          <img
            src={product.mainImage}
            alt={product.name}
            className="detail-main-image"
          />
        </div>

        {/* Colonne droite : infos */}
        <div className="detail-info-section">
          <h2 className="detail-product-name">{product.name}</h2>
          <p className="detail-subtitle">{product.subTitle}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-size">
            Taille : {product.size} | Poids : {product.weight}
          </p>
          <p className="detail-price">{product.price} €</p>

          {/* Message de confirmation */}
          {showConfirmation && (
            <div className="confirmation-message">
              Produit ajouté au panier avec succès!
            </div>
          )}

          {/* Couleurs */}
          <div className="detail-colors">
            <span>COULEURS</span>
            <ul className="color-selector">
              {product.colors.map((color) => (
                <li 
                  key={color} 
                  className={`color-option color-${color.toLowerCase()} ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorClick(color)}
                  aria-label={`Couleur ${color}`}
                  role="button"
                  tabIndex="0"
                >
                  {color}
                </li>
              ))}
            </ul>
          </div>

          {/* Boutons */}
          <button 
            className={`detail-button-add ${buttonAnimation ? 'clicked' : ''} ${isInCart ? 'in-cart' : ''}`}
            onClick={handleAddToCart}
          >
            {isInCart ? 'AJOUTER À NOUVEAU' : 'AJOUTER AU PANIER'}
          </button>
          
          {cartItems.length > 0 && (
            <Link to="/cart">
              <button className="detail-button-view-cart">VOIR LE PANIER</button>
            </Link>
          )}
          
          <Link to="/checkout">
            <button className="detail-button-buy">ACHETER MAINTENANT</button>
          </Link>

          {/* Infos extra */}
          <p className="detail-shipping">
            FABRICATION À LA COMMANDE • LIVRAISON SOUS 10 JOURS
          </p>
          <p className="detail-shipping-sub">
            Expédiée en 24h • Essai gratuit en boutique
          </p>
        </div>
      </div>

      {/* Accordéon : Caractéristique, Technique, Entretien */}
      <div className="detail-accordion">
        <div
          className="accordion-item"
          onClick={() => handleToggleSection("caracteristique")}
        >
          <div className="accordion-header">
            CARACTÉRISTIQUE DU PRODUIT
            <span>{openSection === "caracteristique" ? "-" : "+"}</span>
          </div>
          {openSection === "caracteristique" && (
            <div className="accordion-content">
              {product.details.caracteristique}
            </div>
          )}
        </div>

        <div
          className="accordion-item"
          onClick={() => handleToggleSection("technique")}
        >
          <div className="accordion-header">
            DESCRIPTIF TECHNIQUE
            <span>{openSection === "technique" ? "-" : "+"}</span>
          </div>
          {openSection === "technique" && (
            <div className="accordion-content">
              {product.details.technique}
            </div>
          )}
        </div>

        <div
          className="accordion-item"
          onClick={() => handleToggleSection("entretien")}
        >
          <div className="accordion-header">
            ENTRETIEN ET CONSEILS
            <span>{openSection === "entretien" ? "-" : "+"}</span>
          </div>
          {openSection === "entretien" && (
            <div className="accordion-content">
              {product.details.entretien}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
