import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  let asignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 0) {
    asignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    asignedClasses.push(classes.bold);
  }
  return (
    <Aux>
      <h1 className={asignedClasses.join(' ')}>{props.appTitle}</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default cockpit;
