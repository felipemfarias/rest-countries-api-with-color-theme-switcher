import React from "react";
import "./style.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryPage from "./components/CountryPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
      filter: "",
      search: "",
      darkMode: false,
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.HandleSearch = this.HandleSearch.bind(this);
    this.HandleFilter = this.HandleFilter.bind(this);
  }

  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
    let body = document.querySelector("body");
    if (!this.state.darkMode) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    }
  }

  HandleSearch(event) {
    const searchString = event.target.value.toLowerCase();
    this.setState({ search: searchString });
  }

  HandleFilter(event) {
    this.setState({ filter: event.target.value });
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
      <Router>
        <Header
          HandleClick={this.toggleDarkMode}
          isDarkMode={this.state.darkMode}
        />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Main
                countries={this.state.countries}
                search={this.state.search}
                filter={this.state.filter}
                HandleFilter={this.HandleFilter}
                HandleSearch={this.HandleSearch}
              />
            </Route>
            <Route path="/country/:id">
              <CountryPage countries={this.state.countries} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
