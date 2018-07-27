import React, { Component } from 'react';
import classes from './Sidebar.css';
import {Link} from 'react-router-dom';




  class Sidebar extends Component {
   
    constructor (props){
      super();
    }
  
  
  
 render() {
    
    return (<div >
            
            <Link className = {classes.Link} to="/" >Home</Link>
            <Link  className = {classes.Link} to="/users">Users</Link>
            <Link className = {classes.Link}to="/datasources">Datasources</Link>
            <Link className = {classes.Link}to="/queries" >Queries</Link>
            <Link className = {classes.Link}to="/dashboards" >Dashboards</Link>
          
          </div>);
 
  }

}

  export default Sidebar;