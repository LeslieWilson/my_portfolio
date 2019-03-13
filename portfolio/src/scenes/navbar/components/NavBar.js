import  React from 'react';
import { Link } from 'react-router-dom';
import  Projectpage from './Projectpage.js';


const  NavBar = props => {
    return(
        <div className="dots">

        <Link to ='/'className='drpdownlinkL'>LARISA OVALLES PAULINO</Link>

        <div className="navbar">

        <Projectpage />
        <Link to = '/about' className='drpdownlink'>ABOUT</Link>
        <Link to = '/contact' className='drpdownlink'>CONTACT</Link>

        </div>
        <div className="content">
        <h1 className="page-title"></h1>
        {props.children}
        </div>
        </div>
    )
}

export default NavBar;
