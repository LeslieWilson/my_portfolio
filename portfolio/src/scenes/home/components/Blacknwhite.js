import React, { Component } from 'react';
import blkwht2 from '../images/blkwht2.png';
import ReactSVG from "react-svg";

class Blacknwhite extends Component {
  render() {
    return (
      <div className="blacknwhite">
        <img src= {blkwht2} className="black_n_white_Vectorlines_img"/>;
      </div>
    );
  }
}
export default Blacknwhite;
