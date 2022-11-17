import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return (
    <div className='todo-list'>
      <ul className='todo-list--ul'>
        <u>TODO LIST</u>
        {/* display all todo's
        if completed, only display completed
        if incomplete, only display incomplete */}

        {props.toDos.map(toDo => (
          <Todo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            toDo={toDo}
            toDos={props.toDos}
            setToDos={props.setToDos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
