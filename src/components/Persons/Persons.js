import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);

    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return (
            this.props.persons.map((person,index) => {
                    return (
                        <Person 
                            clicker={() => this.props.clicker(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changer={(event) => this.props.changer(event, person.id)}
                        />
                );
            })
        );
    }
}

export default Persons;