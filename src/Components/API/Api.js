import React from "react";
import {Link} from "react-router-dom"
import "./Api.scss";


import Form from "../Form";

function Api() {
  return (
    <div className="api">
      <div className="api__bg">
        <div className="api__bg__title">
          <p>You would like to connect to us?</p>
        </div>
        <div className="api__bg__button">
          <Link className="api__bg__button" style={{textDecoration:"none"}} to="/api">
            <button>Check out our API Capabilities</button>
          </Link>
        </div>
      </div>
      <div className="api__title">
        <p>TripGeni complete API</p>
      </div>
      <div className="api__paragraph">
        <p>
          Property Management Systems (PMS), Central Reservation Systems (CRS),
          Destination Management Systems (DMS) or distributors all over the
          world may download the latest version of the TripGeni specification
          here:
        </p>
      </div>
      <div className="api__download">
        <button>
          <img src="./Images/NavBar/down-arrow.png" alt="" />
          TripGeni_3.4.0, 1.97 MB
        </button>
      </div>
      <div className="api__title">
        <p>TripGeni specifiations</p>
      </div>
      <div className="api__paragraph">
        <p>
          TripGeni specification describes how to integrate TripGeni with your:
        </p>
      </div>
      <div className="api__box">
        <div className="api__box__left">
          <div className="api__box__left__content">
            <div className="api__box__left__title">
              <p>Hotel Software Systems</p>
            </div>
            <div className="api__box__left__body">
              <p>
                Property Management System (PMS) / Central Reservation System
                (CRS) / Channel Managers
              </p>
            </div>
          </div>
        </div>
        <div className="api__box__right">
          <div className="api__box__right__content">
            <div className="api__box__right__title">
              <p>Distributors</p>
            </div>
            <div className="api__box__right__body">
              <p>
                Internet Distribution Systems (IDS) / Booking Channels / Online
                Travel Agencies (OTA)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="api__title__box">
        <p style={{ backgroundColor: "#034caf" }}>PMS/CRS</p>
      </div>
      <div className="api__paragraph">
        <p>
          Are you a Hotel Software System, also called Property Management
          System ( PMS), and have interest in connecting to TripGeni?
        </p>
      </div>
      <div className="api__paragraph">
        <p>
          In this part you will discover the following possibilities to build a
          programming interface to TripGeni.
        </p>
      </div>
      <div className="api__list">
        <ul>
          <li>
            How to push hotel master data like: Name, Language, Home Currency,
            Bank Data, Description, Amenities, Images, Address, and Contact
            Information?
          </li>
          <li>How to push Availabilities and Prices into TripGeni?</li>
          <li>How to retrieve the Bookings from TripGeni?</li>
          <li>Certification Process and Types of Certification.</li>
          <li>
            “Integrated Channel Management”, the most modern concept in channel
            management. The Channel Manager is completely invisible and the
            entire administration can be done by the accommodation provider on
            the user interface of the PMS.
          </li>
          <li>
            TripGeni supports channel level modules. For example: Channel
            Management Data provides the Hotel, the possibility to treat a
            particular channel differently from other channels.
          </li>
        </ul>
      </div>
      <div className="api__download">
        <button>
          <img src="./Images/NavBar/down-arrow.png" alt="" />
          TripGeni_3.4.0_Excerpt_For_PMS, 1 MB
        </button>
      </div>
      <div className="api__form">
        <div className="api__form__container">
          <div className="api__form__left">
            <div className="api__form__left__title">
              <p>Connect your system to TripGeni</p>
            </div>
            <div className="api__form__left__body">
              <p>
                For technical assistance, please contact
                partner-management(at)TripGeni.com
              </p>
            </div>
          </div>

          <div className="api__form__right">
            <div className="api__form__right__title">
              <p>Get in touch</p>
            </div>
            <div className="api__form__right__body">
              <Form backColor="#0073d9" foreColor="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
