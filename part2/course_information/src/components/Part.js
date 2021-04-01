import React from 'react';

const Part = ({ parts }) => {
    return(
        <>
        {parts.map((part) => (<p>
            {part.name} {part.exercises}
        </p>
        ))}
        </>
    )
};

export default Part;