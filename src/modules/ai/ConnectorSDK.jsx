import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function ConnectorSDK() {
  const [connected, setConnected] = useState(false);

  const connect = () => {
    setConnected(true);
    alert("Connector SDK aktiv – mock API kommer i V9.2");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Connector SDK</h1>
      <Card>
        {!connected ? (
          <>
            <p className="opacity-80 mb-3">
              SDK för att koppla MergX mot externa system (Fortnox, Sheets, AI-Nav m.m.)
            </p>
            <Button onClick={connect}>Initiera SDK</Button>
          </>
        ) : (
          <>
            <p className="text-emerald-400 mb-3">✅ SDK aktivt och redo</p>
            <Button variant="secondary" onClick={()=>setConnected(false)}>Koppla från</Button>
          </>
        )}
      </Card>
      <GuidelineFoot />
    </div>
  );
}
