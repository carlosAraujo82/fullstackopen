import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  let sum = 0;
  
  for (let index = 0; index < course.parts.length; index++) {
    sum += course.parts[index].exercises;
  }

  return(<p><b>Total of {sum} exercises.</b></p>); 
}

// const Part = (props) => {
//   return (
//     <p>
//       {props.part.name} {props.part.exercises}
//     </p>    
//   )
// }

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
