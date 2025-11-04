import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-xl text-sm"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        backdropFilter: "var(--glass)",
        color: "var(--text)",
      }}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
