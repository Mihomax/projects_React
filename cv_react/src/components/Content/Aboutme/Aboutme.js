import React from 'react';
import './Aboutme.css';

const aboutme = () => {
        
        const labelStyle = {fontWeight:"lighter", color:"#9e9e9e"}

        return (
<div >
<h1 className = "lastline">Little bit about me !</h1>
        <div className = "main final">
        <h3 className = "lastline"><span style={labelStyle}>Who am I ?</ span> <br /> 
        I am a guy who is passionate about web development (and technology itself) <br />
        and who is right now open to job offers or freelance projects in order to give life to ambitious ideas ! </h3>

        <h3 className = "lastline"><span style={labelStyle}>Who am I as a person ? </ span> <br /> 
        I think my previous colleagues or supervisors would describe me as organised, fast learner, analytical 
        and reliable team player. </h3>

        <h3 className = "lastline"><span style={labelStyle}>Who am I out of work ? </ span> <br /> 
        I like to do sport - squash, volleyball, table tennis(ninja level), <br /> 
        Also I like tasty food (by the way I cook !) and to try new things ! </h3>

        <h3 className = "lastline"><span style={labelStyle}>What about the languages ? </ span> <br /> 
        I would say I am a polyglot ! English, French, Russian, Armenian, JavaScript, PHP, SQL, etc...</h3>
        
                
        <br /> 
        </div> 

</div>
);}
export default aboutme;

