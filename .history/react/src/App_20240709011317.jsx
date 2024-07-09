import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import UserList from './map'
import ExpensiveCalculation from './hooks'
import TodoList from './todoList'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        
        <a href="https://tushdev.co" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Muturi David</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <UserList />
        <ExpensiveCalculation />
        <TodoList />
      </div>
      
    </>
  )
}

export default App
