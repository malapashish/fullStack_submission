import React from 'react';

const PersonForm = ({ submitHandler , nameValue , nameChangeHandler , personsList , numberValue , onNumberHandler , nameValueHandle }) => {
    
    return(
        <>  
            <form onSubmit = {submitHandler}>
                <div>
                    Name : <input value = {nameValue} onChange = {nameChangeHandler} />
                    {
                        personsList.forEach((person) => {
                        if(person.name === nameValue){
                            alert(`${nameValue} is already added to phonebook`)
                            nameValueHandle('');
                        }
                        }) 
                     }
                </div>
                <div>
                    Number : <input value = {numberValue} onChange = {onNumberHandler} />
                </div>
                <div>
                    <button type = "submit">Add</button>
                </div>
            </form>
        </>
    )

}

export default PersonForm;