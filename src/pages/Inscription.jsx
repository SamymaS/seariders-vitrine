import React from "react";
import "../css/Inscription.css"; // <-- On importe la feuille de style

const Inscription = () => {
  return (
    <div className="inscription-page relative min-h-screen bg-[#FFFEFF]">
      {/* Title */}
      <h2 className="text-center text-[40px] font-bold text-[#228EA0] mt-10">
        Inscription
      </h2>

      {/* Form Container */}
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        {/* Nom et Prénom */}
        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label
              className="uppercase text-[#228EA0] font-semibold text-sm mb-2 block"
              htmlFor="nom"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              className="w-full h-12 border border-[#228EA0] rounded-lg px-4"
            />
          </div>
          <div className="w-1/2">
            <label
              className="uppercase text-[#228EA0] font-semibold text-sm mb-2 block"
              htmlFor="prenom"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              className="w-full h-12 border border-[#228EA0] rounded-lg px-4"
            />
          </div>
        </div>

        {/* Adresse Email */}
        <div className="mb-6">
          <label
            className="uppercase text-[#228EA0] font-semibold text-sm mb-2 block"
            htmlFor="email"
          >
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-12 border border-[#228EA0] rounded-lg px-4"
          />
        </div>

        {/* Mot de Passe */}
        <div className="mb-6">
          <label
            className="uppercase text-[#228EA0] font-semibold text-sm mb-2 block"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full h-12 border border-[#228EA0] rounded-lg px-4"
          />
        </div>

        {/* Confirmation Mot de Passe */}
        <div className="mb-6">
          <label
            className="uppercase text-[#228EA0] font-semibold text-sm mb-2 block"
            htmlFor="confirm-password"
          >
            Confirmation mot de passe
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full h-12 border border-[#228EA0] rounded-lg px-4"
          />
        </div>

        {/* Bouton Valider */}
        <div className="text-center">
          <button className="w-40 h-12 bg-[#FF8064] text-[#FFF8E9] font-semibold text-lg rounded-full uppercase">
            Valider
          </button>
        </div>

        {/* Lien Se Connecter */}
        <div className="text-center mt-6">
          <a
            href="/connexion"
            className="text-[#228EA0] font-semibold text-sm underline"
          >
            Se connecter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
