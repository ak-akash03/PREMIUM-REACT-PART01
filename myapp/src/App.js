import "./App.css";
import Navbar from "./componants/navbar";
import TextForm from "./componants/TextForm";
function App() {
  return (
    <>
      {/* <Navbar logo = "Hello Ak" />  */}
      {/* <Navbar logo = "theproteam" />  */}
      {/* <Navbar logo = "ProTeam" />  */}

      <Navbar logo="ProTeam" port="Portfolio" />
      <div className="container my-5">
        <TextForm heading="Type The Text : Below " />
      </div>
    </>
  );
}

export default App;
