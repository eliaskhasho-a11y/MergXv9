import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AIReports() {
  const reports = [
    { id: 1, title: "Ekonomi – Q4 2025 Trendanalyser", date: "2025-11-01" },
    { id: 2, title: "CRM – Kundaktivitet oktober", date: "2025-11-03" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-Rapporter</h1>
      {reports.map((r) => (
        <Card key={r.id} title={r.title}>
          <p className="text-sm opacity-70 mb-3">Genererad: {r.date}</p>
          <Button variant="secondary" onClick={()=>alert("Visar rapport")}>Visa rapport</Button>
        </Card>
      ))}
      <GuidelineFoot />
    </div>
  );
}
