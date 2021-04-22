import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const PersonList = ({list , deleteHandler}) => {
    return(
        <ul style = {{listStyle : 'none'}}>
            {
                list.map(e =>
                <li key = {uuidv4()}>
                    {e.name} {e.number}
                    <button onClick = {() => deleteHandler(e.id , e.name)} >Delete</button>
                </li>   
                )}        
        </ul>
    )
}

export default PersonList;