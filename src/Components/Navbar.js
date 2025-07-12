import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import "./Menu.scss";
import Menu from "./Menu";

function Navbar({ active }) {
  const [drop, setDrop] = useState("none");
  const [mobile, setMobile] = useState(false);
  const [nav, setNav] = useState(false);

  const MenuIcon = () => {
    if (nav) {
      return !mobile ? "./Images/Menu/menuScroll.png" : "./Images/Menu/cancelScroll.png";
    } else {
      return !mobile ? "./Images/Menu/menu.png" : "./Images/Menu/cancel.png";
    }
  };

  const LinkStylesHome = () => {
    if (active === "home") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };

  const LinkStylesChannelManager = () => {
    if (active === "channel-manager") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };

  const LinkStylesBookingEngine = () => {
    if (active === "booking-engine") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };
  const LinkStylesConnections = () => {
    if (active === "connections") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };
  const LinkStylesApi = () => {
    if (active === "api") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };
  const LinkStylesNews = () => {
    if (active === "news") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };
  const LinkStylesContact = () => {
    if (active === "contact") {
      return nav ? linkStyleScroll : linkStyleActive;
    }
  };
  const linkStyleActive = {
    backgroundColor: "#ffffff",
    color: "#034caf",
  };
  const linkStyleScroll = {
    backgroundColor: "#e5f4fc",
    color: "#034caf",
  };

  const MobileClick = () => {
    setMobile(!mobile);
  };

  const changeNavigation = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNavigation);
  return (
    <div className={nav ? "navbaractive" : "navbar"}>
      <div className="navbar__top" style={{ display: "" }}>
        <div className="navbar__top__container">
          <div className="navbar__contact">
            <div className="navbar__contact__image">
              <img src="./Images/NavBar/phone.png" />
            </div>
            <div className="navbar__contact__text">
              <p>+ 00 (94) 117 400 500</p>
            </div>
          </div>
          <div className="navbar__language">
            <div className="navbar__language__image">
              <img src="./Images/NavBar/language.png" />
            </div>
            <div className="navbar__language__text">
              <p>Language</p>
            </div>
          </div>
          <div className="navbar__login">
            <div className="navbar__login__image">
              <img src="./Images/NavBar/user.png" />
            </div>
            <div className="navbar__login__text">
              <Link to={{ pathname: "http://dashboard.tripgeni.com" }} target="_blank" style={{ textDecoration: "none" }}>
                <p>Log In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__bottom__container">
          <div className="navbar__bottom__logo">
            <Link to="/">
              <img src={nav ? "./Images/Logo/TripGeniLogoDark.png" : "./Images/Logo/TripGeniLogoLight.png"} alt="" />
            </Link>
          </div>
          <div className="navbar__bottom__links">
            <ul>
              <li>
                <Link className="navlink" to="/" style={LinkStylesHome()}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/channel-manager" style={LinkStylesChannelManager()}>
                  Channel Manager
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/booking-engine" style={LinkStylesBookingEngine()}>
                  Booking Engine
                </Link>
              </li>
              <li className="dropdown" onMouseEnter={() => setDrop("block")} onMouseLeave={() => setDrop("none")}>
                <Link className="navlink" to="/connections-ota" style={LinkStylesConnections()}>
                  Connections
                </Link>
                <div className="droplink" style={{ display: drop }} onMouseEnter={() => setDrop("block")} onMouseLeave={() => setDrop("none")}>
                  <div className="droplink__bar" style={{ backgroundColor: "transparent", height: "30px" }}></div>
                  <div className="droplink__bar">
                    <Link className="droplink__item" to="/connections-ota">
                      Online Travel Agencies (OTA)
                    </Link>
                  </div>
                  <div className="droplink__bar">
                    <Link className="droplink__item" to="/connections-pms">
                      Property Management System (PMS)
                    </Link>
                  </div>
                  <div className="droplink__bar">
                    <Link className="droplink__item" to="/connections-other">
                      Other Connections
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link className="navlink" to="/api" style={LinkStylesApi()}>
                  API
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/news" style={LinkStylesNews()}>
                  News
                </Link>
              </li>
              <li>
                <Link className="navlink" to="/contact" style={LinkStylesContact()}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__bottom__menu">
            <img src={MenuIcon()} alt="" onClick={MobileClick} />
          </div>
        </div>
      </div>
      <div
        className="navbar__bottom__mobile"
        style={
          !mobile
            ? {
                transform: "translateX(-2000px)",
                // height: "0vh",
              }
            : {
                transform: "translateX(0px)",
                // height: "100vh",
              }
        }
      >
        <div className="menu">
          <div className="menu__container">
            <div className="menu__links">
              <ul>
                <li>
                  <Link className="menulink" to="/" onClick={MobileClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="menulink" to="/channel-manager" onClick={MobileClick}>
                    Channel Manager
                  </Link>
                </li>
                <li>
                  <Link className="menulink" to="/booking-engine" onClick={MobileClick}>
                    Booking Engine
                  </Link>
                </li>
                <li id="droplink">
                  <Link className="menulink" to="/connections-ota" onClick={MobileClick}>
                    Connections
                  </Link>
                  <ul>
                    <li>
                      <Link className="submenulink" to="/connections-ota" onClick={MobileClick}>
                        Online Travel Agencies (OTA)
                      </Link>
                    </li>
                    <li>
                      <Link className="submenulink" to="/connections-pms" onClick={MobileClick}>
                        Property Management System (PMS)
                      </Link>
                    </li>
                    <li>
                      <Link className="submenulink" to="/connections-other" onClick={MobileClick}>
                        Other Connections
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="menulink" to="/api" onClick={MobileClick}>
                    API
                  </Link>
                </li>
                <li>
                  <Link className="menulink" to="/news" onClick={MobileClick}>
                    News
                  </Link>
                </li>
                <li>
                  <Link className="menulink" to="/contact" onClick={MobileClick}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu__login">
              <button>
                <img src="./Images/NavBar/user.png" alt="" />
                <Link to="/login" onClick={MobileClick} style={{ textDecoration: "none", color: "#ffffff" }}>
                  Login
                </Link>
              </button>
            </div>
            <div className="menu__footer">
              <div className="menu__footer__contact">
                <img src="./Images/NavBar/phone.png" alt="" />
                +49 (30) 726225-5
              </div>
              <div className="menu__footer__mail">
                <img src="./Images/NavBar/mail.png" alt="" />
                info@tripgeni.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
