import React, { Component } from 'react';
import './Sidebar.css';



  class Sidebar extends Component {
   
    constructor (props){
      super();
    }
  
    passSection (x) {
    this.props.changeContent(x);
  }
  
 render() {
    
    return (<div className = "sideBarStyle">
            
            <p onClick = {() => this.passSection("Users")}>Users</ p>
            <p onClick = {() => this.passSection("Datasources")}>Datasources</ p>
            <p onClick = {() => this.passSection("Queries")}>Queries</ p>
            <p onClick = {() => this.passSection("Dashboards")}>Dashboards</ p>
          
          </div>);
 
  }

}

  export default Sidebar;