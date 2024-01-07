import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;
  const addvalue = () =>{
    if(counter >= 20){

    }
    else{
      counter = counter + 1
    setCounter(counter)
    console.log(counter);
    }
    
  }
  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1
    setCounter(counter)
    console.log(counter);
    }
    else{

    }
  }
  return (
    <>
      <h1>Hello React : </h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addvalue}
      >Add Value</button>
      <br /><br />  
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
