import React from 'react';
import Top from '../Top/Top';
import Sidebar from '../Sidebar/Sidebar';
import Aux from '../../hoc/Aux';
import  '../../styles/mystyle.css';

const layout = ( props ) => (
    <Aux>
        
            <Top />
        
        <div className='Layout'>
            <div className='Sidebar'><Sidebar   /></div>
            <div >
               
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;