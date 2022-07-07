import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio1.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
