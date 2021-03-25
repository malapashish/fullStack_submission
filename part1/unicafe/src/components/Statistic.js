import React from 'react';
import "../App.css"

const Statistic = ({text , value}) => {
    return( 
        <table> 
            <tbody>
                <tr>
                    <td className = "text">{text}</td> 
                    <td className = "value">{value}</td>   
                </tr>
            </tbody>
        </table>  
    )
}

export default Statistic;