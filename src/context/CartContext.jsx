import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Création du contexte
export const CartContext = createContext();

// Provider du contexte
const CartProvider = ({ children }) => {
  // Récupérer les articles du panier depuis localStorage au chargement
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Calculer le prix total
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Mettre à jour le prix total chaque fois que cartItems change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Ajouter un produit au panier
  const addToCart = (product, selectedColor) => {
    const newItem = {
      ...product,
      cartId: `${product.id}-${selectedColor}-${new Date().getTime()}`, // ID unique pour le panier
      selectedColor: selectedColor || product.colors[0] // Utiliser la première couleur par défaut
    };
    
    setCartItems([...cartItems, newItem]);
  };
  
  // Supprimer un produit du panier
  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
  };
  
  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Valeurs exposées par le contexte
  const contextValue = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  };
  
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Validation des props
CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartProvider; 