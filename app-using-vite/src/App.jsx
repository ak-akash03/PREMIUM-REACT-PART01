function App() {
  let counter = 15;
  const addvalue = () =>{
    counter++;
    console.log(counter);
    
  }
  return (
    <>
      <h1>Hello React : </h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addvalue}
      >Add Value</button>
      <br /><br />  
      <button>Remove Value</button>
    </>
  );
}

export default App;
