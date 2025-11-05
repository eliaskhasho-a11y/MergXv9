import React, { useState, useEffect } from "react";
import "./AiNotificationHub.css";

export default function AiNotificationHub() {
  const [notifications, setNotifications] = useState([]);

  // Simulerade AI-notiser – framtida version hämtar från Action Engine + Audit Feed API
  useEffect(() => {
    const init = [
      {
        id: 1,
        type: "info",
        title: "Ekonomisk analys klar",
        message: "AI bekräftar att resultatet överstiger målnivåerna för Q2.",
        time: "09:58",
      },
      {
        id: 2,
        type: "warning",
        title: "Lageravvikelse",
        message: "Svinn över 3 % upptäckt – åtgärd registrerad i Action Engine.",
        time: "10:02",
      },
    ];
    setNotifications(init);

    // Automatisk simulering av ny notis efter 6 sekunder
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "alert",
          title: "Kundnöjdhet",
          message: "CRM-AI flaggar NKI < 85 %. Åtgärd skapad.",
          time: "10:07",
        },
        ...prev,
      ]);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Stäng notifiering
  const dismiss = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  return (
    <div className="ai-hub">
      {notifications.map((n) => (
        <div key={n.id} className={`toast toast-${n.type}`}>
          <div className="toast-header">
            <strong>{n.title}</strong>
            <span className="time">{n.time}</span>
          </div>
          <p>{n.message}</p>
          <button className="close-btn" onClick={() => dismiss(n.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
