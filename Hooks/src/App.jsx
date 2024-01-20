import React, { useState } from "react";


function App() {

  // var val = "Hello Ak"
  // const changeText = () => {
  //   val = "Hello Akash "
  //   console.log(val);
  // }

  const [myName, setMyName] = useState("Akash Rajendra Rathod ");

  const changeName = () => {
    setMyName("Sagar Rajendra Rathod")
    
  }

  return (
    <>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click Me To Change Text</button>
    </>
  );
}

export default App;
