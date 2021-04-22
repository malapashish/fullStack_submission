import React from 'react';

const PersonForm = ({ submitHandler , nameValue , nameChangeHandler , personsList , numberValue , onNumberHandler  }) => {
    
    return(
        <>  
            <form onSubmit = {submitHandler}>
                <div>
                    Name : <input value = {nameValue} onChange = {nameChangeHandler} /> 
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