import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { AICoreProvider } from "@/context/AICoreContext";

/**
 * Kombinerar alla Providers för enkel import i App.jsx
 */
export function AppRootProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AICoreProvider>{children}</AICoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
