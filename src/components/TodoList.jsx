import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {

  const [tasks, manageTasks] = useState([
    'go on a run',
    'make food',
    'clean up',
    'work'
  ])

  const [task, changeTasks] = useState('')


  const addTask =() => {
    let myNewList = [...tasks, task]
    manageTasks(myNewList)
    console.log(tasks)
  }

  const handleChange = (event) => {
    changeTasks(event.currentTarget.value)
  }

  const removeTask = (index) => {
    let taskList = [...tasks]
    taskList.splice(index, 1)
    manageTasks(taskList)
  }
  
  return (
    <div className="list">
      <Input handleChange={ handleChange } addTask={ addTask }/>
      <Tasks tasks={ tasks } removeTask={ removeTask }/>
    </div>
  )
}

export default TodoList