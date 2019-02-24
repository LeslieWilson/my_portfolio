import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" >
      <button onClick={props.goToNextSlide}>click here</button> 
    </div>
  );
}

export default RightArrow;
