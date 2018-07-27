import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Container from './components/Container/Container';


class App extends Component {

  state ={
    user:""
  }

  render() {
    return (
      <Router>
        <Layout>
        <Container/>
          </Layout>
      </Router>
    );
  }
}

export default App;
