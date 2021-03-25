import React from 'react';
import Statistic from './Statistic';

const Statistics = ({good , neutral , bad}) => {
    let total = good + neutral + bad;
    let average = ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(1);
    let postiveFeedback = `${(( good / total ) * 100).toFixed(1)}%`;

    if(total === 0){
        return(
            <div className = "statistics">
                No Feedback Given
            </div>
        )
    }


    return( 
        <>
            <Statistic text = "Good" value = {good} />   
            <Statistic text = "Neutral" value = {neutral} /> 
            <Statistic text = "Bad" value = {bad} /> 
            <Statistic text = "All" value = {total} /> 
            <Statistic text = "Average" value = {average} />  
            <Statistic text = "Postive" value = {postiveFeedback} />   
        </>
    );
}

export default Statistics;