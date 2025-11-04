import React, { useState } from "react";

export default function Omnibox() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <>
      <input
        placeholder="Tryck / för att söka överallt..."
        onFocus={() => setVisible(true)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="hidden"
      />
      {visible && (
        <div
          className="fixed inset-0 z-50 flex justify-center pt-40 bg-black/40"
          onClick={() => setVisible(false)}
        >
          <div
            className="w-[600px] rounded-2xl p-5"
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              backdropFilter: "var(--glass)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sök moduler, kunder, artiklar..."
              className="w-full px-4 py-2 rounded-xl mb-3"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            />
            <div className="text-sm opacity-70">Snart kopplad till global sök-API.</div>
          </div>
        </div>
      )}
    </>
  );
}
