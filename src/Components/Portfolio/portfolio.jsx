import React from "react";
import "./portfolio.css";
import IMG from "../../assets/newsapp.jpg";
import IMG2 from "../../assets/ig.webp";
import IMG3 from "../../assets/notes.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Instagram-Clone</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>News-Monkey</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>i-Notebook</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
