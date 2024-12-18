import React from "react";

const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Contactez-nous</h1>
      <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
        Vous avez des questions ou souhaitez en savoir plus sur nos produits ?
        N’hésitez pas à nous contacter via le formulaire ci-dessous.
      </p>
      <form className="mt-6 max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nom</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Votre adresse email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Votre message"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
