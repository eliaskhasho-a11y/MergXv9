import React, { useState } from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Leads() {
  const [leads, setLeads] = useState({
    Ny: ["Tech Pro AB", "Mobilshoppen Sthlm"],
    Pågår: ["Digital Partner Umeå"],
    Avslutad: ["Phone Lab Göteborg"],
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Leads – Kanban</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(leads).map(([stage, list]) => (
          <Card key={stage} title={stage}>
            <ul className="space-y-2">
              {list.map((l) => (
                <li
                  key={l}
                  className="px-3 py-2 rounded-md bg-white/5 border border-white/10 cursor-grab"
                >
                  {l}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <GuidelineFoot />
    </div>
  );
}
