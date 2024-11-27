import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Sea Riders</Link>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-200">
              Produits
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Bouton d'Action */}
        <div>
          <Link
            to="/shop"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
          >
            Boutique
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
