import React, { useState } from "react";
import { Send, X, Bot } from "lucide-react";
import "./AICoach.css";

export default function AICoach() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hej 👋 Jag är din MergX-Coach. Vad vill du ha hjälp med idag?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // placeholder-svar – kopplas till MergX-AI i V10
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Jag förstår. Det här är något jag kan guida dig igenom i nästa uppdatering 💡" },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Flytande AI-knapp */}
      <button className="ai-coach-btn glass-panel" onClick={() => setOpen(!open)}>
        <Bot size={22} />
      </button>

      {/* Popup-chat */}
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
              placeholder="Skriv ett meddelande..."
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
