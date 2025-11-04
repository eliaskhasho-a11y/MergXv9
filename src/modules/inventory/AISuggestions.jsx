import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AISuggestions() {
  const tips = [
    "Öka beställning av USB-C kablar 60 W med +25 %.",
    "Flytta lager för Norah Airflow 2.0 till Region Syd.",
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-förslag</h1>
      <Card>
        <ul className="list-disc ml-5 space-y-1">
          {tips.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
