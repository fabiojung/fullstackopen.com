import React from 'react';

const Header = ({name}) => <h1>{name}</h1>

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

const Total = ({parts}) => {
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <div>
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

export default Course;