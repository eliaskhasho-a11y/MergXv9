import React, { useState } from "react";
import "./KpiPanel.css";
import { economyData } from "../../data/economyData";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KpiPanel() {
  const totalIncome = economyData.reduce((acc, d) => acc + d.income, 0);
  const totalCost = economyData.reduce((acc, d) => acc + d.cost, 0);
  const totalResult = totalIncome - totalCost;

  const [hovered, setHovered] = useState(null);

  // Simulerad AI-analys
  const aiInsights = {
    Intäkter: {
      trend: "+12%",
      positive: true,
      text: "Tillväxten är stabil. Försäljningen ökade tack vare nya återförsäljare.",
    },
    Kostnader: {
      trend: "+8%",
      positive: false,
      text: "Kostnader ökade främst p.g.a. lagerpåfyllning. AI föreslår prisoptimering.",
    },
    Resultat: {
      trend: "+15%",
      positive: true,
      text: "Vinsten visar stark marginal. AI klassar den ekonomiska hälsan som 'Grön'.",
    },
  };

  const kpis = [
    { label: "Intäkter", value: totalIncome, color: "#00e5ff" },
    { label: "Kostnader", value: totalCost, color: "#c080ff" },
    { label: "Resultat", value: totalResult, color: "#00ffae" },
  ];

  return (
    <div className="kpi-container">
      {kpis.map((kpi, i) => {
        const ai = aiInsights[kpi.label];
        return (
          <div
            key={i}
            className="kpi-card glass-panel"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value" style={{ color: kpi.color }}>
              {kpi.value.toLocaleString("sv-SE")} kr
            </div>

            {hovered === i && (
              <div className="ai-tooltip glass-panel">
                <div className="trend">
                  {ai.positive ? (
                    <TrendingUp size={16} color="#00ffae" />
                  ) : (
                    <TrendingDown size={16} color="#ff6b6b" />
                  )}
                  <span
                    className={ai.positive ? "trend-up" : "trend-down"}
                  >
                    {ai.trend}
                  </span>
                </div>
                <p>{ai.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
