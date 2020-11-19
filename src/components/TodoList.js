import React, { Component } from 'react'
import Tasks from './Tasks'
import Input from './Input'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  render() {
    return (
      <div className="list">
        <Input />
        <Tasks tasks={this.state.tasks} />
      </div>
    )
  }
}

export default Todolist
