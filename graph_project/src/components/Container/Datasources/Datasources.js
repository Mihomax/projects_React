import React, {Component} from 'react';
import  '../../../styles/mystyle.css';
import Aux from '../../../hoc/Aux';

  
class Datasources extends Component {
  
    state = {
      datasources:[]       
  }


  handleSubmit= (event) => {
    event.preventDefault();
    let newState = {...this.state.datasources};
    newState.client = this.refs.clients.value;
    newState.user =this.refs.user.value;
    newState.password =this.refs.password.value;
    newState.database =this.refs.database.value;
    newState.port = this.refs.port.value;
    newState.host = this.refs.host.value;  
    this.setState({datasources:newState});

  }

  componentDidUpdate () {
    
    let formData = localStorage.getItem('formData');
        
    if (formData == null) {
          let myArray = [this.state.datasources]
          localStorage.setItem('formData', JSON.stringify(myArray));
         }
    else {
          
          let localStorageData = JSON.parse(localStorage.getItem('formData'));
          localStorageData.push(this.state.datasources);
          localStorage.setItem('formData', JSON.stringify(localStorageData));
          console.log(JSON.parse(localStorage.getItem('formData')));
       }
       window.location.reload();
  }

  deleteDatasource(key) {
    
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
      
        return (<div key={eachItem.database} className='Datasources' >
                  {eachItem.client} <br/>
                  <button className = 'Btn' onClick={() => this.deleteDatasource(eachItem.database)}>Delete</button>
                </div>)
  });
          console.log(datasourceList);
          let index = formData.length - 1;
          
          currentDatasource = (
            <div className = 'CurrDatDiv'>
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
        
        <div className='DatasourcesDiv' >
          
      <div>Your datasources<br/><br/>{datasourceList}</div>
      
      </div>
      {currentDatasource} 
        <div className='ConfigDiv'>
         <form id = "configForm" onSubmit={this.handleSubmit}  >

          <label  htmlFor="clients">Select your client:</label> 
         <select className = 'DataTypefields' name="clients" ref="clients">
            <option value="pg">pg</option>
            <option value="sqlite">sqlite</option>
            <option value="mysql">mysql</option>
            <option value="mysql2">mysql2</option>
            <option value="oracle">oracle</option>
            <option value="mssql">mssql</option>
        </select>
        <br/>
            <label  htmlFor="user" >User:</label> 
            <input id="user" className = 'DataTypefields' ref="user"  type="text" name="user" placeholder="User" /><br/>
            
            <label  htmlFor="password">Password:</label> 
            <input className = 'DataTypefields'  ref="password" type="password" name="password" placeholder="Password" /><br/>
            
            <label  htmlFor="database">Database:</label> 
            <input className = 'DataTypefields' ref="database"  type="text" name="database" placeholder="Database" /><br/>
            
            <label  htmlFor="port">Port:</label> 
            <input className = 'DataTypefields' ref="port" type="text" name="port" placeholder="Port" /><br/>
            
            <label  htmlFor="host">Host:</label> 
            <input className = 'DataTypefields' ref="host"  type="text" name="host" placeholder="Host" /><br/>

            <button className='DataLoginBtn'    value="Submit" >Submit</button>
        </form>
        </div>
        </Aux>
        );
        }
              
}


 

  export default Datasources;