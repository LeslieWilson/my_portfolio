import React, { Component } from 'react';
import vectorlines1 from '../images/vectorlines1.svg';
import ReactSVG from "react-svg";

class Blacknwhite extends Component {
  render() {
    return (
      <div className="blacknwhite">
        <ReactSVG src= {vectorlines1} svgClassName='vectorlines1' />;
      </div>
    );
  }
}
export default Blacknwhite;
