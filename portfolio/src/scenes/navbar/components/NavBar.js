import  React from 'react';
import { Link } from 'react-router-dom';
import  Projectpage from './Projectpage.js';


const  NavBar = props => {
    return(
        <div>

        <div className="navbar">

        <Projectpage />
        <Link to = '/about' className='drpdownlink'>ABOUT</Link>
        <Link to = '/contact' className='drpdownlink'>CONTACT</Link>
        <Link to ='/'className='drpdownlink'>HOME</Link>
        </div>
        <div className="content">
        <h1 className="page-title"></h1>
        {props.children}
        </div>
        </div>
    )
}

export default NavBar;
