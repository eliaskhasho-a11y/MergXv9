import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function MemorySummary() {
  const summary = [
    { date: "2025-11-04", content: "3 möten sparade • 1 AI-rapport granskad" },
    { date: "2025-11-03", content: "Ekonomirapport genererad • AI kvalitet 98 %" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Memory Summary</h1>
      <Card>
        <ul className="list-disc ml-5">
          {summary.map((s, i)=>(
            <li key={i}>
              <span className="font-medium">{s.date}</span> – {s.content}
            </li>
          ))}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
