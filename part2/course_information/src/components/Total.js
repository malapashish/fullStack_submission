import React from 'react';

const Total = ({ parts }) =>{
    
    const sum = parts.map((part) => part.exercises)
                 .reduce((accum , curr) => accum + curr);

    return(
        <>
        <p><b>total of {sum} exercises</b></p>
        </>
    )
};

export default Total;