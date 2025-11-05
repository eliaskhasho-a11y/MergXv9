import React, { useState, useEffect } from "react";
import "./AiNotificationBridge.css";

// Enkel simulering av central event-bus (ersätts senare med socket / backend)
export default function AiNotificationBridge({ onNewNotification }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulerade inkommande AI-händelser (mock)
    const mockEvents = [
      {
        id: 1,
        module: "Ekonomi",
        type: "info",
        message: "Resultatmålet för Q2 överträffat med 5 %.",
        time: "10:11",
      },
      {
        id: 2,
        module: "Lager",
        type: "warning",
        message: "Svinn över 3 %. Lagerrevision initierad.",
        time: "10:14",
      },
    ];
    setEvents(mockEvents);

    // Simulera inkommande realtids-event efter 5 sekunder
    const timer = setTimeout(() => {
      const newEvt = {
        id: Date.now(),
        module: "CRM",
        type: "alert",
        message: "Kundnöjdhet under 85 %. Åtgärd genererad av AI.",
        time: "10:20",
      };
      setEvents((prev) => [newEvt, ...prev]);
      onNewNotification?.(newEvt); // skicka till Notification Hub
    }, 5000);

    return () => clearTimeout(timer);
  }, [onNewNotification]);

  return (
    <div className="ai-bridge glass-panel">
      <h2>AI Notification Bridge</h2>
      <p className="bridge-desc">
        Realtidskoppling mellan AI-Action Engine, Audit Feed och Notification Hub.
      </p>

      <div className="bridge-list">
        {events.map((e) => (
          <div key={e.id} className={`bridge-item type-${e.type}`}>
            <div className="bridge-header">
              <span className="time">{e.time}</span>
              <span className="module">{e.module}</span>
            </div>
            <p>{e.message}</p>
          </div>
        ))}
      </div>

      <small className="bridge-footnote">
        🔗 Nästa version synkar mot MergX AI-Bus & Realtime WebSocket-API.
      </small>
    </div>
  );
}
