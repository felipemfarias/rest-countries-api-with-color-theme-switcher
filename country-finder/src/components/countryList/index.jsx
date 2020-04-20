import React from "react";
import CountryCard from "../countryCard";
import "./style.scss";

const CountryList = ({ countries, search, filter }) => {
  return (
    <>
      <div className="country-list-container">
        {countries
          .filter((country) => country.region.toLowerCase().match(filter))
          .filter((country) => country.name.toLowerCase().includes(search))
          .map((country) => (
            <CountryCard
              key={country.alpha2Code}
              name={country.name}
              flagUrl={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
      </div>
    </>
  );
};

export default CountryList;
