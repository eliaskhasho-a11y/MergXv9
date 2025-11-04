import React from "react";

export default function ToggleSwitch({ checked, onChange }) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className="relative w-12 h-6 rounded-full cursor-pointer"
      style={{
        background: checked ? "var(--accent)" : "rgba(255,255,255,0.2)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="absolute top-[2px] left-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform duration-300"
        style={{
          transform: checked ? "translateX(24px)" : "translateX(0)",
        }}
      />
    </div>
  );
}
