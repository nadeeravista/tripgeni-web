import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConnectionsOTHER.scss";
import { CompanyOTHER } from "./Company";
import Form from "../Form";

import { OTHER } from "./OTHER";

function ConnectionsOTHER() {
  const [search, setSearch] = useState("");

  return (
    <div className="con__OTHER">
      <div className="con__OTHER__bg">
        <div className="con__OTHER__wrapper">
          <div className="con__OTHER__title">
            <p>Other connections</p>
          </div>
          <div className="con__OTHER__paragraph">
            <p>
              In this section we list connected partners not falling under the
              category OTA or PMS. That can be:
            </p>
          </div>
          <div className="con__OTHER__list">
            <ul>
              <li>
                Destination Management Systems (DMS) operating in the background
                of Tourist Board Websites
              </li>
              <li>
                Global Distribution Systems (GDS) connecting accommodation
                providers to travel agencies around the globe
              </li>
              <li>
                Wholesalers buying inventory in bulk and selling it to resellers
                rather than to consumers
              </li>
              <li>
                Channel Management Systems that serve particular market segments
                (i.e. holiday homes, apartments)
              </li>
              <li>Internet Booking Engine providers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="con__OTHER__navigator">
        <div className="con__OTHER__navigator__buttons">
          <div className="con__OTHER__navigator__button">
            <Link to="connections-ota">
              <button>OTA</button>
            </Link>
          </div>
          <div className="con__OTHER__navigator__button">
            <Link to="connections-pms">
              <button>PMS</button>
            </Link>
          </div>
          <div className="con__OTHER__navigator__button">
            <Link to="connections-other">
              <button style={{ backgroundColor: "#034caf" }}>OTHER</button>
            </Link>
          </div>
        </div>
        <div className="con__OTHER__navigator__search">
          <div className="con__OTHER__navigator__searchbox">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search"
            />
          </div>
          <div className="con__OTHER__navigator__searchimage">
            <img src="./Images/NavBar/search.png" alt="" />
          </div>
        </div>
      </div>
      <div className="con__OTHER__header">
        <div className="con__OTHER__header__image">
          <p></p>
        </div>
        <div className="con__OTHER__header__name">
          <p>Name</p>
        </div>
        <div className="con__OTHER__header__region">
          <p>Region</p>
        </div>
        <div className="con__OTHER__header__audience">
          <p>Target Audience</p>
        </div>
        <div className="con__OTHER__header__solutions">
          <p>Solutions</p>
        </div>
      </div>
      <div className="con__OTHER__companies">
        {OTHER.filter((other) => {
          if (search == "") {
            return other;
          } else if (
            other.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return other;
          }
        }).map((other) => (
          <CompanyOTHER
            key={other.key}
            image={other.image}
            name={other.name}
            region={other.region}
            audience={other.audience}
            solutions={other.solutions}
          />
        ))}
      </div>
      <div className="con__OTHER__form">
        <div className="con__OTHER__form__container">
          <div className="con__OTHER__form__left">
            <div className="con__OTHER__form__left__title">
              <p>
                If you did not find the Hotel Soft- ware (PMS) or booking
                channel (OTHER), you are interested to work with. Contact us.
              </p>
            </div>
          </div>
          <div className="con__OTHER__form__right">
            <div className="con__OTHER__form__right__title">
              <p>Get in touch</p>
            </div>
            <div className="con__OTHER__form__right__body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectionsOTHER;
