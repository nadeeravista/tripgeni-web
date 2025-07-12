import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__container">
        
        <div className="menu__links">
          <ul>
            <li>
              <Link className="menulink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menulink" to="/channel-manager">
                Channel Manager
              </Link>
            </li>
            <li>
              <Link className="menulink" to="/booking-engine">
                Booking Engine
              </Link>
            </li>
            <li id="droplink">
              <Link className="menulink" to="/connections">
                Connections
              </Link>
              <ul>
                <li>
                  <Link className="submenulink" to="/connections">
                    Online Travel Agencies (OTA)
                  </Link>
                </li>
                <li>
                  <Link className="submenulink" to="/connections">
                    Property Management System (PMS)
                  </Link>
                </li>
                <li>
                  <Link className="submenulink" to="/connections">
                    Other Connections
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="menulink" to="/api">
                API
              </Link>
            </li>
            <li>
              <Link className="menulink" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="menulink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu__login">
          <button>
            <img src="./Images/NavBar/user.png" alt="" />
            Login
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
  );
}

export default Menu;
