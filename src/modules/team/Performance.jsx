import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Performance() {
  const metrics = [
    { namn: "Lina Karlsson", mål: "12 möten / vecka", resultat: "14 möten ✓" },
    { namn: "Erik Svensson", mål: "20 offerter / månad", resultat: "17 pågående" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Prestanda</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {metrics.map((m, i) => (
          <Card key={i} title={m.namn}>
            <p className="text-sm opacity-80">Mål: {m.mål}</p>
            <p className="text-sm">Status: {m.resultat}</p>
          </Card>
        ))}
      </div>
      <GuidelineFoot />
    </div>
  );
}
