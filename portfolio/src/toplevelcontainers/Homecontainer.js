import React, { Component } from 'react';
import Blacknwhite from '../scenes/home/components/Blacknwhite.js'

import White from '../scenes/home/components/White.js'

import Slider from '../../projects/components/myslider/Slider.js'
import Fadein from '../scenes/home/components/fade/Fadein.js'




class Homecontainer extends Component {
  render() {
    return (
      <div className="homecontainer">

      <div className='same'>
        <Blacknwhite />
        < Fadein />
        </div>
        <Slider />

      </div>
    );
  }
}
export default Homecontainer;