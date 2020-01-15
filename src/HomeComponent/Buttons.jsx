import React, { Component } from "react";
class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var strClassName = this.props.isActive ? "page-item active" : "page-item";
    return (
      <li className={strClassName}>
        <a className="page-link" href="#" onClick={this.props.doClick}>
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default Buttons;
