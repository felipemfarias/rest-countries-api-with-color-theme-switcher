import React from "react";
import "./style.scss";
import CountrySearch from "../countrySearch";
import CountryList from "../countryList";
import CountryFilter from "../countryFilter";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
      filter: "",
      search: "",
    };

    this.HandleSearch = this.HandleSearch.bind(this);
    this.HandleFilter = this.HandleFilter.bind(this);
  }

  HandleSearch(event) {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  }

  HandleFilter(event) {
    this.setState({ filter: event.target.value });
    console.log(this.state.filter);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            countries: result,
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="search-filter">
          <CountrySearch HandleChange={this.HandleSearch} />
          <CountryFilter HandleChange={this.HandleFilter} />
        </div>
        <CountryList
          countries={this.state.countries}
          search={this.state.search}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default Main;
