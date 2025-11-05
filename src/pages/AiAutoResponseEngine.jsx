import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiAutoResponseEngine.css";

export default function AiAutoResponseEngine() {
  const { events, emitEvent } = useAiEvents();
  const [actions, setActions] = useState([]);

  // 🚨 Definiera auto-responsregler
  const rules = [
    { keyword: "Bruteforce", action: "Blockera IP och avisera admin", severity: "High" },
    { keyword: "Ogodkänd", action: "Återställ rolländring & skicka varning", severity: "High" },
    { keyword: "timeout", action: "Förnya session-token", severity: "Medium" },
    { keyword: "API key", action: "Byt nyckel & lås endpoint", severity: "Medium" },
    { keyword: "CPU-spik", action: "Begränsa resurser temporärt", severity: "Low" },
  ];

  useEffect(() => {
    const triggered = [];

    events.slice(-10).forEach((e) => {
      const match = rules.find((r) =>
        e.message.toLowerCase().includes(r.keyword.toLowerCase())
      );
      if (match) {
        const record = {
          time: e.time || new Date().toLocaleTimeString("sv-SE"),
          module: e.module,
          event: e.message,
          action: match.action,
          severity: match.severity,
        };
        triggered.push(record);

        // 🧠 Skicka logg & notifiering
        emitEvent({
          module: "AutoResponse",
          type: match.severity === "High" ? "alert" : "info",
          message: `Automatisk åtgärd: ${match.action}`,
        });
      }
    });

    if (triggered.length > 0) setActions(triggered);
  }, [events]);

  return (
    <div className="auto-resp glass-panel">
      <header className="resp-header">
        <h1>AI Auto-Response Engine</h1>
        <p>Automatiserade skyddsåtgärder i realtid</p>
      </header>

      <div className="resp-table">
        <div className="table-head">
          <span>Tid</span><span>Modul</span><span>Händelse</span>
          <span>Åtgärd</span><span>Prioritet</span>
        </div>

        {actions.length > 0 ? (
          actions.map((a, i) => (
            <div key={i} className={`table-row sev-${a.severity.toLowerCase()}`}>
              <span>{a.time}</span>
              <span>{a.module}</span>
              <span>{a.event}</span>
              <span>{a.action}</span>
              <span>{a.severity}</span>
            </div>
          ))
        ) : (
          <p className="no-actions">✅ Inga automatiska åtgärder utförda ännu.</p>
        )}
      </div>

      <section className="resp-summary">
        <h2>Sammanfattning</h2>
        <p>
          Totalt {actions.length} åtgärder registrerade.  
          Senaste aktivitet övervakas kontinuerligt via Event Bus.
        </p>
      </section>

      <footer className="resp-footnote">
        ⚙️ Nästa version (V10.7) kommer integrera direkt med MergX Core Runtime för att exekvera faktiska systemåtgärder (API calls, användar-blockering, endpoint isolering).
      </footer>
    </div>
  );
}
