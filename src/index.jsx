import React from "react";
import ReactDOM from "react-dom";
import GameProvider from "./providers/game";

import App from "./components/App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
