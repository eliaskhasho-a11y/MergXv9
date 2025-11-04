import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function B2BIntegration() {
  const [connected, setConnected] = useState(false);

  const connect = () => {
    setConnected(true);
    alert("B2B-konto anslutet – mock API kommer i V9.1");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">B2B Integration (Enterprise Mode)</h1>
      <Card>
        {!connected ? (
          <div>
            <p className="opacity-80 mb-3">
              Anslut ditt B2B-konto för att synka grossistpriser, volymrabatter och kundspecifika order.
            </p>
            <Button onClick={connect}>Anslut B2B-konto</Button>
          </div>
        ) : (
          <div>
            <p className="text-emerald-400 mb-3">✅ B2B-konto anslutet</p>
            <Button variant="secondary" onClick={()=>setConnected(false)}>Koppla från</Button>
          </div>
        )}
      </Card>
      <GuidelineFoot />
    </div>
  );
}
