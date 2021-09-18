import React from 'react'

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part1 p1={props.allParts.parts[0]}/>
        <Part2 p2={props.allParts.parts[1]}/>
        <Part3 p3={props.allParts.parts[2]}/>
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
      <p>Number of exercises: {props.allParts.parts[0].exercises+props.allParts.parts[1].exercises+props.allParts.parts[2].exercises}!</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content allParts={course}/>
      <Total allParts={course}/>
    </div>
  )
}

export default App