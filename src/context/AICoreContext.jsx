import React, { createContext, useContext, useState } from "react";

const AICoreContext = createContext();
export const useAICore = () => useContext(AICoreContext);

export function AICoreProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    // mock tills backend/AI-nav kopplas
    setMessages((m) => [...m, { sender: "user", text: msg }]);
    setTimeout(() => {
      setMessages((m) => [...m, { sender: "ai", text: "AI-svar: analys kommer här." }]);
    }, 600);
  };

  return (
    <AICoreContext.Provider value={{ messages, sendMessage }}>
      {children}
    </AICoreContext.Provider>
  );
}
