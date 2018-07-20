import React, {Component} from 'react';
import Route from 'react-router-dom/Route';
import './Content.css';
import Home from './Home/Home';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Activities from './Activities/Activities';
import Positive from './Positive/Positive';


class Content extends Component {


  render() {
        return (
                <div className="container">
                        <Route path="/" exact component={Home}  />
                        <Route path="/experience" exact component={Experience}  />
                        <Route path="/education" exact component={Education}  />
                        <Route path="/activities" exact component={Activities}  />
                        <Route path="/positive" exact component={Positive}  />
                </div>
        );
  }
}

  export default Content;