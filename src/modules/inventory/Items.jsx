import React, { useState } from "react";
import Card from "@/components/ui/Card";
import TableInlineEdit from "@/components/shared/TableInlineEdit";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Items() {
  const [items, setItems] = useState([
    { id: 1, namn: "USB-C kabel 60 W", antal: 120 },
    { id: 2, namn: "Bil-laddare Dual 30 W", antal: 64 },
  ]);

  const update = (id, key, val) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [key]: val } : i)));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Artiklar / SKU</h1>
      <Card>
        <table className="w-full text-sm">
          <thead><tr><th>Produkt</th><th>Antal</th></tr></thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td><TableInlineEdit value={i.namn} onSave={(v)=>update(i.id,"namn",v)} /></td>
                <td><TableInlineEdit value={i.antal} onSave={(v)=>update(i.id,"antal",v)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
