import React from "react";
import "./ChannelManager.scss";

import { ChannelSlider, ChannelSliderMobile } from "./ChannelSlider";
import Form from "../Form";
const imagestop = [
  "./Images/ChannelManagerSlider/booking.png",
  "./Images/ChannelManagerSlider/expedia.png",
  "./Images/ChannelManagerSlider/hrsholidays.png",
  "./Images/ChannelManagerSlider/kurzurlaub.png",
  "./Images/ChannelManagerSlider/agoda.png",
];
const imagesbottom = [
  "./Images/ChannelManagerSlider/lodgit.png",
  "./Images/ChannelManagerSlider/hs3.png",
  "./Images/ChannelManagerSlider/swoppen.png",
  "./Images/ChannelManagerSlider/hotline.png",
  "./Images/ChannelManagerSlider/protel.png",
];
function ChannelManager() {
  return (
    <div className="channel">
      <div className="channel__intro">
        <div className="channel__intro__title">
          <p>Increase revenues automatically</p>
        </div>
        <div className="channel__intro__paragraph">
          <p>
            The <p style={{ color: "#034caf", display: "inline" }}>TripGeni</p>{" "}
            Channel Manager supports accommodation providers by automatically
            transmitting availabilities and prices to the world’s leading
            distribution channels on the Web. You may further benefit from
            automated synchronization with your hotel management software (PMS).
            This makes manual entries of online bookings redundant and assures
            maximum inventory given to the online vendors. <br /> Overbookings
            will be a faint thing of the past and you can fully focus on your
            role as a host. As a web-based solution, TripGeni is very easy to
            implement and does not require installation of software or hardware.
          </p>
        </div>
        <div className="channel__intro__subtitle">
          <p>How it works</p>
        </div>
      </div>
      <div className="channel__bg"></div>
      <div className="channel__ps">
        <div className="channel__container">
          <div className="channel__image">
            <img src="./Images/ChannelManager/CM__PS.png" alt="" />
          </div>
          <div className="channel__content">
            <div className="channel__title">
              <p>Personal service</p>
            </div>
            <div className="channel__paragraph">
              <p>
                Your dedicated distribution manager assists in editing rooms,
                rates and other conditions relevant to selling your rooms
                online. <br />
                Highly qualified and motivated, he or she will partner with you
                and provide commercial advice aiming to optimize your online
                sales portfolio. <br />
                Beyond standard technical support, we also communicate with
                third parties in support matters and address queries and issues
                on your behalf with a hands-on-mentality. <br /> Service is key
                for you and for us!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="channel__quality">
        <div className="channel__container channel__container__quality">
          <div className="channel__image">
            <img src="./Images/ChannelManager/CM__Quality.png" alt="" />
          </div>
          <div className="channel__content">
            <div className="channel__title">
              <p style={{ color: "#454753" }}>Quality</p>
            </div>
            <div className="channel__paragraph">
              <p style={{ color: "#454753" }}>
                Accountable for safely dealing with your inventory and prices,
                we assure the highest quality possible. <br />
                Connecting with hotel software partners and online travel
                agencies, our focus is seamless and successful transmission of
                data. We closely follow up on the fast-evolving features our
                partners offer in order to make the automation as complete as
                possible and manual work unnecessary. <br />
                Market leaders as Booking.com and Expedia.com confirm our
                quality and commitment through their partner programs in which
                we excel as Premier Partner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="channel__ds">
        <div className="channel__container">
          <div className="channel__image">
            <img src="./Images/ChannelManager/CM__DS.png" alt="" />
          </div>
          <div className="channel__content">
            <div className="channel__title">
              <p>Data Security</p>
            </div>
            <div className="channel__paragraph">
              <p>
                With TripGeni you can rest assured that your customers’ personal
                data is in good hands. <br /> We have chosen to undergo regular
                checks with TÜV SÜD as an independent assessor. This leaves no
                room for weak spots and keeps TripGeni up-to-date with the
                latest security standards. <br /> Credit card data can be
                accessed safely through our third party provider PCI Booking,
                assuring the highest security level through PCI DSS Level 1
                compliancy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="channel__el">
        <div className="channel__container channel__container__el">
          <div className="channel__image">
            <img src="./Images/ChannelManager/CM__EL.png" alt="" />
          </div>
          <div className="channel__content">
            <div className="channel__title">
              <p style={{ color: "#454753" }}>Extended Liability</p>
            </div>
            <div className="channel__paragraph">
              <p style={{ color: "#454753" }}>
                Because TripGeni is embedded as a key component in the online
                travel technical ecosystem, we do not ignore there is
                possibility of failure and damage. <br />
                We strive to keep the risk minimal and want to pass our
                assurance on to you: our extended liability guarantees
                compensation if damage occurs due to our systems’ failure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="channel__cm">
        <div className="channel__container">
          <div className="channel__image">
            <img src="./Images/ChannelManager/CM__CM.png" alt="" />
          </div>
          <div className="channel__content">
            <div className="channel__title">
              <p>Commission Model</p>
            </div>
            <div className="channel__paragraph">
              <p>
                Working on a commission basis makes us committed to your
                success.
                <br />
                Fully identifying with your goals, your personal distribution
                manager becomes your partner and ambassador of your business
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="channel__slider">
        <div className="channel__slider__paragraph">
          <p>
            We established close partnerships with PMS (Property Management
            Systems), also called hotel software, and OTA (Online Travel
            Agencies). This is just a small part of our partner network – click
            on 'See more' to see the full list.
          </p>
        </div>
        <div className="channel__slider__title">
          <p>Online Travel Agencies (OTA)</p>
        </div>
        <div className="channel__slider__container">
          <div className="channelslider__desktop">
            <ChannelSlider slides={imagestop} />
          </div>
          <div className="channelslider__mobile">
            <ChannelSliderMobile slides={imagestop} />
          </div>
        </div>
        <div className="channel__slider__title">
          <p>Property Management Systems (PMS)</p>
        </div>
        <div className="channel__slider__container">
          <div className="channelslider__desktop">
            <ChannelSlider slides={imagesbottom} />
          </div>
          <div className="channelslider__mobile">
            <ChannelSliderMobile slides={imagesbottom} />
          </div>
        </div>
      </div>
      <div className="channel__form">
        <div className="channel__form__container">
          <div className="channel__form__left">
            <div className="channel__form__left__image">
              <img src="./Images/ChannelManager/ChannelForm.png" alt="" />
            </div>
          </div>

          <div className="channel__form__right">
            <div className="channel__form__right__title">
              <p>Get in touch</p>
            </div>
            <div className="channel__form__right__body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelManager;
