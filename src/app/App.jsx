import React from "react";

/**
 * AppProviders:
 * Här kommer vi (i Del 3) lägga ThemeProvider, AuthProvider, AICoreProvider m.m.
 * Nu är det en lättvikt-wrapper så appen kan starta direkt.
 */
export function AppProviders({ children }) {
  return <>{children}</>;
}

/**
 * BaseLoader:
 * En enkel glas-laddare som visas när lazy-loaded routes hämtas.
 * Kan bytas till skeletons när vi lägger in design-systemet.
 */
export function BaseLoader() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#0b0f14",
      color: "#E8F0F8"
    }}>
      <div style={{
        padding: "16px 20px",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px) saturate(120%)",
        background: "rgba(255,255,255,0.06)"
      }}>
        Laddar MergX V9…
      </div>
    </div>
  );
}

/**
 * BaseErrorBoundary:
 * Fångar fel från lazy routes. Enkel & robust.
 */
export class BaseErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0b0f14",
          color: "#E8F0F8",
          padding: 24
        }}>
          <div style={{
            padding: 20,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            maxWidth: 680
          }}>
            <h2 style={{ marginTop: 0 }}>Ett fel uppstod</h2>
            <p style={{ opacity: 0.8 }}>
              {this.state.error?.message || "Okänt fel."}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
