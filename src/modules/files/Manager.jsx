import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Manager() {
  const [files, setFiles] = useState([
    { id: 1, name: "Q4_budget.xlsx", size: "320 KB" },
    { id: 2, name: "Produktkatalog.pdf", size: "2.3 MB" },
  ]);

  const upload = () => {
    alert("Filuppladdning kommer i V9.2 via API");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Filer & Dokument</h1>
      <Card>
        <table className="w-full text-sm">
          <thead>
            <tr className="opacity-70 text-left">
              <th>Namn</th><th>Storlek</th><th>Åtgärd</th>
            </tr>
          </thead>
          <tbody>
            {files.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                <td>{f.size}</td>
                <td>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => alert(`Öppnar ${f.name}`)}
                  >
                    Öppna
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <Button onClick={upload}>＋ Ladda upp fil</Button>
        </div>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
