import React from "react";

const Products = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Nos Produits</h1>
      <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
        Découvrez notre gamme de planches à voile conçues pour allier
        performance et respect de l’environnement. Idéal pour les amateurs
        comme les professionnels.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Produit 1 */}
        <div className="p-4 border rounded-lg shadow-lg">
          <img
            src="/assets/product1.jpg" // Remplace par une image réelle
            alt="Produit 1"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-bold">Planche Classique</h3>
          <p className="mt-2 text-gray-600">Une planche polyvalente.</p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
            Découvrir
          </button>
        </div>
        {/* Répète pour d'autres produits */}
      </div>
    </div>
  );
};

export default Products;
