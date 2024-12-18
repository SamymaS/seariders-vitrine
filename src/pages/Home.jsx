import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/assets/AccueilArrierePlan.png')` }} // Remplace avec l'image de fond adaptée
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl font-bold leading-tight">
            Bienvenue chez Sea Riders
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Redéfinissons la navigation avec des planches à voile
            écoresponsables fabriquées à partir de déchets recyclés.
          </p>
          <button className="mt-8 bg-blue-600 px-8 py-3 rounded-lg text-white text-lg hover:bg-blue-700">
            Découvrir nos produits
          </button>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="p-10 bg-lightGray">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800">Notre Mission</h2>
            <p className="mt-6 text-lg text-gray-600">
              Chez Sea Riders, nous récupérons les déchets plastiques des océans
              et des plages pour les transformer en planches à voile innovantes.
              Notre objectif est de combiner performance et protection de
              l’environnement pour une expérience unique sur l’eau.
            </p>
            <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">
              En savoir plus
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/assets/NotreEngagement.png" // Remplace par une image adaptée
              alt="Notre Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Produits Phares */}
      <section className="p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Nos Produits
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Produit 1 */}
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <img
              src="/assets/BoutiqueNosPlanches.png"
              alt="Produit 1"
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Wave Rider</h3>
            <p className="mt-2 text-gray-600">
              Une planche performante pour naviguer avec style.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
          {/* Produit 2 */}
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <img
              src="/assets/BoutiqueCustomisation.png"
              alt="Produit 2"
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Éco Pro</h3>
            <p className="mt-2 text-gray-600">
              Idéale pour les amateurs comme les professionnels.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
          {/* Produit 3 */}
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <img
              src="/assets/BoutiqueAutresPlanches.png"
              alt="Produit 3"
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Éco Custom</h3>
            <p className="mt-2 text-gray-600">
              Conçue sur mesure pour une performance ultime.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Ce qu'ils disent de nous
        </h2>
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              "Les planches Sea Riders offrent une expérience unique tout en
              respectant l'environnement. Une vraie révolution dans le monde de
              la voile."
            </p>
            <span className="block mt-4 font-bold text-gray-800 text-right">
              - Client 1
            </span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              "Je suis impressionné par la qualité et l'engagement écologique
              derrière chaque produit Sea Riders."
            </p>
            <span className="block mt-4 font-bold text-gray-800 text-right">
              - Client 2
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
