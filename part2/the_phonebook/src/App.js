import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handlePhonebookChange = (event) =>{
      console.log(event.target.value);
      setNewName(event.target.value);
  }

  const onContactSubmit = (event) => {
      event.preventDefault();
      const contactObject = {
            name : newName
      }
      setPersons(persons.concat(contactObject))
      setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onContactSubmit}>
        <div>
          name: <input value = {newName} onChange = {handlePhonebookChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {
              persons.map(person => 
                <li key = {uuidv4()}>
                    {person.name}
                </li>
              )
          }
      </ul>
    </div>
  )
}

export default App