import React, { useState } from 'react'

import Button from "./components/Button" 
import Display from "./components/Display"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
    
  const [selected, setSelected] = useState(0)

  const [votes , setVotes] = useState({
      0: 0, 
      1: 0, 
      2: 0, 
      3: 0, 
      4: 0, 
      5: 0
  })

  const onClickHandler = () =>{
      setSelected(Math.floor(Math.random() * anecdotes.length));
  } 

  const onClickVote = () => { 
      setVotes({
        ...votes,
        [selected] : votes[selected] + 1 
      })
  }
  
  console.log(votes);

  return (
    <div>
      <Display text = {anecdotes[selected]} /> 
      <Display text = {votes[selected]} />
      <Button onClickHandler={onClickVote} text = "Vote" /> 
      <Button onClickHandler={onClickHandler} text = "Next Anecdote" />
    </div>
  )
}

export default App