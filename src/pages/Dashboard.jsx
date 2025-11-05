import React, { useState, useEffect } from "react";
import "./Dashboard.css";

// Mock-data för kartan (butiker)
const mockStores = [
  { name: "Elon Kista", lat: 59.403, lng: 17.946, note: "Vill köpa om 20 dagar" },
  { name: "Power Täby", lat: 59.447, lng: 18.072, note: "Intresserad av laddare" },
  { name: "Mekonomen Solna", lat: 59.367, lng: 18.006, note: "Behöver prislista" },
];

// Mock för chatt
const mockMessages = [
  { sender: "Elias", text: "Hej team, hur ser dagens rutter ut?" },
  { sender: "Sara", text: "Jag tar norra rutten – Elon och Power." },
  { sender: "AI", text: "Förslag: Lägg till besök hos Mekonomen Solna på vägen." },
];

export default function Dashboard() {
  const [messages, setMessages] = useState(mockMessages);
  const [newMsg, setNewMsg] = useState("");

  const handleSend = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { sender: "Du", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="dashboard-page">
      <h1>MergX V9 Dashboard</h1>
      <p className="subtitle">Smarter · Simpler · Stronger</p>

      {/* KPI-sektion */}
      <div className="kpi-row">
        <div className="kpi-card glass">
          <h3>Intäkter</h3>
          <p>532 000 kr</p>
        </div>
        <div className="kpi-card glass">
          <h3>Kostnader</h3>
          <p>345 900 kr</p>
        </div>
        <div className="kpi-card glass">
          <h3>Resultat</h3>
          <p>186 100 kr</p>
        </div>
        <div className="kpi-card glass">
          <h3>Lagerstatus</h3>
          <p>94 %</p>
        </div>
      </div>

      {/* AI-Karta */}
      <div className="map-section glass">
        <h2>🗺️ AI-Karta – Försäljningsrutter</h2>
        <div className="mock-map">
          {mockStores.map((store, i) => (
            <div key={i} className="store-pin">
              📍 {store.name}  
              <span className="store-note">{store.note}</span>
            </div>
          ))}
        </div>
        <small>AI-baserad planering (mock-data). Kommande version kopplas mot Google Places API.</small>
      </div>

      {/* Teamchatt */}
      <div className="chat-section glass">
        <h2>💬 Teamchatt</h2>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender === "Du" ? "me" : ""}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Skriv ett meddelande..."
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Skicka</button>
        </div>
      </div>

      {/* AI-aktivitet */}
      <div className="ai-feed glass">
        <h2>🤖 AI-Aktivitet</h2>
        <ul>
          <li>✅ Uppdaterade försäljningsrutter – 10:32</li>
          <li>📊 Genererade rapport: “Ekonomisk balans – Q4”</li>
          <li>💡 Förslag: “Minska lagerkostnad för USB-C 1 m kablar”</li>
        </ul>
      </div>
    </div>
  );
}
