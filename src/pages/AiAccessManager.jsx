import React, { useState, useEffect } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiAccessManager.css";

export default function AiAccessManager() {
  const { emitEvent } = useAiEvents();

  const [users, setUsers] = useState([
    { id: 1, name: "Elias", role: "Admin" },
    { id: 2, name: "MergX AI", role: "AI-Agent" },
    { id: 3, name: "Sofia", role: "Developer" },
    { id: 4, name: "Jonas", role: "Viewer" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [roles] = useState(["Admin", "Developer", "Viewer", "AI-Agent"]);

  useEffect(() => {
    emitEvent({
      module: "Access",
      type: "info",
      message: "AI Access Manager initierad.",
    });
  }, []);

  const handleSelect = (user) => {
    setSelectedUser(user);
  };

  const handleRoleChange = (role) => {
    const updated = users.map((u) =>
      u.id === selectedUser.id ? { ...u, role } : u
    );
    setUsers(updated);
    setSelectedUser({ ...selectedUser, role });
    emitEvent({
      module: "Access",
      type: "warning",
      message: `${selectedUser.name} ändrad till roll: ${role}`,
    });
  };

  return (
    <div className="ai-access glass-panel">
      <header className="access-header">
        <h1>AI Access Manager</h1>
        <p>Hantera roller, behörigheter och AI-åtkomstnivåer</p>
      </header>

      <section className="access-users">
        <h2>Användare</h2>
        <div className="user-list">
          {users.map((u) => (
            <div
              key={u.id}
              className={`user-item ${
                selectedUser && selectedUser.id === u.id ? "active" : ""
              }`}
              onClick={() => handleSelect(u)}
            >
              <span className="name">{u.name}</span>
              <span className={`role role-${u.role.toLowerCase()}`}>
                {u.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {selectedUser && (
        <section className="access-details">
          <h2>Detaljer</h2>
          <p>
            <strong>Namn:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Nuvarande roll:</strong>{" "}
            <span className={`role role-${selectedUser.role.toLowerCase()}`}>
              {selectedUser.role}
            </span>
          </p>

          <label>Ändra roll</label>
          <select
            value={selectedUser.role}
            onChange={(e) => handleRoleChange(e.target.value)}
          >
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </section>
      )}

      <footer className="access-footnote">
        🔐 Nästa version (V10.1) integrerar detta med MergX Identity Service och
        token-baserad auth.
      </footer>
    </div>
  );
}
