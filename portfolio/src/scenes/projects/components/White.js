import React, { Component } from 'react';
import vectorlines3 from '../images/vectorlines3.svg';
import ReactSVG from "react-svg";


class White extends Component  {
    render(){
        return(
            <div className ="white">
            <ReactSVG src = {vectorlines3}  svgClassName='vectorlines3' />;
            </div>
        );
    }
}

export default White;
