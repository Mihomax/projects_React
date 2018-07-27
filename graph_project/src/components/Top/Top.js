import React from 'react';
import dash from './dash.svg';
import classes from './Top.css';
import {Link} from 'react-router-dom';
import conf from '../../images/cog.svg'

  
  const top = () => {

  let style = {display:'none'};
  let user = localStorage.getItem('user');

    if (user !== null) {
      style.display = '';
    }


const clearLocal = () => {
     localStorage.removeItem('user');
     window.location.reload();
    }
    return (
    
    <div className={classes.TopStyle}>
            <img className={classes.Left}alt= "Logo" src = {dash} height="45"/> 
            
            <div style ={style} className={classes.logout} onClick={clearLocal}>Log out</div>
            <Link to='/config'><img className={classes.images} src={conf} alt=""/></Link>
    </div>
    
     );
  }

  export default top;