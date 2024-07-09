import { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data.slice(0, 10))); // Limiting to 10 items for simplicity
  }, []);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <p key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.title}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;