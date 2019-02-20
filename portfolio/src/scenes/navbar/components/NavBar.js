import  React from 'react';
import { Link } from 'react-router';


const  NavBar = props => {
    return(
        <div>
        <div className="navbar">

        <Link to ='/projects'>PROJECTS</Link>
        <Link to = '/about'>ABOUT</Link>
        <Link to = '/contact'>CONTACT</Link>
        <Link to ='/'>HOME</Link>
        </div>
        <div className="content">
        <h1 className="page-title"></h1>
        {props.children}
        </div>
        </div>
    )
}

export default NavBar;
