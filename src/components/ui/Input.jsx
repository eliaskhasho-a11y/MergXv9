import React from "react";

export default function Input({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span className="opacity-70">{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-xl px-3 py-2"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          backdropFilter: "var(--glass)",
        }}
      />
    </label>
  );
}
