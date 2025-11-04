import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AINav() {
  const sections = [
    { name: "Analys av ekonomi", route: "/economy/totalbudget" },
    { name: "CRM-insikter", route: "/crm/customers" },
    { name: "AI-förslag för lager", route: "/inventory/aisuggestions" },
    { name: "What-If-Studio", route: "/ai/whatifstudio" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI-Nav</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Card key={s.name} title={s.name}>
            <p className="text-sm opacity-70 mb-3">
              Snabb åtkomst till AI-drivna insikter och verktyg.
            </p>
            <Button variant="secondary" onClick={()=>alert(`${s.name} öppnas`)}>Öppna</Button>
          </Card>
        ))}
      </div>
      <GuidelineFoot />
    </div>
  );
}
