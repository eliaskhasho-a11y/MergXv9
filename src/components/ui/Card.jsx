import React from "react";

export default function Card({ title, children, footer }) {
  return (
    <div
      className="rounded-2xl p-4 mb-4"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        backdropFilter: "var(--glass)",
      }}
    >
      {title && <h3 className="text-lg mb-2 opacity-90">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-3 pt-3 border-t border-white/10">{footer}</div>}
    </div>
  );
}
