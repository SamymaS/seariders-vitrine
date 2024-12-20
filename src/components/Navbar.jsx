import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logobleu.png";

const Navbar = () => {
  return (
    <header className="w-full h-[100px] bg-[#FFECE8] flex justify-between items-center px-20">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="seariders" className="h-12" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        {/* Accueil */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative uppercase font-semibold text-[#013264] text-[18px] leading-[24px] ${
              isActive
                ? "font-bold underline" // Actif
                : "hover:drop-shadow-md hover:font-bold" // Survolé
            }`
          }
        >
          Accueil
        </NavLink>

        {/* Boutique */}
        <NavLink
          to="/boutique"
          className={({ isActive }) =>
            `relative uppercase font-semibold text-[#013264] text-[18px] leading-[24px] ${
              isActive
                ? "font-bold underline"
                : "hover:drop-shadow-md hover:font-bold"
            }`
          }
        >
          Boutique
        </NavLink>

        {/* Notre Engagement */}
        <NavLink
          to="/engagements"
          className={({ isActive }) =>
            `relative uppercase font-semibold text-[#013264] text-[18px] leading-[24px] ${
              isActive
                ? "font-bold underline"
                : "hover:drop-shadow-md hover:font-bold"
            }`
          }
        >
          Notre Engagement
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative uppercase font-semibold text-[#013264] text-[18px] leading-[24px] ${
              isActive
                ? "font-bold underline"
                : "hover:drop-shadow-md hover:font-bold"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
