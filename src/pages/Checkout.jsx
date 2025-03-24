import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Checkout.css";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    paymentMethod: "visa" // Valeur par défaut
  });
  
  const [activeStep, setActiveStep] = useState("shipping");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({
      ...formData,
      paymentMethod: method
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep === "shipping") {
      setActiveStep("payment");
    } else {
      // Simuler la soumission d'une commande
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-container">
        <h2 className="checkout-title">Votre panier est vide</h2>
        <p className="checkout-empty-message">
          Vous n&apos;avez aucun article à payer.
        </p>
        <Link to="/Products" className="continue-shopping-link">
          <button className="continue-button">Retour à la boutique</button>
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <h2 className="checkout-title">Commande confirmée !</h2>
          <div className="success-icon">✓</div>
          <p className="success-message">
            Merci pour votre achat. Votre commande a été traitée avec succès.
          </p>
          <p className="order-number">
            Numéro de commande: <strong>SR-{Math.floor(Math.random() * 100000)}</strong>
          </p>
          <p className="delivery-info">
            Un email de confirmation a été envoyé à <strong>{formData.email}</strong>
            <br />
            Livraison prévue dans 10 jours ouvrés.
          </p>
          <Link to="/Products">
            <button className="continue-button">Continuer vos achats</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finaliser votre commande</h2>
      
      <div className="checkout-steps">
        <div className={`step ${activeStep === "shipping" ? "active" : ""}`}>
          1. Informations de livraison
        </div>
        <div className={`step ${activeStep === "payment" ? "active" : ""}`}>
          2. Paiement
        </div>
      </div>
      
      <div className="checkout-layout">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form">
            {activeStep === "shipping" ? (
              <div className="shipping-step">
                <h3>Adresse de livraison</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Adresse</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Ville</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="postalCode">Code postal</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="country">Pays</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="payment-step">
                <h3>Informations de paiement</h3>
                
                <div className="form-group">
                  <label htmlFor="cardName">Nom sur la carte</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cardNumber">Numéro de carte</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Date d&apos;expiration</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="payment-method-label">Moyen de paiement</label>
                  <div className="payment-methods">
                    <div 
                      className={`payment-method ${formData.paymentMethod === 'visa' ? 'selected' : ''}`}
                      onClick={() => handlePaymentMethodChange('visa')}
                    >
                      <span>Visa</span>
                    </div>
                    <div 
                      className={`payment-method ${formData.paymentMethod === 'mastercard' ? 'selected' : ''}`}
                      onClick={() => handlePaymentMethodChange('mastercard')}
                    >
                      <span>Mastercard</span>
                    </div>
                    <div 
                      className={`payment-method ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}
                      onClick={() => handlePaymentMethodChange('paypal')}
                    >
                      <span>PayPal</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="checkout-actions">
              {activeStep === "payment" && (
                <button 
                  type="button" 
                  className="back-button"
                  onClick={() => setActiveStep("shipping")}
                >
                  Retour
                </button>
              )}
              <button type="submit" className="checkout-button">
                {activeStep === "shipping" ? "Continuer au paiement" : "Confirmer la commande"}
              </button>
            </div>
          </form>
        </div>
        
        <div className="checkout-summary">
          <h3>Récapitulatif de commande</h3>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.cartId} className="checkout-item">
                <img src={item.mainImage} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <h4>{item.name}</h4>
                  <p className="checkout-item-subtitle">{item.subTitle}</p>
                  <div className="checkout-item-color">
                    <span className={`color-dot color-${item.selectedColor.toLowerCase()}`}></span>
                    <span>{item.selectedColor}</span>
                  </div>
                </div>
                <div className="checkout-item-price">{item.price} €</div>
              </div>
            ))}
          </div>
          
          <div className="checkout-totals">
            <div className="checkout-row">
              <span>Sous-total:</span>
              <span>{totalPrice} €</span>
            </div>
            <div className="checkout-row">
              <span>Livraison:</span>
              <span>Gratuite</span>
            </div>
            <div className="checkout-row checkout-total">
              <span>Total:</span>
              <span>{totalPrice} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 