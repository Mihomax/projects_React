import React from 'react';
import howden from '../../../images/howden.png';
import ahuntsic from '../../../images/ahuntsic.png';

const projects = () => (

<div>
<h1>Projects</h1>
<h3><span className ="date">Current</span></h3>

<div className = "main"><br />

<h4 className = "lastline">- Contribution to the open-source project (login, back-end configuration forms).
User can register, log in, create custom graphs/dashboards and
        afterwards show the data on charts by retrieving from any kind of back-end.<br /><br/>
        - Online dynamic - responsive CV (this project :) ).</h4> <br /><br /><br />

<h5>Technologies implemented : <span>React JS, HTML5, CSS3</span><br />
Link to the project : <span><a href="https://github.com/Mihomax/projects_React">https://github.com/Mihomax/projects_React</a></span></h5><br />
</div>

<div className = "main"><br />
<img className="logos" src={howden}alt='Howden' />
<h3 className = "lastline">Howden Simsmart<span className ="date">2018</span></h3>
<h4 className = "lastline">- Development of web version of  ’fan management system’ software for the mining sector. 
        User controls all the fan parameters (speed, mode, frequency etc) online.</h4> <br />
<h5>Technologies implemented : <br /><span>HTML5, CSS3, Materialize CSS, JS, JSON, jQuery, NPM</span><br />
Link to the project : <span>N/A</span></h5><br />

<br /> 
</div>  

<div className = "main final"><br />
<img className="logos" src={ahuntsic} alt='Ahuntsic College' />
<h3 className = "lastline">Ahuntsic College<span className ="date">2017-2018</span></h3>
<h4>- Development and design of retro video games portal. Users can register, connect, upload and </h4>
<h4>download games, participate in discussions by writing messages. All the operations are controlled by admin.</h4> 
<h4 className = "lastline">- Development of online video/movie library.  User can connect and buy movies, as well as filter by category, 
        rate etc..</h4> <br />
<h5>Technologies implemented : <br /><span>PHP, MySQL, Apache server, MVC, HTML5, CSS3, Bootstrap, JavaScript, JSON, jQuery</span><br />
Link to the project : <span><a href="https://github.com/Mihomax/myProjects">https://github.com/Mihomax/myProjects</a></span></h5><br />

<br /> 
</div> 

        
</div>
);
export default projects;

