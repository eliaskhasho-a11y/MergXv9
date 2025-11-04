import React from "react";

export default function StatusTag({ status }) {
  const map = {
    Ny: "#00E5C0",
    Viktig: "#FACC15",
    Risk: "#F43F5E",
    Klar: "#10B981",
  };
  const color = map[status] || "#888";
  return (
    <span
      className="px-2 py-[2px] rounded-md text-xs"
      style={{
        background: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {status}
    </span>
  );
}
