import { Link } from "react-router-dom";
import logoBlanc from "../assets/logos/logoblanc.png";
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
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  {/* Facebook icon */}
                  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  {/* Instagram icon */}
                  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none"></rect>
                    <circle cx="12" cy="12" r="4" fill="none"></circle>
                    <circle cx="18" cy="6" r="1.5" fill="white" stroke="none"></circle>
                  </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  {/* LinkedIn icon */}
                  <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M18.3359 16.9453V16.9414C18.3398 16.9414 18.3398 16.9453 18.3359 16.9453Z"/>
                    <path d="M19.9973 3H4.00195C3.44922 3 3 3.44922 3 4.00195V19.998C3 20.5508 3.44922 21 4.00195 21H19.9973C20.5508 21 21 20.5508 21 19.998V4.00195C21 3.44922 20.5508 3 19.9973 3ZM8.33008 18.0029H5.66797V9.6709H8.33008V18.0029ZM6.9873 8.44238C6.17676 8.44238 5.51953 7.77754 5.51953 6.96191C5.51953 6.14746 6.18164 5.48262 6.9873 5.48262C7.78809 5.48262 8.45508 6.14746 8.45508 6.96191C8.45508 7.77754 7.79297 8.44238 6.9873 8.44238ZM18.335 18.0029H15.6729V13.9522C15.6729 12.9756 15.6533 11.7275 14.3174 11.7275C12.9619 11.7275 12.748 12.7939 12.748 13.8896V18.0029H10.0908V9.6709H12.6484V10.8389H12.6826C13.0244 10.1689 13.8838 9.46582 15.1376 9.46582C17.8271 9.46582 18.335 11.2354 18.335 13.5283V18.0029Z"/>
                  </svg>
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
