import React from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftArrow = (props) => {
  return (
      <div className="prevArrow">
      <FontAwesomeIcon icon= {faAngleLeft} size='l' color='red' onClick={props.goToPrevSlide} />

      </div>
  );
}


export default LeftArrow;
