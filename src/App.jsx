import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import CRM from "./pages/CRM.jsx";
import Economy from "./pages/Economy.jsx";
import Inventory from "./pages/Inventory.jsx";
import AISalesMap from "./pages/AISalesMap.jsx";
import TeamChat from "./pages/TeamChat.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <aside className="sidebar glass">
          <h2 className="logo">MergX V9</h2>
          <nav>
            <NavLink to="/" end>
              🏠 Dashboard
            </NavLink>
            <NavLink to="/crm">📋 CRM</NavLink>
            <NavLink to="/economy">💰 Ekonomi</NavLink>
            <NavLink to="/inventory">📦 Lager</NavLink>
            <NavLink to="/ai-map">🗺️ AI-Karta</NavLink>
            <NavLink to="/chat">💬 Teamchatt</NavLink>
          </nav>
        </aside>

        <main className="main-content glass">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/ai-map" element={<AISalesMap />} />
            <Route path="/chat" element={<TeamChat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
