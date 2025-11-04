import React, { useEffect, useState } from "react";
import "./AICommentBox.css";

export default function AICommentBox() {
  const [comment, setComment] = useState("");
  const [riskLevel, setRiskLevel] = useState("Låg");

  useEffect(() => {
    // Simulerad AI-analys — detta ersätts senare av riktig MergX AI-modul
    const aiComment =
      "Likviditetsrisk inom 30 dagar om lagerfördelning ej justeras. " +
      "AI föreslår balansering mellan Ekonomi och Lager för att säkra stabilitet.";
    setComment(aiComment);
    setRiskLevel("Medel");
  }, []);

  const suggestions = [
    "📊 Sammanfattar trender i realtid via MergX AI-bas.",
    "🔁 Föreslår nästa bästa åtgärd per modul (Ekonomi, Lager, CRM, Team).",
    "🧠 Skapar automatiska notiser och förslag baserat på dataförändringar.",
  ];

  return (
    <div className="ai-box glass-panel">
      <h2>AI-Kommentar</h2>
      <p className="ai-text">{comment}</p>

      <div className={`risk-tag risk-${riskLevel.toLowerCase()}`}>
        Risknivå: <strong>{riskLevel}</strong>
      </div>

      <ul className="ai-list">
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <small className="ai-footnote">
        ⚙️ Detta är en strukturell prototyp. Nästa version (V9 AI Base)
        kopplar automatiskt AI-analys mot realtidsdata.
      </small>
    </div>
  );
}
