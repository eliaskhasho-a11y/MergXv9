import React, { useState, useEffect } from "react";
import "./AiAuditFeed.css";

export default function AiAuditFeed() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Simulerade AI-händelser — i framtiden skrivs dessa av verklig analysmotor
    const mockLogs = [
      {
        time: "2025-11-05 09:42",
        module: "Ekonomi",
        message: "AI-analys genomförd – KPI-mål för Ekonomi uppnådda.",
        level: "info",
      },
      {
        time: "2025-11-05 09:45",
        module: "Lager",
        message: "AI upptäckte lageravvikelse på +3 % över målnivå.",
        level: "warning",
      },
      {
        time: "2025-11-05 09:48",
        module: "CRM",
        message: "AI-notering: kundnöjdhet under 85 % – åtgärdsförslag genererat.",
        level: "alert",
      },
    ];
    setLogs(mockLogs);
  }, []);

  return (
    <div className="ai-audit glass-panel">
      <h2>AI Audit Feed</h2>
      <p className="feed-summary">
        Spårning av alla AI-analyser och beslut i systemet.
      </p>

      <div className="feed-list">
        {logs.map((log, i) => (
          <div key={i} className={`feed-item level-${log.level}`}>
            <div className="feed-header">
              <span className="feed-time">{log.time}</span>
              <span className="feed-module">{log.module}</span>
            </div>
            <p className="feed-msg">{log.message}</p>
          </div>
        ))}
      </div>

      <small className="feed-footnote">
        🧾 Nästa version synkar automatiskt med AI-Action-Engine och Audit-Log DB.
      </small>
    </div>
  );
}
