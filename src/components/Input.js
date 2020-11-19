import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label>Input Task: </label>
        <input type="text" name="task" />
        <button>Add</button>
      </div>
    )
  }
}

export default Input
