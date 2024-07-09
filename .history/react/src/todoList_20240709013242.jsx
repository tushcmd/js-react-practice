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

  const data = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
    { id: 4, name: 'Item 4', price: 40 },
  ];
  
  // Filter: Get items with price > 20
  const expensiveItems = data.filter(item => item.price > 20);
  console.log('Expensive items:', expensiveItems);
  
  // Map: Get an array of item names
  const itemNames = data.map(item => item.name);
  console.log('Item names:', itemNames);
  
  // Reduce: Calculate total price
  const totalPrice = data.reduce((sum, item) => sum + item.price, 0);
  console.log('Total price:', totalPrice);

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