import React from 'react'

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
const reducerSumFunction = (previous, current) => {
    return previous + current.exercises
};
  
const Total = ({ course }) => {  
    let sum = course.parts.reduce(reducerSumFunction,0)
    return(<p><b>Total of {sum} exercises.</b></p>)
}

const Content = ({course}) => {
    return (<div>{course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}</div>)
}

const Course = (props) => {
    return (
    <div>
      <Header course = {props.course}/>
      <Content course = {props.course}/>
      <Total course = {props.course}/>
    </div>
    )
  }

export default Course