import React, { useEffect, useState } from "react";
import "./UserDirectory.css";
import { useAiEvents } from "../components/ai/AiEventBus";

/*
  User Directory & Auth-Sync — MergX V9
  --------------------------------------
  • Hantera användare, roller, status
  • Knyter till AdminSettings-roller
  • Lagring i localStorage
  • Förberett för API-synk i V10
*/

const STORAGE_KEY = "mergx-users-v9";

const DEFAULT_USERS = [
  { id: 1, name: "Elias Khasho", email: "elias@mergx.com", role: "Admin", status: "Active" },
  { id: 2, name: "Sara Berg", email: "sara@mergx.com", role: "Sales", status: "Active" },
  { id: 3, name: "Jonas Ek", email: "jonas@mergx.com", role: "Developer", status: "Inactive" },
];

export default function UserDirectory() {
  const { emitEvent } = useAiEvents();
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_USERS;
  });
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Viewer" });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;
    const user = {
      ...newUser,
      id: Date.now(),
      status: "Active",
    };
    setUsers([user, ...users]);
    emitEvent({
      module: "UserDirectory",
      type: "info",
      message: `Ny användare tillagd: ${user.name} (${user.role})`,
    });
    setNewUser({ name: "", email: "", role: "Viewer" });
  };

  const toggleStatus = (id) => {
    setUsers((arr) =>
      arr.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u
      )
    );
  };

  const deleteUser = (id) => {
    const target = users.find((u) => u.id === id);
    if (!window.confirm(`Ta bort ${target.name}?`)) return;
    setUsers((arr) => arr.filter((u) => u.id !== id));
    emitEvent({
      module: "UserDirectory",
      type: "alert",
      message: `Användare borttagen: ${target.name}`,
    });
  };

  const changeRole = (id, role) => {
    setUsers((arr) => arr.map((u) => (u.id === id ? { ...u, role } : u)));
    const target = users.find((u) => u.id === id);
    emitEvent({
      module: "UserDirectory",
      type: "info",
      message: `${target?.name || "Användare"} roll ändrad till ${role}`,
    });
  };

  return (
    <div className="userdir glass-panel">
      <header className="userdir-header">
        <h1>User Directory & Auth-Sync</h1>
        <p>Hantera användare, roller och åtkomst i MergX V9</p>
      </header>

      {/* Ny användare */}
      <form onSubmit={addUser} className="userform">
        <input
          placeholder="Namn"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          placeholder="E-post"
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option>Admin</option>
          <option>Developer</option>
          <option>Sales</option>
          <option>Viewer</option>
        </select>
        <button type="submit">➕ Lägg till</button>
      </form>

      {/* Sökfält */}
      <div className="search">
        <input
          placeholder="Sök användare …"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista */}
      <div className="usergrid">
        {filtered.length === 0 ? (
          <p className="muted">Inga användare matchar sökningen.</p>
        ) : (
          filtered.map((u) => (
            <div key={u.id} className={`usercard ${u.status === "Inactive" ? "inactive" : ""}`}>
              <div className="uc-top">
                <h3>{u.name}</h3>
                <span className={`status ${u.status.toLowerCase()}`}>{u.status}</span>
              </div>
              <p>{u.email}</p>
              <div className="role-select">
                <label>Roll:</label>
                <select value={u.role} onChange={(e) => changeRole(u.id, e.target.value)}>
                  <option>Admin</o
