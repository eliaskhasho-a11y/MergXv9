import { useAI } from "../../hooks/useAI";
import { useEffect, useState } from "react";
import "./AICommentBox.css";

export default function AICommentBox() {
  const [comment, setComment] = useState("");
  const [riskLevel, setRiskLevel] = useState("Låg");

  useEffect(() => {
    // Här kan du senare ersätta med riktig AI-analys:
    const aiComment =
      "Likviditetsrisk inom 30 dagar om lageromfördelning ej görs. Förslag skapade.";
    setComment(aiComment);
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
      <p className="ai-text">{comment}</p>

      <div className={`risk-tag risk-${riskLevel.toLowerCase()}`}>
        Risknivå: {riskLevel}
      </div>

      <ul className="ai-list">
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <small className="ai-footnote">
        Obs: Detta är en strukturell prototyp. Nästa version (V9-AI Base)
        kommer att koppla AI-analys direkt mot realtidsdata.
      </small>
    </div>
  );
}
