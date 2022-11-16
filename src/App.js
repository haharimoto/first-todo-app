import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("")
  const [toDos, setToDos] = useState([])

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDos={toDos}
        setToDos={setToDos}
      />
      <TodoList
        toDos={toDos}
        setToDos={setToDos}
      />
    </div>
  );
}

export default App;
