import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Docs!</p>
        <button>Button</button>
      </header>
    </div>
  );
}

export default App;
