import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-message">
        <p>
          Pour tous problèmes <br />
          ou questions, <br />
          contactez nous !
        </p>
      </div>
      <form className="contact-form">
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Votre prénom" />
        </div>
        <div>
          <label htmlFor="email">Adresse mail</label>
          <input type="email" id="email" placeholder="Votre adresse email" />
        </div>
        <div>
          <label htmlFor="sujet">Sujet</label>
          <input type="text" id="sujet" placeholder="Sujet de votre message" />
        </div>
        <div>
          <label htmlFor="message">Votre message</label>
          <textarea id="message" placeholder="Votre message"></textarea>
        </div>
        <div className="contact-policy">
          <input type="checkbox" id="policy" />
          <label htmlFor="policy">
            En cochant cette case, vous acceptez notre politique de
            confidentialité.
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
