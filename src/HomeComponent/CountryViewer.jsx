import React, { Component } from "react";
import "../bootstrap.min.css";
import Country from "./Country";
import PaginationButton from "./PaginationButton";

import "../style.css";

class CountryViewer extends Component {
  constructor(props) {
    super(props);
    var numberPerPage = 12;
    var len = props.countries.length;
    var countries = props.countries;
    var i = parseInt(len / numberPerPage);
    if (i * numberPerPage < len) i++;
    this.state = {
      countryList: countries,
      numberPerPage: numberPerPage,
      numberOfPage: i,
      currentPage: 1,
      currentList: []
    };
    this.changeTo = this.changeTo.bind(this);
  }

  changeTo(i) {
    var newCurrentpage = [];
    let { countryList } = this.state;
    let start = (i - 1) * this.state.numberPerPage;
    let end = start + this.state.numberPerPage;
    for (let index = start; index < end; index++) {
      newCurrentpage.push(countryList[index]);
    }

    // alert(countryList.length);
    this.setState({
      currentList: newCurrentpage
    });
  }

  render() {
    const { currentList } = this.state;
    var ia = 1;
    const CountriesComponents = currentList.map(ele => {
      if (ele != undefined) {
        return <Country country={ele} key={ia++} />;
      }
    });
    return (
      <div>
        <div className="country-row">
          {CountriesComponents[0]}
          {CountriesComponents[1]}
          {CountriesComponents[2]}
          {CountriesComponents[3]}
        </div>
        <div className="country-row">
          {CountriesComponents[4]}
          {CountriesComponents[5]}
          {CountriesComponents[6]}
          {CountriesComponents[7]}
        </div>
        <div className="country-row">
          {CountriesComponents[8]}
          {CountriesComponents[9]}
          {CountriesComponents[10]}
          {CountriesComponents[11]}
        </div>

        <PaginationButton
          currentPosition={this.state.currentPage}
          numberOfPage={this.state.numberOfPage}
          changeTo={this.changeTo}
        />
      </div>
    );
  }
}

export default CountryViewer;
