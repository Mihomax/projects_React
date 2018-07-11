import React, {Component} from 'react';
import Route from 'react-router-dom/Route';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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
  
      if (this.props.content === "Home" && this.props.user === "User") {
        return (<Route path="/" exact render={
                    () => {
            return (<div className = "container">
                  <form id = "myForm" onSubmit={this.handleSubmit}>
                      <input className = "typefields" value={this.state.value} onChange={this.handleChange} type="email" name="email" placeholder="Email" /><br />
                      <input className = "typefields" type="password" name="password" placeholder="Password" /><br />
                      <input type="submit"  id = "loginButton"   value="Login" />
                  </form>
                </div>);
                }
                
                }/>);
      }
      else if (this.props.content === "Home" && this.props.user !== "User") {
        return (<Route path="/home" exact render={
          () => {
            return (<div className = "container">
                 <h1>Hello  user - {this.props.user}  , how is going?</h1>
                </div>);
                }
                }/>);
      }
      else if (this.props.content === "Users") {
        return (<Route path="/users" exact render={() => {
            return (<div className = "container">
                 <h1>This is Users's section  !</h1>
                </div>)}
                }/>);
      }
      else if (this.props.content === "Datasources") {
        return (<div className = "container">
                 <h1>These are Datasources  !</h1>
                </div>)
      }
      else if (this.props.content === "Queries") {
        return (<div className = "container">
                 <h1>These are Queries  !</h1>
                </div>)
      }
      else if (this.props.content === "Dashboards") {
        return (<div className = "container">
                 <h1>This is Dashboard section  !</h1>
                </div>)
      }
  }
}
      
  export default Container;

  // render() {
  
  //   if (this.props.content === "Home" && this.props.user === "User") {
  //     return (<Router>
  //       <div className = "container">
  //         <Route path="/" exact render={
  //           () => {
  //             return (<form id = "myForm" onSubmit={this.handleSubmit}>
  //                       <input className = "typefields" value={this.state.value} onChange={this.handleChange} type="email" name="email" placeholder="Email" /><br />
  //                       <input className = "typefields" type="password" name="password" placeholder="Password" /><br />
  //                       <input type="submit"  id = "loginButton"   value="Login" />
  //                   </form>);
  //           }
  //         }/>
  //             </div>
  //             </Router>);
  //   }
  //   else if (this.props.content === "Home" && this.props.user !== "User") {
  //     return (<Router>
  //       <div className = "container">
  //       <Route path="/home" exact render={
  //           () => {
  //             return (
  //              <h1>Hello  user - {this.props.user}  , how is going?</h1>);
  //             }
  //           }/>
  //               </div>
  //             </Router>);
  //   }
  //   else if (this.props.content === "Users") {
  //     return (<Router>
  //       <div className = "container">
  //       <Route path="/users" exact render={
  //           () => {
  //             return (<h1>This is Users's section  !</h1>);
  //           }
  //         }/>
  //             </div>
  //           </Router>);
   // }