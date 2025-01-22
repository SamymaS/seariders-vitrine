import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Modifiez ici si pas d'index.js
import Footer from "./components/Footer"; // Modifiez ici si pas d'index.js
import Home from "./pages/Home";
import About from "./pages/About";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Engagements from "./pages/Engagements";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="*" element={<div className="text-center">Page non trouvée</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
