import './App.css'
import { useState } from 'react';
import ToDoHero from './components/ToDoHero'
import Header from './components/Header'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
