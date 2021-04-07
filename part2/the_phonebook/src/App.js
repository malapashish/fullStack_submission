import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber , setNewNumber ] = useState([]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    persons.forEach((person) => {
      if(person.name === event.target.value){
        alert(`${event.target.value} is already added to phonebook`)
        setNewName('');
      }
    }) 
  };
 
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const onContactSubmit = (event) => {  
    event.preventDefault();
    const contactObject = {
        name : newName,
        number : newNumber
    }
    setPersons(persons.concat(contactObject));
    setNewName('');
    setNewNumber('');
  };
 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onContactSubmit}>
        <div>
          Name: <input value = {newName} onChange = {handleNameChange} /> 
        </div>
        <div>
          Number : <input value = {newNumber} onChange = {handleNumberChange}  />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {
              persons.map(person => 
                <li key = {uuidv4()}>
                    {person.name} {person.number}
                </li>
              )
          }
      </ul> 
    </div>
  )
}

export default App