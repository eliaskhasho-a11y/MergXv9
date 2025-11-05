import React, { useState, useEffect } from "react";
import { Send, X, Bot } from "lucide-react";
import "./AICoach.css";
import AICoach from "./components/ai/AICoach";
...
<AICoach />

// --- Mock-funktion för att hämta aktuell modul ---
function getActiveModule() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("crm")) return "CRM";
  if (path.includes("ekonomi")) return "Ekonomi";
  if (path.includes("workspace")) return "Workspace";
  if (path.includes("project")) return "Project";
  if (path.includes("lager")) return "Lager";
  return "Dashboard";
}

// --- Mock-databas med tips per modul ---
const aiKnowledge = {
  Dashboard: [
    "Dashboard visar nyckeltal från alla moduler.",
    "Du kan klicka på varje KPI-kort för att expandera analysen.",
    "Använd AI-ikonen för att få rekommendationer i realtid."
  ],
  CRM: [
    "I CRM hittar du kundregister och fakturering.",
    "AI kan föreslå nästa kontakt baserat på försäljningsdata.",
    "Du kan filtrera kunder efter region och status."
  ],
  Ekonomi: [
    "Ekonomimodulen visar intäkter, kostnader och vinst.",
    "AI kan varna om kommande likviditetsrisker.",
    "Exportera rapporter som CSV via menyknappen uppe till höger."
  ],
  Workspace: [
    "Workspace fungerar som din personliga Notion-yta.",
    "Skapa dokument, anteckningar och länka dem till projekt.",
    "Team Workspace delar filer och statusuppdateringar med hela teamet."
  ],
  Project: [
    "Projektmodulen är Trello-liknande.",
    "Du kan skapa kolumner för statusar och dra-och-släppa uppgifter.",
    "AI kan föreslå deadlines baserat på tidigare projektdata."
  ],
  Lager: [
    "Lager visar realtidsstatus och produktnivåer.",
    "AI föreslår automatiska inköp när lager går under 30 %.",
    "Du kan koppla leverantörer till produkter via Lagerinställningar."
  ]
};

export default function AICoach() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hej 👋 Jag är din MergX-Coach. Vad vill du ha hjälp med idag?" },
  ]);
  const [input, setInput] = useState("");
  const [activeModule, setActiveModule] = useState("Dashboard");

  useEffect(() => {
    setActiveModule(getActiveModule());
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // simulera AI-svar beroende på modul
    setTimeout(() => {
      const tips = aiKnowledge[activeModule];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      const aiMsg = {
        sender: "ai",
        text: `📍 (${activeModule}) ${randomTip}`
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 700);
  };

  return (
    <>
      {/* Flytande AI-knapp */}
      <button className="ai-coach-btn glass-panel" onClick={() => setOpen(!open)}>
        <Bot size={22} />
      </button>

      {/* Chat-popup */}
      {open && (
        <div className="ai-chat glass-panel">
          <div className="chat-header">
            <div className="ai-avatar"><Bot size={18} /></div>
            <h3>MergX Coach</h3>
            <button className="close-btn" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder={`Fråga något om ${activeModule}...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
