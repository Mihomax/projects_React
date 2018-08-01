import React from 'react';
import dash from './dash.svg';
import  '../../styles/mystyle.css';



  
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
    
    <div className='TopStyle'>
            <img className='Left' alt= "Logo" src = {dash} height="45"/> 
            
            <div style ={style} className='logout' onClick={clearLocal}>Log out</div>
            
    </div>
    
     );
  }

  export default top;