import React, { Component } from 'react';
import Blacknwhite from '../components/Blacknwhite.js'
import Colorforest from '../components/Colorforest.js'
import White from '../components/White.js'
import Gridlist from '../components/Gridlist.js'
import Slider from '../../projects/components/myslider/Slider.js'




class Homecontainer extends Component {
  render() {
    return (
      <div className="homecontainer">
        < Blacknwhite />
        < Colorforest />
        < White />
        < Gridlist />
        < Slider />


      </div>
    );
  }
}
export default Homecontainer;
