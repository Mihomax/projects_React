import React from 'react';
import Top from '../Top/Top';
import Sidebar from '../Sidebar/Sidebar';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        
            <Top />
        
        <div className={classes.Layout}>
            <div className={classes.Sidebar}><Sidebar   /></div>
            <div className={classes.Main}>
                
                {props.children}
            </div>
        </div>
    </Aux>
);

export default layout;