import React from 'react';
import dash from './dash.svg';

const topStyle = {
    width:'100%',
    height:'50px',
    backgroundColor: '#CCCCCC'
  };
  
  const top = () => {
    return <div style={topStyle}><img src = {dash} height="45"/></div>;
  }

  export default top;