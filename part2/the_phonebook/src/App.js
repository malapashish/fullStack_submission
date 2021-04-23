import React, { useState , useEffect} from 'react';

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
    setNewName(event.target.value);
  };
    
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }


  const deleteHandler = (id , name) => {
      const question = window.confirm(`Delete ${name} ?`)
      if(question){
        contactServices
                        .deleteContact(id)
                        .then(( newNotes ) => {
                          setPersons(persons.filter((person) => person.id !== id));
                        })
                        .catch((e) => console.error(e))
      }
  }

  const filterNameList = (event) => {
    setFilterName(event.target.value); 
  }

  const filterList = persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))


  const onContactSubmit = (event) => {
    event.preventDefault();
    if(persons.some( person => person.name === newName )){
      const question = window.confirm(`${newName} already added to phonebook, replace old number with new number`) 
      if(question){
        let targetId = persons.filter( person => person.name === newName).map( person => person.id);
        const newContactObject = {
          name : newName ,
          number : newNumber
        }
          contactServices
                          .updateContact( targetId , newContactObject)
                          .then((response) => {
                            contactServices
                                            .getContacts()
                                            .then((response) => {
                                              setPersons(response);
                                              setNewName('');
                                              setNewNumber('');
                                            })
                          })
    }else{
      setNewName('');
      setNewNumber('');
    }          
    }
    else if(!persons.some( person => person.name === newName )){ 
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
      <PersonList list = {filterList} deleteHandler = {deleteHandler} />
    </div>
  )
}


export default App