import { useAI } from "../../hooks/useAI";
import { useEffect, useState } from "react";
import "./AICommentBox.css";

export default function AICommentBox() {
  const { analyze, loading, output, tier } = useAI();
  const [riskLevel, setRiskLevel] = useState("Låg");

  useEffect(() => {
    // Kör en AI-analys direkt när komponenten laddas
    analyze("Analysera ekonomiska trender och likviditetsrisker för de kommande 30 dagarna.", "Ekonomi");
    setRiskLevel("Medel");
  }, []);

  const suggestions = [
    "Sammanfattar trender i klartext.",
    "Föreslår nästa bästa åtgärd per modul (Ekonomi, Lager, CRM, Team).",
    "Skapar tasks / meddelanden automatiskt vid godkännande.",
  ];

  return (
    <div className="ai-box glass-panel">
      <h2>AI-kommentar</h2>

      <p className="ai-text">
        {loading
          ? "AI analyserar data..."
          : output || "Ingen analys tillgänglig just nu."}
      </p>

      <div className={`risk-tag risk-${riskLevel.toLowerCase()}`}>
        Risknivå: {riskLevel}
      </div>

      <ul className="ai-list">
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <small className="ai-footnote">
        {tier === "plus"
          ? "Du använder MergX Plus – AI analysen sker via OpenAI API."
          : "Gratisläge aktivt – AI-svar simuleras lokalt."}
        <br />
        Obs: Detta är en strukturell prototyp. Nästa version (V9-AI Base)
        kopplar analys mot realtidsdata.
      </small>
    </div>
  );
}
