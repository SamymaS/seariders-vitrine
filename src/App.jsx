import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Composants pour d'autres pages (à créer plus tard)
const Products = () => <div>Produits Page</div>;
const About = () => <div>À propos Page</div>;
const Contact = () => <div>Contact Page</div>;
const Shop = () => <div>Boutique Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
