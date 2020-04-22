import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
      <div className="card">
        <div
          className="flag"
          style={{ backgroundImage: `url(${country.flag})` }}
        ></div>
        <div className="country-info">
          <div className="title">{country.name}</div>
          <div className="item">
            <span className="item-label">Population:</span>{" "}
            {Number(country.population).toLocaleString()}
          </div>
          <div className="item">
            <span className="item-label">Region:</span> {country.region}
          </div>
          <div className="item">
            <span className="item-label">Capital:</span> {country.capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
