import React from 'react';
import './Left.css';
import me from '../../images/me.jpg'




const left = ( props ) => {

const labelStyle = {fontWeight:"lighter"}
        return (
        <div className = "left">
        
                <img alt="MyPhoto"src ={me} />
                
           <div className = "contact">
           <h4>Hi, I am Hovhannes</h4>
                <p className="tel"><span style={labelStyle}>Tel: </span>438-825-1410  </p> 
                <p className="email"><span style={labelStyle}>E-mail: </span><br />h.hambardzumyan@gmail.com </p> 
                <p> <span style={labelStyle}>LinkedIn:</span><br />linkedin.com/in/hhambardzumyan/</p><br />
                <p className="languages"> <span style={labelStyle}>Languages spoken:</span><br />English, French, Russian, Armenian</p><br />
                <button id="positiveBtn" onClick = {props.button}>Positive button</button>
           </div>
        </div>);
}
export default left;