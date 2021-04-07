import React, { useState} from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ filterName , setFilterName ] = useState('');
  const [ newNumber , setNewNumber ] = useState([]); 

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
 

  const filterNameList = (event) => {
    setFilterName(event.target.value); 
  }

  const filterList = persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))

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
      <Filter inputValue = {filterName} onChangeHandler = {filterNameList} />
      <h2>Add a new</h2> 
      <PersonForm submitHandler = {onContactSubmit} 
                  nameValue = {newName}
                  nameValueHandler = {setNewName}
                  nameChangeHandler = {handleNameChange}
                  personsList = {persons}
                  numberValue = {newNumber}
                  onNumberHandler = {handleNumberChange}
      />
      <h2>Numbers</h2>  
      <PersonList list = {filterList} />
    </div>
  )
}


export default App