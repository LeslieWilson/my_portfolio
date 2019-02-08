import React, { Component } from 'react';
import vectorlines2 from '../images/vectorlines2.svg';
import ReactSVG from "react-svg";

class Colorforest extends Component {
    render(){
        return(
            <div className="colorforest">
            <ReactSVG src= {vectorlines2} svgClassName='vectorlines2'/>;
            </div>
        );
    }
}

export default Colorforest
