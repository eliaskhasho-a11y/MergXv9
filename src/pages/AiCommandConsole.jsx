import React, { useState, useEffect } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiCommandConsole.css";

export default function AiCommandConsole() {
  const { events, emitEvent } = useAiEvents();
  const [modules, setModules] = useState([
    { name: "Ekonomi", status: "Aktiv", load: 42 },
    { name: "Lager", status: "Aktiv", load: 37 },
    { name: "CRM", status: "Standby", load: 10 },
    { name: "Projekt", status: "Aktiv", load: 55 },
  ]);
  const [history, setHistory] = useState([]);

  // Uppdatera händelsehistorik live
  useEffect(() => {
    if (events.length > 0) {
      const newest = events[0];
      setHistory((prev) => [newest, ...prev].slice(0, 15));
    }
  }, [events]);

  const handleCommand = (cmd) => {
    const msg = `AI-kommando kördes: ${cmd}`;
    emitEvent({ module: "System", type: "info", message: msg });
  };

  return (
    <div className="ai-console glass-panel">
      <header className="console-header">
        <h1>AI Central Command Console</h1>
        <p>Övervakning · Kontroll · Transparens</p>
      </header>

      {/* Modulstatus */}
      <section className="module-status">
        <h2>Systemstatus</h2>
        <div className="module-grid">
          {modules.map((m, i) => (
            <div key={i} className={`module-box ${m.status.toLowerCase()}`}>
              <h3>{m.name}</h3>
              <p>Status: <strong>{m.status}</strong></p>
              <div className="loadbar">
                <div
                  className="loadfill"
                  style={{ width: `${m.load}%` }}
                ></div>
              </div>
              <small>Belastning: {m.load}%</small>
            </div>
          ))}
        </div>
      </section>

      {/* Realtidshändelser */}
      <section className="event-stream">
        <h2>Senaste AI-händelser</h2>
        <ul>
          {history.map((h) => (
            <li key={h.id} className={`event type-${h.type}`}>
              <span className="time">{h.time}</span>
              <span className="module">{h.module}</span>
              <span className="msg">{h.message}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Kommandoknappar */}
      <section className="console-controls">
        <h2>Snabbkommandon</h2>
        <div className="btn-group">
          <button onClick={() => handleCommand("Synka alla moduler")}>🔄 Synka</button>
          <button onClick={() => handleCommand("Rensa event-loggar")}>🧹 Rensa Logg</button>
          <button onClick={() => handleCommand("Pausa AI-aktivitet")}>⏸️ Pausa AI</button>
          <button onClick={() => handleCommand("Starta AI-analys")}>▶️ Starta Analys</button>
        </div>
      </section>

      <footer className="console-footnote">
        🧠 Nästa version inkluderar AI Diagnostics & Live Performance Monitor.
      </footer>
    </div>
  );
}
