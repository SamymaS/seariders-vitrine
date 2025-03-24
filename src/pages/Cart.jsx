// src/pages/Cart.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Votre panier est vide</h2>
        <p className="cart-empty-message">Vous n&apos;avez aucun article dans votre panier.</p>
        <Link to="/Products" className="continue-shopping-link">
          <button className="continue-button">Retour à la boutique</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Mon Panier</h2>
      <div className="cart-header">
        <span className="cart-header-product">Produit</span>
        <span className="cart-header-price">Prix</span>
        <span className="cart-header-color">Couleur</span>
        <span className="cart-header-action">Action</span>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.cartId} className="cart-item">
            <div className="cart-item-product">
              <img src={item.mainImage} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-subtitle">{item.subTitle}</p>
                <p className="cart-item-size">Taille: {item.size} | Poids: {item.weight}</p>
              </div>
            </div>
            <div className="cart-item-price">{item.price} €</div>
            <div className="cart-item-color">
              <span className={`color-indicator color-${item.selectedColor.toLowerCase()}`}></span>
              {item.selectedColor}
            </div>
            <div className="cart-item-actions">
              <button 
                className="remove-button" 
                onClick={() => removeFromCart(item.cartId)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-details">
          <div className="cart-summary-row">
            <span>Sous-total:</span>
            <span>{totalPrice} €</span>
          </div>
          <div className="cart-summary-row">
            <span>Livraison:</span>
            <span>Gratuite</span>
          </div>
          <div className="cart-summary-row cart-summary-total">
            <span>Total:</span>
            <span>{totalPrice} €</span>
          </div>
        </div>
        <div className="cart-actions">
          <button className="clear-cart-button" onClick={clearCart}>
            Vider le panier
          </button>
          <Link to="/Products" className="continue-shopping-link">
            <button className="continue-button">Continuer vos achats</button>
          </Link>
          <Link to="/checkout" className="checkout-link">
            <button className="checkout-button">Passer au paiement</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
