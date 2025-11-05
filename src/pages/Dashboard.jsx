import React from "react";
import "./Dashboard.css";
import EconomyChart from "../components/EconomyChart";

export default function Dashboard() {
  return (
    <div className="dashboard-container glass-bg">
      <h2 className="dashboard-title">MergX V9 Dashboard</h2>
      <p className="dashboard-sub">Smarter · Simpler · Stronger</p>

      {/* KPI-kort */}
      <div className="kpi-row">
        <div className="kpi-card">
          <h3>Intäkter</h3>
          <p>532 000 kr</p>
        </div>
        <div className="kpi-card">
          <h3>Kostnader</h3>
          <p>345 900 kr</p>
        </div>
        <div className="kpi-card">
          <h3>Resultat</h3>
          <p>186 100 kr</p>
        </div>
        <div className="kpi-card">
          <h3>Lagerstatus</h3>
          <p>94 %</p>
        </div>
      </div>

      {/* Ekonomisk översikt */}
      <div className="section-card glass-card">
        <div className="section-header">
          <h3>📊 Ekonomisk översikt</h3>
        </div>
        <EconomyChart />
      </div>

      {/* AI-Kommentar */}
      <div className="section-card glass-card ai-comment">
        <h3>🧠 AI-Kommentar</h3>
        <p>
          Likviditetsrisk inom 30 dagar om lagerfördelning ej justeras. AI föreslår
          balansering mellan Ekonomi och Lager för att säkra stabilitet.
        </p>
        <div className="ai-risk">
          <span>Risknivå: Medel</span>
        </div>
        <ul className="ai-list">
          <li>Sammanfattar trender i realtid via MergX AI-bas.</li>
          <li>Föreslår nästa bästa åtgärd per modul (Ekonomi, Lager, CRM, Team).</li>
          <li>Skapar automatiska notiser och förslag baserat på dataförändringar.</li>
        </ul>
      </div>

      {/* AI-Karta */}
      <div className="section-card glass-card">
        <h3>🗺️ AI-Karta – Försäljningsrutter</h3>
        <ul className="ai-map-list">
          <li>📍 Elon Kista – Vill köpa om 20 dagar</li>
          <li>📍 Power Täby – Intresserad av laddare</li>
          <li>📍 Mekonomen Solna – Behöver prislista</li>
        </ul>
        <small>
          AI-baserad planering (mock-data). Kommande version kopplas mot Google Places API.
        </small>
      </div>

      {/* Teamchatt */}
      <div className="section-card glass-card">
        <h3>💬 Teamchatt</h3>
        <div className="chat-box">
          <p>
            <strong>Elias:</strong> Hej team, hur ser dagens rutter ut?
          </p>
          <p>
            <strong>Sara:</strong> Jag tar norra rutten – Elon och Power.
          </p>
          <p>
            <strong>AI:</strong> Förslag: Lägg till besök hos Mekonomen Solna på vägen.
          </p>
        </div>
        <input type="text" placeholder="Skriv ett meddelande …" className="chat-input" />
        <button className="chat-btn">Skicka</button>
      </div>

      {/* AI-Aktivitet */}
      <div className="section-card glass-card">
        <h3>🤖 AI-Aktivitet</h3>
        <ul className="activity-list">
          <li>✅ Uppdaterade försäljningsrutter – 10:32</li>
          <li>📈 Genererade rapport: ”Ekonomisk balans – Q4”</li>
          <li>💡 Förslag: ”Minska lagerkostnad för USB-C 1 m kablar”</li>
        </ul>
      </div>
    </div>
  );
}
