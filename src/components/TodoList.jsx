import React from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  
  return (
    <div className="list">
      <Input />
      <Tasks tasks={[]} />
    </div>
  )
}

export default TodoList