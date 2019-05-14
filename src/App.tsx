import React, { useState } from "react";

import "./App.css";
import { Button } from "./components/Button";
import { MovableRectApp } from "./components/MovableRectApp";

const App: React.FC = () => {
  const [ isOpen, setOpenState ] = useState(false);
  return (<div className="App">
    <div className={`container ${isOpen ? "open" : "closed"}`}>
      <Button onClick={() => setOpenState(true)}></Button>
      <MovableRectApp hide={() => setOpenState(false)}></MovableRectApp>
    </div>
  </div>);
};

export default App;
