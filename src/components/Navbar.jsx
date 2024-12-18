import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-[100px] bg-[#FFECE8] flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-[#013264] w-6 h-6"></div>
        <span className="ml-2 text-[#013264] font-bold text-lg">RIDERS</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-[#013264]">
        <Link to="/" className="uppercase font-semibold">
          Accueil
        </Link>
        <Link to="/boutique" className="uppercase font-bold underline">
          Boutique
        </Link>
        <Link to="/engagements" className="uppercase font-semibold">
          Notre engagement
        </Link>
        <Link to="/contact" className="uppercase font-semibold">
          Contact
        </Link>
        <Link to="/inscription" className="uppercase font-semibold">
          Inscription
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
