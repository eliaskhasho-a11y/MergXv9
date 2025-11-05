import KpiPanel from "../components/kpi/KpiPanel";
import React from "react";
import EconomicChart from "../components/charts/EconomicChart";
import AICommentBox from "../components/ai/AICommentBox";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      <header className="dash-header glass-panel">
        <h1>MergX V9 Dashboard</h1>
        <p>Smarter · Simpler · Stronger</p>
      </header>
<KpiPanel />
      <section className="dash-content">
        <div className="chart-section">
          <EconomicChart />
        </div>
        <div className="ai-section">
          <AICommentBox />
        </div>
      </section>
    </div>
  );
}
