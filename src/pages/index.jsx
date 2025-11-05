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

// 📊 DATA
const data = [
  { month: "Jan", income: 50000, cost: 35000, result: 15000 },
  { month: "Feb", income: 75000, cost: 49000, result: 26000 },
  { month: "Mar", income: 80000, cost: 52000, result: 28000 },
  { month: "Apr", income: 110000, cost: 73500, result: 36500 },
  { month: "Maj", income: 92000, cost: 63000, result: 29000 },
  { month: "Jun", income: 125000, cost: 73400, result: 51600 },
];

// 📦 TOOLTIP
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
        <p style={{ color: "#38bdf8" }}>Intäkter: {payload[0].value.toLocaleString()} kr</p>
        <p style={{ color: "#a855f7" }}>Kostnader: {payload[1].value.toLocaleString()} kr</p>
        <p style={{ color: "#4ade80" }}>Resultat: {payload[2].value.toLocaleString()} kr</p>
      </div>
    );
  }
  return null;
};

// 🧠 DASHBOARD HUVUDKOMPONENT
export const DashboardOverview = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: 600 }}>
        <span role="img" aria-label="chart">
          📊
        </span>{" "}
        Ekonomisk översikt
      </h2>

      {/* KORTA KPI */}
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
          <p style={{ fontSize: "20px", fontWeight: 600, color: "#4ade80" }}>186 100 kr</p>
        </div>
        <div className="glass-card">
          <h4>Lagerstatus</h4>
          <p style={{ fontSize: "20px", fontWeight: 600, color: "#38bdf8" }}>94 %</p>
        </div>
      </div>

      {/* HUVUDSEKTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* 🟣 DIAGRAM */}
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
          <p style={{ fontSize: "14px", marginTop: "10px", color: "#a1a1aa" }}>
            🔍 Senaste notering: <strong>Bästa månaden hittills – positiv resultattrend.</strong>
          </p>
        </div>

        {/* 🤖 AI KOMMENTAR */}
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

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "10px 12px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            <p style={{ fontSize: "13px", color: "#facc15" }}>Risknivå: Medel</p>
          </div>

          <ul style={{ fontSize: "13px", marginTop: "12px", color: "#d4d4d8" }}>
            <li>📈 Sammanfattar trender i realtid via MergX AI-bas.</li>
            <li>🧩 Föreslår nästa åtgärd per modul (Ekonomi, Lager, CRM, Team).</li>
            <li>⚙️ Skapar notiser & förslag baserat på dataförändringar.</li>
          </ul>

          <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "15px" }}>
            ⚙️ Detta är en strukturell prototyp. Nästa version kopplas till AI-analys i realtid.
          </p>
        </div>
      </div>
    </div>
  );
};

// Placeholder-komponenter för routing
export const AiAnalys = () => <div>AI-Analys</div>;
export const KpiPanel = () => <div>KPI-Panel</div>;
export const Handelser = () => <div>Händelser</div>;
export const Schema = () => <div>Schema</div>;
export const Uppgifter = () => <div>Uppgifter</div>;
export const Chatt = () => <div>Chatt</div>;
export const Prestanda = () => <div>Prestanda</div>;
export const LagerOversikt = () => <div>Lageröversikt</div>;
export const Artiklar = () => <div>Artiklar</div>;
export const Bristvarningar = () => <div>Bristvarningar</div>;
export const LagerAiForslag = () => <div>AI-förslag</div>;
export const Budget = () => <div>Budget</div>;
export const Fakturor = () => <div>Fakturor</div>;
export const Kostnader = () => <div>Kostnader</div>;
export const Kassaflode = () => <div>Kassaflöde</div>;
export const Kunder = () => <div>Kunder</div>;
export const Leads = () => <div>Leads</div>;
export const Kommunikation = () => <div>Kommunikation</div>;
export const Kundportal = () => <div>Kundportal</div>;
export const AiKarna = () => <div>AI-Kärna</div>;
export const AiCoach = () => <div>AI-Coach</div>;
export const AiRapporter = () => <div>AI-Rapporter</div>;
export const Uppladdning = () => <div>Uppladdning</div>;
export const Bibliotek = () => <div>Bibliotek</div>;
export const Noteringar = () => <div>Noteringar</div>;
export const Forsaljning = () => <div>Försäljning</div>;
export const KostnadMarginal = () => <div>Kostnad/Marginal</div>;
export const KpiExport = () => <div>KPI & Export</div>;
export const Roller = () => <div>Roller</div>;
export const Integrationer = () => <div>Integrationer</div>;
export const Sakerhet = () => <div>Säkerhet</div>;
