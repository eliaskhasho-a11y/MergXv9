import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function MeetingMemory() {
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Sälj möte – Elon Lidingö", notes: "Diskuterade kampanj december 2025" },
  ]);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const save = () => {
    if (!title.trim()) return;
    setMeetings([...meetings, { id: Date.now(), title, notes: note }]);
    setTitle(""); setNote("");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Meeting Memory</h1>
      <Card>
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <Input label="Titel" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <Input label="Anteckning" value={note} onChange={(e)=>setNote(e.target.value)} />
        </div>
        <Button onClick={save}>Spara möte</Button>
      </Card>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {meetings.map((m)=>(
          <Card key={m.id} title={m.title}>
            <p className="text-sm opacity-80">{m.notes}</p>
          </Card>
        ))}
      </div>

      <GuidelineFoot />
    </div>
  );
}
