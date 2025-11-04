import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function VersionHistory() {
  const history = [
    { version: "8.100", date: "2025-11-03", desc: "Stabil kärnrelease" },
    { version: "9.0", date: "2025-11-04", desc: "Arkitektur-omstart + B2B-stöd" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Versionshistorik</h1>
      <Card>
        <ul className="list-disc ml-5">
          {history.map((v) => (
            <li key={v.version}>
              <span className="font-semibold">{v.version}</span> – {v.date}  
              <p className="opacity-80 text-sm">{v.desc}</p>
            </li>
          ))}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
