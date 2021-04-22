import React, { useState , useEffect} from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

import contactServices from './components/services/contact'; 

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState(''); 
  const [ filterName , setFilterName ] = useState('');
  const [ newNumber , setNewNumber ] = useState([]); 


  useEffect(() => { 
    contactServices
                    .getContacts()
                    .then(notes => {
                      setPersons(notes);
                    })
  } , []);

  const handleNameChange = (event) => {
    persons.forEach((person) => {
      if(person.name === event.target.value){
        alert(`${event.target.value} already exists`);
        setNewName('');
      }else{
        setNewName(event.target.value);
      }
    })
    
  };
    
  const handleNumberChange = (event) => {
    persons.forEach((person) => {
      if(person.number === event.target.value){
        alert(`Number ${event.target.value} already exists`);
        setNewNumber('');
      }else{
        setNewNumber(event.target.value);
      }
    })
  }


  const deleteHandler = (id , name) => {
      const question = window.confirm(`Delete ${name} ?`)
      if(question){
      axios.delete(`http://localhost:3001/persons/${id}`)
        .then((response) => {
            setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => console.log(error))
      }
  }

  const filterNameList = (event) => {
    setFilterName(event.target.value); 
  }

  const filterList = persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))


  const onContactSubmit = (event) => {
    if(newName  === ""){
      alert('Please enter a name');
      event.preventDefault(); 
      // setNewName('');
    }else if(newNumber === ""){
      alert('Please enter a number');
      event.preventDefault();
      // setNewNumber(''); 
    }else{
    event.preventDefault(); 
    const contactObject = {
        name : newName,
        number : newNumber
    }  
      contactServices 
                      .createContact(contactObject)
                      .then((newObject) => {
                        setPersons(persons.concat(newObject));
                        setNewName('');
                        setNewNumber('');
                      })
    }
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
      {
        
      }
      <PersonList list = {filterList} deleteHandler = {deleteHandler} />
    </div>
  )
}


export default App