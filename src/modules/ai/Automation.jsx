import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Automation() {
  const [rules, setRules] = useState([
    { id: 1, name: "Skicka varningsmail när lager < 10 artiklar", active: true },
    { id: 2, name: "Notifiera AI-coach vid ny kund", active: false },
  ]);

  const toggle = (id) =>
    setRules((prev)=>prev.map((r)=>r.id===id?{...r,active:!r.active}:r));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-Automationer</h1>
      {rules.map((r)=>(
        <Card key={r.id} title={r.name}>
          <p className="text-sm opacity-80 mb-3">
            Status: {r.active? "Aktiv ✅":"Inaktiv ⚪"}
          </p>
          <Button variant="secondary" onClick={()=>toggle(r.id)}>
            {r.active? "Stäng av":"Aktivera"}
          </Button>
        </Card>
      ))}
      <GuidelineFoot />
    </div>
  );
}
