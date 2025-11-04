import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Integrations() {
  const integrations = [
    { name: "Fortnox API", status: "Klar för test" },
    { name: "Visma Connect", status: "Under utveckling" },
    { name: "Google Sheets Sync", status: "Kommer i V9.2" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Integrationer</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {integrations.map((i) => (
          <Card key={i.name} title={i.name}>
            <p className="text-sm opacity-80 mb-2">Status: {i.status}</p>
            <Button variant="secondary" onClick={() => alert(`${i.name} öppnas snart`)}>
              Hantera integration
            </Button>
          </Card>
        ))}
      </div>
      <GuidelineFoot />
    </div>
  );
}
