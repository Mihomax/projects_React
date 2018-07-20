import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Left from './components/Left/Left';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal';


class App extends Component {

  state = {
    modalStatus:"hide",
    backgroundStatus:"",
    pageStatus:"home",
    positives: [
      {id:0,message:"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."},
      {id:1,message: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough."},
      {id:2,message: "Your positive action combined with positive thinking results in success."},
      {id:3,message: "Find a place inside where there's joy, and the joy will burn out the pain."},
      {id:4,message: "With the new day comes new strength and new thoughts."},
      {id:5,message: "Your talent is God's gift to you. What you do with it is your gift back to God."},
      {id:6,message: "Put your heart, mind, and soul into even your smallest acts. This is the secret of success."},
      {id:7,message: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind."},
      {id:8,message: "Accept no one’s definition of your life; define yourself."},
      {id:9,message: "One day your life will flash before your eyes. Make sure it’s worth watching. "},
      {id:10,message: "Never regret a day in your life. Good days give you happiness and bad days give you experience."},
      {id:11,message: "The way get started is to quit talking and begin doing."},
      {id:12,message: "We generate fears while we sit. We overcome them by action."},
      {id:13,message: "Those who don’t believe in magic will never find it. "}

    ]
  }

  showModal = () => {
    this.setState({modalStatus:"show",backgroundStatus:"blurred"});
       
  }
  closeModal = () => {
    this.setState({modalStatus:"hide",backgroundStatus:""});
  }

  render() {
    return (
      <Router>
      <div className="App">
          <div id ="background" className={this.state.backgroundStatus}>
             <Left  button = {this.showModal}/>
             <Navbar />
             <Content />
          </div>
          <div id= "modalDiv" className={this.state.modalStatus}>
             <Modal closeModal = {this.closeModal} morepositive = {this.showModal} content = {this.state.positives} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
