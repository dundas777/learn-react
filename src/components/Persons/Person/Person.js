import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...');

        return (
            <div className={classes.Person}>
                <p onClick={this.props.clicker}>I'm {this.props.name} and my age is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changer} value={this.props.name} />
            </div>
        );
    }
}

export default Person;