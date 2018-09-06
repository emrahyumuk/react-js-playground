import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }],
    otherState: 'other state value',
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    //WRONG: this.state.persons[0].name = 'mRA';
    this.setState({
      persons: [{ name: newName, age: 28 }, { name: 'Manu', age: 29 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Manu', age: 29 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}
          />
          <Person name="Manu" age="29">
            My Hobbies:
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
