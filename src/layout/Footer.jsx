import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 py-4">
      <div
        className="rounded-2xl px-4 py-3 text-sm"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          backdropFilter: "var(--glass)",
          WebkitBackdropFilter: "var(--glass)",
          color: "var(--muted)"
        }}
      >
        <div>MergX V9 • Dark Glass • © {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
