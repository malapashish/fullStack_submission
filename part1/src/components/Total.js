import React from 'react';

const Total = (props) => {
    let total = props.exercises1 + props.exercises2 + props.exercises3;
    return(
        <p>
            Number of exercises {total}
        </p>
    );
};

export default Total;