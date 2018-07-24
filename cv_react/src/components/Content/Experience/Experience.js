import React from 'react';
import './Experience.css';
import howden from '../../../images/howden.png';
import invue from '../../../images/invue.jpg';
import ujan from '../../../images/ujan.png';

const experience = () => {
       
        
        return(
<div >
        <h1>Welcome to my job experience page !</h1><br /><br /><br />
        
        <div className = "main">
        <img className="logos" src={howden}alt='Howden' />
        <h3 className = "lastline">Junior Web Developer (Internship) <span className ="date">05/2018 - 07/2018</span><br /> Howden Simsmart - Brossard, QC</h3><br/>
        <h4>- Create effective strategies in order to integrate existing software into web </h4> 
        <h4>- Develop a single page, responsive web application, responding to client needs</h4>
        <h4 className = "lastline">- Design the web application UI using jQuery, JavaScript, CSS, Material Design and Bootstrap</h4> 
        <br /> <br /> <br /> 
        </div>
        <div className = "main">
        <img className="logos" src={invue} alt='Invue' />
        <h3 className = "lastline">QA Tester <span className ="date">01/2018 - 06/2018</span><br />  InVue - Montreal, QC<br /></h3>
        <h4> - Collaborate with developers to create effective strategies and test plans </h4> 
        <h4>- Develop and execute automated tests with Selenium JS</h4>
        <h4>- Analyze data in log files and in Grafana (analytics and monitoring platform)</h4> 
        <h4>- Report bugs and errors to development teams and help troubleshoot issues</h4>
        <h4 className = "lastline">- Conduct post-release/ post-implementation testing</h4>
        <br /> 
        </div>    
        <div className = "main final">
        <img className="logos" src={ujan} alt='Ujan' />
        <h3 className = "lastline">        Web Content Integrator <span className ="date">2016- 2017</span><br />  Ujan Projects - Yerevan, Armenia<br /></h3>
        <h4>- Maintain the web platform by adding, updating and deleting content</h4> 
        <h4>- Improve user interface design and optimize usability </h4>
        <h4>- Handle cross-browser issues with regards to building pages</h4> 
        <h4>- Develop new features using HTML, CSS and JavaScript </h4>
        <h4 className = "lastline">- Conduct functionality and UI tests</h4>
        <br /> 
        </div>  
<hr className="hr3"/>
        <div className = "main final"><br />
<h1 className = "lastline">Other experiences</h1><br />
<h3>Also I have 7 years of experience in sales/marketing in international companies,
        which make my profile even better I think, <br />however, I did not find interesting to detail them here,<br /> 
         but you can find detailed description of them in my LinkedIn profile at <a href = "https://www.linkedin.com/in/hhambardzumyan/">linkedin.com/in/hhambardzumyan/</a></h3>
</div>  
         
</div>
);
}
export default experience;

