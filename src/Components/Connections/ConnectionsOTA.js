import React,{useState} from "react";
import {Link} from "react-router-dom"
import "./ConnectionsOTA.scss";
import { Company } from "./Company";
import Form from "../Form";

import { OTA } from "./OTA";

function ConnectionsOTA() {

    const [search,setSearch] = useState("");
  return (
    <div className="con__OTA">
      <div className="con__OTA__bg">
        <div className="con__OTA__wrapper">
          <div className="con__OTA__title">
            <p>Online travel agencies (OTA)</p>
          </div>
          <div className="con__OTA__paragraph">
            <p>
              Below list gives an overview on the online travel agencies (OTA)
              TripGeni connects with. Along with the industries key players you
              will find providers that either specialized in offering a certain
              type of accommodation or are focusing on a particular region. In
              order to help you selecting the ones fitting to your portfolio we
              specified region and audience each provider targets on. For the
              sake of keeping the overview clear, we decided to reduce naming
              affiliate vendor websites to a few that we consider essential for
              our customers business. If you miss any OTA, please feel free to
              get in touch with us.
            </p>
          </div>
        </div>
      </div>
      <div className="con__OTA__navigator">
        <div className="con__OTA__navigator__buttons">
          <div className="con__OTA__navigator__button">
            <Link to="connections-ota">
              <button style={{ backgroundColor: "#034caf" }}>OTA</button>
            </Link>
          </div>
          <div className="con__OTA__navigator__button">
            <Link to="connections-pms">
              <button>PMS</button>
            </Link>
          </div>
          <div className="con__OTA__navigator__button">
            <Link to="connections-other">
              <button>OTHER</button>
            </Link>
          </div>
        </div>
        <div className="con__OTA__navigator__search">
          <div className="con__OTA__navigator__searchbox">
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="search" />
          </div>
          <div className="con__OTA__navigator__searchimage">
            <img src="./Images/NavBar/search.png" alt="" />
          </div>
        </div>
      </div>
      <div className="con__OTA__header">
        <div className="con__OTA__header__image">
          <p></p>
        </div>
        <div className="con__OTA__header__name">
          <p>Name</p>
        </div>
        <div className="con__OTA__header__region">
          <p>Region</p>
        </div>
        <div className="con__OTA__header__audience">
          <p>Target Audience</p>
        </div>
      </div>
      <div className="con__OTA__companies">
        {OTA.filter((ota) => {
          if (search == "") {
            return ota;
          } else if (
            ota.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return ota;
          }
        }).map((ota) => (
          <Company
            key={ota.key}
            image={ota.image}
            name={ota.name}
            region={ota.region}
            audience={ota.audience}
          />
        ))}
        {/* <Company image={OTA[0].image}/> */}
      </div>
      <div className="con__OTA__form">
        <div className="con__OTA__form__container">
          <div className="con__OTA__form__left">
            <div className="con__OTA__form__left__title">
              <p>
                If you did not find the Hotel Soft- ware (PMS) or booking
                channel (OTA), you are interested to work with. Contact us.
              </p>
            </div>
          </div>
          <div className="con__OTA__form__right">
            <div className="con__OTA__form__right__title">
              <p>Get in touch</p>
            </div>
            <div className="con__OTA__form__right__body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectionsOTA;
