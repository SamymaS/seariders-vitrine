import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link

const Footer = () => {
  return (
    <footer className="w-full bg-[#013264] text-[#FFF8E9] py-10">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between">
        {/* Section Logo et Description */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-8">
            <div>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/logos/logoblanc.png" alt="seariders" />
              </a>
            </div>
          </div>
          <p className="text-sm">
            Abonnez-vous pour recevoir nos dernières actus et offres exclusives !
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold uppercase mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="/boutique" className="hover:underline">
                Boutique
              </a>
            </li>
            <li>
              <a href="/engagements" className="hover:underline">
                Notre engagement
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Informations */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold uppercase mb-4">Informations</h3>
          <ul className="space-y-2">
            <li>
              <a href="/mentions-legales" className="hover:underline">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="/conditions-generales" className="hover:underline">
                Conditions générales
              </a>
            </li>
            <li>
              <a href="/donnees-personnelles" className="hover:underline">
                Données personnelles
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Gestion des cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-bold uppercase mb-4">Réseaux sociaux</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61569793041689"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/logos/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.instagram.com/_sea_riders_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/logos/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sea-riders-7a882333a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/logos/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-6 mt-10">
        <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Votre adresse mail..."
            className="flex-grow h-12 border border-[#FFF8E9] rounded-full px-4 bg-transparent text-[#FFF8E9] placeholder-[#FFF8E9]"
          />
          {/* Bouton redirigeant vers la page Inscription */}
          <Link
            to="/inscription"
            className="w-36 h-12 bg-[#FFF8E9] text-[#013264] font-semibold rounded-full flex items-center justify-center"
          >
            S'inscrire
          </Link>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
