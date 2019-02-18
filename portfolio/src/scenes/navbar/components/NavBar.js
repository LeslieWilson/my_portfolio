import  React from 'react';
import { Link } from 'react-router';


const  NavBar = props => {
    return(
        <div>
        <div className="navbar">
        
        <Link to ='/'>HOME</Link>
        </div>
        <div className="content">
        <h1 className="page-title">categories</h1>
        {props.children}
        </div>
        </div>
    )
}

export default NavBar;
