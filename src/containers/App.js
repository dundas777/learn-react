import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Questions from '../components/Questions/Questions';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'ghjhj', name: 'Max', age: 22 },
      { id: 'jhhaj', name: 'Manu', age: 26 },
      { id: 'hhsdg', name: 'Mary', age: 44 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
    questions: [
      { id: 'ghjhj1', question: 'What is the difference between Map and Blah?', type: 'multichoice', answers: [
        { id: 'ans001', answerText: 'Map does this', correct: true },
        { id: 'ans002', answerText: 'Blah does that', correct: false },
        { id: 'ans003', answerText: 'Something else', correct: false }
      ], },
      { id: 'jhhaj2', question: 'What does blah do?', type: 'multichoice', answers: [
        { id: 'ans004', answerText: 'Blah does this', correct: true },
        { id: 'ans005', answerText: 'Blah doesnt do that', correct: false },
        { id: 'ans006', answerText: 'Something else', correct: false }
      ], },
      { id: 'hhsdg3', question: 'What is Selenium Grid?', type: 'multichoice', answers: [
        { id: 'ans007', answerText: 'Grid does this', correct: true },
        { id: 'ans008', answerText: 'Grid does that', correct: false }
      ], }
    ],
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentDidMount() {
  //   console.log('[App.js] componentDidMount');
  // }

  // componentWillMount() {
  //   console.log('[App.js] componntWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({showPersons: !doesShow});
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                   clicker={this.deletePersonHandler}
                   changer={this.nameChangeHandler} 
                   isAuthenticated={this.state.authenticated}
                   />;
    }

    const questions = <Questions questions={this.state.questions} />

    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        { this.state.showCockpit ? (
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}
              clicker={this.togglePersonsHandler}
              login={this.loginHandler}
            />
        ) : null }
        {persons}
        {questions}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
