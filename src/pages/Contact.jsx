import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-message">
        <h2>
          Pour tous problèmes<br />
          ou questions,<br />
          contactez nous !
        </h2>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" />
          </div>
          
          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          
          <div className="form-checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">En Cochant Cette Case, Vous Acceptez Notre Politique De Confidentialité.</label>
          </div>
          
          <div className="form-button">
            <button type="submit">VALIDER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
