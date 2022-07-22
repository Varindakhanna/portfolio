import React from "react";
import "./About.css";
import ME from "../../assets/me-about-2.jpg";
import { FaAward, FaUserAlt, FaFolder } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working </small>
            </article>

            <article className="about__card">
              <FaUserAlt className="about__icon" />
              <h5>Clients</h5>
              <small>In search of them</small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          
          <p>
            Hi !! I'm am a Web Developer and Programmer living in Amritsar , Punjab . Currently I'm a 3rd Year Computer Engineer in Thapar University. I make Web application, 
            usually with Html , Css , Javascript and REACT   
          </p>

    

         
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
