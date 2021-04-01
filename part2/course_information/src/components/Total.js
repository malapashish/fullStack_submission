import React from 'react';

const Total = ({ parts }) =>{
    
    const sum = parts.map((part) => part.exercises)
                 .reduce((accum , curr) => accum + curr);

    return(
        <>
        <p>Number of exercises {sum}</p>
        </>
    )
};

export default Total;