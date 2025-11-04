import React from "react";
import { NavLink } from "react-router-dom";

const groups = [
  {
    label: "Dashboard",
    items: [
      { to: "/dashboard/overview", label: "Översikt" },
      { to: "/dashboard/ai-summary", label: "AI-analys" },
      { to: "/dashboard/kpi", label: "KPI-panel" },
      { to: "/dashboard/events", label: "Händelser" },
    ],
  },
  {
    label: "Ekonomi & Bokföring",
    items: [
      { to: "/economy/total-budget", label: "Total budget" },
      { to: "/economy/invoices", label: "Fakturor" },
      { to: "/economy/costs", label: "Kostnader" },
      { to: "/economy/cashflow", label: "Kassaflöde" },
    ],
  },
  {
    label: "CRM & Kunder",
    items: [
      { to: "/crm/customers", label: "Kunder" },
      { to: "/crm/leads", label: "Leads" },
      { to: "/crm/communication", label: "Kommunikation" },
      { to: "/crm/portal", label: "Kundportal" },
    ],
  },
  {
    label: "Lager & Inventarie",
    items: [
      { to: "/inventory/overview", label: "Översikt" },
      { to: "/inventory/items", label: "Artiklar / SKU" },
      { to: "/inventory/shortages", label: "Bristvarningar" },
      { to: "/inventory/ai-suggestions", label: "AI-förslag" },
    ],
  },
  {
    label: "Anställda & Team",
    items: [
      { to: "/team/schedule", label: "Schema" },
      { to: "/team/tasks", label: "Uppgifter" },
      { to: "/team/chat", label: "Chatt" },
      { to: "/team/performance", label: "Prestanda" },
    ],
  },
  {
    label: "Filer & Inställningar",
    items: [
      { to: "/files/upload", label: "Uppladdning" },
      { to: "/files/library", label: "Bibliotek" },
      { to: "/files/notes", label: "Noteringar" },
      { to: "/settings/roles", label: "Roller/Behörighet" },
      { to: "/settings/integrations", label: "Integrationer" },
      { to: "/settings/security", label: "Säkerhet" },
    ],
  },
];

export default function ModuleNav() {
  return (
    <nav>
      <input
        placeholder="Snabbsök modul…"
        className="w-full mb-3 px-3 py-2 rounded-xl"
        style={{
          background: "var(--panel)",
          border: "1px solid var(--border)",
          backdropFilter: "var(--glass)",
          WebkitBackdropFilter: "var(--glass)",
          color: "var(--text)",
        }}
      />
      {groups.map((g) => (
        <div key={g.label} className="mt-4">
          <p className="uppercase tracking-wide text-xs" style={{ color: "var(--muted)" }}>
            {g.label}
          </p>
          <div className="mt-2 space-y-1">
            {g.items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${isActive ? "bg-white/10" : "hover:bg-white/5"}`
                }
                style={{
                  border: "1px solid transparent",
                  color: "var(--text)",
                }}
              >
                • {it.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
