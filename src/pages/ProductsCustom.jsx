import { useState } from "react";
import "../css/ProductsCustom.css";
import Model3D from "../components/Model3D";

const ProductsCustom = () => {
  // États pour les différentes parties personnalisables
  const [visibleSection, setVisibleSection] = useState(null);
  const [boardColor, setBoardColor] = useState("#FF8064");
  const [sailColor, setSailColor] = useState("#4A90E2");
  const [finColor, setFinColor] = useState("#013264");
  const [mastColor, setMastColor] = useState("#FFFFFF");
  const [boomColor, setBoomColor] = useState("#333333");

  // Configuration des sections et options de personnalisation
  const sections = [
    { 
      name: "Voile", 
      colors: [
        { name: "Bleu", value: "#4A90E2" },
        { name: "Rouge", value: "#FF3B30" },
        { name: "Vert", value: "#34C759" },
        { name: "Jaune", value: "#FFCC00" },
        { name: "Blanc", value: "#FFFFFF" }
      ],
      setter: setSailColor,
      current: sailColor
    },
    { 
      name: "Planche", 
      colors: [
        { name: "Orange", value: "#FF8064" },
        { name: "Bleu", value: "#007AFF" },
        { name: "Vert", value: "#28CD41" },
        { name: "Rouge", value: "#FF3A2D" },
        { name: "Noir", value: "#1D1D1F" }
      ],
      setter: setBoardColor,
      current: boardColor
    },
    { 
      name: "Mât", 
      colors: [
        { name: "Blanc", value: "#FFFFFF" },
        { name: "Gris", value: "#8E8E93" },
        { name: "Noir", value: "#1D1D1F" }
      ],
      setter: setMastColor,
      current: mastColor
    },
    { 
      name: "Dérive", 
      colors: [
        { name: "Bleu marine", value: "#013264" },
        { name: "Gris", value: "#636366" },
        { name: "Noir", value: "#000000" }
      ],
      setter: setFinColor,
      current: finColor
    },
    { 
      name: "Wishbone", 
      colors: [
        { name: "Noir", value: "#333333" },
        { name: "Gris", value: "#8E8E93" },
        { name: "Argent", value: "#C4C4C4" }
      ],
      setter: setBoomColor,
      current: boomColor
    },
    { 
      name: "Aileron", 
      colors: [
        { name: "Bleu marine", value: "#013264" },
        { name: "Gris", value: "#636366" },
        { name: "Noir", value: "#000000" }
      ],
      setter: setFinColor,
      current: finColor
    }
  ];

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  // Pour sauvegarder la configuration
  const handleFinish = () => {
    const config = {
      boardColor,
      sailColor,
      finColor,
      mastColor,
      boomColor
    };
    
    alert("Configuration enregistrée !\n" + JSON.stringify(config, null, 2));
    // Ici on pourrait rediriger vers le panier ou la page de commande
  };

  return (
    <div className="customisation-page">
      <header className="custom-header">
        <h1 className="custom-title">Personnalisez votre planche</h1>
        <div className="mode-3d-container">
          <div className="view-mode">
            <span className="view-mode-label">Mode 3D</span>
          </div>
        </div>
      </header>

      <div className="custom-main-container">
        <aside className="custom-sidebar">
          <h2 className="sidebar-title">Options de personnalisation</h2>
          
          {sections.map((section, index) => (
            <div key={index} className="custom-section">
              <button
                className={`section-button ${visibleSection === section.name ? 'active' : ''}`}
                onClick={() => toggleSection(section.name)}
              >
                {section.name} 
                <span className="toggle-icon">{visibleSection === section.name ? '−' : '+'}</span>
              </button>
              
              {visibleSection === section.name && (
                <div className="color-options">
                  {section.colors.map((color, colorIndex) => (
                    <div 
                      key={colorIndex} 
                      className={`color-option ${section.current === color.value ? 'selected' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => section.setter(color.value)}
                      title={color.name}
                    >
                      <span className="color-name">{color.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="custom-actions">
            <button className="reset-button" onClick={() => {
              setBoardColor("#FF8064");
              setSailColor("#4A90E2");
              setFinColor("#013264");
              setMastColor("#FFFFFF");
              setBoomColor("#333333");
            }}>
              Réinitialiser
            </button>
            <button className="finish-button" onClick={handleFinish}>
              Terminer
            </button>
          </div>
        </aside>

        <main className="custom-3d-view">
          <Model3D 
            boardColor={boardColor} 
            sailColor={sailColor} 
            finColor={finColor} 
            mastColor={mastColor} 
            boomColor={boomColor}
            width={550}
            height={450}
          />
          
        </main>
      </div>
    </div>
  );
};

export default ProductsCustom;

