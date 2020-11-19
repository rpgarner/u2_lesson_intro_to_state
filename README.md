# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Classes to Hooks

## Objective

- Build a todo list with react hooks
- Learn the difference between `useState` and `class` components
- Implement `useState` to build a todolist

## Getting Started

- Fork and Clone
- cd into this folder
- open this project in your code editor of choice
- npm install
- npm start

## Classes vs. Hooks

All components in our app are currently written using a class based declaration (example: `class Todolist extends Component`).

Since 2019 React has encouraged developers to move towards a new declerative format for component definitions.

This development methodology allows for functional componets, as opposed to our perviously used class based components.

For more on functional components/React Hooks, and the new associated React APIs: [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Utilizing hooks helps us a developers to speed up development by writing less code.

## Migrating To Hooks

Let's browse through the files provided, you'll notice most of the files are using the `class` declaration. `Class` components make us write a lot of unecessary boilerplate code just to get started, luckily for us the React team has been hard at work and gave us the `hooks` library allowing us to use only functional components to build our apps.

Open your `TodoList.js` file you'll see the following:

```jsx
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
```

In the code snippet provided you'll see the usual `class` component.
Let's refactor this to use `hooks` instead.

Start by commenting out all of the code above:

```jsx
// import React, { Component } from 'react'
// import Tasks from './Tasks'
// import Input from './Input'

// class Todolist extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tasks: []
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <Input />
//         <Tasks tasks={this.state.tasks} />
//       </div>
//     )
//   }
// }

// export default Todolist
```

Let's add the following:

```jsx
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
```

Now you may be wondering how we can hold state here...

Let me introduce you to the `useState` hook!

The `useState` hook is a declaritive way to manage state, each `useState` is in charge of managing it's own state! Let's see this in action. In order to utilize `useState`, we need to import it from react.

Modify your `React` import statement in your `TodoList.js` to the following:

```jsx
import React, { useState } from 'React'
```

Next let's set up some state:

```jsx
import React, { useState } from 'React'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([])
  return (
    <div className="list">
      <Input />
      <Tasks tasks={[]} />
    </div>
  )
}

export default TodoList
```

Let's break this down:

- We're importing the `useState` hook from react, _( It's built into the newer versions of the React library )_

- We're using some fancy code to gain access to two items, `tasks` and `manageTasks`, this is what's known as `Array Destructing`. More on that **[HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)**

- We're setting both of these items equal to `useState` which is a function, _all hooks are functions..._ And initializing it with an empty array.

By setting `useState` in this manner, we are stating:

```js
this.state = {
  tasks: []
}
```

The `useState` hook provides us with two things, a variable to access our state and a method to manipulate it. The `manageTasks` method is directly in control of the `tasks` state. `useState` accepts an argument that sets our initial state, in this case an empty array.

Let's make one small modification... Let's add some items to our initial state and pass these `tasks` to our `Tasks` component:

```js
import React, { useState } from 'React'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([
    'Wow Much Do',
    'Much Do Wow',
    'Walk the doge',
    'Pet the doge'
  ])

  return (
    <div className="list">
      <Input />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default TodoList
```

You'll notice we can directly access the `tasks` state via the `tasks` variable, thats the beauty of `hooks`, less code more features! Be mindful, the downward data flow rule still applies, even with hooks!

---

### You Do **10mins**

- Refactor the `Tasks` component into a functional component. We won't need state.

- Refactor the `Input` component into a functional component. We won't need state.

Once completed, check your work. Do not move forward until instructed.

---

## Setting State

Now that our components are all set up properly, let's add some items to our `tasks` state.
Start by creating two functions in your `TodoList` component:

```js
import React, { useState } from 'React'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([
    'Wow Much Do',
    'Much Do Wow',
    'Walk the doge',
    'Pet the doge'
  ])

  const addTask = () => {}

  const handleChange = (event) => {}

  return (
    <div className="list">
      <Input />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default TodoList
```

Let's pass these functions down to the correct components:

- `handleChange` should go to the `Input` component.
- `addTask` should go to the `Input` component.

```jsx
import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  const [tasks, manageTasks] = useState([
    'Wow Much Do',
    'Much Do Wow',
    'Walk the doge',
    'Pet the doge'
  ])

  const addTask = () => {}

  const handleChange = (event) => {}

  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default TodoList
```

Let's run a test with our `addTask` function, add in the following:

`addTask`:

```js
const addTask = () => {
  let myNewList = [...tasks, 'My Task']
  manageTasks(myNewList)
  console.log(tasks)
}
```

In your `Input.js` wire the `addTask` function to the button provided:

```jsx
import React from 'react'
const Input = (props) => {
  return (
    <div className="tasks">
      <label>Input Task: </label>
      <input type="text" name="task" />
      <button onClick={props.addTask}>Add</button>
    </div>
  )
}

export default Input
```

Try clicking the add button in your browser!

You should see `My Task` added to the list!

The `manageTask` translates to:

```js
this.setState({ tasks: [...this.state.tasks, 'My Task'] })
```

It accepts an argument of what we want to set a specific state to, the `manageTasks` is bound specifically to the `tasks` state and is the only function that can directly control it!

## You Do

Implement the following features:

- Create a new task utilizing the `Input` component. Hint: You may need another `useState`. The value of the input should be stored in this state. The `handleChange` function is there to help, **USE IT**.

- I should be able to add the newly typed task to our `tasks` state, half of this has already been done for you. 😉

- I should be able to remove a task from the `tasks` state, `splice` may be useful here! More on [`Array.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Hint: You may want to add a button to each task as you `map` through it.
