import React from "react";
import "./KpiPanel.css";
import { economyData } from "../../data/economyData";

export default function KpiPanel() {
  // Summera data från mock-ekonomin
  const totalIncome = economyData.reduce((acc, d) => acc + d.income, 0);
  const totalCost = economyData.reduce((acc, d) => acc + d.cost, 0);
  const totalResult = totalIncome - totalCost;

  const kpis = [
    { label: "Intäkter", value: totalIncome, color: "#00e5ff" },
    { label: "Kostnader", value: totalCost, color: "#c080ff" },
    { label: "Resultat", value: totalResult, color: "#00ffae" },
  ];

  return (
    <div className="kpi-container">
      {kpis.map((kpi, i) => (
        <div key={i} className="kpi-card glass-panel">
          <div className="kpi-label">{kpi.label}</div>
          <div className="kpi-value" style={{ color: kpi.color }}>
            {kpi.value.toLocaleString("sv-SE")} kr
          </div>
        </div>
      ))}
    </div>
  );
}
