import React from "react";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-30"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-4 md:px-6 py-3 flex items-center gap-3">
        <div
          className="px-3 py-2 rounded-xl"
          style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            backdropFilter: "var(--glass)",
            WebkitBackdropFilter: "var(--glass)",
          }}
        >
          <span className="text-sm opacity-80">Back-to-Core</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Placeholder: global omnibox kommer senare */}
          <input
            placeholder="Sök ( / )"
            className="hidden md:block px-3 py-2 rounded-xl"
            style={{
              width: 240,
              background: "var(--panel)",
              border: "1px solid var(--border)",
              backdropFilter: "var(--glass)",
              WebkitBackdropFilter: "var(--glass)",
              color: "var(--text)",
            }}
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
