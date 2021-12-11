import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '../../../packages/ui'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Docs!</p>
        <Button />
      </header>
    </div>
  )
}

export default App
