import React, { Component } from "react";
import "../bootstrap.min.css";
import logo from "../logo.jpg";
import "../style.css";
class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesIsLoading: false,
      imageURL: this.props.country.flag
    };
  }

  // componentDidMount() {
  //   fetch(this.props.flag)
  //     .then(res => {
  //       return res.blob();
  //     })
  //     .then(bl => {
  //       this.setState({
  //         imageURL: bl,
  //         imagesIsLoading: false
  //       });
  //     })
  //     .catch(() => {
  //       this.setState({
  //         imagesIsLoading: true
  //       });
  //     });
  // }

  render() {
    var { flag } = this.props.country;
    return (
      <div className="country-box">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={flag} alt="country-flag" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <p>{this.props.country.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
