import React from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom';
import planchedebout from '../assets/images/planchedebout.png';
import planchepov from '../assets/images/planchepov.png';
import AccueilGroupe from '../assets/images/AccueilGroupe.png';
import plancheblanche from '../assets/planches/plancheblanche.png';
import planchebleu from '../assets/planches/planchebleu.png';
import planchejaune from '../assets/images/planchejaune.png';
import logopassion from '../assets/images/logopassion.png';
import { FiShoppingCart } from 'react-icons/fi';

export const Home = () => {
  return (
    <div className="homePage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src={planchedebout} alt="Surfeur avec planche" className="hero-background" />
        </div>
        <div className="heroContent">
          <h1 className="heroTitle">
            SURFEZ AVEC CONSCIENCE,<br />
            POUR UN AVENIR DURABLE.
          </h1>
          <NavLink to="/Products">
            <button className="ctaButton">DÉCOUVRIR NOS PLANCHES</button>
          </NavLink>
        </div>
      </section>

      {/* Nouveautés Section */}
      <section className="nouveautes">
        <div className="sectionTitle">
          <h2>Nouveautés</h2>
          <NavLink to="/Products" className="voir-plus-link">
            Voir plus
          </NavLink>
        </div>
        <div className="productGrid">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="productCard">
              <FiShoppingCart className="cart-icon" />
              <img
                src={index < 2 ? plancheblanche : planchebleu}
                alt="Planche sunshine"
                className="productImage"
              />
              <h3 className="productTitle">Planche sunshine</h3>
              <p className="productPrice">400 €</p>
              <button className="productButton">Découvrir</button>
            </div>
          ))}
        </div>
      </section>

      {/* Passion Section */}
      <section className="passion-section">
        <div className="passion-content">
          <img src={logopassion} alt="Logo Seariders" className="passion-logo" />
          <h2 className="passion-title">Vague de passion<br />dans</h2>
          <p className="passion-subtitle">une mer de<br />changement</p>
        </div>
        <div 
          className="passion-image"
          style={{ backgroundImage: `url(${planchepov})` }}
        ></div>
      </section>

      {/* Engagement and Vision Container */}
      <div className="engagement-vision-container">
        {/* Engagement Section */}
        <section className="engagement">
          <h2 className="engagement-title">Notre engagement</h2>
          <div className="engagement-stats">
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">360</span>
                <span className="stat-unit">kg</span>
              </div>
              <p className="stat-label">de déchets recyclés</p>
            </div>
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">80</span>
                <span className="stat-unit">kg</span>
              </div>
              <p className="stat-label">de CO2 émis</p>
            </div>
            <div className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">80</span>
                <span className="stat-unit">%</span>
              </div>
              <p className="stat-label">Moins polluant que la moyenne</p>
            </div>
          </div>
          <button className="engagement-button">En savoir plus</button>
        </section>

        {/* Vision Section */}
        <section className="vision">
          <h2>Une nouvelle vision pour nos océans</h2>
          <p className="visionText">
            Grâce au recyclage des déchets marins, nous créons des planches à voile qui protègent notre planète. Il est temps de surfer avec conscience.
          </p>
        </section>
      </div>

      {/* Customization Section */}
      <section className="customization-section">
        <div className="customization-content">
          <h2>Personnaliser<br/>votre planche</h2>
          <button className="customize-btn">PERSONNALISER</button>
        </div>
        <div className="customization-image">
          <img src={planchejaune} alt="Personnalisation de planche" />
        </div>
        {/* Wave Banner */}
        <div className="wave-banner">
          <div className="wave-text">
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
            <span>WAVE</span>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <h2>SUIVEZ-NOUS SUR INSTAGRAM !</h2>
        <div className="instagramHandle">@SEARIDERS</div>
        <div className="instagramGrid">
          <img
            src={AccueilGroupe}
            alt="Instagram feed"
            className="instagramBanner"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
