import React from "react";
import { Link } from "react-router-dom";
import "./Paper.scss";

function Paper({ title, date, heading, subheading, paragraph }) {
  return (
    <div className="paper">
      <div className="paper__bg">
        <div className="paper__bg__wrapper">
          <div className="paper__bg__title">
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="paper__date">
        <div className="paper__date__container">
          <img src="./Images/NavBar/clock.png" alt="" /> <p>{date}</p>
        </div>
      </div>
      <div className="paper__heading">
        <p>{heading}</p>
      </div>
      <div className="paper__subheading">
        <p>{subheading}</p>
      </div>
      <div className="paper__paragraph">
        {paragraph.map((sentence) => (
          <p>
            {sentence} <br />{" "}
          </p>
        ))}
      </div>
      <div className="paper__logo">
        <img src="./Images/Logo/TripGeniLogoDark.png" alt="" />
      </div>
      <div className="paper__information">
        <p>
          For more information, please reach us via the
          <p style={{ display: "inline" }}>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#034caf" }}
            >
              {" "}
              Contact form
            </Link>
          </p>
        </p>
      </div>
      <div className="paper__button">
        <Link to="/news">
          <button>Go Back to All Posts</button>
        </Link>
      </div>
    </div>
  );
}

export default Paper;
