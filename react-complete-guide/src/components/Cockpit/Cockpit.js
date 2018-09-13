import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  let asignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 0) {
    asignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    asignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1 className={asignedClasses.join(' ')}>{props.appTitle}</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
