import React, {Component} from 'react';
import Route from 'react-router-dom/Route';
import './Content.css';
import Home from './Home/Home';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Aboutme from './Aboutme/Aboutme';
import Projects from './Projects/Projects';


class Content extends Component {


  render() {
        return (
                <div className="container">
                        <Route path="/" exact component={Home}  />
                        <Route path="/experience" exact component={Experience}  />
                        <Route path="/education" exact component={Education}  />
                        <Route path="/aboutme" exact component={Aboutme}  />
                        <Route path="/projects" exact component={Projects}  />
                </div>
        );
  }
}

  export default Content;