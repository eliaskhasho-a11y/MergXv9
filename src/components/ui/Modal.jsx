import React from "react";
import Button from "./Button";

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="rounded-2xl p-6 max-w-lg w-[90%]"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          backdropFilter: "var(--glass)",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button size="sm" variant="secondary" onClick={onClose}>
            ✕
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
