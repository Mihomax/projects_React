import React, {Component} from 'react';
import  '../../../styles/mystyle.css';

  
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event) {
    this.setState({value: event.target.value});
    console.log(this.state);
    let user = document.getElementById('user').value;
    localStorage.setItem('user', user);
    event.preventDefault();
    window.location.reload();
  }

  render() {
    
    let status = localStorage.getItem('user');

            if (status === null && this.state.value === '')
         { return (<form id = "myForm"  >
            <input id="user" className = 'HomeTypefields'   type="email" name="email" placeholder="Email" /><br />
            <input className = 'HomeTypefields'  type="password" name="password" placeholder="Password" /><br />
            <input className='HomeLoginBtn' onClick={this.handleSubmit} type="submit"  id = "loginButton"   value="Login" />
        </form>
        );
        }
        else {return "Hello "+status+", what we are going to do now? "}
              
}
}

  export default Home;









