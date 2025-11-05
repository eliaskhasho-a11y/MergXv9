import React, { useState, useEffect } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiSystemControlPanel.css";

export default function AiSystemControlPanel() {
  const { emitEvent } = useAiEvents();
  const [settings, setSettings] = useState({
    mode: "Auto",
    responsiveness: 70,
    energyBudget: 60,
    diagnostics: true,
  });

  useEffect(() => {
    emitEvent({
      module: "System",
      type: "info",
      message: `AI-kontrollpanel initierad i ${settings.mode}-läge.`,
    });
  }, []);

  const toggleMode = () => {
    const newMode = settings.mode === "Auto" ? "Manual" : "Auto";
    setSettings({ ...settings, mode: newMode });
    emitEvent({
      module: "System",
      type: "warning",
      message: `AI-läge ändrat till ${newMode}.`,
    });
  };

  const handleSlider = (key, value) => {
    setSettings({ ...settings, [key]: value });
    emitEvent({
      module: "System",
      type: "info",
      message: `${key} uppdaterad till ${value}%`,
    });
  };

  const toggleDiagnostics = () => {
    const newVal = !settings.diagnostics;
    setSettings({ ...settings, diagnostics: newVal });
    emitEvent({
      module: "System",
      type: newVal ? "info" : "alert",
      message: `Diagnostik ${newVal ? "aktiverad" : "avstängd"}.`,
    });
  };

  return (
    <div className="ai-control glass-panel">
      <header className="control-header">
        <h1>AI System Control Panel</h1>
        <p>Justera, optimera och kontrollera MergX-AI-motorn</p>
      </header>

      <section className="control-section">
        <h2>Driftläge</h2>
        <div className={`mode-box ${settings.mode.toLowerCase()}`}>
          <h3>{settings.mode}</h3>
          <button onClick={toggleMode}>
            Växla till {settings.mode === "Auto" ? "Manual" : "Auto"}
          </button>
        </div>
      </section>

      <section className="control-section">
        <h2>AI Responsnivå</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={settings.responsiveness}
          onChange={(e) => handleSlider("responsiveness", e.target.value)}
        />
        <p>{settings.responsiveness}%</p>
      </section>

      <section className="control-section">
        <h2>Energi-Budget</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={settings.energyBudget}
          onChange={(e) => handleSlider("energyBudget", e.target.value)}
        />
        <p>{settings.energyBudget}%</p>
      </section>

      <section className="control-section">
        <h2>Diagnostik</h2>
        <label className="switch">
          <input
            type="checkbox"
            checked={settings.diagnostics}
            onChange={toggleDiagnostics}
          />
          <span className="slider"></span>
        </label>
        <p>{settings.diagnostics ? "Aktiverad" : "Avstängd"}</p>
      </section>

      <footer className="control-footnote">
        ⚙️ Nästa version (V9.7) kommer koppla dessa inställningar direkt till MergX Runtime-API och realtids-AI-konfiguration.
      </footer>
    </div>
  );
}
