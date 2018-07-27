import React, {Component} from 'react';
import classes from './Config.css';


  
class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event) {
    
    event.preventDefault();
   
  }

  render() {
    return (
         
         <form id = "configForm"  >

<h2>Please Select your client:</h2>
         <select name="cars">
            <option value="pg">pg</option>
            <option value="sqlite">sqlite</option>
            <option value="mysql">mysql</option>
            <option value="mysql2">mysql2</option>
            <option value="oracle">mysql2</option>
            <option value="mssql">mysql2</option>
        </select>
            <input id="user" className = {classes.Typefields}   type="email" name="email" placeholder="Email" /><br />
            <input className = {classes.Typefields}  type="password" name="password" placeholder="Password" /><br />
            <input className={classes.LoginButton} onClick={this.handleSubmit} type="submit"  id = "loginButton"   value="Login" />
        </form>
        );
        }
              
}


 

  export default Config;