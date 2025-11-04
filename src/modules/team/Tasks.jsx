import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function Tasks() {
  const [tasks, setTasks] = useState(["Kontakta Power Sthlm", "Skicka offert till Elon"]);
  const add = () => {
    const t = prompt("Ny uppgift:");
    if (t) setTasks([...tasks, t]);
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Uppgifter</h1>
      <Card>
        <ul className="space-y-2 mb-3">{tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
        <Button onClick={add}>＋ Lägg till uppgift</Button>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
