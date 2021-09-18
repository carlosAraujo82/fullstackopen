import React from 'react'

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part1 p1={props.allParts[0]}/>
        <Part2 p2={props.allParts[1]}/>
        <Part3 p3={props.allParts[2]}/>
      </div>
    )
  }

  const Part1 = (props) => {
    return (
      <p>{props.p1.name} {props.p1.exercises}</p>
    )
  }

  const Part2 = (props) => {
    return (
      <p>{props.p2.name} {props.p2.exercises}</p>
    )
  }

  const Part3 = (props) => {
    return (
      <p>{props.p3.name} {props.p3.exercises}</p>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises: {props.allParts[0].exercises+props.allParts[1].exercises+props.allParts[2].exercises}.</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content allParts={parts}/>
      <Total allParts={parts}/>
    </div>
  )
}

export default App
