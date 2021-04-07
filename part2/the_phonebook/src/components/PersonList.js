import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const PersonList = ({list}) => {
    return(
        <ul style = {{listStyle : 'none'}}>
            {
                list.map(e =>
                <li key = {uuidv4()}>
                    {e.name} {e.number}
                </li>   
                )}        
        </ul>
    )
}

export default PersonList;