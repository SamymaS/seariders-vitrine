import { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/ProductDetail.css"; // <-- votre CSS pour le style
import { CartContext } from "../context/CartContext";
import Model3D from "../components/Model3D";

// On importe directement les images pour que Vite/React résolvent le chemin
import plancheRouge from "../assets/planches/plancherouge.png";
import plancheBoutique from "../assets/planches/BoutiqueAutresPlanches.png";

// Objets de couleurs stylées pour chaque partie
const boardColors = {
  "Rouge": "#e63946",  // Rouge cerise
  "Bleu": "#1d3557",   // Bleu profond
  "Vert": "#2a9d8f",   // Vert sarcelle
  "Orange": "#f4a261", // Orange pastel
  "Noir": "#212529"    // Noir élégant
};

const sailColors = {
  "Rouge": "#e63946",
  "Bleu": "#1d3557",
  "Vert": "#2a9d8f",
  "Orange": "#f4a261",
  "Noir": "#212529"
};

const mastColors = {
  "Blanc": "#f1faee",
  "Carbone": "#495057",
  "Argent": "#adb5bd"
};

const finColors = {
  "Bleu": "#264653",
  "Noir": "#212529",
  "Rouge": "#d62828"
};

const boomColors = {
  "Noir": "#212529",
  "Carbone": "#343a40",
  "Argent": "#adb5bd"
};

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
  // État pour les différentes couleurs sélectionnées
  const [selectedBoardColor, setSelectedBoardColor] = useState("Rouge");
  const [selectedSailColor, setSelectedSailColor] = useState("Bleu");
  const [selectedMastColor, setSelectedMastColor] = useState("Blanc");
  const [selectedFinColor, setSelectedFinColor] = useState("Bleu");
  const [selectedBoomColor, setSelectedBoomColor] = useState("Noir");
  
  // État pour les sections d'options ouvertes - maintenant un objet
  const [openOptions, setOpenOptions] = useState({
    sail: true,
    board: false,
    mast: false,
    fin: false,
    boom: false,
    aileron: false
  });
  // État pour afficher un message de confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  // Animation de clic sur bouton
  const [buttonAnimation, setButtonAnimation] = useState(false);
  // Vérifier si le produit est déjà dans le panier
  const [isInCart, setIsInCart] = useState(false);

  // Vérifier si le produit est déjà dans le panier
  useEffect(() => {
    if (product) {
      const productInCart = cartItems.some(
        item => item.id === product.id
      );
      setIsInCart(productInCart);
    }
  }, [product, cartItems]);

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleToggleOptions = (section) => {
    setOpenOptions(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddToCart = () => {
    // Animation du bouton
    setButtonAnimation(true);
    setTimeout(() => setButtonAnimation(false), 300);
    
    // Ajout au panier avec toutes les options personnalisées
    const customizedProduct = {
      ...product,
      boardColor: selectedBoardColor,
      sailColor: selectedSailColor,
      mastColor: selectedMastColor,
      finColor: selectedFinColor,
      boomColor: selectedBoomColor
    };
    
    addToCart(customizedProduct, selectedBoardColor);
    
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
        <div className="detail-main-container">
          {/* Colonne gauche : image */}
          <div className="detail-image-section" style={{ 
            width: "100%", 
            height: "800px",  
            position: "relative"
          }}>
            <Model3D
              width={window.innerWidth * 0.95}
              height={700}
              boardColor={boardColors[selectedBoardColor] || boardColors["Rouge"]}
              sailColor={sailColors[selectedSailColor] || sailColors["Bleu"]}
              finColor={finColors[selectedFinColor] || finColors["Bleu"]}
              mastColor={mastColors[selectedMastColor] || mastColors["Blanc"]}
              boomColor={boomColors[selectedBoomColor] || boomColors["Noir"]}
            />
            <style>
              {`
                .view-instructions, 
                [style*="position: absolute"][style*="bottom: 10px"],
                [style*="position: absolute"][style*="bottom: 20px"],
                [style*="position: absolute"][style*="text-align: center"] {
                  display: none !important;
                }
              `}
            </style>
          </div>
          <img
            src={product.mainImage}
            alt={product.name}
            className="detail-main-image"
            style={{ display: 'none' }}
          />

          {/* Colonne droite : infos produit */}
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

        {/* Section de personnalisation */}
        <div className="customization-section">
          <h2 className="customization-title">Personnalisez votre planche</h2>
          
          <div className="customization-options">
            {/* Accordéon Voile */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('sail')}
              >
                <span>Voile</span>
                <span className="toggle-icon">{openOptions.sail ? '−' : '+'}</span>
              </div>
              {openOptions.sail && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(sailColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedSailColor === name ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection voile: ${name} (${color})`);
                          setSelectedSailColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordéon Planche */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('board')}
              >
                <span>Planche</span>
                <span className="toggle-icon">{openOptions.board ? '−' : '+'}</span>
              </div>
              {openOptions.board && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(boardColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedBoardColor === name ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection planche: ${name} (${color})`);
                          setSelectedBoardColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordéon Mât */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('mast')}
              >
                <span>Mât</span>
                <span className="toggle-icon">{openOptions.mast ? '−' : '+'}</span>
              </div>
              {openOptions.mast && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(mastColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedMastColor === name ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection mât: ${name} (${color})`);
                          setSelectedMastColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordéon Dérive */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('fin')}
              >
                <span>Dérive</span>
                <span className="toggle-icon">{openOptions.fin ? '−' : '+'}</span>
              </div>
              {openOptions.fin && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(finColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedFinColor === name ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection dérive: ${name} (${color})`);
                          setSelectedFinColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordéon Wishbone */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('boom')}
              >
                <span>Wishbone</span>
                <span className="toggle-icon">{openOptions.boom ? '−' : '+'}</span>
              </div>
              {openOptions.boom && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(boomColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedBoomColor === name ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection wishbone: ${name} (${color})`);
                          setSelectedBoomColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Accordéon Aileron */}
            <div className="custom-option-item">
              <div 
                className="custom-option-header" 
                onClick={() => handleToggleOptions('aileron')}
              >
                <span>Aileron</span>
                <span className="toggle-icon">{openOptions.aileron ? '−' : '+'}</span>
              </div>
              {openOptions.aileron && (
                <div className="custom-option-content">
                  <ul className="color-selector">
                    {Object.entries(finColors).map(([name, color]) => (
                      <li 
                        key={name} 
                        className={`color-option ${selectedFinColor === name ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          console.log(`Sélection aileron: ${name} (${color})`);
                          setSelectedFinColor(name);
                        }}
                      ></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="customization-actions">
              <button className="detail-button-reset" onClick={() => {
                setSelectedBoardColor("Rouge");
                setSelectedSailColor("Bleu");
                setSelectedMastColor("Blanc");
                setSelectedFinColor("Bleu");
                setSelectedBoomColor("Noir");
              }}>
                Réinitialiser
              </button>
            </div>
          </div>
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
