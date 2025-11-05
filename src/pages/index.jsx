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

// 📊 Dummydata (Ekonomi)
const data = [
  { month: "Jan", income: 50000, cost: 35000, result: 15000 },
  { month: "Feb", income: 75000, cost: 49000, result: 26000 },
  { month: "Mar", income: 80000, cost: 52000, result: 28000 },
  { month: "Apr", income: 110000, cost: 73500, result: 36500 },
  { month: "Maj", income: 92000, cost: 63000, result: 29000 },
  { month: "Jun", income: 125000, cost: 73400, result: 51600 },
];

// 📦 Tooltip
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

// 🧠 Dashboard huvudkomponent
export const DashboardOverview = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: 600 }}>
        <span role="img" aria-label="chart">📊</span> MergX V9 Dashboard
      </h2>
      <p style={{ color: "#a1a1aa", marginBottom: "25px" }}>
        Smarter · Simpler · Stronger
      </p>

      {/* KPI-KORT */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <div className="glass-card">
          <h4>Intäkter</h4>
          <p style={{ fontSize: "20px", fontWeight: 600 }}>532 000 kr</p>
        </div>
        <div className="glass-card">
          <h4>Kostnader</h4>
          <p style={{ fontSize: "20px", fontWeight: 600 }}>345 900 kr</p>
        </div>
        <div className="glass-card">
          <h4>Resultat</h4>
          <p style={{ fontSize: "20px", fontWeight: 600, color: "#4ade80" }}>
            186 100 kr
          </p>
        </div>
        <div className="glass-card">
          <h4>Lagerstatus</h4>
          <p style={{ fontSize: "20px", fontWeight: 600, color: "#38bdf8" }}>
            94 %
          </p>
        </div>
      </div>

      {/* 📊 GRAF + 🤖 AI-KOMMENTAR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        {/* 📊 DIAGRAM */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#e2e8f0" }}>Ekonomisk översikt</h3>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="income" fill="#38bdf8" radius={[8, 8, 0, 0]} barSize={30} name="Intäkter" />
              <Bar dataKey="cost" fill="#a855f7" radius={[8, 8, 0, 0]} barSize={30} name="Kostnader" />
              <Line type="monotone" dataKey="result" stroke="#22c55e" strokeWidth={3} name="Resultat" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 🤖 AI-KOMMENTAR */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#38bdf8", marginBottom: "10px" }}>AI-Kommentar</h3>
          <p style={{ color: "#e5e7eb" }}>
            Likviditetsrisk inom 30 dagar om lagerfördelning ej justeras. AI föreslår balansering mellan{" "}
            <strong>Ekonomi</strong> och <strong>Lager</strong> för att säkra stabilitet.
          </p>
        </div>
      </div>

      {/* 🗨️ TEAMCHATT & AI-AKTIVITET */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* TEAMCHATT */}
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "20px" }}>
          <h3 style={{ color: "#a855f7" }}>💬 Teamchatt</h3>
          <p style={{ color: "#e5e7eb" }}>
            Elias: Hej team, hur ser dagens rutter ut? <br />
            Sara: Jag tar norra rutten – Elon och Power. <br />
            AI: Förslag: Lägg till besök hos Mekonomen Solna på vägen.
          </p>
        </div>

        {/* AI-AKTIVITET */}
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "20px" }}>
          <h3 style={{ color: "#38bdf8" }}>🤖 AI-Aktivitet</h3>
          <ul style={{ color: "#d4d4d8", fontSize: "14px" }}>
            <li>✅ Uppdaterade försäljningsrutter – 10:32</li>
            <li>📄 Genererade rapport: ”Ekonomisk balans – Q4”</li>
            <li>💡 Förslag: ”Minska lagerkostnad för USB-C 1 m kablar”</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// 🧩 Dummy-komponenter för att build ska fungera (ersätts senare)
export const AiAnalys = () => (
  <div style={{ padding: "40px", color: "white" }}>AI-Analys laddad korrekt.</div>
);

export const KpiPanel = () => (
  <div style={{ padding: "40px", color: "white" }}>KPI-panel laddad korrekt.</div>
);

export const Handelser = () => (
  <div style={{ padding: "40px", color: "white" }}>Händelser laddad korrekt.</div>
);

// ✅ Exportera även DashboardOverview som default
export default DashboardOverview;
