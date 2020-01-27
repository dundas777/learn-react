import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    });

    let btnClass = '';
    const assignedClasses = [];
    if (props.showPerson) {
        btnClass = [classes.Red];
    }
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This works!!!</p>
            <button ref={toggleButtonRef} className={btnClass} onClick={props.clicker}>
                Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);
