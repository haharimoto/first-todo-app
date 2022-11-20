import React from 'react'


function Form(props) {

  function handleChange(event) {
    console.log(event.target.value)
    // const {name, value} = event.target
    // props.setInputText(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }))
    props.setInputText(event.target.value)
  }

  function handleSubmit(event) {
    console.log('added')
    event.preventDefault()
    props.setToDos(prevState => {
      return [...prevState, {
        id: Math.random() * 1000,
        text: props.inputText,
        completed: false
      }]
    })
    props.setInputText("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='form--input'
          type='text'
          placeholder=''
          onChange={handleChange}
          name='input'
          value={props.inputText}
          // this makes the inputText change accordingly in the UI
          autoComplete='off'
        />
        <button className='form--button'>
          Add
        </button>
        <select className='form--select' name="select" onChange={props.handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </form>
    </div>
  )
}

export default Form


/* <form className = 'todo-form'>
<input
  type='text'
  placeholder='Add a todo'
  value={input}
  name='text'
  className='todo-input'
/>
<button className='todo-button'>Add todo</button>
</form> */
