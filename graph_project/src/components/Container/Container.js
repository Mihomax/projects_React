import React from 'react';
import './Container.css';

  
  const container = (props) => {
      if (props.content === "home") {
        return (<div className = "container">
                  <form id = "myForm">
                      <input className = "typefields" type="email" name="email" placeholder="Email" /><br />
                      <input className = "typefields" type="password" name="password" placeholder="Password" /><br />
                      <input id = "loginButton" type="button"  value="Login" />
                  </form>
                </div>)
      }
      else if ((props.content === "Users")) {
        return (<div className = "container">
                 <h1>This is Users's section  !</h1>
                </div>)
      }
      else if ((props.content === "Datasources")) {
        return (<div className = "container">
                 <h1>These are Datasources  !</h1>
                </div>)
      }
      else if ((props.content === "Queries")) {
        return (<div className = "container">
                 <h1>These are Queries  !</h1>
                </div>)
      }
      else if ((props.content === "Dashboards")) {
        return (<div className = "container">
                 <h1>This is Dashboard section  !</h1>
                </div>)
      }
  }

  export default container;