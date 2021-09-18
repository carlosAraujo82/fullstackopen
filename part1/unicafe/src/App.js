import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [sum, setSum] = useState(0);

  const setGoodPlusOne = () => {
    setGood(good+1)
    setAll(all+1)
    setPositive(positive+1)
    setSum(sum+1)
  }

  const setNeutralPlusOne = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }

  const setBadPlusOne = () => {
    setBad(bad+1)
    setAll(all+1)
    setSum(sum-1)
  }

  const Average = () => {
    if (all === 0)
    {
      return (<p>Average: 0</p>)
    }
    return (<p>Average: {sum/all}</p>)
  }

  const Percentage = () => {
    if (positive === 0)
    {
      return (<p>Positive: 0 %</p>)
    }
    return (<p>Positive: {(positive/all)*100} %</p>)
  }

  const Statistics = (props) => {
    return(<div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <Average/>
      <Percentage/>
    </div>)
  }

  return (
    <div>
		<h1>Give Feedback</h1>
		<p>
			<button onClick={setGoodPlusOne}>good</button>
			<button onClick={setNeutralPlusOne}>neutral</button>
			<button onClick={setBadPlusOne}>bad</button>
		</p>
    <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App
