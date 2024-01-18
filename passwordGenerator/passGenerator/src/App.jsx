import { useState } from "react"

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false )
  const [charAllowed, setcharAllowed] = useState(false )
  const [Password, setPassword] = useState("")

  const passwordGenerator = () => {

  }
  return (
    <>
     <h1 className="text-4xl text-center text-white mt-10">Password Generator</h1>

      
    </>
  )
}

export default App
