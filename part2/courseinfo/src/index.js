import React from 'react'
import ReactDOM from 'react-dom'

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => {
  const allParts = () => parts.map( part => 
    <Part 
      key={part.id} 
      name={part.name} 
      exercises={part.exercises} 
    /> 
  )

  return (
    <>
      {allParts()}
    </>
  )
}

const Header = ({name}) => <h1>{name}</h1>

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}/>
      <Content parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
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

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))