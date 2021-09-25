import React from 'react';
import ReactDOM from 'react-dom';

const reduceSumFunction = (previous, current) => {
   return previous + current.exercises
}

const Total = ({ course }) => {  
  let sum = course.parts.reduce(reduceSumFunction,0)
  return(<p><b>Total of {sum} exercises.</b></p>) 
}

const ContentOfCourse = ({parts}) => {
  return (<div>{parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}</div>)
}

const Content = ({courses}) => {
  return(<div>{courses.map(course => <div key={course.id}><h2>{course.name}</h2><ContentOfCourse parts={course.parts}/><Total course={course}/></div>)}</div>)
}

const Curriculum = (props) => {
  return (
  <div>
    <h1>Web Development Curriculum</h1>
    <Content courses={props.courses}/>
  </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Curriculum courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))
