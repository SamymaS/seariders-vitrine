import React from 'react';
import '../css/Home.css';
import { NavLink } from 'react-router-dom'; // <-- Import NavLink pour la navigation
import planchedebout from '../assets/images/planchedebout.png';
import planchepov from '../assets/images/planchepov.png';
import AccueilGroupe from '../assets/images/AccueilGroupe.png';
import plancheblanche from '../assets/planches/plancheblanche.png';
import planchebleu from '../assets/planches/planchebleu.png';
import { FiShoppingCart } from 'react-icons/fi';

export const Home = () => {
  return (
    <div className="homePage">

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${planchedebout})` }}
      >
        <div className="heroContent">
          <h1 className="heroTitle">
            Surfez avec conscience,
            <br /> pour un avenir durable.
          </h1>
          <NavLink to="/Products">
            <button className="ctaButton">Découvrir nos planches</button>
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

      {/* Engagement Section */}
      <section className="engagement">
        <div
          className="engagementImage"
          style={{ backgroundImage: `url(${planchepov})` }}
        />
        <div className="engagementContent">
          <h2 className="sectionTitle">Notre engagement</h2>
          <div className="stats">
            <div className="stat">
              <span className="statNumber">360 kg</span>
              <span className="statLabel">de déchets recyclés</span>
            </div>
            <div className="stat">
              <span className="statNumber">80 kg</span>
              <span className="statLabel">de CO2 émis</span>
            </div>
            <div className="stat">
              <span className="statNumber">80%</span>
              <span className="statLabel">Moins polluant que la moyenne</span>
            </div>
          </div>
          <button className="ctaButton">En savoir plus</button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2 className="sectionTitle">Une nouvelle vision pour nos océans</h2>
        <p className="visionText">
          Grâce au recyclage des déchets marins, nous créons des planches à voile qui protègent
          notre planète. Il est temps de surfer avec conscience.
        </p>
        {/* Lien vers /ProductsCustom */}
        <NavLink to="/ProductsCustom">
          <button className="ctaButton">Personnaliser votre planche</button>
        </NavLink>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <h2 className="sectionTitle">SUIVEZ-NOUS SUR INSTAGRAM !</h2>
        <p className="instagramHandle">@seariders</p>
        <div className="instagramImageWrapper">
          <img
            src={AccueilGroupe}
            alt="Instagram banner"
            className="instagramBanner"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
