import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import GuidelineFoot from "@/components/shared/GuidelineFoot";

export default function General() {
  const [company, setCompany] = useState("Acetek Group AB");
  const [lang, setLang] = useState("sv");

  const save = () => alert("Inställningar sparas i nästa version (API)");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Allmänt – Inställningar</h1>
      <Card>
        <Input label="Företagsnamn" value={company} onChange={(e)=>setCompany(e.target.value)} />
        <label className="mt-3 block text-sm opacity-70">Språk</label>
        <select
          value={lang}
          onChange={(e)=>setLang(e.target.value)}
          className="px-3 py-2 rounded-xl bg-[var(--panel)] border border-[var(--border)] text-[var(--text)]"
        >
          <option value="sv">Svenska</option>
          <option value="en">English</option>
          <option value="fi">Suomi</option>
        </select>
        <div className="mt-4"><Button onClick={save}>Spara inställningar</Button></div>
      </Card>
      <GuidelineFoot />
    </div>
  );
}
