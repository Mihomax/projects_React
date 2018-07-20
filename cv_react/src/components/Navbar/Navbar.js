import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';




const navbar = () => (
    <nav >
        <div className = "linkContainer">
        <Link className = "links home" to={'/'}><i className="material-icons ">home</i></Link>
        <Link className = "links work" to={'/experience'}><i className="material-icons ">work</i></Link>
        <Link className = "links school" to={'/education'}><i className="material-icons ">school</i></Link>      
        <Link className = "links face" to={'/activities'}><i className="material-icons ">face</i></Link>      
        <Link className = "links mood" to={'/positive'}><i className="material-icons ">mood</i></Link>      
        </div>
    </nav>
);

export default navbar;
