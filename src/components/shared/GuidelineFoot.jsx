import React from "react";

export default function GuidelineFoot() {
  return (
    <div
      className="rounded-2xl p-3 mt-6 text-sm opacity-70"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        backdropFilter: "var(--glass)",
      }}
    >
      V9-Base Guidelines • Struktur och UI standardiserad för alla moduler • © MergX Labs
    </div>
  );
}
