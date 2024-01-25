import React, { useState } from "react";

function New01() {
  let BioData = [
    {
      no: 1,
      name: "Akash",
      age: 20,
    },
    {
      no: 2,
      name: "Sagar",
      age: 20,
    },
    // {
    //       no:3,
    //       name:"Ak",
    //       age:20,
    // }
  ];

  const clearArray = () => {
    setMyBio([]);
  };


  const removeElement = (id) => {
     const newArray = BioData.filter((el) => {
            return el.no !== id
     })
  }

  const [myBio, setMyBio] = useState(BioData);

  return (
    <>
      {myBio.map((El) => {
        return (
          <h1>
            No: {El.no} & Name: {El.name} & Age: {El.age} 
            <button onClick={() => {removeElement(El.no)}}>Remove</button>
          </h1>
        );
      })}

      <button onClick={clearArray}>Clear</button>
    </>
  );
}

export default New01;
