import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0);

  const setGoodPlusOne = () => {
    setGood(good+1)
    setAll(all+1)
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

  // const Average = () => {
  //   if (all === 0)
  //   {
  //     return (<p>Average: 0</p>)
  //   }
  //   return (<p>Average: {sum/all}</p>)
  // }

  // const Percentage = () => {
  //   if (positive === 0)
  //   {
  //     return (<p>Positive: 0 %</p>)
  //   }
  //   return (<p>Positive: {(positive/all)*100} %</p>)
  // }

  const Statistics = (props) => {
    if(all === 0)
    {
      return (<p>No feedback given.</p>)
    }
    return(<div>
      <h1>Statistics</h1>
      <StatisticLine text="Good: " value={props.good}/>
      <StatisticLine text="Neutral: " value={props.neutral}/>
      <StatisticLine text="Bad: " value={props.bad}/>
      <StatisticLine text="All: " value={props.all}/>
      <StatisticLine text="Average: " value={props.sum/props.all}/>
      <StatisticLine text="Positive: " value={(props.good/props.all)*100} signal="%"/>
    </div>)
  }

  const Button = (props) => {
    return (<button onClick={props.onClick}>{props.text}</button>)
  }

  const StatisticLine = (props) => {
    return (<p>{props.text} {props.value} {props.signal}</p>)
  }

  return (
    <div>
		<h1>Give Feedback</h1>
		<p>
      <Button onClick={setGoodPlusOne} text="good"/>
      <Button onClick={setNeutralPlusOne} text="neutral"/>
      <Button onClick={setBadPlusOne} text="bad"/>
		</p>
    <Statistics good={good} neutral={neutral} bad={bad} sum={sum} all={all}/>
    </div>
  )
}

export default App
