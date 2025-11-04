import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Schedule() {
  const schedule = [
    { namn: "Lina Karlsson", dag: "Mån – Ons" },
    { namn: "Erik Svensson", dag: "Tor – Fre" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Schema</h1>
      <Card>
        <ul className="space-y-1">
          {schedule.map((s, i) => (
            <li key={i} className="opacity-90">
              {s.namn} • <span className="opacity-70">{s.dag}</span>
            </li>
          ))}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
