import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function QuickCreateDrawer() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("kund");

  const handleCreate = () => {
    console.log("Skapar ny", type);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>＋ Snabb-skapa</Button>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-end z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="h-full w-[340px] p-5 overflow-y-auto"
            style={{
              background: "var(--panel)",
              borderLeft: "1px solid var(--border)",
              backdropFilter: "var(--glass)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg mb-3">Snabb-skapa {type}</h3>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mb-3 px-3 py-2 rounded-xl w-full"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              <option value="kund">Kund</option>
              <option value="order">Order</option>
              <option value="uppgift">Uppgift</option>
            </select>
            <Input label="Namn" placeholder="Ange namn" />
            <Input label="Beskrivning" placeholder="Kort beskrivning" />
            <div className="mt-4 flex gap-2">
              <Button onClick={handleCreate}>Spara</Button>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Avbryt
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
