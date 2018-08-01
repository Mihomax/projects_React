import React, {Component} from 'react';
import  '../../../styles/mystyle.css';
import Aux from '../../../hoc/Aux';
import axios from 'axios';
import Table from './Table/Table';


  
class Dashboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboards : null,
      test:'test'
 
  };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event) {
    event.preventDefault();
    let dash = {column:this.refs.column.value, rows:this.refs.rows.value}
  axios.post('https://graph-bfdd8.firebaseio.com/dashboards.json', dash);
  
  }

  
  componentDidMount () {
    axios.get('https://graph-bfdd8.firebaseio.com/dashboards.json')
    .then(response => {
      
      let myObj = response.data;
let result = Object.keys(myObj).map((key) => {
  return [ myObj[key]];
});
this.setState({dashboard:result});
      console.log(result);
    });
    
  }

  render() {
    
    return (
      <Aux>
      
      <div className='AddDashDiv'>
        <h3 className='Title'>Add dashboard</h3>
         <form  onSubmit={this.handleSubmit}  >
            
            <input  className = 'DashTypefields' ref="column"  type="text" name="column" placeholder="Column" />
            <input className = 'DashTypefields'  ref="rows" type="number" name="rows" placeholder="Rows" />

            <input className='LoginBtn'  type="submit"  id = "loginButton"   value="Submit" />
        </form>
      </div>
      <div className='ResultsDiv'>
        <h3 className='Title'>Here are the results</h3><br/>
        <Table />
      </div>
        </Aux>
        );
        }
              
}


 

  export default Dashboards;