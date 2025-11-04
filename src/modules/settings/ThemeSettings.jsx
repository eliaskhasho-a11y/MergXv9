import React from "react";
import Card from "@/components/ui/Card";
import ThemeToggle from "@/components/shared/ThemeToggle";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function ThemeSettings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tema & Utseende</h1>
      <Card>
        <p className="mb-3 opacity-80">
          Växla mellan ljus / mörk läge och aktivera glas-effekter.
        </p>
        <ThemeToggle />
      </Card>
      <GuidelineFoot />
    </div>
  );
}
