import React, { useState } from "react";
import "./Navigation.css";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Package,
  Settings,
  Workflow,
  FolderKanban,
  Bot
} from "lucide-react";

export default function Navigation() {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <>
      {/* SIDOPANEL */}
      <nav className="sidebar glass-panel">
        <h2 className="logo">MergX</h2>
        <ul className="nav-list">
          <li onClick={() => togglePanel("dashboard")}>
            <LayoutDashboard size={18} /> Dashboard
          </li>
          <li onClick={() => togglePanel("crm")}>
            <Users size={18} /> CRM
          </li>
          <li onClick={() => togglePanel("economy")}>
            <BarChart2 size={18} /> Ekonomi
          </li>
          <li onClick={() => togglePanel("workspace")}>
            <Workflow size={18} /> Workspace
          </li>
          <li onClick={() => togglePanel("project")}>
            <FolderKanban size={18} /> Project
          </li>
          <li onClick={() => togglePanel("inventory")}>
            <Package size={18} /> Lager
          </li>
          <li onClick={() => togglePanel("settings")}>
            <Settings size={18} /> Inställningar
          </li>
        </ul>
      </nav>

      {/* EXPANDERANDE PANELER */}
      {activePanel && (
        <div className="side-panel glass-float">
          <div className="panel-header">
            <h3>{activePanel.charAt(0).toUpperCase() + activePanel.slice(1)}</h3>
            <button onClick={() => setActivePanel(null)}>×</button>
          </div>

          <div className="panel-content">
            {activePanel === "dashboard" && (
              <p>Översikt av KPI, ekonomi, AI-förslag och aktiviteter.</p>
            )}
            {activePanel === "crm" && (
              <ul>
                <li>Kundregister</li>
                <li>Offert & Fakturering</li>
                <li>AI-förslag på kundkontakt</li>
              </ul>
            )}
            {activePanel === "economy" && (
              <ul>
                <li>Ekonomisk översikt</li>
                <li>AI-budgetanalys</li>
                <li>Transaktionslogg</li>
              </ul>
            )}
            {activePanel === "workspace" && (
              <ul>
                <li>🧍‍♂️ My Workspace – personliga anteckningar</li>
                <li>👥 Team Workspace – delade projekt och dokument</li>
              </ul>
            )}
            {activePanel === "project" && (
              <ul>
                <li>Trello-liknande projekttavla</li>
                <li>Skapa & dela projekt</li>
                <li>Tilldela uppgifter till teammedlemmar</li>
              </ul>
            )}
            {activePanel === "inventory" && (
              <ul>
                <li>Lagerstatus</li>
                <li>Produktspårning</li>
                <li>AI-förslag för inköp</li>
              </ul>
            )}
            {activePanel === "settings" && (
              <ul>
                <li>Temaväxling</li>
                <li>Rollhantering</li>
                <li>Systemloggar</li>
              </ul>
            )}
          </div>
        </div>
      )}

      {/* AI-COACH-IKON */}
      <button className="ai-coach-btn glass-panel">
        <Bot size={20} />
      </button>
    </>
  );
}
