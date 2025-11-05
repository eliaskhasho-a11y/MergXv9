import React from "react";
import KpiTargetPanel from "../components/kpi/KpiTargetPanel";
import EconomicChart from "../components/charts/EconomicChart";
import AICommentBox from "../components/ai/AICommentBox";
import "./Ekonomi.css";

export default function Ekonomi() {
  // Mock-KPI-värden – byts mot AI eller backend senare
  const kpi = [
    { title: "Intäkter", value: "125 000 kr", change: "+18 %", trend: "upp" },
    { title: "Kostnader", value: "73 400 kr", change: "-6 %", trend: "ner" },
    { title: "Resultat", value: "51 600 kr", change: "+24 %", trend: "upp" },
    { title: "Likviditet", value: "Stabil", change: "0 %", trend: "neutral" },
  ];

  return (
    <div className="page ekonomi-page">
      <header className="eko-header glass-panel">
        <h1>Ekonomimodul</h1>
        <p>Analys och översikt i realtid</p>
      </header>

      {/* KPI-panel */}
      <section className="kpi-panel glass-panel">
        {kpi.map((item, i) => (
          <div key={i} className={`kpi-card trend-${item.trend}`}>
            <h3>{item.title}</h3>
            <p className="kpi-value">{item.value}</p>
            <span className="kpi-change">{item.change}</span>
          </div>
        ))}
      </section>

      {/* Ekonomisk graf */}
      <section className="chart-section">
        <EconomicChart />
      </section>

      {/* AI-kommentar (passiv just nu) */}
      <section className="ai-section">
        <AICommentBox />
      </section>
    </div>
  );
}
