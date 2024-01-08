import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../componants/card";

function App() {
  const [count, setCount] = useState(0);
  const myarr = [1,2,3]
  // const userName = "ak.akashrathod"
  return <>
      <h1 className="bg-green-400 text-black p-3 rounded-xl">Tailwind Test</h1>
      <br />
      <br />

      <Card userName = "ak.akashrahtod"/>
  
  </>;
}

export default App;
