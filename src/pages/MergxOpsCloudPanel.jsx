import React, { useEffect, useState } from "react";
import "./MergxOpsCloudPanel.css";
import { useAiEvents } from "../components/ai/AiEventBus";

export default function MergxOpsCloudPanel() {
  const { emitEvent } = useAiEvents();
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    const mockSystems = [
      { id: 1, name: "API Gateway", status: "Online", latency: 42, uptime: "99.98%" },
      { id: 2, name: "AI Engine Core", status: "Online", latency: 65, uptime: "99.92%" },
      { id: 3, name: "Database Cluster", status: "Online", latency: 28, uptime: "100%" },
      { id: 4, name: "Cloud Sync Node", status: "Degraded", latency: 180, uptime: "97.5%" },
      { id: 5, name: "Telemetry Service", status: "Offline", latency: null, uptime: "N/A" },
      { id: 6, name: "Realtime WebSocket", status: "Online", latency: 56, uptime: "99.89%" },
    ];
    setSystems(mockSystems);

    emitEvent({
      module: "OpsCloud",
      type: "info",
      message: "MergX Ops Cloud Panel uppdaterad med senaste statusar.",
    });
  }, []);

  return (
    <div className="ops-cloud glass-panel">
      <header className="ops-header">
        <h1>MergX Ops Cloud Panel</h1>
        <p>Realtidsöversikt över systemnoder och tjänster</p>
      </header>

      {/* Noder */}
      <div className="ops-grid">
        {systems.map((sys) => (
          <div key={sys.id} className={`ops-node status-${sys.status.toLowerCase()}`}>
            <div className="node-header">
              <h3>{sys.name}</h3>
              <span className="status">{sys.status}</span>
            </div>
            <div className="node-body">
              <p><strong>Latens:</strong> {sys.latency ? `${sys.latency} ms` : "Ingen signal"}</p>
              <p><strong>Uptime:</strong> {sys.uptime}</p>
            </div>
            <div className="node-meter">
              <div
                className="meter-fill"
                style={{
                  width: sys.latency
                    ? `${Math.min(100, 200 - sys.latency)}%`
                    : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sammanfattning */}
      <section className="ops-summary">
        <h2>Systemsammanfattning</h2>
        <ul>
          <li>Totala noder: {systems.length}</li>
          <li>Online: {systems.filter(s => s.status === "Online").length}</li>
          <li>Degraderade: {systems.filter(s => s.status === "Degraded").length}</li>
          <li>Offline: {systems.filter(s => s.status === "Offline").length}</li>
        </ul>
      </section>

      <footer className="ops-footnote">
        ☁️ Nästa version (V10.9) integrerar med riktiga ping-data via WebSocket och visualiserar driftstatus i realtid med AI-baserad felprediktion.
      </footer>
    </div>
  );
}
