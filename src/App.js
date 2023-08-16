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
