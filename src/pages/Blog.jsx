import { useState } from "react";
import "../css/blog.css";

// Import direct des images réelles
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/AccueilGroupe.png"; 

const Blog = () => {
  // État pour suivre l'article actuellement ouvert
  const [openArticle, setOpenArticle] = useState(null);

  // Contenu complet des articles
  const posts = [
    {
      id: 1,
      title: "Comment recycler les déchets marins ?",
      excerpt: "Découvrez comment nous transformons les déchets plastiques en planches à voile durables.",
      image: blog1,
      content: `
        <h2>Comment recycler les déchets marins ?</h2>
        
        <p>Chez Sea Riders, nous avons développé un processus innovant pour transformer les déchets plastiques marins en planches à voile durables et performantes.</p>
        
        <h3>Notre processus de recyclage</h3>
        
        <p>1. <strong>Collecte des déchets</strong> : Nous organisons régulièrement des journées de nettoyage sur les plages et collaborons avec des pêcheurs locaux pour récupérer les déchets plastiques en mer.</p>
        
        <p>2. <strong>Tri et nettoyage</strong> : Les déchets sont triés par type de plastique, puis nettoyés en profondeur pour éliminer le sel, le sable et autres contaminants.</p>
        
        <p>3. <strong>Broyage et transformation</strong> : Les plastiques sont broyés en petits morceaux puis fondus pour créer des granulés réutilisables.</p>
        
        <p>4. <strong>Mélange avec des résines écologiques</strong> : Nous mélangeons ces granulés recyclés avec des résines bio-sourcées pour obtenir un matériau robuste et léger.</p>
        
        <p>5. <strong>Moulage et finition</strong> : Le matériau composite est moulé selon nos designs de planches, puis poncé et fini avec des vernis écologiques.</p>
        
        <h3>Impact environnemental</h3>
        
        <p>Chaque planche Sea Riders intègre environ 5kg de plastique recyclé, ce qui représente l&apos;équivalent de 500 bouteilles en plastique. Notre processus de fabrication émet 80% moins de CO2 que les méthodes traditionnelles utilisant des matériaux vierges.</p>
        
        <p>En choisissant une planche Sea Riders, vous contribuez directement à la réduction des déchets plastiques dans nos océans tout en profitant d&apos;un équipement de haute qualité pour votre passion.</p>
        
        <h3>Rejoignez notre mouvement</h3>
        
        <p>Nous organisons régulièrement des événements de nettoyage de plages et des ateliers de sensibilisation. Rejoignez notre communauté pour participer à la préservation de nos océans tout en pratiquant votre sport favori de manière écoresponsable.</p>
      `
    },
    {
      id: 2,
      title: "L'impact de la pollution sur les océans",
      excerpt: "Une analyse approfondie sur les effets des déchets plastiques sur la faune marine.",
      image: blog2,
      content: `
        <h2>L&apos;impact de la pollution sur les océans</h2>
        
        <p>Les océans couvrent plus de 70% de notre planète et jouent un rôle crucial dans la régulation du climat et la biodiversité. Malheureusement, la pollution plastique menace gravement cet écosystème vital.</p>
        
        <h3>L&apos;ampleur du problème</h3>
        
        <p>Chaque année, plus de 8 millions de tonnes de plastique se retrouvent dans nos océans. Si rien ne change, d&apos;ici 2050, il y aura plus de plastique que de poissons dans les mers.</p>
        
        <p>La concentration de plastique est 4 fois plus élevée en Méditerranée que dans les autres mers. Sur les 134 espèces méditerranéennes qui ingèrent du plastique, 60 sont des poissons consommés régulièrement.</p>
        
        <h3>Conséquences sur la faune marine</h3>
        
        <p><strong>Ingestion et enchevêtrement</strong> : De nombreuses espèces marines confondent le plastique avec de la nourriture ou se retrouvent piégées dans des déchets comme les filets abandonnés.</p>
        
        <p><strong>Microplastiques</strong> : Les plus petites particules de plastique sont ingérées par le plancton et remontent ainsi toute la chaîne alimentaire, jusqu&apos;à nos assiettes.</p>
        
        <p><strong>Perturbation des habitats</strong> : Les déchets plastiques modifient les habitats marins et peuvent transporter des espèces invasives sur de longues distances.</p>
        
        <h3>Solutions et actions</h3>
        
        <p>Chez Sea Riders, nous travaillons sur plusieurs fronts pour lutter contre cette pollution :</p>
        
        <ul>
          <li>Transformation des déchets plastiques en produits durables</li>
          <li>Organisation d&apos;événements de nettoyage</li>
          <li>Sensibilisation du public à travers nos produits et notre communication</li>
          <li>Partenariats avec des ONG environnementales</li>
        </ul>
        
        <p>Chaque geste compte dans la lutte contre la pollution marine. En optant pour des produits recyclés et en adoptant des comportements responsables, nous pouvons tous contribuer à préserver nos océans pour les générations futures.</p>
      `
    },
    {
      id: 3,
      title: "La personnalisation des planches à voile",
      excerpt: "Exprimez votre style avec nos planches personnalisées, tout en restant écoresponsable.",
      image: blog3,
      content: `
        <h2>La personnalisation des planches à voile</h2>
        
        <p>Chez Sea Riders, nous croyons que l&apos;écoresponsabilité ne doit pas se faire au détriment du style et de l&apos;expression personnelle. C&apos;est pourquoi nous avons développé un système complet de personnalisation pour nos planches à voile.</p>
        
        <h3>Un design unique, un impact réduit</h3>
        
        <p>Notre configurateur en ligne vous permet de créer une planche qui vous ressemble tout en gardant l&apos;impact environnemental au minimum. Vous pouvez personnaliser :</p>
        
        <ul>
          <li><strong>La couleur de la planche</strong> : Choisissez parmi une gamme de teintes modernes obtenues à partir de pigments naturels ou recyclés</li>
          <li><strong>La voile</strong> : Plusieurs designs et couleurs disponibles, tous créés avec des matériaux recyclés</li>
          <li><strong>Le mât et le wishbone</strong> : Sélectionnez parmi différentes finitions qui n&apos;affectent pas les performances</li>
          <li><strong>Les ailerons et dérives</strong> : Adaptez votre équipement à votre style de navigation tout en gardant l&apos;aspect écologique</li>
        </ul>
        
        <h3>Une collecte responsable</h3>
        
        <p>Nos pigments colorés proviennent en partie de plastiques triés par couleur lors de nos collectes de déchets. Cette approche nous permet d&apos;offrir une large gamme de couleurs tout en optimisant notre processus de recyclage.</p>
        
        <p>De plus, notre système de teinture utilise 80% moins d&apos;eau que les méthodes traditionnelles et tous nos résidus sont traités dans notre station d&apos;épuration intégrée.</p>
        
        <h3>L&apos;union du style et de l&apos;engagement</h3>
        
        <p>En personnalisant votre planche Sea Riders, vous ne faites pas que créer un équipement à votre image – vous devenez ambassadeur d&apos;une nouvelle vision du sport nautique, où performance et protection de l&apos;environnement vont de pair.</p>
        
        <p>Notre communauté de riders partage régulièrement leurs créations sur les réseaux sociaux avec le hashtag #MySeaRider. Rejoignez-nous et montrez comment vous naviguez avec style et conscience !</p>
      `
    },
  ];

  // Fonction pour ouvrir un article
  const handleOpenArticle = (id) => {
    setOpenArticle(posts.find(post => post.id === id));
    // Faire défiler en haut de la page
    window.scrollTo(0, 0);
    // Ajout d'une classe au body pour empêcher le défilement de la page sous-jacente
    document.body.classList.add('modal-open');
  };

  // Fonction pour fermer un article
  const handleCloseArticle = () => {
    setOpenArticle(null);
    // Retirer la classe du body
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="blog-page">
      {/* Modal pour l'article complet */}
      {openArticle && (
        <div className="article-modal">
          <div className="article-modal-content">
            <button className="close-button" onClick={handleCloseArticle} aria-label="Fermer l'article">×</button>
            <div className="article-header">
              <img src={openArticle.image} alt={openArticle.title} className="article-image" />
              <h1 className="article-title">{openArticle.title}</h1>
            </div>
            <div 
              className="article-body"
              dangerouslySetInnerHTML={{ __html: openArticle.content }}
            />
            <div className="article-footer">
              <button className="back-button" onClick={handleCloseArticle}>
                Retour aux articles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - visible uniquement si aucun article n'est ouvert */}
      {!openArticle && (
        <section className="blog-hero">
          <div className="hero-content">
            <h1>Bienvenue sur notre blog</h1>
            <p>
              Explorez les dernières actualités, conseils et innovations autour
              de la préservation de l&apos;environnement marin et des sports nautiques.
            </p>
          </div>
        </section>
      )}

      {/* Blog Posts Section - visible uniquement si aucun article n'est ouvert */}
      {!openArticle && (
        <section className="blog-posts">
          <h2 className="section-title">Articles Récents</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <button 
                    className="read-more"
                    onClick={() => handleOpenArticle(post.id)}
                  >
                    Lire la suite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Blog;
