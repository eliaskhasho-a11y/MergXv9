import React, { useState, useEffect } from "react";
import "./KpiTargetPanel.css";

export default function KpiTargetPanel() {
  const [targets, setTargets] = useState([
    { role: "Admin", kpi: "Totala intäkter", target: 120000, current: 125000 },
    { role: "Ekonomi", kpi: "Resultat", target: 50000, current: 51600 },
    { role: "Lager", kpi: "Lagersvinn", target: 2, current: 3 },
    { role: "CRM", kpi: "Kundnöjdhet", target: 85, current: 82 },
  ]);

  // Simulerad AI-analys
  useEffect(() => {
    setTimeout(() => {
      setTargets((prev) =>
        prev.map((t) => ({
          ...t,
          status:
            t.current >= t.target
              ? "grön"
              : t.current >= t.target * 0.9
              ? "gul"
              : "röd",
        }))
      );
    }, 800);
  }, []);

  return (
    <div className="kpi-target glass-panel">
      <h2>KPI-mål per avdelning</h2>
      <div className="kpi-grid">
        {targets.map((t, i) => (
          <div key={i} className={`kpi-box status-${t.status}`}>
            <div className="kpi-header">
              <h3>{t.role}</h3>
              <span>{t.kpi}</span>
            </div>
            <div className="kpi-values">
              <p>
                Mål: <strong>{t.target.toLocaleString()} {t.kpi.includes("%") ? "%" : "kr"}</strong>
              </p>
              <p>
                Nu: <strong>{t.current.toLocaleString()} {t.kpi.includes("%") ? "%" : "kr"}</strong>
              </p>
            </div>
            <div className="status-indicator">
              <span className="dot"></span>
              <span className="status-text">
                {t.status === "grön"
                  ? "✅ Målet uppnått"
                  : t.status === "gul"
                  ? "⚠️ Nära mål"
                  : "🔴 Under mål"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
