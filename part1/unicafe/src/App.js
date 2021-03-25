import React, { useState } from 'react'

import Buttons from "./components/Buttons";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
    const handleGoodClick = () =>{
        setGood(good + 1);
    }

    const handleNeutralClick = () =>{
        setNeutral(neutral + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
    }

  return (
    <div>
        <h1>Give Feedback</h1>
            <Buttons handlerFunction = {handleGoodClick} text = "Good" />
            <Buttons handlerFunction = {handleNeutralClick} text = "Neutral" />
            <Buttons handlerFunction = {handleBadClick} text = "Bad" />
        <h1>Statistics</h1>
        <Statistics text = "Good" count = {good} />
        <Statistics text = "Neutral" count = {neutral} />
        <Statistics text = "Bad" count = {bad} />
    </div>
  )
}

export default App