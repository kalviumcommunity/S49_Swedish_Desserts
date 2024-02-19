import React from "react";
import "./App.css";
import EntityDummyComponent from "./Components/EntityDummyComponent";

function App() {
  return (
    <div>
      <div>
        <h1 className="title">Welcome to the website!</h1>
        <p>This website displays a list of good swedish desserts</p>
      </div>

      <div>
        <EntityDummyComponent />
      </div>
    </div>
  );
}

export default App;
