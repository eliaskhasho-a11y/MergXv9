import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// Global baseline styles (temat kommer i Del 3)
import "../theme/glass.css";

function RootApp() {
  return <RouterProvider router={router} />;
}

const container = document.getElementById("root");
createRoot(container).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
