import "./portfolio.css";

import IMG1 from "../../assets/SIgnature App.png";

import IMG3 from "../../assets/Pigmentation-LP.png";
import IMG4 from "../../assets/Landing-Page-Food.png";
import IMG5 from "../../assets/Birthday-Card.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Signature App",
      img: IMG1,
      description:
        "A signature app in which we can do sign and adjust bg color and width of the pen",
      technologies: "Html | CSS | Javascript ",
      link: "https://signatureapp-kappa.vercel.app/",
      github: "https://github.com/Rohit123Aswal/signature-app",
    },
    {
      id: 2,
      title: "landing-page",
      img: IMG4,
      description:
        "A food landing page",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://food-ruby-two.vercel.app/",
      github: "https://github.com/Rohit123Aswal/Food-LP",
    },

    {
      id: 4,
      title: "Pigmentation Landing Page",
      img: IMG3,
      description:
        "A dedicated pigmentation Landing page for Dermatologist website.",
      technologies: "Html | CSS | JavaScript ",
      link: "https://pigmentation.vercel.app/",
      github: "https://github.com/Rohit123Aswal/Pigmentation-LP",
    },
    {
      id: 5,
      title: "A Birthday Card",
      img: IMG5,
      description:
        "A birthday Card app",
      technologies: "Html | css | Js| Reactjs",
      link: "https://gift-gray.vercel.app/",
      github: "https://github.com/Rohit123Aswal/gift",
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
