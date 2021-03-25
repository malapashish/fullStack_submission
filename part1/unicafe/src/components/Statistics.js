import React from 'react';
import "../App.css"

const Statistics = ({good , neutral , bad}) => {
    let total = good + neutral + bad;
    let average = (good * 1 + neutral * 0 + bad * -1) / total;
    let postiveFeedback = ( good / total ) * 100;
    return(
       <div className = "statistics">
       <p>Good {good}</p> 
       <p>Neutral {neutral}</p> 
       <p>Bad {bad}</p> 
       <p>All {total}</p> 
       <p>Average {average}</p> 
       <p>Postive Feedback {postiveFeedback} %</p> 
       </div>
    );
}

export default Statistics;