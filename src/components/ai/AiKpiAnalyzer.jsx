import React, { useState, useEffect } from "react";
import "./AiKpiAnalyzer.css";

export default function AiKpiAnalyzer({ data }) {
  const [analysis, setAnalysis] = useState([]);
  const [summary, setSummary] = useState("");

  // Simulerad AI-analys baserad på inkommande KPI-data
  useEffect(() => {
    if (!data || data.length === 0) return;

    const results = data.map((item) => {
      const deviation = ((item.current - item.target) / item.target) * 100;
      let message = "";
      let risk = "Låg";

      if (deviation > 5)
        message = `${item.role}: överträffar målet med ${deviation.toFixed(1)} % – stark prestation.`;
      else if (deviation >= -5)
        message = `${item.role}: nära målet (±${deviation.toFixed(1)} %).`;
      else {
        message = `${item.role}: under målet med ${Math.abs(deviation).toFixed(1)} %. Åtgärder rekommenderas.`;
        risk = "Hög";
      }

      return { ...item, deviation, message, risk };
    });

    const globalRisk =
      results.filter((r) => r.risk === "Hög").length > 0
        ? "⚠️ Varning: minst ett KPI ligger under mål."
        : "✅ Alla KPI-mål inom acceptabla gränser.";

    setAnalysis(results);
    setSummary(globalRisk);
  }, [data]);

  return (
    <div className="ai-analyzer glass-panel">
      <h2>AI-Analys av KPI-status</h2>
      <p className="ai-summary">{summary}</p>

      <ul className="ai-analysis-list">
        {analysis.map((a, i) => (
          <li key={i} className={`risk-${a.risk.toLowerCase()}`}>
            <strong>{a.role}</strong> — {a.message}
          </li>
        ))}
      </ul>

      <small className="ai-footnote">
        🧠 Analysen uppdateras automatiskt när KPI-data ändras. Nästa version
        kopplas mot realtids-AI för prediktioner.
      </small>
    </div>
  );
}
