import Home from "./Home";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    saveLocalTodos();
  }, [todos])

  useEffect(() => {
    getLocalTodos();
  }, [])

  const saveLocalTodos = () => {
    if (todos.length > 0){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      // let localData = localStorage.getItem('todos', JSON.stringify(todos));
      // console.log(localData)
      let localData = JSON.parse(localStorage.getItem("todos"))
      setTodos(localData)
      // console.log(localData)
    }

  };



  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to Kofman's Todo List</h2><br />
        <Home inputText = {inputText} todos={todos} setTodos = {setTodos} setInputText = {setInputText}></Home>
        <TodoList todos={todos} setTodos = {setTodos}></TodoList>
      </header>
    </div>
  );
}

export default App;
