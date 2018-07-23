import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    constructor() {
        super();
        this.underlined= this.underlined.bind(this);
        this.state = { 
            home:"3px solid #4285F4",
            experience:"",
            education:"",
            activities:"",
            positive:""
        };
        this.status = {home:{borderBottom:""}};
    }
     underlined = () => {
        
        this.status.home={borderBottom:"3px solid #4285F4"};
    };

    render() {
   return ( <nav >
        <div className = "linkContainer">
       
        <NavLink className = "links home active" exact={true} activeClassName='is-active' to={'/'}><i className="material-icons ">home</i></NavLink>
        <NavLink className = "links work" exact={true} activeClassName='is-active' to={'/experience'}><i className="material-icons ">work</i></NavLink>
        <NavLink className = "links school" exact={true} activeClassName='is-active' to={'/education'}><i className="material-icons ">school</i></NavLink>      
        <NavLink className = "links face" exact={true} activeClassName='is-active' to={'/activities'}><i className="material-icons ">face</i></NavLink>      
        <NavLink className = "links mood" exact={true} activeClassName='is-active' to={'/positive'}><i className="material-icons ">mood</i></NavLink>      
        </div>
    </nav>
);
}
}

export default Navbar;
