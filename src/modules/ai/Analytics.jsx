import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Analytics() {
  const insights = [
    "Försäljningen ökar +8 % QoQ – högst tillväxt i Region Syd.",
    "Genomsnittligt ordervärde ökade från 2 850 kr till 3 200 kr.",
    "Rekommenderad lagerbalans – ökning +18 % för USB-C kablar.",
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-Analys & Insikter</h1>
      <Card>
        <ul className="list-disc ml-5">
          {insights.map((i, idx)=><li key={idx}>{i}</li>)}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
