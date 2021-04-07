import React, { useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

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
  const [ filterStatus , setFilterStatus] = useState(false); 

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
 

  const filterNameList = (event) => {
    setFilterName(event.target.value);
    setFilterStatus(false);
  }

  const filterList = filterStatus ? persons : persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))

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
      Filter Shown with <input value = {filterName} onChange = {filterNameList} />
      <h2>Add a new</h2>
      <form onSubmit={onContactSubmit}>
        <div>
          Name: <input value = {newName} onChange = {handleNameChange} />
          {
            persons.forEach((person) => {
              if(person.name === newName){
                alert(`${newName} is already added to phonebook`)
                setNewName('');
              }
            }) 
          }
        </div>
        <div>
          Number : <input value = {newNumber} onChange = {handleNumberChange}  />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2> 
      <ul style = {{listStyle : "none"}}>
          {
            filterList.map(list => 
                <li key = {uuidv4()}>
                    {list.name} {list.number}
                 </li>
            )
          }
      </ul> 
    </div>
  )
}


export default App