import React, { useState } from "react";
import "./News.scss";
import Article from "./Article";
import { ArticleData } from "./ArticleData";
function News() {
  const [search, setSearch] = useState("");
  return (
    <div className="news">
      <div className="news__bg">
        <div className="news__bg__wrapper">
          <div className="news__bg__title">
            <p>News</p>
          </div>
          <div className="news__bg__paragraph">
            <p>
              Follow our news section and get updated on the latest channel
              interface connections, new features added in TripGeni and
              hospitality industry backgrounds.
            </p>
          </div>
          <div className="news__bg__search">
            <div className="news__bg__searchbox">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
              />
            </div>
            <div className="news__bg__searchimage">
              <img src="./Images/NavBar/search.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="news__articles">
        {ArticleData.filter((article) => {
          if (search == "") {
            return article;
          } else if (
            article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return article;
          }
        }).map((article) => (
          <Article
            key={article.key}
            image={article.image}
            date={article.date}
            title={article.title}
            subtitle={article.subtitle}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
