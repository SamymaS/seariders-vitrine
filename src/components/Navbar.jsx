import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logobleu.png";
import searchIcon from "../assets/logos/search.png";
import cartIcon from "../assets/logos/panier.png";
import userIcon from "../assets/logos/compte.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full h-[139px] bg-[#FFECE8] flex justify-between items-center px-10">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Sea Riders Logo" className="h-16" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `uppercase font-semibold text-[18px] text-[#013264] ${
              isActive ? "font-bold underline" : "hover:drop-shadow-md"
            }`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/boutique"
          className={({ isActive }) =>
            `uppercase font-semibold text-[18px] text-[#013264] ${
              isActive ? "font-bold underline" : "hover:drop-shadow-md"
            }`
          }
        >
          Boutique
        </NavLink>
        <NavLink
          to="/engagements"
          className={({ isActive }) =>
            `uppercase font-semibold text-[18px] text-[#013264] ${
              isActive ? "font-bold underline" : "hover:drop-shadow-md"
            }`
          }
        >
          Notre Engagement
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `uppercase font-semibold text-[18px] text-[#013264] ${
              isActive ? "font-bold underline" : "hover:drop-shadow-md"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Icons Section */}
      <div className="flex space-x-6 items-center relative">
        {/* Search Button */}
        <div className="relative flex items-center">
          {showSearch && (
            <input
              type="text"
              placeholder="Rechercher..."
              className="absolute left-[-220px] bg-white border border-[#013264] text-[#013264] rounded-md px-4 py-2 shadow-lg w-[200px]"
            />
          )}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center justify-center w-8 h-8"
          >
            <img src={searchIcon} alt="Search" className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Button */}
        <NavLink to="/panier">
          <button className="flex items-center justify-center w-8 h-8">
            <img src={cartIcon} alt="Cart" className="h-6 w-6" />
          </button>
        </NavLink>

        {/* User Account Button */}
        <NavLink to="/mon-compte">
          <button className="flex items-center justify-center w-8 h-8">
            <img src={userIcon} alt="User Account" className="h-6 w-6" />
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
