import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TableInlineEdit from "@/components/shared/TableInlineEdit";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Customers() {
  const [customers, setCustomers] = useState([
    { id: 1, namn: "Power Uppsala", kontakt: "Anna Lund", telefon: "070-321 88 10" },
    { id: 2, namn: "Elon Lidingö", kontakt: "Johan Ek", telefon: "070-654 22 89" },
  ]);

  const update = (id, key, val) =>
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [key]: val } : c))
    );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Kunder</h1>
      <Card title="Kundlista">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left opacity-70">
              <th>Namn</th><th>Kontakt</th><th>Telefon</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td><TableInlineEdit value={c.namn} onSave={(v)=>update(c.id,"namn",v)} /></td>
                <td><TableInlineEdit value={c.kontakt} onSave={(v)=>update(c.id,"kontakt",v)} /></td>
                <td><TableInlineEdit value={c.telefon} onSave={(v)=>update(c.id,"telefon",v)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Button variant="secondary" onClick={()=>alert("Export till CSV snart tillgänglig")}>
        Exportera kunddata
      </Button>
      <GuidelineFoot />
    </div>
  );
}
