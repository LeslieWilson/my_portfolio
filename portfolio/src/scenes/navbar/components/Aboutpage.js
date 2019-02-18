import React from 'react';
import { Link } from 'react-router';

const Aboutpage = props => {
  return(
    <div className="about">
      <Link to ={`/aboout/${props.id}`}><h1>{props.name}</h1></Link>
    </div>
  )
}

export default Aboutpage;
