import React from 'react';
import './Home.css';
import myvideo from '../../../images/me.mp4';



const home = () => (
<div >
<h2>Hi, I am Hovhannes. Welcome to my interactive profile !</h2><br />
        <video   controls>
                <source src={myvideo} type="video/mp4" />
        </video>
</div>
);
export default home;