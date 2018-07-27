import React, {Component} from 'react';
import Route from 'react-router-dom/Route';
import classes from './Container.css';
import Home from './Home/Home';
import Users from './Users/Users';
import Datasources from './Datasources/Datasources';
import Queries from './Queries/Queries';
import Dashboards from './Dashboards/Dashboards';
import Config from './Config/Config';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedin: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.login(this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
            
          return (
                    <div className={classes.Container}>
                        <Route path="/" exact component={Home}  />
                        <Route path="/users" exact component={Users}  />
                        <Route path="/datasources" exact component={Datasources}  />
                        <Route path="/queries" exact component={Queries}  />
                        <Route path="/dashboards" exact component={Dashboards}  />
                        <Route path="/config" exact component={Config}  />
                    </div>
                    
                    );
                }
                
                
      }
      
      
  export default Container;

  

  