import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import Button from "../Button";

const CountryPage = ({ countries }) => {
  const { id } = useParams();
  const country = countries.find((item) => item.alpha3Code === id);

  const ShowBorderCountries = () => {
    const countryButtons = country.borders
      .map((item) => countries.find((item2) => item2.alpha3Code === item))
      .map((item3) => (
        <li key={item3.alpha3Code} className="border-country">
          <Button url={item3.alpha3Code} label={item3.name} />
        </li>
      ));
    return countryButtons;
  };

  if (!country) {
    return <div>Not found</div>;
  }
  return (
    <div className="country-page">
      <Button label="Go back" url="/" />
      <div className="country">
        <div className="flag">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="info">
          <h1>{country.name}</h1>
          <div className="country-details">
            <div className="column">
              <div className="item">
                <span className="label">Native Name: </span>
                {country.nativeName}
              </div>
              <div className="item">
                <span className="label">Population: </span>
                {country.population}{" "}
              </div>
              <div className="item">
                <span className="label">Region: </span>
                {country.region}
              </div>
              <div className="item">
                <span className="label">Sub Region: </span>
                {country.subRegion}
              </div>
              <div className="item">
                <span className="label">Capital: </span>
                {country.capital}
              </div>
            </div>
            <div className="column">
              <div className="item">
                <span className="label">Top Level Domain: </span>
                {country.topLevelDomain}
              </div>
              <div className="item">
                <span className="label">Currencies: </span>
                {country.currencies.map(
                  (item, index) =>
                    item.name +
                    (country.currencies.length === index + 1 ? "" : ", ")
                )}
              </div>
              <div className="item">
                <span className="label">Languages: </span>
                {country.languages.map(
                  (item, index) =>
                    item.name +
                    (country.languages.length === index + 1 ? "" : ", ")
                )}
              </div>
            </div>
          </div>
          <div className="border-details">
            <span className="label">Border Countries:</span>
            <div className="border-countries">
              <ul>
                <ShowBorderCountries />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
