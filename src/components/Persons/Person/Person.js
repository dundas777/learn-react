import React from 'react';
import classes from './Person.css';

const person = (props) => {
    
    console.log('[Person.js] rendering...');

    return (
        <div className={classes.Person}>
            <p onClick={props.clicker}>I'm {props.name} and my age is {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changer} value={props.name} />
        </div>
    )
};

export default person;