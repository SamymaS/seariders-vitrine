import { Link } from "react-router-dom";
import logoBlanc from "../assets/logos/logoblanc.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import linkedin from "../assets/logos/linkedin.png";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-logo-column">
            <Link to="/">
              <img src={logoBlanc} alt="Sea Riders" className="footer-logo" />
            </Link>
          </div>
          
          <div className="footer-links-column">
            <h3>SUPPORT</h3>
            <ul>
              <li><Link to="/conditions-generales">Conditions générales</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/cookies">Gestion des cookies</Link></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>INFORMATION</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/Products">Boutique</Link></li>
              <li><Link to="/engagements">Notre engagement</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Panier</Link></li>
              <li><Link to="/compte">Compte</Link></li>
            </ul>
          </div>
          
          <div className="footer-social-column">
            <div className="social-section">
              <h3>RÉSEAUX SOCIAUX</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
            
            <div className="payment-section">
              <h3>MOYEN DE PAIEMENT</h3>
              <div className="payment-icons">
                <div className="payment-card visa"></div>
                <div className="payment-card mastercard"></div>
                <div className="payment-card amex"></div>
                <div className="payment-card paypal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
