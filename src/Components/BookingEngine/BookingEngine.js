import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "./BookingEngine.scss";
import "react-calendar/dist/Calendar.css";



function BookingEngine() {
  const [checkin, setcheckin] = useState("none");
  const [checkout, setcheckout] = useState("none");
  const [indate, Setindate] = useState(new Date());
  const [outdate, Setoutdate] = useState(new Date());


  const ondisplayin = () => {
    if (checkout == "block") {
      setcheckout("none");
    }
    if (checkin === "block") {
      setcheckin("none");
    } else {
      setcheckin("block");
    }
  };
  const ondisplayout = () => {
    if (checkin == "block") {
      setcheckin("none");
    }
    if (checkout === "block") {
      setcheckout("none");
    } else {
      setcheckout("block");
    }
  };
  console.log(indate.toLocaleDateString());
  return (
    <div className="booking">
      <div className="booking__intro">
        <div className="booking__intro__wrapper">
          <div className="booking__intro__title">
            <p>TripGeniBooking</p>
          </div>
          <div className="booking__intro__subtitle">
            <p>
              Turn your website into the most profitable online sales channel
            </p>
          </div>
          <div className="booking__intro__paragraph">
            <p>
              TripGeniBooking is our optional booking engine for accommodation
              providers. Connected with the TripGeni Channel Manager, it
              provides information on your inventory, rates and offers to guests
              and invites them to book directly on your website. Free of extra
              commission within your TripGeni channel portfolio, TripGeniBooking
              becomes the most profitable way to sell your rooms online.
            </p>
          </div>
        </div>
      </div>
      <div className="booking__benifits">
        <div className="booking__benifits__container">
          <div className="booking__benifits__heading">
            <p>Benifits</p>
          </div>
          <div className="booking__benifits__blocks">
            <div className="booking__benifits__block">
              <div className="booking__benifits__block__image">
                <img src="./Images/BookingEngine/WebAndMobile.png" alt="" />
              </div>
              <div className="booking__benifits__block__title">
                <p>Web & mobile optimized</p>
              </div>
              <div className="booking__benifits__block__paragraph">
                <p>
                  The booking engine will adapt its user interface to all mobile
                  phones and tablet devices.
                </p>
              </div>
            </div>
            <div className="booking__benifits__block">
              <div className="booking__benifits__block__image">
                <img
                  src="./Images/BookingEngine/OptimumConversations.png"
                  alt=""
                />
              </div>
              <div className="booking__benifits__block__title">
                <p>Optimum conversions</p>
              </div>
              <div className="booking__benifits__block__paragraph">
                <p>
                  TripGeniBooking has been developed with focus on maximum
                  conversion rates.
                </p>
              </div>
            </div>
            <div className="booking__benifits__block">
              <div className="booking__benifits__block__image">
                <img src="./Images/BookingEngine/EasyAndFast.png" alt="" />
              </div>
              <div className="booking__benifits__block__title">
                <p>Easy and fast integration</p>
              </div>
              <div className="booking__benifits__block__paragraph">
                <p>
                  Our technology was designed for easy and fast integration. No
                  installation required.Our technology was designed for easy and
                  fast integration. No installation required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="booking__laptop">
        <img src="./Images/BookingEngine/BookingEngineLaptop.png" alt="" />
      </div>
      <div className="booking__test">
        <div className="booking__test__title">
          <p>Test drive</p>
        </div>
        <div className="booking__test__paragraph">
          <p>
            Select an arrival date and a departure date, then click on 'Search'
            to see available rooms and rates.
          </p>
        </div>
      </div>
      <div className="booking__calendar">
        <div className="booking__calendar__left">
          <div className="booking__calendar__top">
            <div className="booking__calendar__checkin">
              <div className="booking__calendar__text">
                <p>Check In</p>
              </div>
              <div className="booking__calendar__textbox">
                <input type="text" value={indate.toLocaleDateString()} />
                <img
                  src="./Images/NavBar/down-arrow.png"
                  alt=""
                  onClick={ondisplayin}
                />
                <div
                  className="booking__calendar__checkin__container"
                  style={{ display: checkin }}
                >
                  <Calendar
                    onChange={(indate) => Setindate(indate)}
                    value={indate}
                    onClickDay={ondisplayin}
                  />
                </div>
              </div>
            </div>
            <div className="booking__calendar__checkout">
              <div className="booking__calendar__text">
                <p>Check Out</p>
              </div>
              <div className="booking__calendar__textbox">
                <input type="text" value={outdate.toLocaleDateString()} />
                <img
                  src="./Images/NavBar/down-arrow.png"
                  alt=""
                  onClick={ondisplayout}
                />
                <div
                  className="booking__calendar__checkout__container"
                  style={{ display: checkout }}
                >
                  <Calendar
                    onChange={(outdate) => Setoutdate(outdate)}
                    value={outdate}
                    onClickDay={ondisplayout}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="booking__calendar__bottom">
            <img src="./Images/NavBar/giftbox.png" alt="" />
            <a href="">Have a Promo Code?</a>
          </div>
        </div>
        <div className="booking__calendar__right">
          <div className="booking__calendar__search">
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="booking__highlights">
        <div className="booking__highlights__title">
          <p>TripGeniBooking Highlights</p>
        </div>
        <div className="booking__highlights__paragraph">
          <p>
            The TripGeniBooking booking engine has many features we would like
            you to see and check out for yourself. Here are some of the
            highlights.
          </p>
        </div>
        <div className="booking__highlights__subtitle">
          <p>
            Fully personalized <br /> by color customization
          </p>
        </div>
        <div className="booking__highlights__paragraph">
          <p>Customize TripGeniBooking with your own hotel brand’s look.</p>
        </div>
        <div className="booking__highlights__image">
          <img src="./Images/BookingEngine/HighlightsBanner.png" alt="" />
        </div>
      </div>
      <div className="booking__bottom">
        <div className="booking__bottom__title">
          <p>Support of ratetypes and arrangements</p>
        </div>
        <div className="booking__bottom__paragraph">
          <p>
            Multiple ratetypes and arrangements can be offered for one room
            category. For example room category Premier King Room with Spa Acc
            holds 2 ratetypes: “Premier King” and “Premier King BREAKFAST
            INCLUSIVE”
          </p>
        </div>
        <div className="booking__bootom__image">
          <img src="./Images/BookingEngine/BookingEngineBottom.svg" alt="" />
        </div>
        <div className="booking__bottom__title">
          <p>Occupancy based pricing</p>
        </div>
        <div className="booking__bottom__paragraph">
          <p>
            Sell double rooms for single use with discount on the double room
            price or add extra bedding surcharges.
          </p>
        </div>
        <div className="booking__bootom__image">
          <img src="./Images/BookingEngine/BookingEngineBottom.svg" alt="" />
        </div>
      </div>
      <div className="booking__started">
        <div className="booking__started__button">
          <Link to="/contact">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingEngine;
