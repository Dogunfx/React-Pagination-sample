import React, { Component } from "react";
import "../bootstrap.min.css";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-5">
              <h1>My React web application</h1>
            </div>
            <div className="col-sm-7">
              <nav>
                <ul className="row ">
                  {/* <li className="col-sm">Home</li> */}
                  <li className="col-sm">About the app</li>
                  <li className="col-sm">Contact</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
