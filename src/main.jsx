import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 🎨 Global CSS och font
import "./index.css";

/*
  MergX V9 — Main Entry
  ----------------------
  • Initierar React root
  • BrowserRouter för all routing
  • Laddar hela App-komponenten
  • Förberedd för framtida Context Providers (Auth, Theme, m.fl.)
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
