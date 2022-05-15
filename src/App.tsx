import React from "react";
import "./App.css";
import { Button } from "./Components/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          label="Hellooo"
          background="#f1f1f1"
          hoverColor="green"
          width="200px"
        />
      </header>
    </div>
  );
}

export default App;
