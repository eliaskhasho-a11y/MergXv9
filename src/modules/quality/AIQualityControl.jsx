import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function AIQualityControl() {
  const [reports, setReports] = useState([
    { id: 1, title: "Ekonomi-analys", accuracy: "98 %", status: "OK" },
    { id: 2, title: "CRM insikter", accuracy: "93 %", status: "Behöver granskning" },
  ]);

  const review = (id) => {
    setReports((prev)=>prev.map((r)=>
      r.id===id?{...r,status:"Granskad"}:r
    ));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI Quality Control</h1>
      {reports.map((r)=>(
        <Card key={r.id} title={r.title}>
          <p className="text-sm opacity-80 mb-1">Precision: {r.accuracy}</p>
          <p className="text-sm mb-3">Status: {r.status}</p>
          {r.status!=="Granskad" && (
            <Button variant="secondary" onClick={()=>review(r.id)}>Markera som granskad</Button>
          )}
        </Card>
      ))}
      <GuidelineFoot />
    </div>
  );
}
