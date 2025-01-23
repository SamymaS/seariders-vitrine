import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";

const ProductsCustom = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const sections = [
    { name: "Voile", colors: ["Blanc", "Jaune", "Vert", "Noir", "Rouge"] },
    { name: "Planche", colors: ["Bleu", "Orange", "Gris", "Rose"] },
    { name: "Mat", colors: ["Argent", "Noir", "Doré"] },
    { name: "Dérive", colors: ["Vert", "Bleu", "Rouge"] },
    { name: "Wishbone", colors: ["Jaune", "Noir", "Blanc"] },
    { name: "Pied de mat", colors: ["Noir", "Gris", "Blanc"] },
    { name: "Aileron", colors: ["Bleu", "Vert", "Rouge"] },
    { name: "Tire-veille", colors: ["Rouge", "Bleu", "Gris"] },
  ];

  return (
    <div className="customisation-page">
      <header className="header">
        <div className="filter-container">
          <div className="filter-buttons">
            <button>Nos voiles</button>
            <button>Nos planches</button>
            <button>Ailerons</button>
            <button>Mâts</button>
            <button className="icon-button">
              <FaSlidersH /> Afficher les filtres
            </button>
          </div>
          <button className="button-3d">3D</button>
        </div>
      </header>

      <div className="main-container">
        <aside className="customisation-sidebar">
          {sections.map((section, index) => (
            <div key={index} className="customisation-section">
              <button
                className="customisation-button"
                onClick={() => toggleSection(section.name)}
              >
                {section.name} <span className="plus-icon">+</span>
              </button>
              {visibleSection === section.name && (
                <div className="colors-container">
                  {section.colors.map((color, colorIndex) => (
                    <div key={colorIndex} className="color-item">
                      {color}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        <main className="main-content">
          <img
            src="./assets/planches/plancherouge.png"
            alt=""
            className="product-image"
          />
          <button className="finish-button">Terminer</button>
        </main>
      </div>
    </div>
  );
};

export default ProductsCustom;

