import React, { useEffect, useState } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiRuntimeConfigCenter.css";

export default function AiRuntimeConfigCenter() {
  const { emitEvent } = useAiEvents();

  const defaultProfiles = {
    Development: {
      mode: "Auto",
      responsiveness: 80,
      energyBudget: 70,
      diagnostics: true,
    },
    Staging: {
      mode: "Auto",
      responsiveness: 60,
      energyBudget: 50,
      diagnostics: true,
    },
    Production: {
      mode: "Manual",
      responsiveness: 40,
      energyBudget: 90,
      diagnostics: false,
    },
  };

  const [profiles, setProfiles] = useState(() => {
    const saved = localStorage.getItem("mergx-ai-profiles");
    return saved ? JSON.parse(saved) : defaultProfiles;
  });

  const [activeProfile, setActiveProfile] = useState(
    localStorage.getItem("mergx-ai-active") || "Development"
  );

  const [config, setConfig] = useState(profiles[activeProfile]);

  // Spara konfiguration automatiskt
  useEffect(() => {
    localStorage.setItem("mergx-ai-profiles", JSON.stringify(profiles));
    localStorage.setItem("mergx-ai-active", activeProfile);
  }, [profiles, activeProfile]);

  const handleSwitchProfile = (name) => {
    setActiveProfile(name);
    setConfig(profiles[name]);
    emitEvent({
      module: "System",
      type: "info",
      message: `AI-profil växlad till ${name}.`,
    });
  };

  const handleChange = (key, value) => {
    const updated = { ...config, [key]: value };
    setConfig(updated);
    setProfiles({ ...profiles, [activeProfile]: updated });
    emitEvent({
      module: "System",
      type: "info",
      message: `${key} ändrad till ${value}`,
    });
  };

  const handleReset = () => {
    setProfiles(defaultProfiles);
    setConfig(defaultProfiles[activeProfile]);
    emitEvent({
      module: "System",
      type: "alert",
      message: "AI-konfiguration återställd till standardvärden.",
    });
  };

  return (
    <div className="ai-runtime glass-panel">
      <header className="runtime-header">
        <h1>AI Runtime Configuration Center</h1>
        <p>Hantera och lagra systeminställningar för olika miljöer</p>
      </header>

      <section className="profile-select">
        <h2>Aktiv Profil</h2>
        <div className="profile-buttons">
          {Object.keys(profiles).map((p) => (
            <button
              key={p}
              className={p === activeProfile ? "active" : ""}
              onClick={() => handleSwitchProfile(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      <section className="profile-settings">
        <h2>Inställningar för {activeProfile}</h2>

        <div className="setting">
          <label>Driftläge</label>
          <select
            value={config.mode}
            onChange={(e) => handleChange("mode", e.target.value)}
          >
            <option>Auto</option>
            <option>Manual</option>
          </select>
        </div>

        <div className="setting">
          <label>Responsnivå</label>
          <input
            type="range"
            min="0"
            max="100"
            value={config.responsiveness}
            onChange={(e) =>
              handleChange("responsiveness", Number(e.target.value))
            }
          />
          <span>{config.responsiveness}%</span>
        </div>

        <div className="setting">
          <label>Energi-Budget</label>
          <input
            type="range"
            min="0"
            max="100"
            value={config.energyBudget}
            onChange={(e) =>
              handleChange("energyBudget", Number(e.target.value))
            }
          />
          <span>{config.energyBudget}%</span>
        </div>

        <div className="setting toggle">
          <label>Diagnostik</label>
          <input
            type="checkbox"
            checked={config.diagnostics}
            onChange={(e) => handleChange("diagnostics", e.target.checked)}
          />
        </div>

        <button className="reset-btn" onClick={handleReset}>
          Återställ till standard
        </button>
      </section>

      <footer className="runtime-footnote">
        💾 All data sparas lokalt och laddas automatiskt vid start.
        Nästa version (V9.8) integrerar detta med moln-synk mot MergX Cloud.
      </footer>
    </div>
  );
}
