# React Classes to Hooks

![Hook](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2F4abecc3bda7a596a142b27e0554fbeb1%2Ftumblr_oaued85JWK1vreqoxo6_r1_500.gif&f=1&nofb=1)

## Overview
In this lesson, we'll look at the differences between our old *class-based* components and the new fancy **Hooks** we just learned about! We'll see the difference between using the "useState" hook and how we used to use our class components.  We'll also build a simple ToDo List with Hooks!

## Objectives
- Learn the difference between `useState` and `class` components
- Implement `useState` to build a todolist

## Getting Started
- `Fork` and `Clone`
- `cd` into this folder
- `code .` and open in VSCode
- `npm i` to get our dependencies installed
- `npm start` to spin up our React App

![Bye](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.giphy.com%2Fmedia%2FSvOrq4OA7TQTC%2Fgiphy.gif&f=1&nofb=1)

## Classes vs. Hooks

All components in our app are currently written using a class based declaration (example: `class Todolist extends Component`).

Since 2019 React has encouraged developers to move towards a new declerative format for component definitions.

This development methodology allows for functional components, as opposed to our perviously used class based components.

For more on functional components/React Hooks, and the new associated React APIs: [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Utilizing hooks helps us a developers to speed up development by writing less code.

## Migrating to Hooks

Let's browse through the files provided, you'll notice most of the files are using the `class` declaration. `Class` components make us write a lot of unecessary boilerplate code just to get started, luckily for us the React team has been hard at work and gave us the `hooks` library allowing us to use only functional components to build our apps.

Open your `TodoList.js` file and you'll see the following:

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

![Peter](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F31.media.tumblr.com%2F4dd9097369563409ff79a8c1a3fbaed1%2Ftumblr_na7pik5KuV1qjzijvo6_400.gif&f=1&nofb=1)

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
- We're importing the `useState` hook from react *( It's built into the newer versions of the React library )*
- We're using some fancy code to gain access to two items, `tasks` and `manageTasks`. This is **[Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)**.
- We're setting both of these items equal to `useState` which is a function *(all hooks are functions)* and initializing it with an empty array.

By setting `useState` in this manner, we are stating:

```js
this.state = {
  tasks: []
}
```

The `useState` hook provides us with two things: 1) a variable to access our state and 2) a method to manipulate it. The `manageTasks` method is directly in control of the `tasks` state. `useState` accepts an argument that sets our initial state, in this case an empty array.

![Smile](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FiPuYCSSb2pspa%2F200.gif&f=1&nofb=1)

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

You'll notice we can directly access the `tasks` state via the `tasks` variable, thats the beauty of `hooks`: less code, more features! Be mindful, the downward data flow rule still applies, even with hooks!

![Bangarang](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F28e0a769ba0dd705c2e20444df10dff3%2Ftenor.gif%3Fitemid%3D3294382&f=1&nofb=1)

### You Do
- Refactor the `Tasks` component into a functional component. We won't need state.
- Refactor the `Input` component into a functional component. We won't need state here either.

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

The `manageTask` function translates to:

```js
this.setState({ tasks: [...this.state.tasks, 'My Task'] })
```

It accepts an argument of what we want to set a specific state to, the `manageTasks` is bound specifically to the `tasks` state and is the only function that can directly control it!

![Bravo](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F5d5b7c004e5cff775da309ec580876b3%2Ftumblr_phwi528fPb1vlacsto1_500.gifv&f=1&nofb=1)

## You Do

Implement the following features:
- Create a new task utilizing the `Input` component. Hint: You may need another `useState`. The value of the input should be stored in this state. The `handleChange` function is there to help, **USE IT**.
- I should be able to add the newly typed task to our `tasks` state, half of this has already been done for you. 😉
- I should be able to remove a task from the `tasks` state, `splice` may be useful here! More on [`Array.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Hint: You may want to add a button to each task as you `map` through it.

![Lost Boys](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fbraindeadradio.com%2Fwp-content%2Fuploads%2F2012%2F04%2Fhook.gif&f=1&nofb=1)

## Lesson Recap
In this lesson, we saw how by using functional components and utilizing `useState` we could do more with less code! We learned how functional components are where it's at in today's React World and utilizing hooks can be an effective tool in writing clean and efficient React code.

## Resources
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [The Steelhanded Stingray](https://youtu.be/7ikcZfXiFRQ)
