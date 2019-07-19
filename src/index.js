import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FruitPage from "./components/FruitPage";

function App() {
  return (
    <div className="App">
      <FruitPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
