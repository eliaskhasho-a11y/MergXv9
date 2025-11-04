import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Overview() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Lager – Översikt</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Totalt antal SKU"><p className="text-2xl font-semibold">1 482</p></Card>
        <Card title="Lågt i lager"><p className="text-2xl font-semibold text-amber-300">34</p></Card>
        <Card title="Utgående produkter"><p className="text-2xl font-semibold text-red-400">5</p></Card>
      </div>
      <GuidelineFoot />
    </div>
  );
}
