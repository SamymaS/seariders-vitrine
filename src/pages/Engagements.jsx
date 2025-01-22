import React from "react";
// import "/src/css/Engagements.css";

const Engagements = () => {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="hero-image.jpg"
          alt="Cleaning the sea"
          className="hero-image"
        />
        <div className="hero-content">
          <h2 className="hero-title">
            UNE PRATIQUE DU WINDSURF <br />
            <em className="hero-subtitle">
              PLUS RESPECTUEUSE DE L'ENVIRONNEMENT
            </em>
          </h2>
          <div className="hero-stats">
            <div className="stat-item">
              <p className="stat-value">360kg</p>
              <p className="stat-label">de déchets recyclés</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">80kg</p>
              <p className="stat-label">de co2 évité</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">80%</p>
              <p className="stat-label">de matière recyclée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="materials-section">
        <div className="materials-content">
          <h2 className="materials-title">Matériaux durable</h2>
          <p className="materials-description">
            Nos planches à voile sont fabriquées avec des matériaux recyclés grâce
            auxquels nous pouvons ensemble préserver la mer moins polluée. <br />
            Sea Riders respecte l'environnement dans lequel nous et les autres peuvent s'amuser.
          </p>
          <img
            src="recycled-plastic.jpg"
            alt="Plastic being picked up"
            className="materials-image"
          />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="innovation-section">
        <div className="innovation-content">
          <h2 className="innovation-title">
            Nous croyons en l'innovation et en la durabilité.
          </h2>
          <p className="innovation-description">
            Depuis toujours, nous avons développé des alliages uniques et innovants
            pour la construction de nos planches à voile éco-responsables. En combinant
            des matériaux recyclés et un processus écologique de fibre naturelle et de
            résine, nous avons créé des produits performants et durables.
          </p>
          <p className="innovation-highlight">
            EN CHOISISSANT UNE PLANCHE À VOILE SEA RIDERS, VOUS OPTEZ POUR UN PRODUIT
            DE HAUTE QUALITÉ AVEC UN ENGAGEMENT INÉBRANLABLE POUR LA DURABILITÉ ENVIRONNEMENTALE.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h3 className="events-title">Nos événements</h3>
        <div className="events-grid">
          {[
            { date: "13 AVRIL 2024", title: "Nettoyons le Sud", time: "9H - 11H" },
            { date: "22 MAI 2024", title: "Pêche au crochet feat. LIME", time: "9H - 11H" },
          ].map((event, index) => (
            <div
              key={index}
              className="event-card"
            >
              <h4 className="event-date">{event.date}</h4>
              <p className="event-title">{event.title}</p>
              <span className="event-time">{event.time}</span>
              <button className="btn-participate">Participer</button>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="partners-title">Nos partenaires</h2>
        <div className="partners-grid">
          <img src="clean-my-calanques.jpg" alt="Partner 1" className="partner-logo" />
          <img src="wings-of-the-ocean.jpg" alt="Partner 2" className="partner-logo" />
          <img src="sea-cleaners.jpg" alt="Partner 3" className="partner-logo" />
        </div>
      </section>
    </div>
  );
};

export default Engagements;
