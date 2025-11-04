import { useTheme } from "../theme/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <span>🔹 MergX Admin Panel v9 – {theme.toUpperCase()} Mode</span>
      <button onClick={toggleTheme} className="theme-btn">
        Byt tema
      </button>
    </header>
  );
}
