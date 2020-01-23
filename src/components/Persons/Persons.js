import React from 'react';
import Person from './Person/Person';

const persons = (props) => {

    console.log('[Persons.js] rendering...');

    return props.persons.map((person,index) => {
        return (
            <Person 
                clicker={() => props.clicker(index)}
                name={person.name} 
                age={person.age}
                changer={(event) => props.changer(event, person.id)}
            />
        );
    });
};

export default persons;