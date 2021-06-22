import React from 'react'

const Tasks = () => {

  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  )
}

export default Tasks
