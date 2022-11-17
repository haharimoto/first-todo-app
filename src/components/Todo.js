import React from 'react'

function Todo(props) {
  // complete function
  // delete function

  function handleDelete() {
    props.setToDos(props.toDos.filter((el) => el.id !== props.toDo.id))
    console.log('deleted')
  }

  function handleChange() {
    props.setToDos(props.toDos.map((el) => {
      if(el.id === props.toDo.id) {
        return {
          ...el,
          completed: !el.completed
        }
      }
      return el
    }))
    console.log('changed')
  }

  return (
    <div className='todo'>
      <li className='todo--item'>
        <b>{props.text}</b>--{props.completed ? "completed" : "incomplete"}
      </li>
      <button className='todo--complete' onClick={handleChange}>✔</button>
      <button className='todo--delete' onClick={handleDelete}>✖</button>
    </div>
  )
}

export default Todo
