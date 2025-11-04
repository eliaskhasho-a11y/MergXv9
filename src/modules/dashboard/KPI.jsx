import React from "react";
import Card from "@/components/ui/Card";
import StatusTag from "@/components/shared/StatusTag";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function KPI() {
  const kpis = [
    { mål: "Omsättning", värde: "1.2 M kr", status: "Ny" },
    { mål: "Bruttomarginal", värde: "42 %", status: "Viktig" },
    { mål: "Kundnöjdhet", värde: "93 %", status: "Klar" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">KPI-panel</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <Card key={k.mål} title={k.mål}>
            <p className="text-2xl font-semibold mb-1">{k.värde}</p>
            <StatusTag status={k.status} />
          </Card>
        ))}
      </div>

      <GuidelineFoot />
    </div>
  );
}
