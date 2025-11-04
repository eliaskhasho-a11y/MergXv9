import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [txt, setTxt] = useState("");

  const send = () => {
    if (!txt.trim()) return;
    setMessages([...messages, { from: "Du", text: txt }]);
    setTxt("");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Team-chatt</h1>
      <Card>
        <div className="h-[250px] overflow-y-auto mb-3">
          {messages.map((m, i) => (
            <div key={i}><strong>{m.from}:</strong> {m.text}</div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input placeholder="Skriv meddelande…" value={txt} onChange={(e)=>setTxt(e.target.value)} />
          <Button onClick={send}>Skicka</Button>
        </div>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
