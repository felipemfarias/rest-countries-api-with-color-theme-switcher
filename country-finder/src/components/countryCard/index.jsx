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
        <div className="item">
          <span className="item-label">Population:</span>{" "}
          {Number(props.population).toLocaleString()}
        </div>
        <div className="item">
          <span className="item-label">Region:</span> {props.region}
        </div>
        <div className="item">
          <span className="item-label">Capital:</span> {props.capital}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
