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
  Legend,
} from "recharts";

// ====== DUMMYDATA FÖR EKONOMI ======
const data = [
  { month: "Jan", income: 50000, cost: 35000, result: 15000 },
  { month: "Feb", income: 75000, cost: 49000, result: 26000 },
  { month: "Mar", income: 80000, cost: 52000, result: 28000 },
  { month: "Apr", income: 110000, cost: 73500, result: 36500 },
  { month: "Maj", income: 92000, cost: 63000, result: 29000 },
  { month: "Jun", income: 125000, cost: 73400, result: 51600 },
];

// ====== TOOLTIP ======
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.8)",
          padding: "10px 15px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p style={{ fontWeight: "600", color: "#fff" }}>{label}</p>
        <p style={{ color: "#38bdf8" }}>
          Intäkter: {payload[0].value.toLocaleString()} kr
        </p>
        <p style={{ color: "#a855f7" }}>
          Kostnader: {payload[1].value.toLocaleString()} kr
        </p>
        <p style={{ color: "#4ade80" }}>
          Resultat: {payload[2].value.toLocaleString()} kr
        </p>
      </div>
    );
  }
  return null;
};

// ====== HUVUDDASHBOARD ======
export const DashboardOverview = () => (
  <div style={{ padding: "20px" }}>
    <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: 600 }}>
      📊 MergX V9 Dashboard
    </h2>
    <p style={{ color: "#a1a1aa", marginBottom: "25px" }}>
      Smarter · Simpler · Stronger
    </p>

    {/* KPI-KORT */}
    <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
      <div className="glass-card"><h4>Intäkter</h4><p>532 000 kr</p></div>
      <div className="glass-card"><h4>Kostnader</h4><p>345 900 kr</p></div>
      <div className="glass-card"><h4>Resultat</h4><p>186 100 kr</p></div>
      <div className="glass-card"><h4>Lagerstatus</h4><p>94 %</p></div>
    </div>

    {/* GRAF */}
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#e2e8f0" }}>Ekonomisk översikt</h3>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="income" fill="#38bdf8" radius={[8, 8, 0, 0]} />
          <Bar dataKey="cost" fill="#a855f7" radius={[8, 8, 0, 0]} />
          <Line dataKey="result" stroke="#22c55e" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// ====== DUMMY-KOMPONENTER (temporärt för att build ska fungera) ======
export const AiAnalys = () => (
  <div style={{ padding: "40px", color: "#fff" }}>AI-Analys laddad korrekt ✅</div>
);

export const KpiPanel = () => (
  <div style={{ padding: "40px", color: "#fff" }}>KPI-panel laddad korrekt ✅</div>
);

export const Handelser = () => (
  <div style={{ padding: "40px", color: "#fff" }}>Händelser laddad korrekt ✅</div>
);

export const Schema = () => (
  <div style={{ padding: "40px", color: "#fff" }}>Schema laddad korrekt ✅</div>
);

export const Uppgifter = () => (
  <div style={{ padding: "40px", color: "#fff" }}>Uppgifter laddad korrekt ✅</div>
);

export const Chatt = () => (
  <div style={{ padding: "40px", color: "#fff" }}>Chatt laddad korrekt ✅</div>
);

// ====== STANDARD EXPORT ======
export default DashboardOverview;
