import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Engagements from "./pages/Engagements";
import Inscription from "./pages/Inscription";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          {/* Routes ici */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Engagements" element={<Engagements/>} />
          <Route path="/inscription" element={<Inscription />} />
          {/* Page 404 */}
          <Route path="*" element={<div className="text-center">Page non trouvée</div>} />
        </Routes>
      </div>
      <Footer /> {/* Footer ajouté */}
    </Router>
  );
}

export default App;
