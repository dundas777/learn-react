import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        console.log('Person.js] componentDidMount');
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render () {
        console.log('[Person.js] rendering...');

        // <div className={classes.Person}>
        // </div>

        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>
                    }
                </AuthContext.Consumer>
                <p key="item1" onClick={this.props.clicker}>I'm {this.props.name} and my age is {this.props.age} years old</p>
                <p key="item2">{this.props.children}</p>
                <input 
                    key="item3" 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changer} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    clicker: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changer: PropTypes.func
};

export default withClass(Person, classes.Person);