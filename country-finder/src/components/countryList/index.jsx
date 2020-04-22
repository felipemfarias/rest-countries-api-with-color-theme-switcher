import React from "react";
import CountryCard from "../CountryCard";
import "./style.scss";

const CountryList = ({ countries, search, filter }) => {
  return (
    <>
      <div className="country-list-container">
        {countries
          .filter((country) => country.region.toLowerCase().match(filter))
          .filter((country) => country.name.toLowerCase().includes(search))
          .map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
      </div>
    </>
  );
};

export default CountryList;
