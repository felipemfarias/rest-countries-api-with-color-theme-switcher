import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const CountrySearch = ({ HandleSearch }) => {
  return (
    <div className="country-search">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input
          type="search"
          name="country"
          placeholder="Search for a country"
          onChange={HandleSearch}
        />
      </div>
    </div>
  );
};

export default CountrySearch;
