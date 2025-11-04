import React from "react";
import Card from "@/components/ui/Card";
import { useAICore } from "@/context/AICoreContext";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AIAnalysis() {
  const { messages, sendMessage } = useAICore();
  const [msg, setMsg] = React.useState("");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-analys</h1>

      <Card>
        <div className="h-[300px] overflow-y-auto mb-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`mb-2 ${
                m.sender === "ai" ? "text-cyan-300" : "text-white"
              }`}
            >
              <strong>{m.sender === "ai" ? "AI:" : "Du:"}</strong> {m.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Ställ en fråga till AI…"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            onClick={() => {
              if (!msg.trim()) return;
              sendMessage(msg);
              setMsg("");
            }}
          >
            Skicka
          </Button>
        </div>
      </Card>

      <GuidelineFoot />
    </div>
  );
}
