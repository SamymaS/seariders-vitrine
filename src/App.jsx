// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Boutique from "./pages/Boutique";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Engagements from "./pages/Engagements";
import Inscription from "./pages/Inscription";
import ProductsCustom from "./pages/ProductsCustom";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// NOUVEAU : on importe ProductDetail
import ProductDetail from "./pages/ProductDetail";

// Import du CartProvider
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/boutique" element={<Boutique />} /> */}
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* NOUVELLE ROUTE : /product/:id */}
              <Route path="/product/:id" element={<ProductDetail />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/engagements" element={<Engagements />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/ProductsCustom" element={<ProductsCustom />} />
              <Route path="*" element={<div className="text-center">Page non trouvée</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
