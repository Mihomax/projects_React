import React, {Component} from 'react';
import classes from './Datasources.css';
import Aux from '../../../hoc/Aux';

  
class Datasources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: '',
      user:'',
      password:'',
      database:'',
      port:'',
      host:''          
  };

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

 

  handleSubmit(event) {
    event.preventDefault();
    let newState = {...this.state};
    newState.client = this.refs.clients.value;
    newState.user =this.refs.user.value;
    newState.password =this.refs.password.value;
    newState.database =this.refs.database.value;
    newState.port = this.refs.port.value;
    newState.host = this.refs.host.value;  
    let formData = localStorage.getItem('formData');
        
    if (formData == null) {
          let dataStore = [newState];
          localStorage.setItem('formData', JSON.stringify(dataStore));
          console.log(localStorage.getItem('formData'));
        }

    else {
          let dataStore = JSON.parse(localStorage.getItem('formData'));
          dataStore.push(newState);
          localStorage.setItem('formData', JSON.stringify(dataStore));
          console.log(JSON.parse(localStorage.getItem('formData')));
       }

       window.location.reload();
//    this.setState({
// client:newState.client
//    });
//    console.log(this.state);
    
   
  }

  clearLocalStorage(key) {
    
    let formData = JSON.parse(localStorage.getItem('formData'));
    let index = formData.findIndex(each => each.database === key);
    formData.splice(index, 1);
    if (formData === undefined || formData.length === 0) {
      localStorage.removeItem("formData");
      window.location.reload();
  }
  else {
    localStorage.removeItem("formData");
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.reload();
  }
    
  }

  render() {
    
    let formData = JSON.parse(localStorage.getItem('formData'));
    let datasourceList, currentDatasource;
    if (formData !== null) {
     datasourceList = formData.map(eachItem => {
      
        return (<div key={eachItem.database} className={classes.Datasources} >
                  {eachItem.client} <br/>
                  <button className = {classes.Btn} onClick={() => this.clearLocalStorage(eachItem.database)}>Delete</button>
                </div>)
  });
          console.log(datasourceList);
          let index = formData.length - 1;
          
          currentDatasource = (
            <div className = {classes.CurrDatDiv}>
              <h3>Your current datasource is</h3>
             <p> Client: {formData[index].client}</p>
             <p> User: {formData[index].user}</p>
             <p> Password: {formData[index].password}</p>
             <p> Database: {formData[index].database}</p>
              <p> Port: {formData[index].port}</p>
             <p> Host: {formData[index].host}</p>
             
              </div>)
} 
  else {
  datasourceList = 'You did not configure your datasource yet';
  currentDatasource = null;
    };
  
    return (
      <Aux>
        <div className={classes.DatasourcesDiv} >
          
      <div>Your datasources<br/><br/>{datasourceList}</div>
      
      </div>
      {currentDatasource}
        <div className={classes.ConfigDiv}>
         <form id = "configForm" onSubmit={this.handleSubmit}  >

          <label className={classes.Lables} htmlFor="clients">Select your client:</label> 
         <select className = {classes.Typefields} name="clients" ref="clients">
            <option value="pg">pg</option>
            <option value="sqlite">sqlite</option>
            <option value="mysql">mysql</option>
            <option value="mysql2">mysql2</option>
            <option value="oracle">oracle</option>
            <option value="mssql">mssql</option>
        </select>
        <br/>
            <label className={classes.Lables} htmlFor="user" >User:</label> 
            <input id="user" className = {classes.Typefields} ref="user"  type="text" name="user" placeholder="User" /><br/>
            
            <label className={classes.Lables} htmlFor="password">Password:</label> 
            <input className = {classes.Typefields}  ref="password" type="password" name="password" placeholder="Password" /><br/>
            
            <label className={classes.Lables} htmlFor="database">Database:</label> 
            <input className = {classes.Typefields} ref="database"  type="text" name="database" placeholder="Database" /><br/>
            
            <label className={classes.Lables} htmlFor="port">Port:</label> 
            <input className = {classes.Typefields} ref="port" type="text" name="port" placeholder="Port" /><br/>
            
            <label className={classes.Lables} htmlFor="host">Host:</label> 
            <input className = {classes.Typefields} ref="host"  type="text" name="host" placeholder="Host" /><br/>

            <button className={classes.LoginButton}    value="Submit" >Submit</button>
        </form>
        </div>
        </Aux>
        );
        }
              
}


 

  export default Datasources;