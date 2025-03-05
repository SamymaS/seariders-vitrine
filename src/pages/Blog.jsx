import React from "react";
import "../css/blog.css";

// Import direct des images réelles
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/AccueilGroupe.png"; 

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Comment recycler les déchets marins ?",
      excerpt: "Découvrez comment nous transformons les déchets plastiques en planches à voile durables.",
      image: blog1, 
    },
    {
      id: 2,
      title: "L'impact de la pollution sur les océans",
      excerpt: "Une analyse approfondie sur les effets des déchets plastiques sur la faune marine.",
      image: blog2, 
    },
    {
      id: 3,
      title: "La personnalisation des planches à voile",
      excerpt: "Exprimez votre style avec nos planches personnalisées, tout en restant écoresponsable.",
      image: blog3,
    },
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>Bienvenue sur notre blog</h1>
          <p>
            Explorez les dernières actualités, conseils et innovations autour
            de la préservation de l'environnement marin et des sports nautiques.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        <h2 className="section-title">Articles Récents</h2>
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <button className="read-more">Lire la suite</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
