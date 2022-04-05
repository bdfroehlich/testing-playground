import React from "react"
import "./App.css"
import { useState } from "react"

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === "green" ? "blue" : "green"
  const [inputDisabled, setInputDisabled] = useState(false)
  const [message, setMessage] = useState('Button is enabled')
  const newMessage = message === "Button is enabled" ? "Button is disabled" : "Button is enabled"

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <p role="paragraph">{message}</p>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change button color to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked) }
        onClick={() => setMessage(newMessage)}
      />
    </div>
  )
}

export default App

