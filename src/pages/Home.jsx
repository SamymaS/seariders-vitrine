import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/assets/hero-image.jpg')` }} // Remplace avec une image adaptée
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-5xl font-bold">Découvrez Sea Riders</h1>
          <p className="mt-4 text-xl">
            Planches à voile écoresponsables fabriquées à partir de déchets recyclés.
          </p>
          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">
            Découvrir nos produits
          </button>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="p-10 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Texte */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold">Notre Mission</h2>
            <p className="mt-4 text-gray-600">
              Chez Sea Riders, nous transformons les déchets récupérés des océans et des
              plages en planches à voile innovantes. Nous croyons en une pratique sportive
              respectueuse de l’environnement et durable.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              En savoir plus
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 p-4">
            <img
              src="/assets/mission.jpg" // Remplace par une image de mission
              alt="Notre mission"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Produits Phares */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Nos Produits</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Produit 1 */}
          <div className="p-4 border rounded-lg shadow-lg">
            <img
              src="/assets/product1.jpg" // Remplace par une image de produit
              alt="Produit 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Éco 1</h3>
            <p className="mt-2 text-gray-600">
              Une planche performante et écoresponsable.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
          {/* Produit 2 */}
          <div className="p-4 border rounded-lg shadow-lg">
            <img
              src="/assets/product2.jpg" // Remplace par une image de produit
              alt="Produit 2"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Éco 2</h3>
            <p className="mt-2 text-gray-600">
              Idéale pour les amateurs et les professionnels.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
          {/* Produit 3 */}
          <div className="p-4 border rounded-lg shadow-lg">
            <img
              src="/assets/product3.jpg" // Remplace par une image de produit
              alt="Produit 3"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche Éco 3</h3>
            <p className="mt-2 text-gray-600">
              Parfaite pour une expérience durable et performante.
            </p>
            <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
              Découvrir
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Ce qu'ils disent de nous</h2>
        <div className="mt-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600">
              "Sea Riders propose des planches à voile innovantes qui respectent
              l’environnement tout en offrant des performances exceptionnelles."
            </p>
            <span className="block mt-4 text-right font-bold">- Client 1</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
