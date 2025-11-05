import React, { useState, useEffect } from "react";
import { useAiEvents } from "../components/ai/AiEventBus";
import "./AiAuthGateway.css";

export default function AiAuthGateway() {
  const { emitEvent } = useAiEvents();

  const [form, setForm] = useState({ email: "", password: "" });
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null,
    user: null,
  });

  const mockUsers = [
    { email: "elias@mergx.com", password: "admin123", role: "Admin" },
    { email: "sofia@mergx.com", password: "dev123", role: "Developer" },
    { email: "jonas@mergx.com", password: "view123", role: "Viewer" },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("mergx-auth-user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setAuthState({ isAuthenticated: true, ...parsed });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const match = mockUsers.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() &&
        u.password === form.password
    );

    if (match) {
      const session = { user: match.email, role: match.role };
      localStorage.setItem("mergx-auth-user", JSON.stringify(session));
      setAuthState({ isAuthenticated: true, ...session });
      emitEvent({
        module: "Auth",
        type: "info",
        message: `${match.email} inloggad som ${match.role}`,
      });
    } else {
      emitEvent({
        module: "Auth",
        type: "alert",
        message: "Fel e-post eller lösenord",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("mergx-auth-user");
    setAuthState({ isAuthenticated: false, role: null, user: null });
    emitEvent({
      module: "Auth",
      type: "warning",
      message: "Användaren har loggat ut.",
    });
  };

  if (authState.isAuthenticated) {
    return (
      <div className="ai-auth glass-panel">
        <h1>Välkommen tillbaka</h1>
        <p>
          Inloggad som <strong>{authState.user}</strong> (
          <span className={`role role-${authState.role.toLowerCase()}`}>
            {authState.role}
          </span>
          )
        </p>
        <button className="logout-btn" onClick={handleLogout}>
          Logga ut
        </button>
      </div>
    );
  }

  return (
    <div className="ai-auth glass-panel">
      <h1>MergX AI Gateway</h1>
      <p>Logga in för att komma åt AI-systemet</p>

      <form onSubmit={handleLogin} className="auth-form">
        <label>E-postadress</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <label>Lösenord</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit" className="login-btn">
          Logga in
        </button>
      </form>

      <footer className="auth-footnote">
        🔐 Nästa version (V10.2) lägger till riktig JWT-token och OAuth2.0-integration mot MergX Cloud.
      </footer>
    </div>
  );
}
