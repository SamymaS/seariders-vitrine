import React from "react";
import pageNotreEngagement from "../assets/images/pagenotreengagement.png";
import materialsImage from "../assets/images/notreengagement.png"; 
import sailboardImage from "../assets/images/pageengagement2.png"; 
import recycledLogo from "../assets/logos/recycledsailboard.png"; 
import '../css/Engagements.css';

const Engagements = () => {
  return (
    <div className="engagements-container">
      <div className="hero-section">
        <img src={pageNotreEngagement} alt="Notre engagement" className="hero-image" />
      </div>
      
      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">360<span>kg</span></div>
          <div className="stat-text">de déchets recyclés</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">80<span>kg</span></div>
          <div className="stat-text">de CO2 évité</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">80<span>%</span></div>
          <div className="stat-text">Moins polluant que la moyenne</div>
        </div>
      </div>

      <div className="section white-section">
        <div className="text-side">
          <div className="text-content">
            <h2>Matériaux<br />durable</h2>
            <p>Nos planches à voiles sont fabriquées avec des matériaux recyclés pour que nous puissions ensemble naviguer sur des mers moins pollués.</p>
            <p>Sea's Riders respecte l'environnement dans lequel nous et les autres peuvent s'amuser.</p>
            <img src={recycledLogo} alt="Logo recyclé" className="recycled-logo" />
          </div>
        </div>
        <div className="image-side">
          <img src={materialsImage} alt="Matériaux durables" />
        </div>
      </div>

      <div className="section beige-section">
        <div className="image-side">
          <img src={sailboardImage} alt="Planche à voile" />
        </div>
        <div className="text-side">
          <div className="text-content">
            <h2>Nous croyons en l'innovation et en la durabilité.</h2>
            <p>C'est pourquoi nous avons développé des alliages uniques et innovants pour la construction de nos planches à voile éco-responsables. En combinant des matériaux recyclés récupérés dans les océans avec des fibres naturelles et des polymères de haute qualité, nous avons créé des alliages robustes et légers qui offrent à la fois performance et durabilité.</p>
            <p>Nos planches à voile sont construites avec des alliages avancés qui résistent aux rigueurs de l'environnement marin tout en réduisant notre empreinte écologique. Chaque alliage est minutieusement conçu et testé pour garantir une rigidité optimale, une flottabilité exceptionnelle et une durabilité à long terme, assurant ainsi une expérience de navigation exceptionnelle pour les passionnés de windsurf de tous niveaux.</p>
          </div>
        </div>
      </div>

      <div className="bottom-banner">
        En choisissant une planche à voile Sea Riders, vous optez pour un produit de haute qualité fabriqué avec des matériaux de pointe et un engagement inébranlable envers la durabilité environnementale.
      </div>
    </div>
  );
};

export default Engagements;
