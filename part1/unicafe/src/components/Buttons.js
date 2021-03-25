import React from 'react';

const Buttons = ({handlerFunction , text}) =>{
    return(
    <button onClick={handlerFunction}>
        {text}
    </button>
    )
}

export default Buttons;