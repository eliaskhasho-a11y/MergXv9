import React, { useState, useEffect } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiSessionManager.css";

export default function AiSessionManager() {
  const { emitEvent } = useAiEvents();
  const [sessions, setSessions] = useState([]);
  const [selected, setSelected] = useState(null);

  // 📡 Simulerad dataladdning
  useEffect(() => {
    const mockSessions = [
      {
        id: "sess-1",
        user: "elias@mergx.com",
        role: "Admin",
        ip: "192.168.0.101",
        lastActive: "21:42:05",
        tokenStatus: "valid",
      },
      {
        id: "sess-2",
        user: "sofia@mergx.com",
        role: "Developer",
        ip: "192.168.0.210",
        lastActive: "21:39:12",
        tokenStatus: "valid",
      },
      {
        id: "sess-3",
        user: "jonas@mergx.com",
        role: "Viewer",
        ip: "192.168.0.166",
        lastActive: "21:35:40",
        tokenStatus: "expired",
      },
    ];
    setSessions(mockSessions);
    emitEvent({
      module: "Session",
      type: "info",
      message: "Session Manager laddade aktiva användare.",
    });
  }, []);

  const handleSelect = (session) => setSelected(session);

  const handleLogout = (session) => {
    setSessions((prev) => prev.filter((s) => s.id !== session.id));
    emitEvent({
      module: "Session",
      type: "alert",
      message: `${session.user} utloggad av admin.`,
    });
    setSelected(null);
  };

  return (
    <div className="ai-session glass-panel">
      <header className="session-header">
        <h1>AI Session Manager</h1>
        <p>Hantera och övervaka alla aktiva användarsessioner</p>
      </header>

      <section className="session-list">
        <h2>Aktiva sessioner</h2>
        <div className="session-table">
          {sessions.map((s) => (
            <div
              key={s.id}
              className={`session-row ${
                selected && selected.id === s.id ? "active" : ""
              }`}
              onClick={() => handleSelect(s)}
            >
              <span className="user">{s.user}</span>
              <span className={`role role-${s.role.toLowerCase()}`}>
                {s.role}
              </span>
              <span className="ip">{s.ip}</span>
              <span
                className={`token token-${s.tokenStatus}`}
              >{s.tokenStatus}</span>
              <span className="time">{s.lastActive}</span>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <section className="session-details">
          <h2>Detaljerad information</h2>
          <p>
            <strong>Användare:</strong> {selected.user}
          </p>
          <p>
            <strong>Roll:</strong>{" "}
            <span className={`role role-${selected.role.toLowerCase()}`}>
              {selected.role}
            </span>
          </p>
          <p>
            <strong>IP-adress:</strong> {selected.ip}
          </p>
          <p>
            <strong>Token:</strong>{" "}
            <span
              className={`token token-${selected.tokenStatus}`}
            >
              {selected.tokenStatus}
            </span>
          </p>
          <p>
            <strong>Senast aktiv:</strong> {selected.lastActive}
          </p>

          <button className="logout-btn" onClick={() => handleLogout(selected)}>
            🔒 Logga ut användare
          </button>
        </section>
      )}

      <footer className="session-footnote">
        🧩 Nästa version (V10.3) kopplar detta till Auth Gateway i realtid med
        token-revocation-API.
      </footer>
    </div>
  );
}
