import "../css/Login.css";
import loginImg from "../assets/images/profile.png";
import { Link, useNavigate, useState } from "react-router-dom";
import Modal from "../components/Modal";

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Afficher la modale au lieu de l'alerte
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    // Rediriger vers la page de profil après connexion
    navigate("/profile");
  };

  return (
    <div className="login-page flex min-h-screen bg-white">
      {/* Section Image (à gauche) */}
      <div className="hidden md:block w-1/2">
        <img 
          src={loginImg} 
          alt="Personne pratiquant un sport nautique" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Section Formulaire (à droite) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-[#003366] mb-6">
          Connexion
        </h2>

        {/* Form Container avec contour */}
        <div className="w-full max-w-md border border-gray-300 rounded-lg p-8">
          <form onSubmit={handleSubmit}>
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
            <div className="mb-8">
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

            {/* Bouton Valider */}
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full py-3 bg-[#FF8064] text-white font-semibold rounded-[30px] uppercase"
              >
                VALIDER
              </button>
            </div>

            {/* Lien vers l'inscription */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Vous n&apos;avez pas de compte ?{" "}
                <Link to="/inscription" className="text-[#FF8064] hover:underline">
                  Inscrivez-vous
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de connexion réussie */}
      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleModalConfirm}
        title="Connexion réussie!"
        message="Bienvenue sur votre compte Sea Riders."
        buttonText="ACCÉDER À MON COMPTE"
        type="success"
      />
    </div>
  );
};

export default Login; 