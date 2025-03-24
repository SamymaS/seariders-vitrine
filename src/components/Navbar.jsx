import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logos/logobleu.png";
import cartIcon from "../assets/logos/panier.png";
import userIcon from "../assets/logos/compte.png";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Produits disponibles pour la recherche (normalement ce serait chargé depuis une API)
  const products = [
    { id: 1, name: "Planche Sunshine - Mid Length", url: "/product/1" },
    { id: 2, name: "Planche Sunshine - Fast & Light", url: "/product/2" },
    { id: 3, name: "Planche Sunshine - MID LENGTH", url: "/product/3" },
    { id: 4, name: "Planche Sunshine - MID LENGTH", url: "/product/4" },
    { id: 5, name: "Planche Sunshine - FAST & LIGHT", url: "/product/5" },
    { id: 6, name: "Planche Sunshine - MID LENGTH", url: "/product/6" }
  ];

  // Fonction de recherche
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleSearchItemClick = (url) => {
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(url);
  };

  // Fermer la recherche si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container') && !event.target.closest('.search-button')) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  // Gérer la soumission du formulaire de recherche
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchItemClick(searchResults[0].url);
    }
  };

  return (
    <header className="w-full h-[139px] bg-[#FFECE8] flex justify-between items-center px-10">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="Sea Riders Logo" className="h-16" />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center flex-1 mx-6">
        <div className="flex space-x-6">
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
            to="/Products"
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
          {/* Nouveau lien Blog */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `uppercase font-semibold text-[18px] text-[#013264] ${
                isActive ? "font-bold underline" : "hover:drop-shadow-md"
              }`
            }
          >
            Blog
          </NavLink>
          {/* Nouveau lien Inscription */}
          <NavLink
            to="/inscription"
            className={({ isActive }) =>
              `uppercase font-semibold text-[18px] text-[#013264] ${
                isActive ? "font-bold underline" : "hover:drop-shadow-md"
              }`
            }
          >
            Inscription
          </NavLink>
        </div>
      </nav>

      {/* Search and Icons Section */}
      <div className="flex items-center gap-8">
        {/* Barre de recherche permanente */}
        <div className="search-container relative">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-white border border-[#013264] text-[#013264] rounded-l-md px-4 py-2 w-[220px] focus:outline-none focus:ring-2 focus:ring-[#013264]"
            />
            <button 
              type="submit" 
              className="bg-[#013264] text-white px-3 rounded-r-md border border-[#013264] hover:bg-[#002645]"
            >
              OK
            </button>
          </form>
          {searchResults.length > 0 && (
            <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#013264] rounded-md shadow-lg max-h-[300px] overflow-y-auto z-50">
              {searchResults.map(result => (
                <li 
                  key={result.id} 
                  className="px-4 py-2 hover:bg-[#FFECE8] cursor-pointer text-[#013264] border-b border-gray-100"
                  onClick={() => handleSearchItemClick(result.url)}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icônes */}
        <div className="flex gap-6">
          {/* Cart Button */}
          <NavLink to="/cart" className="relative">
            <button className="flex items-center justify-center w-8 h-8" aria-label="Panier">
              <img src={cartIcon} alt="Panier" className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF8064] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </NavLink>

          {/* User Account Button */}
          <NavLink to="/mon-compte">
            <button className="flex items-center justify-center w-8 h-8" aria-label="Mon compte">
              <img src={userIcon} alt="User Account" className="h-6 w-6" />
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
