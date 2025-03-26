import "../css/Inscription.css";
import inscriptionImg from "../assets/images/inscription.png";
import { useNavigate, useState } from "react-router-dom";
import Modal from "../components/Modal";

const Inscription = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Afficher la modale au lieu de l'alerte
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    // Rediriger vers la page de connexion après confirmation
    navigate("/login");
  };

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
          <form onSubmit={handleSubmit}>
            {/* Nom */}
            <div className="mb-6">
              <label className="block text-sm mb-2" htmlFor="nom">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className="w-full h-12 border border-gray-300 rounded px-4"
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>

            {/* Bouton Valider */}
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full py-3 bg-[#FF8064] text-white font-semibold rounded-[30px] uppercase"
              >
                VALIDER
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de confirmation */}
      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleModalConfirm}
        title="Inscription réussie!"
        message="Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter."
        buttonText="OK"
        type="success"
      />
    </div>
  );
};

export default Inscription;
