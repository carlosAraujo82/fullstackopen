import React from 'react'

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part1/>
        <Part2/>
        <Part3/>
      </div>
    )
  }

  const Part1 = () => {
    return (
      <p>{part1} {exercises1}</p>
    )
  }

  const Part2 = () => {
    return (
      <p>{part2} {exercises2}</p>
    )
  }

  const Part3 = () => {
    return (
      <p>{part3} {exercises3}</p>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises: {props.ex1+props.ex2+props.ex3}.</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App