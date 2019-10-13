import React from 'react';

const Person = ({name, number}) => <div>{name} {number}</div> 

const Persons = ({ persons, filter }) => {
  let filteredPersons = persons
  if (filter) {
    filteredPersons = persons.filter(person => new RegExp(filter, "i").test(person.name));
  }
  return filteredPersons.map(person => <Person key={person.name} name={person.name} number={person.number}/>)
}

export default Persons;
