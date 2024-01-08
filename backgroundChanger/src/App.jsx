import { useState } from 'react'
import BackChanger from './backgroundChanger'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <BackChanger />

    </>
  )
}

export default App
