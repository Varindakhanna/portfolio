import React from "react";
import "./Footer.css";
import {FaLinkedin,FaGithubAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">Varinda Khanna</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="footer__socials">
          <a href="https://github.com/Varindakhanna"><FaGithubAlt/></a>
          
          <a href="https://www.linkedin.com/in/varinda/"><FaLinkedin/></a>
          {/* <a href="htpps://twitter.com"><TbBrandLeetcode/></a> */}

        </div>

        <div className="footer__copyright">
          <small>&copy; All rights reserved</small>

        </div>
      </footer>
    </section>
  );
};

export default Footer;
