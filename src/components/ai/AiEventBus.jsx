import React, { createContext, useContext, useEffect, useState } from "react";
import "./AiEventBus.css";

/*
  AI Event Bus Context
  --------------------
  Skapar en central hubb för AI-händelser i realtid.
  Varje komponent kan:
    - lyssna på händelser via useAiEvents()
    - skicka nya händelser via emitEvent()
*/

const AiEventContext = createContext();

export function AiEventProvider({ children }) {
  const [events, setEvents] = useState([]);

  // Skicka ny händelse
  const emitEvent = (event) => {
    const evt = {
      id: Date.now(),
      time: new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }),
      ...event,
    };
    setEvents((prev) => [evt, ...prev]);
  };

  // Simulera inkommande AI-händelser var 10:e sekund
  useEffect(() => {
    const timer = setInterval(() => {
      emitEvent({
        module: "System",
        type: "info",
        message: "Realtidsanslutning testad – AI-EventBus aktiv.",
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AiEventContext.Provider value={{ events, emitEvent }}>
      {children}
      <div className="ai-eventbus-feed">
        {events.slice(0, 3).map((e) => (
          <div key={e.id} className={`bus-item type-${e.type}`}>
            <div className="bus-header">
              <span>{e.time}</span>
              <strong>{e.module}</strong>
            </div>
            <p>{e.message}</p>
          </div>
        ))}
      </div>
    </AiEventContext.Provider>
  );
}

// Hook för att använda EventBus
export const useAiEvents = () => useContext(AiEventContext);
