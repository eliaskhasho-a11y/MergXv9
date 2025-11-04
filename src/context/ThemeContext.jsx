import React, { createContext, useState, useContext, useEffect } from "react";
import { darkTheme } from "@/theme/darkTheme";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      Object.entries(darkTheme).forEach(([k, v]) =>
        root.style.setProperty(k, v)
      );
    } else {
      Object.entries(darkTheme).forEach(([k, v]) =>
        root.style.removeProperty(k)
      );
      root.style.background = "#fff";
      root.style.color = "#111";
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
