import React from "react";
import "./portfolio.css";
import IMG from "../../assets/news.png";
import IMG2 from "../../assets/homestayz.png";
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
          <h3>HomeStayz</h3>
          <a href="https://github.com/Varindakhanna/HomeStayz" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>News-Monkey</h3>
          <a href="https://github.com/Varindakhanna/News_App" className="btn" target="_blank">
            Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>i-Notebook</h3>
          <a href="https://github.com/Varindakhanna/i_Notebook" className="btn" target="_blank">
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
