import React from "react";
import "./style.scss";
import CountrySearch from "../CountrySearch";
import CountryList from "../CountryList";
import CountryFilter from "../CountryFilter";

const Main = ({ countries, search, filter, HandleFilter, HandleSearch }) => {
  return (
    <>
      <div className="search-filter">
        <CountrySearch HandleSearch={HandleSearch} />
        <CountryFilter HandleFilter={HandleFilter} />
      </div>

      <CountryList countries={countries} search={search} filter={filter} />
    </>
  );
};

export default Main;
