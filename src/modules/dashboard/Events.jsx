import React from "react";
import Card from "@/components/ui/Card";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Events() {
  const events = [
    { id: 1, text: "Order #1045 skapad av Lina", tid: "09:14" },
    { id: 2, text: "Ny kund – Power Uppsala", tid: "08:27" },
    { id: 3, text: "Leverans markerad som slutförd", tid: "07:43" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Händelser</h1>
      <Card>
        <ul className="space-y-2">
          {events.map((e) => (
            <li key={e.id} className="opacity-90">
              <span className="opacity-60 mr-2">{e.tid}</span>
              {e.text}
            </li>
          ))}
        </ul>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
