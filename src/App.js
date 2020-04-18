import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingCreate from "./Components/LandingCreate/LandingCreate";
import CreateNote from "./Components/CreateNote/CreateNote";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingCreate />
      <CreateNote />
    </div>
  );
}

export default App;
