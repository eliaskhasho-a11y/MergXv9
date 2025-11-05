import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// 🎯 Huvudsidor
import EconomyDashboard from "./pages/EconomyDashboard";
import AiMaintenanceScheduler from "./pages/AiMaintenanceScheduler";
import AiSecurityCenter from "./pages/AiSecurityCenter";
import EnergyEfficiencyDashboard from "./pages/EnergyEfficiencyDashboard";
import AdminSettings from "./pages/AdminSettings";
import UserDirectory from "./pages/UserDirectory";

// 🧠 AI Event-system
import { AiEventProvider } from "./components/ai/AiEventBus";

// 💎 Stilmallar
import "./App.css";

/*
  MergX V9 — Huvudstruktur
  -------------------------
  Binder ihop alla moduler och AI-infrastruktur.
  • Router-layout (vänster sidomeny + main-content)
  • AI EventBus-integration
  • Responsivt glas-UI
*/

export default function App() {
  return (
    <AiEventProvider>
      <Router>
        <div className="app-shell">
          <aside className="sidebar">
            <h1 className="logo">MergX<span> V9</span></h1>
            <nav>
              <Link to="/dashboard">🏠 Dashboard</Link>
              <Link to="/economy">💹 Ekonomi</Link>
              <Link to="/maintenance">🛠 Maintenance</Link>
              <Link to="/energy">⚡ Energi</Link>
              <Link to="/security">🔐 Security</Link>
              <Link to="/users">👥 Användare</Link>
              <Link to="/admin-settings">⚙️ Admin Settings</Link>
            </nav>
          </aside>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<EconomyDashboard />} />
              <Route path="/economy" element={<EconomyDashboard />} />
              <Route path="/maintenance" element={<AiMaintenanceScheduler />} />
              <Route path="/energy" element={<EnergyEfficiencyDashboard />} />
              <Route path="/security" element={<AiSecurityCenter />} />
              <Route path="/users" element={<UserDirectory />} />
              <Route path="/admin-settings" element={<AdminSettings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AiEventProvider>
  );
}

// ⛔ Fallback-vy
function NotFound() {
  return (
    <div className="notfound glass-panel">
      <h2>404 – Sidan hittades inte</h2>
      <p>Den angivna länken finns inte i MergX V9.</p>
      <Link to="/dashboard" className="backbtn">← Tillbaka till Dashboard</Link>
    </div>
  );
}
