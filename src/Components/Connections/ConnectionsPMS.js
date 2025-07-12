import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ConnectionsPMS.scss";
import { CompanyPMS } from "./Company";
import Form from "../Form";

import { PMS } from "./PMS";

function ConnectionsPMS() {

     const [search, setSearch] = useState("");

    return (
      <div className="con__PMS">
        <div className="con__PMS__bg">
          <div className="con__PMS__wrapper">
            <div className="con__PMS__title">
              <p>Property management systems (PMS)</p>
            </div>
            <div className="con__PMS__paragraph">
              <p>
                TripGeni offers connectivity with a wide range of Property
                Management Systems (PMS) listed below. “Two-way” interfaces
                ensure automated data transmission from and to your software,
                saving time spent on manual edits and providing security against
                overbookings. Our partners can opt to which extent data should
                be provided to TripGeni. Accordingly, we distinguish from
                certifications as “Basic”, “Standard” and “Premium” partners.
              </p>
            </div>
          </div>
        </div>
        <div className="con__PMS__navigator">
          <div className="con__PMS__navigator__buttons">
            <div className="con__PMS__navigator__button">
              <Link to="connections-PMS">
                <button>OTA</button>
              </Link>
            </div>
            <div className="con__PMS__navigator__button">
              <Link to="connections-pms">
                <button style={{ backgroundColor: "#034caf" }}>PMS</button>
              </Link>
            </div>
            <div className="con__PMS__navigator__button">
              <Link to="connections-other">
                <button>OTHER</button>
              </Link>
            </div>
          </div>
          <div className="con__PMS__navigator__search">
            <div className="con__PMS__navigator__searchbox">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
              />
            </div>
            <div className="con__PMS__navigator__searchimage">
              <img src="./Images/NavBar/search.png" alt="" />
            </div>
          </div>
        </div>
        <div className="con__PMS__header">
          <div className="con__PMS__header__image">
            <p></p>
          </div>
          <div className="con__PMS__header__name">
            <p>Name</p>
          </div>
          <div className="con__PMS__header__region">
            <p>Region</p>
          </div>
          <div className="con__PMS__header__certification">
            <p>Certification</p>
          </div>
        </div>
        <div className="con__PMS__companies">
         
          {PMS.filter((PMS) => {
            if (search == "") {
              return PMS;
            } else if (
              PMS.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return PMS;
            }
          }).map((PMS) => (
            <CompanyPMS
              key={PMS.key}
              image={PMS.image}
              name={PMS.name}
              region={PMS.region}
              certification={PMS.certification}
            />
          ))}

        </div>
        <div className="con__PMS__form">
          <div className="con__PMS__form__container">
            <div className="con__PMS__form__left">
              <div className="con__PMS__form__left__title">
                <p>
                  If you did not find the Hotel Soft- ware (PMS) or booking
                  channel (PMS), you are interested to work with. Contact us.
                </p>
              </div>
            </div>
            <div className="con__PMS__form__right">
              <div className="con__PMS__form__right__title">
                <p>Get in touch</p>
              </div>
              <div className="con__PMS__form__right__body">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ConnectionsPMS
