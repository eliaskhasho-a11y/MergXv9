import React, { useState, useEffect } from "react";
import "./AiActionEngine.css";

export default function AiActionEngine() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    // Simulerade AI-genererade uppgifter (mock-data)
    const generated = [
      {
        id: 1,
        time: "2025-11-05 09:50",
        module: "Ekonomi",
        task: "Granska ökade kostnader för februari",
        priority: "Hög",
        status: "Pågående",
        assigned: "Maria (Ekonomi)",
      },
      {
        id: 2,
        time: "2025-11-05 09:53",
        module: "Lager",
        task: "Kontrollera svinn > 3 % i centrallager",
        priority: "Medium",
        status: "Planerad",
        assigned: "Oskar (Lager)",
      },
      {
        id: 3,
        time: "2025-11-05 09:56",
        module: "CRM",
        task: "Kontakta kunder med NKI < 85 %",
        priority: "Hög",
        status: "Ej påbörjad",
        assigned: "Emma (CRM)",
      },
    ];
    setActions(generated);
  }, []);

  const handleStatusChange = (id) => {
    setActions((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status:
                a.status === "Ej påbörjad"
                  ? "Pågående"
                  : a.status === "Pågående"
                  ? "Klar"
                  : "Klar",
            }
          : a
      )
    );
  };

  return (
    <div className="ai-action glass-panel">
      <h2>AI Action Engine</h2>
      <p className="engine-desc">
        Automatiskt genererade uppgifter baserat på AI-analys av systemdata.
      </p>

      <div className="action-list">
        {actions.map((a) => (
          <div key={a.id} className={`action-item priority-${a.priority.toLowerCase()}`}>
            <div className="action-header">
              <span className="action-time">{a.time}</span>
              <span className="action-module">{a.module}</span>
            </div>
            <p className="action-task">{a.task}</p>

            <div className="action-meta">
              <span className="assigned">👤 {a.assigned}</span>
              <span className="priority">⚡ {a.priority}</span>
            </div>

            <button
              className={`status-btn status-${a.status.toLowerCase().replace(" ", "")}`}
              onClick={() => handleStatusChange(a.id)}
            >
              {a.status}
            </button>
          </div>
        ))}
      </div>

      <small className="engine-footnote">
        ⚙️ Nästa version kopplar mot MergX AI-Scheduler & Notification Hub.
      </small>
    </div>
  );
}
