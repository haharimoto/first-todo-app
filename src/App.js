import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("")
  const [toDos, setToDos] = useState([])
  const [status, setStatus] = useState("all")
  const [filtered, setFiltered] = useState([])

  function handleStatus(event) {
    // set status accordingly
    setStatus(event.target.value)
  }

  function handleFilter() {
    // filter out each toDos by completed(true/false) vs status(option values), using switch statement
    // 1. if completed=true, then filter out the false ones
    // 2. if completed=false, then filter out the true ones
    // 3. default, show all
    switch (status) {
      case 'completed':
        setFiltered(toDos.filter(el => el.completed === true))
        break
      case 'incomplete':
        setFiltered(toDos.filter(el => el.completed === false))
        break
      default:
        setFiltered(toDos)
        break
    }
  }

  useEffect(() => {
    handleFilter()
  }, [toDos, status])

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
        handleStatus={handleStatus}
      />
      <TodoList
        toDos={toDos}
        setToDos={setToDos}
        filtered={filtered}
      />
    </div>
  );
}

export default App;
