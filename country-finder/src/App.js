import React from "react";
import "./style.scss";
import Header from "./components/header";
import Main from "./components/main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      countries: [],
    };
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
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
