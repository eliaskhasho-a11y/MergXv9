import React, { useEffect, useState } from "react";
import "./AiDiagnosticsMonitor.css";

export default function AiDiagnosticsMonitor() {
  const [stats, setStats] = useState({
    cpu: 25,
    io: 45,
    latency: 180,
    health: "Stabil",
  });

  // Simulerad realtidsuppdatering
  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => {
        const newCpu = Math.min(Math.max(prev.cpu + (Math.random() * 8 - 4), 0), 100);
        const newIo = Math.min(Math.max(prev.io + (Math.random() * 10 - 5), 0), 100);
        const newLatency = Math.min(Math.max(prev.latency + (Math.random() * 40 - 20), 80), 500);

        let newHealth = "Stabil";
        if (newCpu > 85 || newLatency > 350) newHealth = "Belastad";
        if (newCpu < 30 && newLatency < 200) newHealth = "Optimal";

        return { cpu: newCpu, io: newIo, latency: newLatency, health: newHealth };
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getBarColor = (value) =>
    value < 50 ? "#00ffb3" : value < 80 ? "#ffd93d" : "#ff5050";

  return (
    <div className="ai-diagnostics glass-panel">
      <h2>AI Diagnostics Monitor</h2>
      <p className="diag-desc">
        Realtidsövervakning av AI-systemets prestanda och svarstid.
      </p>

      <div className="diag-section">
        <div className="metric">
          <label>CPU Belastning</label>
          <div className="bar">
            <div
              className="fill"
              style={{ width: `${stats.cpu}%`, background: getBarColor(stats.cpu) }}
            ></div>
          </div>
          <span>{stats.cpu.toFixed(0)} %</span>
        </div>

        <div className="metric">
          <label>Data IO Genomströmning</label>
          <div className="bar">
            <div
              className="fill"
              style={{ width: `${stats.io}%`, background: getBarColor(stats.io) }}
            ></div>
          </div>
          <span>{stats.io.toFixed(0)} %</span>
        </div>

        <div className="metric">
          <label>AI-Latens</label>
          <div className="latency-value">{stats.latency.toFixed(0)} ms</div>
        </div>

        <div className={`health-status ${stats.health.toLowerCase()}`}>
          <p>Systemhälsa: <strong>{stats.health}</strong></p>
        </div>
      </div>

      <small className="diag-footnote">
        🧠 Nästa version (V9.5) kopplas mot verklig telemetri via AI Runtime Monitor.
      </small>
    </div>
  );
}
