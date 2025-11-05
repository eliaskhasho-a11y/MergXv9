import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./ThreatAiClassifier.css";

export default function ThreatAiClassifier() {
  const { events, emitEvent } = useAiEvents();
  const [classified, setClassified] = useState([]);

  // 🔬 Simulerad AI-analys
  const classifyThreat = (msg) => {
    const patterns = [
      { keyword: "token", category: "Auth Attack", base: 65 },
      { keyword: "cpu", category: "System Anomaly", base: 45 },
      { keyword: "ogodkänd", category: "Privilege Escalation", base: 80 },
      { keyword: "api", category: "Network Anomaly", base: 55 },
      { keyword: "timeout", category: "Session Error", base: 35 },
    ];
    let match = patterns.find(p => msg.toLowerCase().includes(p.keyword));
    if (!match) match = { category: "Generic Event", base: 20 };
    const score = match.base + Math.floor(Math.random() * 20 - 10);
    let risk =
      score > 75 ? "High" : score > 50 ? "Medium" : "Low";
    return { category: match.category, score, risk };
  };

  useEffect(() => {
    // 🚀 Analysera senaste events vid laddning
    const results = events.slice(-15).map((e) => {
      const cls = classifyThreat(e.message);
      return {
        time: e.time || "--",
        module: e.module,
        message: e.message,
        ...cls,
      };
    });
    setClassified(results);

    emitEvent({
      module: "ThreatAI",
      type: "info",
      message: "Threat AI Classifier har analyserat nya händelser.",
    });
  }, [events]);

  return (
    <div className="threat-ai glass-panel">
      <header className="threat-header">
        <h1>Threat AI Classifier</h1>
        <p>AI-analys och prediktion av hotmönster</p>
      </header>

      {/* Tabell */}
      <div className="threat-table">
        <div className="table-head">
          <span>Tid</span><span>Modul</span><span>Kategori</span>
          <span>Risk</span><span>Poäng</span>
        </div>
        {classified.map((c, i) => (
          <div key={i} className={`table-row risk-${c.risk.toLowerCase()}`}>
            <span>{c.time}</span>
            <span>{c.module}</span>
            <span>{c.category}</span>
            <span>{c.risk}</span>
            <span>{c.score}</span>
          </div>
        ))}
      </div>

      {/* Rekommendationer */}
      <section className="threat-recommend">
        <h2>AI-rekommendationer</h2>
        {classified.some((c) => c.risk === "High") ? (
          <ul>
            <li>⚠️ Isolera påverkade moduler temporärt.</li>
            <li>🔐 Kontrollera senaste inloggningar i Session Manager.</li>
            <li>☁️ Kör manuell Cloud Sync & Backup.</li>
          </ul>
        ) : (
          <p>✅ Inga kritiska hot identifierade just nu.</p>
        )}
      </section>

      <footer className="threat-footnote">
        🧠 Nästa version (V10.6) kopplar detta till en riktig ML-modell för prediktiv hotanalys baserad på MergX Telemetry.
      </footer>
    </div>
  );
}
