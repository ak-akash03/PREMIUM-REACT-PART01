import React, { useState } from "react";

function Counter() {
  let [count, setCounter] = useState(15);

  function addOne() {
    count = setCounter(count + 1);
  }
  function subOne() {
    count = setCounter(count - 1);
  }

  return (
    <>
      <h2>Counting : {count}</h2>
      <button onClick={addOne}>Increse by one</button> <br />
      <br />
      <button onClick={subOne}>Dicrese by one</button>
    </>
  );
}

export default Counter;
