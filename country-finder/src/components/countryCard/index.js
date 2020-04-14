import React from "react";
import "./style.scss";

const CountryCard = (props) => {
  return (
    <div className="card">
      <div
        className="flag"
        style={{ backgroundImage: `url(${props.flagUrl})` }}
      ></div>
      <div className="country-info">
        <div className="title">{props.name}</div>
        <div className="item">Population: {props.population}</div>
        <div className="item">Region: {props.region}</div>
        <div className="item">Capital: {props.capital}</div>
      </div>
    </div>
  );
};

export default CountryCard;
