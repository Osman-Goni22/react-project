import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
    
  // function  addNum() {
  //   const newCount = count+1;
  //   setCount(newCount);
  // }

  return (
    <>

  <p>Counter: {count}</p>

    <button onClick={()=>setCount(count+1)}>Add</button>
     
      <h3>Vite + React</h3>

      <Users></Users>
     
    </>
  )
}

export default App
