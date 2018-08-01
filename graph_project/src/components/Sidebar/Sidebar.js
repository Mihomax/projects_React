import React, { Component } from 'react';
import  '../../styles/mystyle.css';
import {Link} from 'react-router-dom';

  class Sidebar extends Component {
   
    constructor (props){
      super();
    }
  
 render() {
    
    return (<div >
            
            <Link className = 'Link' to="/" >Home</Link>
            <Link  className = 'Link' to="/users">Users</Link>
            <Link className = 'Link'to="/datasources">Datasources</Link>
            <Link className = 'Link'to="/queries" >Queries</Link>
            <Link className = 'Link'to="/dashboards" >Dashboards</Link>
          
          </div>);
 
  }

}

  export default Sidebar;