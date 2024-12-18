import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Engagements from "./pages/Engagements";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/about" element={<About />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Engagements" element={<Engagements/>} />
          {/* Page 404 */}
          <Route path="*" element={<div className="text-center">Page non trouvée</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
