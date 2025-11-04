import React, { useState } from "react";

export default function FilterChips({ options = [], onSelect }) {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => {
            setActive(o);
            onSelect?.(o);
          }}
          className={`px-3 py-1 rounded-xl text-sm ${
            active === o ? "bg-white/10" : "hover:bg-white/5"
          }`}
          style={{
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
