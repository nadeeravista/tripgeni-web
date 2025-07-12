import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

import HomeSlider from "./HomeSlider";
import Form from "../Form";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        <div className="home__bg__title">
          <p>
            Focused <br /> <p style={{ color: "#0091E5" }}>Tommorow</p>
          </p>
        </div>
        <div className="home__bg__subtitle">
          <div className="home__bg__subtitle__container">
            <p>
              Let TripGeni connect your property to the world of online
              distribution and maximise revenue! While we take over you can move
              on to other projects.
            </p>
          </div>
        </div>
        <div className="home__bg__button">
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
      <div className="home__banner">
        <div className="home__banner__container">
          <div className="home__banner__text">
            <p>
              Sri Lankan Based-based{" "}
              <p style={{ color: "#034caf", display: "inline" }}>TripGeni</p>{" "}
              offers innovative, high-quality solutions and services that enable
              hotels to easily distribute their offers worldwide and in
              real-time via all relevant online travel agencies (OTAs) and their
              own website.
            </p>
          </div>
          <div className="home__banner__text">
            <p>
              Our industry-leading TripGeni Channel Manager automatically
              synchronises availability, rates and operational data between your
              property system, hundreds of online booking websites and your web
              presence.
            </p>
          </div>
          <div className="home__banner__text">
            <p>
              TripGeni is a state-of-the-art software combined with personal
              care and professional advice.
            </p>
          </div>
        </div>
      </div>
      <div className="home__title">
        <p>TripGeni Offers</p>
      </div>
      <div className="home__blocks">
        <div className="home__block">
          <div className="home__block__image">
            <img src=".\Images\HomeBlock\AutomatedSynchronisation.png" alt="" />
          </div>
          <div className="home__block__title">
            <p>Automated synchronisation</p>
          </div>

          <div className="home__block__paragraph">
            <p>
              Replace manual logins and entries on multiple booking sites with
              automated synchronization and save time to focus on your hotel
              business.
            </p>
          </div>
        </div>
        <div className="home__block">
          <div className="home__block__image">
            <img src=".\Images\HomeBlock\PersonalSupportAndAdvice.png" alt="" />
          </div>
          <div className="home__block__title">
            <p>Personal support and advice</p>
          </div>

          <div className="home__block__paragraph">
            <p>
              Experienced team members with a background in the hospitality
              industry will advise you with one-to-one care, aiming to increase
              revenue through online bookings.
            </p>
          </div>
        </div>
        <div className="home__block">
          <div className="home__block__image">
            <img src=".\Images\HomeBlock\MoreDirectBooking.png" alt="" />
          </div>
          <div className="home__block__title">
            <p>More direct bookings</p>
          </div>

          <div className="home__block__paragraph">
            <p>
              Save commission by enabling direct bookings on your hotel website
              with our easy-to-integrate booking engine TripGeniBooking.
            </p>
          </div>
        </div>
        <div className="home__block">
          <div className="home__block__image">
            <img src=".\Images\HomeBlock\IncreasedVisibility.png" alt="" />
          </div>
          <div className="home__block__title">
            <p>Increased visibility</p>
          </div>

          <div className="home__block__paragraph">
            <p>
              Increase your online visibility by expanding your distribution
              network. TripGeni holds the required connections for you.
            </p>
          </div>
        </div>
      </div>
      <div className="home__distribution">
        <div className="home__distribution__container">
          <div className="home__distribution__left">
            <img src=".\Images\Home\HomeDistribution.png" alt="" />
          </div>
          <div className="home__distribution__right">
            <div className="home__distribution__right__container">
              <div className="home__distribution__title">
                <p>Distribution Partners</p>
              </div>
              <div className="home__distribution__paragraph">
                <p>
                  TripGeni is connected with a wide range of internet
                  distribution channels (IDS), online travel agencies (OTA) or
                  simply saying online booking websites. We will advise on your
                  current channel set-up and connect new sites that suit your
                  business.
                </p>
              </div>
              <div className="home__distribution__button">
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__pms">
        <div className="home__pms__container">
          <div className="home__pms__left">
            <div className="home__pms__left__container">
              <div className="home__pms__title">
                <p>Connecting Property Management Systems (PMS)</p>
              </div>
              <div className="home__pms__paragraph">
                <p>
                  TripGeni is connected with a wide range of internet
                  distribution channels (IDS), online travel agencies (OTA) or
                  simply saying online booking websites. We will advise on your
                  current channel set-up and connect new sites that suit your
                  business.
                </p>
              </div>
              <div className="home__pms__button">
                <button>See More</button>
              </div>
            </div>
          </div>
          <div className="home__pms__right">
            <img src=".\Images\Home\HomePMS.png" alt="" />
          </div>
        </div>
      </div>
      <div className="home__slider">
        <div className="home__slider__container">
          <HomeSlider />
        </div>
      </div>
      <div className="home__form">
        <div className="home__form__container">
          <div className="home__form__left">
            <div className="home__form__left__title">
              <p>
                You want to know more about our services or need advice? We are
                happy to answer your questions.
              </p>
            </div>
            <div className="home__form__left__body">
              <div className="home__form__item">
                <div className="home__form__image">
                  <img src="./Images/NavBar/phone.png" alt="" />
                </div>
                <div className="home__form__text">
                  <p>+ 00 (94) 117 400 500</p>
                </div>
              </div>
              <div className="home__form__item">
                <div className="home__form__image">
                  <img src="./Images/NavBar/mail.png" alt="" />
                </div>
                <div className="home__form__text">
                  <p>info@tripgeni.com</p>
                </div>
              </div>
              <div className="home__form__item">
                <div className="home__form__image">
                  <img src="./Images/NavBar/location.png" alt="" />
                </div>
                <div className="home__form__text">
                  <p>
                    Level 01, Global Towers Hotel <br /> Wellawatta <br />
                    Colombo
                    <br /> Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="home__form__left__social">
              <a href="">
                <img src="./Images/HomeForm/facebook.png" alt="" />
              </a>
              <a href="">
                <img src="./Images/HomeForm/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="./Images/HomeForm/twitter.png" alt="" />
              </a>
            </div>
          </div>
          <div className="home__form__right">
            <div className="home__form__right__title">
              <p>Get in touch</p>
            </div>
            <div className="home__form__right__body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
