import React, { Component } from 'react';
import Top from './components/Top/Top';
import Sidebar from './components/Sidebar/Sidebar';
import Container from './components/Container/Container';

class App extends Component {

  state = { content:"home"}

  updateState = (x) => {
    
    this.setState({ content:x});
       
  }

  render() {

    console.log(this.state);

    return (
      <div >
       <Top />
       <Sidebar changeContent = {this.updateState.bind(this) }  />
       <Container content = {this.state.content} />
      </div>
    );
  }
}

export default App;
