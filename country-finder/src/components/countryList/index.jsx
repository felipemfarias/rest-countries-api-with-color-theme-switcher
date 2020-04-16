import React from "react";
import CountryCard from "../countryCard";
import "./style.scss";

const CountryList = ({ countries }) => {
  return (
    <>
      <div className="search-filter">
        <div className="country-search">
          <div className="search-container">
            <input
              type="text"
              name="country"
              placeholder="Search for a country"
            />
          </div>
        </div>

        <div className="country-filter">
          <div className="filter-container">
            <select>
              <option>Filter by Region</option>
              <option>Americas</option>
              <option>Africa</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </div>
        </div>
      </div>

      <div className="country-list-container">
        {countries.map((country) => (
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
