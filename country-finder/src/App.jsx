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
      <Router>
        <Header />
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
