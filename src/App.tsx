import React from "react";
import "./App.css";
import { Button } from "./Components/index";
import { Input } from "./Components/index";

function handleChange(event: any) {
  console.log("event", event);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          label="Button"
          background="#f1f1f1"
          hoverColor="green"
          width="200px"
          handleButtonClick={handleChange}
        />
        <Input
          height="50px"
          width="200px"
          label="Test"
          placeholder="Placeholder"
          type="text"
          onChange={handleChange}
        />
      </header>
    </div>
  );
}

export default App;
