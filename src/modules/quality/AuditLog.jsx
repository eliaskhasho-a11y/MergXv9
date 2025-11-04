import React, { useState } from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AuditLog() {
  const [logs] = useState([
    { id: 1, user: "AI-System", action: "Genererade rapport 'Ekonomi Q4'", time: "2025-11-04 10:32" },
    { id: 2, user: "Lina Karlsson", action: "Redigerade kund 'Power Uppsala'", time: "2025-11-04 09:18" },
    { id: 3, user: "System", action: "Lager synkroniserat med Fortnox", time: "2025-11-03 23:50" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Audit Log • Systemhändelser</h1>
      <Card>
        <table className="w-full text-sm">
          <thead className="opacity-70 text-left">
            <tr><th>Tid</th><th>Användare</th><th>Åtgärd</th></tr>
          </thead>
          <tbody>
            {logs.map((l)=>(
              <tr key={l.id}>
                <td className="pr-4">{l.time}</td>
                <td className="pr-4">{l.user}</td>
                <td>{l.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
