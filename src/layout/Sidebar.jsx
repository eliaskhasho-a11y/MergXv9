import React from "react";
import ModuleNav from "@/components/navigation/ModuleNav";

export default function Sidebar() {
  return (
    <div
      className="rounded-2xl p-3"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        backdropFilter: "var(--glass)",
        WebkitBackdropFilter: "var(--glass)",
      }}
    >
      <div className="px-2 py-3">
        <div className="text-sm opacity-80">MergX</div>
        <div className="text-lg font-semibold">V9</div>
      </div>
      <ModuleNav />
    </div>
  );
}
