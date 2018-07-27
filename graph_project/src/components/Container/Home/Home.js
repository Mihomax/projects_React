import React, {Component} from 'react';
import classes from './Home.css';

  
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event) {
    this.setState({value: event.target.value});
    let user = document.getElementById('user').value;
    localStorage.setItem('user', user);
    event.preventDefault();
    window.location.reload()
  }

  render() {
    
    let status = localStorage.getItem('user');

            if (status === null && this.state.value === '')
         { return (<form id = "myForm"  >
            <input id="user" className = {classes.Typefields}   type="email" name="email" placeholder="Email" /><br />
            <input className = {classes.Typefields}  type="password" name="password" placeholder="Password" /><br />
            <input className={classes.LoginButton} onClick={this.handleSubmit} type="submit"  id = "loginButton"   value="Login" />
        </form>
        );
        }
        else {return "Hello "+status+", what we are going to do now? "}
              
}
}

  export default Home;









