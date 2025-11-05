import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiCommandCenter.css";

export default function AiCommandCenter() {
  const { events, emitEvent } = useAiEvents();
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // 🧩 Simulerade moduler och status
    const mockModules = [
      { name: "Threat AI Classifier", route: "/threat-ai", status: "Active", last: "Just now", load: 32 },
      { name: "Auto-Response Engine", route: "/auto-response", status: "Active", last: "1 min ago", load: 45 },
      { name: "Security Center", route: "/security", status: "Monitoring", last: "2 min ago", load: 27 },
      { name: "Audit Analytics", route: "/audit", status: "Idle", last: "5 min ago", load: 12 },
      { name: "Cloud Sync Core", route: "/cloud", status: "Paused", last: "8 min ago", load: 0 },
    ];
    setModules(mockModules);
  }, []);

  const handleCommand = (m, type) => {
    const msg =
      type === "start"
        ? `${m.name} startades manuellt av Admin.`
        : `${m.name} pausades av Admin.`;
    emitEvent({
      module: "CommandCenter",
      type: type === "start" ? "info" : "warning",
      message: msg,
    });
  };

  return (
    <div className="ai-cmd glass-panel">
      <header className="cmd-header">
        <h1>AI Command Center</h1>
        <p>Central övervakning och styrning av AI-moduler</p>
      </header>

      <div className="cmd-grid">
        {modules.map((m, i) => (
          <div key={i} className={`cmd-card status-${m.status.toLowerCase()}`}>
            <div className="card-top">
              <h3>{m.name}</h3>
              <span className="status-tag">{m.status}</span>
            </div>

            <div className="card-body">
              <p><strong>Senast aktiv:</strong> {m.last}</p>
              <p><strong>Systembelastning:</strong> {m.load}%</p>
              <div className="load-bar">
                <div className="load-fill" style={{ width: `${m.load}%` }} />
              </div>
            </div>

            <div className="card-actions">
              <button onClick={() => handleCommand(m, "start")}>Starta</button>
              <button onClick={() => handleCommand(m, "stop")}>Stoppa</button>
            </div>
          </div>
        ))}
      </div>

      {/* System-sammanställning */}
      <section className="cmd-summary">
        <h2>Systemsammanfattning</h2>
        <ul>
          <li>Totala moduler: {modules.length}</li>
          <li>Totala event: {events.length}</li>
          <li>Aktiva processer: {modules.filter(m=>m.status!=="Paused").length}</li>
        </ul>
      </section>

      <footer className="cmd-footnote">
        🧩 Nästa version (V10.8) kopplas till MergX Ops Cloud för realtids-kontroll via WebSocket och CI/CD-status.
      </footer>
    </div>
  );
}
