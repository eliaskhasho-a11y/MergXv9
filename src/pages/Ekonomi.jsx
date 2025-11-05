import React from "react";
import EconomyChart from "../components/EconomyChart";
import "./Ekonomi.css";

export default function Ekonomi() {
  return (
    <div className="ekonomi-container glass-bg">
      <h2>Ekonomisk översikt</h2>
      <p className="ekonomi-sub">Sammanfattning av intäkter, kostnader och resultat</p>

      <div className="ekonomi-grid">
        <div className="ekonomi-chart-card glass-card">
          <h3>📊 Intäkter & kostnader – halvår</h3>
          <EconomyChart />
        </div>

        <div className="ekonomi-info-card glass-card">
          <h3>🧠 AI-Analys</h3>
          <p>
            MergX AI identifierar en positiv resultattrend. Förslag: öka fokus på
            lönsamma produktlinjer inom tillbehörskategorin (kablar & laddare).
          </p>
          <ul>
            <li>✅ Stark försäljning i maj och juni</li>
            <li>⚙️ Kostnader stabila under perioden</li>
            <li>📈 Resultatet ökade med 23 % senaste kvartalet</li>
          </ul>
          <div className="ai-summary-note">
            <strong>AI-Notering:</strong> Fortsätt övervaka kostnadstrenden inför Q3.
          </div>
        </div>
      </div>
    </div>
  );
}
