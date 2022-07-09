import React from "react";
import "./Footer.css";
import {FaFacebookF,FaInstagram ,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">EGATOR</a>

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
          <a href="htpps://facebook.com"><FaFacebookF/></a>
          <a href="htpps://instagram.com"><FaInstagram/></a>
          <a href="htpps://twitter.com"><FaTwitter/></a>

        </div>

        <div className="footer__copyright">
          <small>&copy; EGATOR Tutorials . All rights reserved</small>

        </div>
      </footer>
    </section>
  );
};

export default Footer;
