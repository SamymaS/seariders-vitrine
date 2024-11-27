import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Bannière */}
      <section className="bg-blue-600 text-white text-center p-10">
        <h1 className="text-4xl font-bold">Bienvenue sur Sea Riders</h1>
        <p className="mt-4 text-lg">
          Planches à voile écoresponsables fabriquées à partir de déchets recyclés.
        </p>
      </section>

      {/* Présentation */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center">Notre Mission</h2>
        <p className="mt-4 text-center max-w-3xl mx-auto">
          Chez Sea Riders, nous croyons en un avenir durable. Nos planches à voile
          sont fabriquées à partir de déchets récupérés des océans et des plages.
          Joignez-vous à nous pour protéger la planète tout en pratiquant votre
          sport favori.
        </p>
      </section>

      {/* Produits phares */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center">Nos Produits</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Produit 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche à voile Éco 1</h3>
            <p className="mt-2 text-gray-600">Planche écoresponsable et performante.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Produit 2"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche à voile Éco 2</h3>
            <p className="mt-2 text-gray-600">Conçue pour les amateurs et professionnels.</p>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <img
              src="https://via.placeholder.com/300"
              alt="Produit 3"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold">Planche à voile Éco 3</h3>
            <p className="mt-2 text-gray-600">La fusion parfaite entre écologie et performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
