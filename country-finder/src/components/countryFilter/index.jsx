import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const CountryFilter = (props) => {
  const options = [
    { value: "", label: "Filter by region" },
    { value: "americas", label: "Americas" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europa" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <div className="country-filter">
      <div className="filter-container">
        <select onChange={props.HandleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FontAwesomeIcon className="icon" icon={faAngleDown} />
      </div>
    </div>
  );
};

export default CountryFilter;
