import React from 'react';

const Engagements = () => {
  return (
    <div className="engagements-page">
      {/* Top Section */}
      <header className="header-section">
        <h1 className="site-title">sea RIDERS</h1>
        <nav className="nav-bar">
          <ul>
            <li>ACCUEIL</li>
            <li>PRODUITS</li>
            <li>NOTRE ENGAGEMENT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            UNE PRATIQUE DU WINDSURF <br />
            <em>PLUS RESPECTUEUSE DE L'ENVIRONNEMENT</em>
          </h2>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">360kg</span>
              <span className="stat-text">de déchets recyclés</span>
            </div>
            <div className="stat">
              <span className="stat-number">80kg</span>
              <span className="stat-text">de co2 évité</span>
            </div>
            <div className="stat">
              <span className="stat-number">80%</span>
              <span className="stat-text">de matière recyclée</span>
            </div>
          </div>
        </div>
        <img
          src="hero-image.jpg"
          alt="Two people holding trash bags near the sea"
          className="hero-image"
        />
      </section>

      {/* Materials Section */}
      <section className="materials-section">
        <h2 className="section-title">Matériaux durable</h2>
        <p className="section-description">
          Nos planches à voile sont fabriquées avec des matériaux recyclés
          grâce auxquels nous pouvons ensemble préserver la mer moins polluée.
          <br />
          Sea Riders respecte l'environnement dans lequel nous et les autres
          peuvent s'amuser.
        </p>
        <img
          src="recycled-plastic.jpg"
          alt="Plastic being picked up near water"
          className="materials-image"
        />
      </section>

      {/* Innovation Section */}
      <section className="innovation-section">
        <h2 className="innovation-title">
          Nous croyons en l'innovation et en la durabilité.
        </h2>
        <p className="innovation-text">
          Depuis toujours, nous avons développé des alliages uniques et
          innovants pour la construction de nos planches à voile éco-responsables. En combinant des
          matériaux recyclés et un processus écologique de fibre naturelle et de
          résine de faible impact environnemental, nous avons créé des alliages
          robustes et légers qui allient à la fois performance et durabilité.
        </p>
        <p className="highlighted-text">
          EN CHOISISSANT UNE PLANCHE À VOILE SEA RIDERS, VOUS OPTEZ POUR UN PRODUIT DE HAUTE QUALITÉ
          FABRIQUÉ AVEC DES MATÉRIAUX DE POINTE ET UN ENGAGEMENT INÉBRANLABLE ENVERS LA DURABILITÉ ENVIRONNEMENTALE.
        </p>
        <img
          src="people-cleaning.jpg"
          alt="People cleaning up near the ocean"
          className="innovation-image"
        />
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2 className="events-mission">
          Rejoignez-nous dans notre mission de protéger nos océans et de
          promouvoir une pratique du windsurf plus respectueuse de
          l'environnement.
        </h2>
        <h3 className="events-title">Nos événements</h3>
        <div className="events-container">
          <div className="event-card">
            <h4>13 AVRIL 2024</h4>
            <p>Nettoyons le Sud</p>
            <span>9H - 11H</span>
            <button>Participer</button>
          </div>
          <div className="event-card">
            <h4>22 MAI 2024</h4>
            <p>Pêche au crochet feat. LIME</p>
            <span>9H - 11H</span>
            <button>Participer</button>
          </div>
          <div className="event-card">
            <h4>13 AVRIL 2024</h4>
            <p>Nettoyons le Sud</p>
            <span>9H - 11H</span>
            <button>Participer</button>
          </div>
          <div className="event-card">
            <h4>13 AVRIL 2024</h4>
            <p>Nettoyons le Sud</p>
            <span>9H - 11H</span>
            <button>Participer</button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2 className="partners-title">Nos partenaires</h2>
        <div className="partners-logos">
          <img
            src="clean-my-calanques.jpg"
            alt="Clean My Calanques logo"
            className="partner-logo"
          />
          <img
            src="wings-of-the-ocean.jpg"
            alt="Wings of the Ocean logo"
            className="partner-logo"
          />
          <img
            src="sea-cleaners.jpg"
            alt="Sea Cleaners logo"
            className="partner-logo"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-logo">
          <h2>sea RIDERS</h2>
        </div>
        <div className="newsletter">
          <p>
            ABONNEZ-VOUS POUR RECEVOIR NOS DERNIÈRES ACTUS ET NOS OFFRES
            EXCLUSIVES !
          </p>
          <input type="email" placeholder="votre adresse mail..." />
          <button>S'inscrire</button>
        </div>
        <div className="footer-links">
          <div className="support">
            <h4>SUPPORT</h4>
            <ul>
              <li>Conditions générales</li>
              <li>Mentions légales</li>
              <li>Données personnelles</li>
              <li>Gestion des cookies</li>
            </ul>
          </div>
          <div className="information">
            <h4>INFORMATION</h4>
            <ul>
              <li>Accueil</li>
              <li>Boutique</li>
              <li>Notre engagement</li>
              <li>Contact</li>
              <li>Panier</li>
              <li>Compte</li>
            </ul>
          </div>
          <div className="socials">
            <h4>RÉSEAUX SOCIAUX</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="payments">
            <h4>MOYEN DE PAIEMENT</h4>
            <ul>
              <li>VISA</li>
              <li>MasterCard</li>
              <li>PayPal</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Engagements;
