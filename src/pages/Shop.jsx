import React from "react";

const Shop = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Boutique</h1>
      <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
        Découvrez notre boutique en ligne et explorez nos planches à voile
        écoresponsables. Profitez d'une expérience d'achat fluide et rapide !
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Produit 1 */}
        <div className="p-4 border rounded-lg shadow-lg">
          <img
            src="/assets/shop-product1.jpg" // Remplace par une image réelle
            alt="Produit 1"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 text-xl font-bold">Planche Éco Pro</h3>
          <p className="mt-2 text-gray-600">Idéale pour les compétiteurs.</p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
            Ajouter au panier
          </button>
        </div>
        {/* Répète pour d'autres produits */}
      </div>
    </div>
  );
};

export default Shop;
