import React from "react";
import { Link } from "react-router-dom";
import "./Form.scss";

function Form({ backColor, foreColor }) {
  return (
    <form className="form">
      <div className="form__fields">
        <div className="form__fields__property form__field">
          <input
            style={{ backgroundColor: backColor, color: foreColor }}
            type="text"
            placeholder="Property/Hotel Name"
          />
        </div>
        <div className="form__fields__username form__field">
          <input
            style={{ backgroundColor: backColor, color: foreColor }}
            type="text"
            name=""
            id=""
            placeholder="Your Full Name"
          />
        </div>
        <div className="form__fields__contact form__field">
          <input
            style={{ backgroundColor: backColor, color: foreColor }}
            type="contact"
            name=""
            id=""
            placeholder="Contact Number"
          />
        </div>
        <div className="form__fields__email form__field">
          <input
            style={{ backgroundColor: backColor, color: foreColor }}
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div className="form__fields__radios"></div>
        <div className="form__fields__radio">
          <input type="radio" name="optionlist" id="option1" />
          <label style={{ color: foreColor }} for="option1">
            I am interested in TripGeni solutions.
          </label>
        </div>
        <div className="form__fields__radio">
          <input type="radio" name="optionlist" id="option2" />
          <label style={{ color: foreColor }} for="option2">
            I am a TripGeni customer.
          </label>
        </div>
        <div className="form__fields__radio">
          <input type="radio" name="optionlist" id="option3" />
          <label style={{ color: foreColor }} for="option3">
            I am interested in a partnership.
          </label>
        </div>
        <div className="form__fields__message">
          <textarea
            style={{ backgroundColor: backColor, color: foreColor }}
            name=""
            id=""
            cols="25"
            rows="05"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="form__button">
        <button style={{ backgroundColor: foreColor, color: backColor }}>
          Send
        </button>
      </div>
    </form>
  );
}

export default Form;
