import "../css/Profile.css";
import profileImg from "../assets/images/profile.png";
import { useState } from "react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("informations");

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="profile-page flex min-h-screen bg-white">
      {/* Section Image (à gauche) */}
      <div className="hidden md:block w-1/2">
        <img 
          src={profileImg} 
          alt="Personne pratiquant un sport nautique" 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Section Profil (à droite) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-[#003366] mb-10">
          Bienvenue, Grégoire
        </h2>

        {/* Sections accordéon */}
        <div className="w-full max-w-md">
          {/* Section Mes informations */}
          <div className="profile-section mb-4">
            <div 
              className={`profile-section-header ${activeSection === "informations" ? "active" : ""}`}
              onClick={() => toggleSection("informations")}
            >
              <h3>Mes informations</h3>
              <span className="toggle-icon">{activeSection === "informations" ? "▼" : "▶"}</span>
            </div>
            
            {activeSection === "informations" && (
              <div className="profile-section-content">
                <div className="form-field">
                  <label>Nom</label>
                  <input type="text" defaultValue="Dupont" />
                </div>
                
                <div className="form-field">
                  <label>Prénom</label>
                  <input type="text" defaultValue="Grégoire" />
                </div>
                
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" defaultValue="gregoire.dupont@mail.com" />
                </div>
                
                <div className="form-field">
                  <label>Téléphone</label>
                  <input type="tel" defaultValue="06 12 34 56 78" />
                </div>
                
                <div className="form-field">
                  <label>Adresse</label>
                  <input type="text" defaultValue="123 rue de la Mer" />
                </div>
                
                <div className="form-field">
                  <label>Ville</label>
                  <input type="text" defaultValue="Biarritz" />
                </div>
                
                <div className="form-field">
                  <label>Code Postal</label>
                  <input type="text" defaultValue="64200" />
                </div>
              </div>
            )}
          </div>

          {/* Section Mes commandes */}
          <div className="profile-section mb-4">
            <div 
              className={`profile-section-header ${activeSection === "commandes" ? "active" : ""}`}
              onClick={() => toggleSection("commandes")}
            >
              <h3>Mes commandes</h3>
              <span className="toggle-icon">{activeSection === "commandes" ? "▼" : "▶"}</span>
            </div>
            
            {activeSection === "commandes" && (
              <div className="profile-section-content">
                <p>Vous n&apos;avez pas encore de commandes.</p>
              </div>
            )}
          </div>

          {/* Section Paramètres du compte */}
          <div className="profile-section mb-4">
            <div 
              className={`profile-section-header ${activeSection === "parametres" ? "active" : ""}`}
              onClick={() => toggleSection("parametres")}
            >
              <h3>Paramètres du compte</h3>
              <span className="toggle-icon">{activeSection === "parametres" ? "▼" : "▶"}</span>
            </div>
            
            {activeSection === "parametres" && (
              <div className="profile-section-content">
                <h4>Changer mon mot de passe</h4>
                
                <div className="form-field">
                  <label>Mot de passe actuel</label>
                  <input type="password" />
                </div>
                
                <div className="form-field">
                  <label>Nouveau mot de passe</label>
                  <input type="password" />
                </div>
                
                <div className="form-field">
                  <label>Confirmer le nouveau mot de passe</label>
                  <input type="password" />
                </div>
                
                <div className="profile-buttons">
                  <button className="btn-save">ENREGISTRER</button>
                  <button className="btn-cancel">ANNULER</button>
                </div>
              </div>
            )}
          </div>

          {/* Section Se déconnecter */}
          <div className="profile-section mb-4">
            <div 
              className={`profile-section-header ${activeSection === "deconnexion" ? "active" : ""}`}
              onClick={() => toggleSection("deconnexion")}
            >
              <h3>Se déconnecter</h3>
              <span className="toggle-icon">{activeSection === "deconnexion" ? "▼" : "▶"}</span>
            </div>
            
            {activeSection === "deconnexion" && (
              <div className="profile-section-content">
                <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
                <button className="btn-logout">DÉCONNEXION</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 