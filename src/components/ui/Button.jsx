import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  style = {},
}) {
  const base = {
    primary: {
      background: "var(--accent)",
      color: "#0B0F14",
    },
    secondary: {
      background: "var(--panel)",
      color: "var(--text)",
      border: "1px solid var(--border)",
    },
  }[variant];

  const sizing = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  }[size];

  return (
    <button
      onClick={onClick}
      className={`rounded-xl font-medium transition hover:opacity-90 ${sizing}`}
      style={{
        ...base,
        backdropFilter: "var(--glass)",
        WebkitBackdropFilter: "var(--glass)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
