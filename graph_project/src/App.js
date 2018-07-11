import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Top from './components/Top/Top';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';

class App extends Component {

  state = { content:"Home", user: "User"}

  updateState = (newState) => {
    
    this.setState({ content:newState});
       
  }
  loginUser = (newUser) => {
    
    this.setState({ user:newUser});

       
  }

  render() {

    console.log(this.state);

    return (
      <Router>
      <div >
       <Top />
       <Sidebar changeContent = {this.updateState.bind(this) }  />
       <Container login = {this.loginUser.bind(this)} content = {this.state.content} user = {this.state.user} />
      </div>
      </Router>
    );
  }
}

export default App;
