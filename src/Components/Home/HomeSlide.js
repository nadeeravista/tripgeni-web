import React from "react";
import "./HomeSlide.scss";
function HomeSlide({image,title,paragraph,linktext,link}) {
  return (
    <div className="homeslide">
      <div className="homeslide__image">
        <img src={image} alt="" />
      </div>
      <div className="homeslide__content">
        <div className="homeslide__title">
          <p>{title}</p>
        </div>
        <div className="homeslide__paragraph">
          <p>{`"${paragraph}"`}</p>
        </div>
        <div className="homeslide__link">
          <a href={link} target="_blank">
            {linktext}
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
