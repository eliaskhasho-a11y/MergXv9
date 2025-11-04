import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";
import Button from "@/components/ui/Button";

export default function Overview() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard • Översikt</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Total försäljning">
          <p className="text-2xl font-semibold">1 245 000 kr</p>
          <p className="text-sm opacity-70">+12 % sedan förra månaden</p>
        </Card>
        <Card title="Aktiva kunder">
          <p className="text-2xl font-semibold">327</p>
          <p className="text-sm opacity-70">+7 nya denna vecka</p>
        </Card>
        <Card title="Levererade ordrar">
          <p className="text-2xl font-semibold">892</p>
          <p className="text-sm opacity-70">Senaste 30 dagarna</p>
        </Card>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <Card title="AI-kommentar">
          <p className="text-sm opacity-80">
            “MergX noterar en stadig ökning i försäljning mot Q4-prognosen.
            Föreslår att vi förstärker lagret i Region Syd.”
          </p>
          <Button variant="secondary" size="sm" style={{ marginTop: 12 }}>
            Läs full analys
          </Button>
        </Card>
        <Card title="Snabbåtgärder">
          <div className="flex flex-col gap-2">
            <Button>Skapa ny order</Button>
            <Button variant="secondary">Lägg till kund</Button>
            <Button variant="secondary">Planera möte</Button>
          </div>
        </Card>
      </div>

      <GuidelineFoot />
    </div>
  );
}
