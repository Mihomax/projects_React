import React from 'react';
import './Left.css';
import me from '../../images/me.jpg'




const left = ( props ) => {

const labelStyle = {fontWeight:"lighter", color:"#9e9e9e"}
        return (
        <div className = "left">
        
                <div className="wrapper">
                        <div className="up"></div>
                        <div className="down"></div>
                        <div className="photoDiv"><img className="myphoto"alt="MyPhoto"src ={me} /></div>

                        <div className = "contact">
                <p className="tel"><span style={labelStyle}>Tel: </span>438-825-1410  </p> 
                <p className="email"><span style={labelStyle}>E-mail: </span>h.hambardzumyan@gmail.com </p> 
                <p className="linkedin"> <span style={labelStyle}>LinkedIn:</span><br /><a href = "https://www.linkedin.com/in/hhambardzumyan/">linkedin.com/in/hhambardzumyan/</a></p><br />
                
                <button id="positiveBtn" onClick = {props.button}>Positive button</button>
           </div>
                </div>
                
           
        </div>);
}
export default left;