import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Sidor
import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Ekonomi from "./pages/Ekonomi";
import Lager from "./pages/Lager";
import AIMap from "./pages/AIMap";
import TeamChat from "./pages/TeamChat";

// CSS
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">MergX V9</h2>
        <nav>
          <ul>
            <li><Link to="/">🏠 Dashboard</Link></li>
            <li><Link to="/crm">📊 CRM</Link></li>
            <li><Link to="/ekonomi">💰 Ekonomi</Link></li>
            <li><Link to="/lager">📦 Lager</Link></li>
            <li><Link to="/ai-karta">🧭 AI-Karta</Link></li>
            <li><Link to="/teamchatt">💬 Teamchatt</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/ekonomi" element={<Ekonomi />} />
          <Route path="/lager" element={<Lager />} />
          <Route path="/ai-karta" element={<AIMap />} />
          <Route path="/teamchatt" element={<TeamChat />} />
        </Routes>
      </main>
    </div>
  );
}
