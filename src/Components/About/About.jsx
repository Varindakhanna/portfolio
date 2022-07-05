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
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about__card">
              <FaUserAlt className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            perspiciatis ipsam ullam possimus quaerat ipsum commodi dignissimos
            magnam. Saepe incidunt quos ducimus consectetur nesciunt atque quae
            vel, veniam voluptatum enim nisi odit placeat aliquam!
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
