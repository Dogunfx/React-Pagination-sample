import React, { Component } from "react";
import "../bootstrap.min.css";
import Buttons from "./Buttons";

class PaginationButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkpreButton = this.checkpreButton.bind(this);
    this.checkNextButton = this.checkNextButton.bind(this);
    this.upadePage = this.upadePage.bind(this);
    this.state = {
      hasEnd: true,
      isBeginning: true,
      postionOfActiveButton: this.props.currentPosition,
      numberOfButton: this.props.numberOfPage
    };
  }

  componentDidMount() {
    this.handleClick(this.props.currentPosition);
  }

  handleClick(pos) {
    this.setState(state => {
      this.checkpreButton(pos);
      this.checkNextButton(pos);
      return {
        postionOfActiveButton: pos
      };
    });
    this.props.changeTo(pos);
  }

  checkpreButton(pos) {
    var res = false;
    if (pos == 1) {
      res = true;
    }
    this.setState({
      hasEnd: res
    });
  }

  checkNextButton(pos) {
    var res = false;
    if (pos == this.state.numberOfButton) {
      res = true;
    }
    this.setState({
      isBeginning: res
    });
  }

  upadePage(val) {
    var newPos = this.state.postionOfActiveButton + val;
    this.handleClick(newPos);
  }

  render() {
    let ButtonList = [];
    for (let index = 1; index <= this.state.numberOfButton; index++) {
      const element = (
        <Buttons
          isActive={this.state.postionOfActiveButton == index}
          text={index}
          key={index}
          doClick={() => {
            this.handleClick(index);
          }}
        />
      );
      ButtonList.push(element);
    }
    let preClassName = this.state.hasEnd ? "page-item disabled" : "page-item";
    let nextClassName = this.state.isBeginning
      ? "page-item disabled"
      : "page-item";
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={preClassName}>
            <a
              className="page-link"
              onClick={() => {
                this.upadePage(-1);
              }}
            >
              <span>&laquo;</span>
            </a>
          </li>
          {ButtonList}
          <li className={nextClassName}>
            <a
              className="page-link"
              onClick={() => {
                this.upadePage(1);
              }}
            >
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default PaginationButton;
