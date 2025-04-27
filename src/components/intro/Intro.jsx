import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.6 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          With 1.2 years of experience as a Front-End Developer at Esyacode Software (Remote), I contributed to the development of Retailsys POS, a mall management system, focusing on responsive UI development using HTML, CSS, JavaScript, Bootstrap, and Angular, along with API integration to ensure seamless functionality. I specialized in bug resolution, performance optimization, and enhancing user experience.

          From September 2024 to April 2025, I worked at BCX Malviya Nagar as a Web Designer and Marketing Manager, handling landing pages, social media designs, SEO, and digital marketing strategies. Proficient in WordPress, Google Ads, Canva, Figma, Photoshop, and AI tools, I ensured a strong brand presence and marketing effectiveness.
          Currently, I am actively seeking new opportunities to grow and contribute as a Front-End Developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
