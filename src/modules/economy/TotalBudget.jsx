import React, { useState } from "react";
import EconomicOverview from "@/components/charts/EconomicOverview";
import Card from "@/components/ui/Card";
import FilterChips from "@/components/shared/FilterChips";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function TotalBudget() {
  const [period, setPeriod] = useState("Månad");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Total budget</h1>

      <div className="mb-4">
        <FilterChips
          options={["Månad", "Kvartal", "År"]}
          onSelect={(p) => setPeriod(p)}
        />
      </div>

      <Card title={`Ekonomisk översikt (${period})`}>
        <EconomicOverview />
      </Card>

      <GuidelineFoot />
    </div>
  );
}
