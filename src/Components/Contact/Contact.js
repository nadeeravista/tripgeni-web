import React from "react";
import "./Contact.scss";

import Form from "../Form";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">
        <p>How can we help you?</p>
      </div>
      <div className="contact__subtitle">
        <p>
          Feel free to use our contact form or call us directly for learning
          more about our products and services.
        </p>
      </div>

      <div className="contact__form">
        <div className="contact__form__left">
          <div className="contact__form__left__title">
            <p>Get in touch</p>
          </div>
          <div className="form__container">
            <Form />
          </div>
        </div>
        <div className="contact__form__right">
          <div className="contact__form__right__title">
            <p>Contact Details</p>
          </div>
          <div className="contact__form__right__container">
            <div className="contact__details__wrapper">
              <div className="contact__details__title">
                <p>TripGeni</p>
              </div>
              <div className="contact__details__item">
                <div className="contact__details__image">
                  <img src="./Images/NavBar/location.png" alt="" />
                </div>
                <div className="contact__details__text">
                  <p>
                    Level 01, Global Towers Hotel <br />
                    Wellawatta <br /> Colombo <br /> Sri Lanka
                  </p>
                </div>
              </div>
              <div
                className="contact__details__item"
              >
                <div className="contact__details__image">
                  <img src="./Images/NavBar/phone.png" alt="" />
                </div>
                <div className="contact__details__text">
                  <p>
                    Phone : + 00 (94) 117 400 500 <br />
                    Fax : + 00 (94) 117 400 500
                  </p>{" "}
                  <br />
                  {/* <p>Fax : + 00 (94) 117 400 500</p> <br /> */}
                </div>
              </div>
              <div
                className="contact__details__item"
              >
                <div className="contact__details__image">
                  <img src="./Images/NavBar/mail.png" alt="" />
                </div>
                <div className="contact__details__text">
                  <p>Email : sales@tripgeni.com</p>
                </div>
              </div>
              <div className="contact__details__item">
                <div className="contact__details__image"></div>
                <div className="contact__details__text">
                  <p>
                    Country Manager - Cambodia <br />
                    +855 92 555 169 <br />
                    sothy@tripgeni.com
                  </p>
                </div>
              </div>
              <div className="contact__details__item">
                <div className="contact__details__image"></div>
                <div className="contact__details__text">
                  <p>
                    Country Manager - Thailand <br />
                    +66 89 726 46493
                    <br />
                    eve@tripgeni.com
                  </p>
                </div>
              </div>
              <div className="contact__details__item">
                <div className="contact__details__image"></div>
                <div className="contact__details__text">
                  <p>
                    Country Manager - Spain <br />
                    +34 648 23 46 12
                    <br />
                    victor@tripgeni.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
