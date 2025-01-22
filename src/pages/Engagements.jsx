import React from "react";

const Engagements = () => {
  return (
    <div className="font-sans text-gray-800">
  

      {/* Hero Section */}
      <section className="relative text-white bg-gray-900">
        <img
          src="hero-image.jpg"
          alt="Cleaning the sea"
          className="w-full h-96 object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            UNE PRATIQUE DU WINDSURF <br />
            <em className="italic text-gray-200">
              PLUS RESPECTUEUSE DE L'ENVIRONNEMENT
            </em>
          </h2>
          <div className="flex gap-8 mt-6">
            <div className="text-center">
              <p className="text-4xl font-bold">360kg</p>
              <p>de déchets recyclés</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">80kg</p>
              <p>de co2 évité</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">80%</p>
              <p>de matière recyclée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500">Matériaux durable</h2>
          <p className="mt-4 text-gray-600">
            Nos planches à voile sont fabriquées avec des matériaux recyclés grâce
            auxquels nous pouvons ensemble préserver la mer moins polluée. <br />
            Sea Riders respecte l'environnement dans lequel nous et les autres peuvent s'amuser.
          </p>
          <img
            src="recycled-plastic.jpg"
            alt="Plastic being picked up"
            className="w-3/4 mx-auto mt-6 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Nous croyons en l'innovation et en la durabilité.
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Depuis toujours, nous avons développé des alliages uniques et innovants
            pour la construction de nos planches à voile éco-responsables. En combinant
            des matériaux recyclés et un processus écologique de fibre naturelle et de
            résine, nous avons créé des produits performants et durables.
          </p>
          <p className="mt-6 p-4 bg-green-100 text-green-800 text-center rounded-lg">
            EN CHOISISSANT UNE PLANCHE À VOILE SEA RIDERS, VOUS OPTEZ POUR UN PRODUIT
            DE HAUTE QUALITÉ AVEC UN ENGAGEMENT INÉBRANLABLE POUR LA DURABILITÉ ENVIRONNEMENTALE.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Nos événements
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { date: "13 AVRIL 2024", title: "Nettoyons le Sud", time: "9H - 11H" },
            { date: "22 MAI 2024", title: "Pêche au crochet feat. LIME", time: "9H - 11H" },
          ].map((event, index) => (
            <div
              key={index}
              className="w-64 p-6 bg-white rounded-lg shadow-md text-center"
            >
              <h4 className="text-lg font-bold">{event.date}</h4>
              <p className="mt-2 text-gray-600">{event.title}</p>
              <span className="block mt-2 font-semibold">{event.time}</span>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Participer
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nos partenaires
        </h2>
        <div className="flex justify-center gap-12">
          <img src="clean-my-calanques.jpg" alt="Partner 1" className="w-32" />
          <img src="wings-of-the-ocean.jpg" alt="Partner 2" className="w-32" />
          <img src="sea-cleaners.jpg" alt="Partner 3" className="w-32" />
        </div>
      </section>
    </div>
  );
};

export default Engagements;
