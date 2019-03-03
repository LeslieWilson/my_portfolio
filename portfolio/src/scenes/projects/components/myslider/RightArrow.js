import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const RightArrow = (props) => {
  return (


    <div className="nextArrow">
    <FontAwesomeIcon  icon= {faAngleRight}  color='gray' onClick={props.goToNextSlide} />

    </div>


  );
}

export default RightArrow;
