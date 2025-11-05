import React from "react";

// 🧠 Dashboard
export const DashboardOverview = () => (
  <div style={{ padding: "20px" }}>
    <h2>📊 Ekonomisk översikt</h2>
    <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "20px", marginTop: "10px" }}>
      <p>Intäkter: <strong>532 000 kr</strong></p>
      <p>Kostnader: <strong>345 900 kr</strong></p>
      <p>Resultat: <strong>186 100 kr</strong></p>
      <p style={{ color: "#22d3ee" }}>AI-kommentar: Positiv trend, bästa månaden hittills.</p>
    </div>
  </div>
);

// 🔍 Dashboard-sektioner
export const AiAnalys = () => <div>AI-Analysmodul (mock)</div>;
export const KpiPanel = () => <div>KPI-Panel</div>;
export const Handelser = () => <div>Händelser</div>;

// 👥 Anställda
export const Schema = () => <div>Schema</div>;
export const Uppgifter = () => <div>Uppgifter</div>;
export const Chatt = () => <div>Team-chatt</div>;
export const Prestanda = () => <div>Prestanda-översikt</div>;

// 📦 Lager & Inventarie
export const LagerOversikt = () => <div>Lageröversikt</div>;
export const Artiklar = () => <div>Artiklar / SKU</div>;
export const Bristvarningar = () => <div>Bristvarningar</div>;
export const LagerAiForslag = () => <div>AI-förslag för lagerbalans</div>;

// 💰 Ekonomi
export const Budget = () => <div>Budget</div>;
export const Fakturor = () => <div>Fakturor</div>;
export const Kostnader = () => <div>Kostnader</div>;
export const Kassaflode = () => <div>Kassaflöde</div>;

// 📇 CRM & Kunder
export const Kunder = () => <div>Kundregister</div>;
export const Leads = () => <div>Leads</div>;
export const Kommunikation = () => <div>Kommunikation</div>;
export const Kundportal = () => <div>Kundportal</div>;

// 🧩 AI-Kärna & Coach
export const AiKarna = () => <div>AI-Kärna</div>;
export const AiCoach = () => <div>AI-Coach</div>;
export const AiRapporter = () => <div>AI-Rapporter</div>;

// 📂 Filer & Bilagor
export const Uppladdning = () => <div>Filuppladdning</div>;
export const Bibliotek = () => <div>Dokumentbibliotek</div>;
export const Noteringar = () => <div>Noteringar</div>;

// 📈 Rapporter & Analys
export const Forsaljning = () => <div>Försäljningsrapport</div>;
export const KostnadMarginal = () => <div>Kostnad / Marginal</div>;
export const KpiExport = () => <div>KPI-Export</div>;

// ⚙️ Inställningar & Roller
export const Roller = () => <div>Roller & behörighet</div>;
export const Integrationer = () => <div>Integrationer</div>;
export const Sakerhet = () => <div>Säkerhetscenter</div>;
