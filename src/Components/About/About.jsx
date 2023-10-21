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
              <small>2 months Internship </small>
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

          <ol style={{ listStyleType: 'decimal' }}>
              <li>
              Hello! I'm a passionate Web Developer and Programmer based in Amritsar, Punjab.
             </li>
             <li>
             Currently, I'm in my <b>final year</b> of Computer Engineering at Thapar Institute of Engineering and Technology, Patiala.
             </li>
             <li>
             My primary focus is on creating dynamic and interactive web applications, utilizing technologies such as HTML, CSS, JavaScript, and <b>React.js</b>.
             </li>
             <li>
             In addition to web development, I excel in Data Structures and Algorithms, with a strong proficiency in <b>Java</b> . 
             </li>
             <li>
             I also gained valuable industry experience through an internship at <b>Accenture</b> as an Advanced App Engineer Analyst Intern , where I had the opportunity to work on real-world projects and enhance my skills.
             </li>
             <li>
             I'm dedicated to creating innovative and user-friendly solutions, and I'm always eager to take on new challenges in the world of technology.
             </li>
            </ol>
          
          
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
