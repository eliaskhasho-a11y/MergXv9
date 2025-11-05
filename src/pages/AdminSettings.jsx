import React, { useEffect, useState } from "react";
import "./AdminSettings.css";
import { useAiEvents } from "../components/ai/AiEventBus";

/*
  Admin Settings & RoleAccess – MergX V9
  --------------------------------------
  •  Definiera roller
  •  Slå på/av moduler per roll
  •  Spara till localStorage
  •  Skicka AI-notiser via EventBus
*/

const STORAGE_KEY = "mergx-role-access-v9";

const DEFAULT_STRUCTURE = {
  Admin: {
    allowed: ["Dashboard","CRM","Projects","Workspace","Economy","Energy","Maintenance","Security","Analytics","SystemHealth"],
  },
  Developer: {
    allowed: ["Dashboard","Projects","Workspace","Analytics","SystemHealth","Maintenance"],
  },
  Sales: {
    allowed: ["Dashboard","CRM","Projects","Workspace"],
  },
  Viewer: {
    allowed: ["Dashboard","Workspace"],
  },
};

const ALL_MODULES = [
  "Dashboard",
  "CRM",
  "Projects",
  "Workspace",
  "Economy",
  "Energy",
  "Maintenance",
  "Security",
  "Analytics",
  "SystemHealth",
];

export default function AdminSettings() {
  const { emitEvent } = useAiEvents();
  const [roles, setRoles] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_STRUCTURE;
  });
  const [selectedRole, setSelectedRole] = useState("Admin");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roles));
  }, [roles]);

  const toggleModule = (role, module) => {
    setRoles((prev) => {
      const current = new Set(prev[role].allowed);
      if (current.has(module)) current.delete(module);
      else current.add(module);
      const updated = { ...prev, [role]: { allowed: [...current] } };
      emitEvent({
        module: "AdminSettings",
        type: "info",
        message: `${module} ${current.has(module) ? "aktiverad" : "avstängd"} för ${role}`,
      });
      return updated;
    });
  };

  const addRole = () => {
    const name = prompt("Namn på ny roll:");
    if (!name) return;
    setRoles((r) => ({ ...r, [name]: { allowed: [] } }));
    setSelectedRole(name);
    emitEvent({ module: "AdminSettings", type: "info", message: `Ny roll skapad: ${name}` });
  };

  const deleteRole = (role) => {
    if (!window.confirm(`Ta bort rollen ${role}?`)) return;
    setRoles((r) => {
      const clone = { ...r };
      delete clone[role];
      return clone;
    });
    setSelectedRole("Admin");
    emitEvent({ module: "AdminSettings", type: "alert", message: `Roll borttagen: ${role}` });
  };

  return (
    <div className="adminsettings glass-panel">
      <header className="settings-header">
        <h1>Admin Settings & RoleAccess</h1>
        <p>Hantera åtkomst och synlighet för moduler i MergX V9</p>
      </heade
