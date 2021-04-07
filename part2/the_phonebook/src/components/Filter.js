import React from 'react';

const Filter = ({ inputValue , onChangeHandler }) => {
    return(
        <>
       Filter Shown with <input value = {inputValue} onChange = {onChangeHandler} />
       </>
    )
};

export default Filter;