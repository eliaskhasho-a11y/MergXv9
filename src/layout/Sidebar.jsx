import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>MergX V9</h2>
      <nav>
        <NavLink to="/">🏠 Dashboard</NavLink>
        <NavLink to="/crm">📇 CRM</NavLink>
        <NavLink to="/ekonomi">💰 Ekonomi</NavLink>
        <NavLink to="/lager">📦 Lager</NavLink>
      </nav>
    </aside>
  );
}
