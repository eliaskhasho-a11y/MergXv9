// src/pages/index.jsx
import React from "react";

/**
 * Minimal & safe placeholder-exports så att Vite/Rollup kan bygga utan fel.
 * Byt ut innehållet i respektive komponent när som helst, men behåll export-namnen.
 */

// Dashboard (huvudsida)
export const DashboardOverview = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 22, marginBottom: 8, fontWeight: 700 }}>
      MergX V9 – Dashboard
    </h2>
    <p>✅ DashboardOverview exporterad korrekt från src/pages/index.jsx</p>
  </div>
);

// AI-analys
export const AiAnalys = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>AI-Analys</h2>
    <p>✅ AiAnalys exporterad korrekt</p>
  </div>
);

// KPI-panel
export const KpiPanel = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>KPI-panel</h2>
    <p>✅ KpiPanel exporterad korrekt</p>
  </div>
);

// Händelser
export const Handelser = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>Händelser</h2>
    <p>✅ Handelser exporterad korrekt</p>
  </div>
);

// Schema
export const Schema = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>Schema</h2>
    <p>✅ Schema exporterad korrekt</p>
  </div>
);

// Uppgifter
export const Uppgifter = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>Uppgifter</h2>
    <p>✅ Uppgifter exporterad korrekt</p>
  </div>
);

// Chatt
export const Chatt = () => (
  <div style={{ padding: 24, color: "#e5e7eb" }}>
    <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>Chatt</h2>
    <p>✅ Chatt exporterad korrekt</p>
  </div>
);

// Default export (behövs om något importerar "src/pages" som default)
export default DashboardOverview;
