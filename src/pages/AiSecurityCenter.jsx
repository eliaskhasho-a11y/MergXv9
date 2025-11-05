import React, { useEffect, useState } from "react";
import "./AiSecurityCenter.css";
import { useAiEvents } from "../components/ai/AiEventBus";

/*
  AI Compliance & Security Center — MergX V9
  -------------------------------------------
  • Visar AI-detekterade risker, dataläckor och avvikelser  
  • Manuell "Skanna nu"  
  • Realtids-feed (EventBus)  
  • Förberett för koppling till Security API i V10
*/

export default function AiSecurityCenter() {
  const { emitEvent } = useAiEvents();
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("OK");
  const [scanRunning, setScanRunning] = useState(false);

  const riskTypes = [
    { id: 1, type: "GDPR", desc: "Personuppgift utan samtycke", severity: "Medium" },
    { id: 2, type: "Access", desc: "Fel roll-behörighet i modul", severity: "High" },
    { id: 3, type: "DataLeak", desc: "Extern export av data", severity: "Critical" },
    { id: 4, type: "AI-Prompt", desc: "Onormal AI-fråga mot intern databas", severity: "Low" },
  ];

  // Simulerad AI-skanning
  const runScan = () => {
    if (scanRunning) return;
    setScanRunning(true);
    emitEvent({ module: "Security", type: "info", message: "Startar AI-säkerhetsskanning…" });
    setTimeout(() => {
      const detected = Math.random() > 0.5 ? [riskTypes[Math.floor(Math.random() * riskTypes.length)]] : [];
      const newLog = {
        time: new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }),
        detected,
        result: detected.length ? "Risk upptäckt" : "Inga avvikelser",
      };
      setLogs((p) => [newLog, ...p]);
      setStatus(detected.length ? "Risk" : "OK");
      emitEvent({
        module: "Security",
        type: detected.length ? "alert" : "info",
        message: detected.length ? "Risk upptäckt av AI-säkerhetssystemet" : "Inga hot hittades",
      });
      setScanRunning(false);
    }, 2500);
  };

  useEffect(() => {
    // automatisk bakgrundsskanning var 60 s
    const timer = setInterval(runScan, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sec glass-panel">
      <header className="sec-header">
        <h1>AI Compliance & Security Center</h1>
        <p>Övervaka risker, åtkomst och GDPR-status</p>
      </header>

      <div className="sec-status">
        <span className={`status-badge s-${status.toLowerCase()}`}>{status}</span>
        <button className="scan-btn" onClick={runScan} disabled={scanRunning}>
          {scanRunning ? "Skannar …" : "🔍 Skanna nu"}
        </button>
      </div>

      <section className="sec-logs">
        <h2>Senaste skanningar</h2>
        {logs.length === 0 ? (
          <p className="muted">Inga loggar ännu.</p>
        ) : (
          <table>
            <thead>
              <tr><th>Tid</th><th>Resultat</th><th>Detaljer</th></tr>
            </thead>
            <tbody>
              {logs.map((l, i) => (
                <tr key={i}>
                  <td>{l.time}</td>
                  <td>{l.result}</td>
                  <td>
                    {l.detected.length
                      ? l.detected.map((r) => (
                          <span key={r.id} className={`tag sev-${r.severity.toLowerCase()}`}>
                            {r.type} – {r.desc}
                          </span>
                        ))
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="sec-rules">
        <h2>Efterlevnad / Policies</h2>
        <ul>
          <li>✅ AI-modell loggar inga personuppgifter lokalt</li>
          <li>✅ Alla roll-ändringar spåras i Audit Log</li>
          <li>⚠️ Export utanför EU kräver administratörsgodkännande</li>
          <li>🧠 AI övervakar ovanliga frågemönster mot interna datakällor</li>
        </ul>
      </section>

      <footer className="sec-foot">
        🔐 V10: kopplas till MergX Compliance Cloud API för central policy-hantering och revisionsloggar.
      </footer>
    </div>
  );
}
