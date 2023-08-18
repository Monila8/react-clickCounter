import React, { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }
const handleReset = () => {
    setCount(0);
}
  return (
    <div className="App">
      <h1>Click counter</h1>
      <p style={{color: "black"}}>Counter: {count}</p>
      <button
        style={{ marginRight: "10px" }}
        onClick={handleIncrease}>
        Increase
      </button>
      <button onClick={handleReset}>Refresh</button>
    </div>
  )
}

export default App

// useState: A hook that allows adding state to functional components.
// Increments the value of the counter using setCount(count + 1).
// Sets the value of the counter to 0 using setCount(0).
// The return method renders the elements on the screen. It displays the current value of the counter.
