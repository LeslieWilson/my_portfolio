import React, { Component } from 'react';
import Blacknwhite from '../components/Blacknwhite.js'
import Colorforest from '../components/Colorforest.js'

class Homecontainer extends Component {
  render() {
    return (
      <div className="homecontainer">
        < Blacknwhite />
        < Colorforest />

      </div>
    );
  }
}
export default Homecontainer;
