import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import "./EconomyDashboard.css";

const data = [
  { month: "Jan", income: 50000, cost: 35000, result: 15000 },
  { month: "Feb", income: 75000, cost: 49000, result: 26000 },
  { month: "Mar", income: 80000, cost: 52000, result: 28000 },
  { month: "Apr", income: 110000, cost: 73500, result: 36500 },
  { month: "Maj", income: 92000, cost: 63000, result: 29000 },
  { month: "Jun", income: 125000, cost: 73400, result: 51600 },
];

export default function EconomyDashboard() {
  return (
    <div className="economy-page">
      <div className="header-box glass-panel">
        <h2>MergX V9 Dashboard</h2>
        <p>Smarter • Simpler • Stronger</p>
      </div>

      <div className="kpi-row">
        <div className="kpi-card glass-panel">
          <h4>Intäkter</h4>
          <p className="kpi-value">532 000 kr</p>
        </div>
        <div className="kpi-card glass-panel">
          <h4>Kostnader</h4>
          <p className="kpi-value purple">345 900 kr</p>
        </div>
        <div className="kpi-card glass-panel">
          <h4>Resultat</h4>
          <p className="kpi-value green">186 100 kr</p>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-box glass-panel">
          <h3>Ekonomisk översikt</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{
                  background: "rgba(30,30,30,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
              />
              <Bar dataKey="income" fill="url(#gradBlue)" radius={[10, 10, 0, 0]}>
                <LabelList dataKey="income" position="top" formatter={(v) => `${v.toLocaleString()} kr`} />
              </Bar>
              <Bar dataKey="cost" fill="url(#gradPurple)" radius={[10, 10, 0, 0]}>
                <LabelList dataKey="cost" position="top" formatter={(v) => `${v.toLocaleString()} kr`} />
              </Bar>
              <Line type="monotone" dataKey="result" stroke="#00e5ff" strokeWidth={3} dot={{ r: 5 }} />
              <defs>
                <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#003f54" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="gradPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b066ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2b004a" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </ComposedChart>
          </ResponsiveContainer>
          <p className="note">
            🔍 Senaste notering: <strong>Bästa månaden hittills – positiv resultattrend.</strong>
          </p>
        </div>

        <div className="ai-box glass-panel">
          <h3>AI-Kommentar</h3>
          <p>
            Likviditetsrisk inom 30 dagar om lagerfördelning ej justeras.
            AI föreslår balansering mellan Ekonomi och Lager för att säkra stabilitet.
          </p>
          <div className="risk-tag">Risknivå: Medel</div>
          <ul className="ai-list">
            <li>🧠 Sammanfattar trender i realtid via MergX AI-bas.</li>
            <li>📊 Föreslår nästa bästa åtgärd per modul (Ekonomi, Lager, CRM, Team).</li>
            <li>💬 Skapar automatiska notiser och förslag baserat på dataförändringar.</li>
          </ul>
          <small className="ai-footer">
            ⚙️ Detta är en strukturell prototyp. Nästa version (V9 AI Base) kopplar AI-analys mot realtidsdata.
          </small>
        </div>
      </div>
    </div>
  );
}
