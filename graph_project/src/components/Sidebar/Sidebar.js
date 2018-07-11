import React, { Component } from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
// import Route from 'react-router-dom/Route';



  class Sidebar extends Component {
   
    constructor (props){
      super();
    }
  
    passSection (x) {
    this.props.changeContent(x);
  }
  
 render() {
    
    return (<div className = "sideBarStyle">
            
            <Link to="/home" style={{ textDecoration: 'none' }}><p onClick = {() => this.passSection("Home")}>Home</ p></Link>
            <Link to="/users" style={{ textDecoration: 'none' }}><p onClick = {() => this.passSection("Users")}>Users</ p></Link>
            <Link to="/datasources" style={{ textDecoration: 'none' }}><p onClick = {() => this.passSection("Datasources")}>Datasources</ p></Link>
            <Link to="/queries" style={{ textDecoration: 'none' }}><p onClick = {() => this.passSection("Queries")}>Queries</ p></Link>
            <Link to="/dashboards" style={{ textDecoration: 'none' }}><p onClick = {() => this.passSection("Dashboards")}>Dashboards</ p></Link>
          
          </div>);
 
  }

}

  export default Sidebar;