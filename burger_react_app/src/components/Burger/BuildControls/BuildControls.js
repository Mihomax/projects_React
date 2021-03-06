import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = ( props ) => (

    <div className={classes.BuildControls}>
    {controls.map(each => (
        <BuildControl 
        key={each.label} 
        label= {each.label}
        type={each.type}
        added={() => props.ingredientAdded(each.type)} />
    ))}
    </div>
);

export default buildControls;