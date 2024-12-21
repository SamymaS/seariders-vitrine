import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Surfez avec conscience, <br /> pour un avenir durable.
        </h1>
        <p className="hero-subtitle">
          Grâce au recyclage des déchets marins, nous créons des planches à voile qui protègent notre planète. Il est temps de surfer avec conscience.
        </p>
      </section>

      {/* Engagement Section */}
      <section className="engagement">
        <h2 className="section-title">Notre engagement</h2>
        <div className="stats">
          <div className="stat-item">
            <h3 className="stat-value">360 kg</h3>
            <p className="stat-description">de déchets recyclés</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">80 kg</h3>
            <p className="stat-description">de CO2 émis</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-value">80%</h3>
            <p className="stat-description">Moins polluant que la moyenne</p>
          </div>
        </div>
      </section>

      {/* Planches Section */}
      <section className="planches">
        <h2 className="section-title">Personnaliser votre planche</h2>
        <div className="planches-container">
          <div className="planche">
            {/* <img src={require("../assets/planches/plancherouge.png")} alt="Planche Sunshine" /> */}
            <h3 className="planche-title">Planche Sunshine</h3>
            <p className="planche-price">400 €</p>
            <button className="discover-button">Découvrir</button>
          </div>
          <div className="planche">
            {/* <img src={require("../assets/planches/plancheverte.png")} alt="Planche Wave" /> */}
            <h3 className="planche-title">Planche Wave</h3>
            <p className="planche-price">400 €</p>
            <button className="discover-button">Découvrir</button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <h2 className="section-title">Suivez-nous sur Instagram !</h2>
        <p className="instagram-handle">@seariders</p>
      </section>
    </div>
  );
};

export default Home;
