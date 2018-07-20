import React from 'react';
import './Home.css';
import myvideo from '../../../images/me.mp4'



const home = () => (
<div >
        <h1>Keep it simple. Be result-oriented. Work hard.</h1><br /><br />
        <video   controls>
                <source src={myvideo} type="video/mp4" />
        </video>
</div>
);
export default home;