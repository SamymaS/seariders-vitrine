import "../css/Inscription.css";
import inscriptionImg from "../assets/images/inscription.png";

const Inscription = () => {
  return (
    <div className="inscription-page flex min-h-screen bg-white">
      {/* Section Image (à gauche) */}
      <div className="hidden md:block w-1/2">
        <img 
          src={inscriptionImg} 
          alt="Personnes faisant du windsurf" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Section Formulaire (à droite) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-[#003366] mb-6">
          Inscription
        </h2>

        {/* Form Container avec contour */}
        <div className="w-full max-w-md border border-gray-300 rounded-lg p-8">
          {/* Nom */}
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="nom">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              className="w-full h-12 border border-gray-300 rounded px-4"
            />
          </div>

          {/* Prénom */}
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="prenom">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              className="w-full h-12 border border-gray-300 rounded px-4"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 border border-gray-300 rounded px-4"
            />
          </div>

          {/* Mot de Passe */}
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="password">
              Mot De Passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-12 border border-gray-300 rounded px-4"
            />
          </div>

          {/* Confirmation Mot de Passe */}
          <div className="mb-8">
            <label className="block text-sm mb-2" htmlFor="confirm-password">
              Confirmez Mot De Passe
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full h-12 border border-gray-300 rounded px-4"
            />
          </div>

          {/* Bouton Valider */}
          <div className="text-center">
            <button className="w-full py-3 bg-[#FF8064] text-white font-semibold rounded-md uppercase">
              VALIDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
