import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AiEventProvider } from "./components/ai/AiEventBus";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AiEventProvider>
      <App />
    </AiEventProvider>
  </React.StrictMode>
);
