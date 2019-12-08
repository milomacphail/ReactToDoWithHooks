import React, { useState } from 'react';
import './App.css';
import { placeholder } from '@babel/types';
import { setPriority } from 'os';

function Todo({todo, index, completeTodo, deleteTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} 
  className="todo">
  {todo.text}
    <div>
      <button onClick ={() => completeTodo(index)}>Complete</button>
      <button onClick ={() => deleteTodo(index)}>Delete</button>
    </div>
  </div>
}


function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value)return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder = "Add to-do..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App(){

  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Have brunch at Rogue Island',
      isCompleted: false
    },

    {
      text: 'Learn about React again',
      isCompleted: false
    }
]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

const deleteTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}

return (
  <div className ="app">
    <div className="toDoList">
      {todos.map((todo, index) =>(
        <Todo 
        key={index} 
        index={index} 
        todo={todo} 
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
        />
    ))}
    <TodoForm addTodo={addTodo} />
    </div>
  </div>
)

}

export default App;