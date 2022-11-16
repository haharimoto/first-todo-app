import React from 'react'

function Todo(props) {
  // complete function
  // delete function

  function handleDelete() {
    props.setToDos(props.toDos.filter((el) => el.id !== props.toDo.id))
  }

  return (
    <div className='todo'>
      <li className='todo--item'>
        {props.text}--{props.completed ? "completed" : "incomplete"}
      </li>
      <button className='todo--complete'>✔</button>
      <button className='todo--delete' onClick={handleDelete}>✖</button>
    </div>
  )
}

export default Todo
