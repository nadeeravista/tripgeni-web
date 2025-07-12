import React from "react";
import { Link } from "react-router-dom";
import "./Article.scss";
function Article({ key, image, date, title, subtitle,link }) {
  return (
    <div className="article">
      <div className="article__image">
        <img src={image} alt="" />
      </div>
      <div className="article__text">
        <div className="article__date">
          <img src="./Images/NavBar/clock.png" alt="" /> <p>{date}</p>
        </div>
        <div className="article__title">
          <p>{title}</p>
        </div>
        <div className="article__subtitle">
          <p>{subtitle}</p>
        </div>
        <div className="article__button">
          <Link to={link}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
