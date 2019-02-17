import React, { Component } from 'react';
import blacknwhiteVector from '../images/blacknwhiteVector.svg';
import ReactSVG from "react-svg";

class Blacknwhite extends Component {
  render() {
    return (
      <div className="blacknwhite">
        <ReactSVG src= {blacknwhiteVector} svgClassName='vectorlines1' />;
      </div>
    );
  }
}
export default Blacknwhite;
