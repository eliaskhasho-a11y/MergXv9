import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Alerts() {
  const alerts = [
    { id: 1, produkt: "Lightning kabel 27 W", nivå: "Kritisk" },
    { id: 2, produkt: "Norah Airflow 2.0", nivå: "Låg" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Bristvarningar</h1>
      {alerts.map((a) => (
        <Card key={a.id} title={a.produkt}>
          <p className="text-sm opacity-80">Lagerstatus: {a.nivå}</p>
        </Card>
      ))}
      <GuidelineFoot />
    </div>
  );
}
