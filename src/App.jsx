import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardOverview } from "./pages/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#0f0f10",
          color: "white",
          height: "100vh",
          fontFamily: "Inter, sans-serif",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "22px", marginBottom: "20px" }}>
          MergX V9 – Stabil testversion
        </h1>

        <Routes>
          <Route path="/" element={<DashboardOverview />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
