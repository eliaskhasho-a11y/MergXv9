import React from "react";

const UserDirectory = () => {
  const users = [
    { id: 1, name: "Elias Khasho", role: "Admin" },
    { id: 2, name: "Anna Svensson", role: "User" },
  ];

  const changeRole = (id, newRole) => {
    console.log(`Changed role for user ${id} to ${newRole}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Directory</h1>
      <p>Hantera användare och roller i systemet</p>

      {users.map((u) => (
        <div key={u.id} style={{ marginBottom: "1rem" }}>
          <p>
            <strong>{u.name}</strong> — {u.role}
          </p>
          <label>Roll:</label>
          <select
            value={u.role}
            onChange={(e) => changeRole(u.id, e.target.value)}
          >
            <option>Admin</option>
            <option>User</option>
            <option>Viewer</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default UserDirectory;
