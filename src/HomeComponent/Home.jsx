import React, { Component } from "react";
import "../bootstrap.min.css";
import Header from "../GeneralComponent/Header";
import CountryViewer from "./CountryViewer";
class Home extends Component {
  state = {
    countries: null,
    isLoading: true
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(countriesJson => {
        this.setState({
          countries: countriesJson,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h3 className="p-4">
            This is a simple web app for implementing pagination in react
          </h3>
          <h5>Countries will be listed below</h5>
          <p>
            {this.state.isLoading
              ? "countries is loading"
              : `Finish loading ${this.state.countries.length} countries`}
          </p>
          <div>
            {this.state.isLoading ? (
              "No Countries yet"
            ) : (
              <CountryViewer countries={this.state.countries} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
