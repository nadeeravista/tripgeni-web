import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__links">
          <div className="footer__top__link footer__top__products">
            <div className="footer__top__link__heading">
              <p>Our Products</p>
            </div>
            <div className="footer__top__link__body">
              <Link className="footerlink" to="/">
                TripGeni
              </Link>
              <br />
              <Link className="footerlink" to="/">
                TripGeni Booking
              </Link>
            </div>
            <div className="footer__top__link__social">
              <Link to="/">
                <img src="./Images/Footer/contact.png" alt="" />
              </Link>
              <a href="">
                <img src="./Images/Footer/facebook.png" alt="" />
              </a>
              <a href="">
                <img src="./Images/Footer/linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <div className="footer__top__link footer__top__company">
            <div className="footer__top__link__heading">
              <p>Company</p>
            </div>
            <div className="footer__top__link__body">
              <Link className="footerlink" to="/">
                About TripGeni
              </Link>
              <br />
              <Link className="footerlink" to="/">
                For Developers
              </Link>
              <br />
              <Link className="footerlink" to="/">
                News / Press
              </Link>
              <br />
              <Link className="footerlink" to="/">
                Jobs
              </Link>
              <br />
              <Link className="footerlink" to="/">
                Contact
              </Link>
            </div>
          </div>
          <div className="footer__top__link footer__top__language">
            <div className="footer__top__link__heading">
              <p>Language</p>
            </div>
            <div className="footer__top__link__body">
              <Link className="footerlink" to="/">
                English
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__top__login">
          <div className="footer__top__login__heading">
            <img src="./Images/NavBar/user.png" alt="" />
            <p>Log In</p>
          </div>
          <div className="footer__top__login__text">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="footer__top__login__button">
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__links">
          <div className="footer__bottom__copyright">
            <img src="./Images/Logo/logoIcon.png" alt="" />
            <p>© 2021 TripGeni LLC</p>
          </div>
          <div className="footer__bottom__tags">
            <Link className="tag tc" to="/terms-and-conditions">
              T & C
            </Link>
            <Link className="tag legal" to="/legal">
              LEGAL
            </Link>
            <Link className="tag privacy" to="/privacy">
              PRIVACY
            </Link>
          </div>
        </div>
        <div className="footer__bottom__newsletter">
          <div className="footer__bottom__newsletter__heading">
            <p>Join our newsletter</p>
          </div>
          <div className="footer__bottom__newsletter__text">
            <input type="text" name="" id="" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
