import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function WhatIfStudio() {
  const [revenue, setRevenue] = useState(100000);
  const [cost, setCost] = useState(60000);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const profit = revenue - cost;
    const margin = ((profit / revenue) * 100).toFixed(1);
    setResult({ profit, margin });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">What-If Studio</h1>
      <Card>
        <p className="text-sm opacity-80 mb-3">
          Simulera resultat baserat på olika scenarier.
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <Input
            label="Intäkter (kr)"
            type="number"
            value={revenue}
            onChange={(e)=>setRevenue(Number(e.target.value))}
          />
          <Input
            label="Kostnader (kr)"
            type="number"
            value={cost}
            onChange={(e)=>setCost(Number(e.target.value))}
          />
        </div>
        <Button onClick={calculate}>Beräkna scenario</Button>
        {result && (
          <div className="mt-4 p-3 rounded-xl border border-white/10 bg-white/5">
            <p className="text-sm">Resultat: {result.profit.toLocaleString()} kr</p>
            <p className="text-sm">Marginal: {result.margin} %</p>
          </div>
        )}
      </Card>
      <GuidelineFoot />
    </div>
  );
}
