import React from "react";
import "./Company.scss";

export function Company({image,name,region,audience}) {
  
  return (
    <div className="company__OTA">
      <div className="company__OTA__image">
        <img src={image} alt="" />
      </div>
      <div className="company__OTA__name">
        <p>{name}</p>
      </div>
      <div className="company__OTA__region">
        <p>{region}</p>
      </div>
      <div className="company__OTA__audience">
        <p>{audience}</p>
      </div>
    </div>
  );
}
export function CompanyOTHER({ image, name, region, audience,solutions }) {
  return (
    <div className="company__OTHER">
      <div className="company__OTHER__image">
        <img src={image} alt="" />
      </div>
      <div className="company__OTHER__name">
        <p>{name}</p>
      </div>
      <div className="company__OTHER__region">
        <p>{region}</p>
      </div>
      <div className="company__OTHER__audience">
        <p>{audience}</p>
      </div>
      <div className="company__OTHER__solutions">
        <p>{solutions}</p>
      </div>
    </div>
  );
}
export function CompanyPMS({ image, name, region,certification }) {

  const buttonStyles = ()=>{
    if (certification == "Basic") {
      return { borderColor: "#80C8F2", color: "#80C8F2" };
    } else if (certification == "Standard") {
      return { borderColor: "#0091E5", color: "#0091E5" };
    } else if (certification == "Premium") {
      return { borderColor: "#034CAF", color: "#034CAF" };
    }
  }
  const imageStyles = ()=>{
    if (certification == "Basic") {
      return "./Images/NavBar/basic.svg";
    } else if (certification == "Standard") {
      return "./Images/NavBar/standard.svg"
    } else if (certification == "Premium") {
      return "./Images/NavBar/premium.svg"
    }
  }
  return (
    <div className="company__PMS">
      <div className="company__PMS__image">
        <img src={image} alt="" />
      </div>
      <div className="company__PMS__name">
        <p>{name}</p>
      </div>

      <div className="company__PMS__region">
        <p>{region}</p>
      </div>
      <div className="company__PMS__certification">
        <p><button style={buttonStyles()}>{certification} <img src={imageStyles()} alt=""/></button></p>
      </div>
    </div>
  );
}