import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppProviders, BaseLoader, BaseErrorBoundary } from "./App";

/**
 * TEMPORÄR SHELL:
 * Vi ersätter denna med den riktiga <AppShell /> i Del 2.
 * Den här garanterar att appen kan starta direkt i V9 repo:t.
 */
function TempShell({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b0f14",
      color: "#E8F0F8",
      display: "flex"
    }}>
      <aside style={{
        width: 260,
        display: "none" /* visas när Sidebar kommer i Del 2 */
      }}/>
      <main style={{ flex: 1, padding: "20px" }}>
        <header style={{
          marginBottom: 16,
          opacity: 0.85
        }}>
          <strong>MergX V9</strong> — Back-to-Core
        </header>
        {children}
      </main>
    </div>
  );
}

/**
 * BootScreen:
 * Första landningsvyn tills Dashboard-filerna är på plats.
 * När vi lägger in riktiga dashboard routes kan vi göra "/" -> redirect.
 */
function BootScreen() {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.06)",
      padding: 20,
      borderRadius: 16
    }}>
      <h1 style={{ marginTop: 0 }}>Välkommen till MergX V9</h1>
      <p style={{ opacity: 0.85 }}>
        Basen är igång. I nästa steg ersätter vi skalet med AppShell,
        lägger in sidomeny, dark glass theme och riktiga moduler.
      </p>
      <ul>
        <li>Dashboard → Overview, AI-analys, KPI, Händelser</li>
        <li>Ekonomi → Total budget, Fakturor, Kostnader, Kassaflöde</li>
        <li>CRM → Kunder, Leads, Kommunikation, Portal</li>
        <li>Lager → Översikt, Artiklar, Brist, AI-förslag</li>
        <li>Team → Schema, Uppgifter, Chatt, Prestanda</li>
        <li>Filer → Uppladdning, Bibliotek, Noteringar</li>
        <li>Inställningar → Roller, Integrationer, Säkerhet</li>
      </ul>
    </div>
  );
}

/**
 * LAZY ROUTES (förberett):
 * Vi definierar lazy imports för modulerna. De kommer inte laddas förrän
 * du navigerar dit, så repo:t kompilerar även om filerna inte finns än.
 * När du lägger in faktiska filer använder du dessa sökvägar.
 */
const DashboardOverview = lazy(() => import("../modules/dashboard/Overview.jsx"));
const DashboardAI = lazy(() => import("../modules/dashboard/AIAnalysis.jsx"));
const DashboardKPI = lazy(() => import("../modules/dashboard/KPI.jsx"));
const DashboardEvents = lazy(() => import("../modules/dashboard/Events.jsx"));

const EconomyTotal = lazy(() => import("../modules/economy/TotalBudget.jsx"));
const EconomyInvoices = lazy(() => import("../modules/economy/Invoices.jsx"));
const EconomyCosts = lazy(() => import("../modules/economy/Costs.jsx"));
const EconomyCash = lazy(() => import("../modules/economy/Cashflow.jsx"));

const CRMCustomers = lazy(() => import("../modules/crm/Customers.jsx"));
const CRMLeads = lazy(() => import("../modules/crm/Leads.jsx"));
const CRMComm = lazy(() => import("../modules/crm/Communication.jsx"));
const CRMPortal = lazy(() => import("../modules/crm/Portal.jsx"));

const InvOverview = lazy(() => import("../modules/inventory/Overview.jsx"));
const InvItems = lazy(() => import("../modules/inventory/Items.jsx"));
const InvShortages = lazy(() => import("../modules/inventory/Alerts.jsx"));
const InvAISuggest = lazy(() => import("../modules/inventory/AISuggestions.jsx"));

const TeamSchedule = lazy(() => import("../modules/team/Schedule.jsx"));
const TeamTasks = lazy(() => import("../modules/team/Tasks.jsx"));
const TeamChat = lazy(() => import("../modules/team/Chat.jsx"));
const TeamPerf = lazy(() => import("../modules/team/Performance.jsx"));

const FilesUpload = lazy(() => import("../modules/files/Upload.jsx"));
const FilesLibrary = lazy(() => import("../modules/files/Library.jsx"));
const FilesNotes = lazy(() => import("../modules/files/Notes.jsx"));

const SetRoles = lazy(() => import("../modules/settings/Roles.jsx"));
const SetIntegrations = lazy(() => import("../modules/settings/Integrations.jsx"));
const SetSecurity = lazy(() => import("../modules/settings/Security.jsx"));

/**
 * ROUTER:
 * Vi använder en top-level AppProviders, ErrorBoundary och Suspense.
 * TempShell ersätts i Del 2 med AppShell (riktig layout, nav, topbar).
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <BootScreen />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },

  // Dashboard
  {
    path: "/dashboard/overview",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <DashboardOverview />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },
  {
    path: "/dashboard/ai-summary",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <DashboardAI />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },
  {
    path: "/dashboard/kpi",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <DashboardKPI />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },
  {
    path: "/dashboard/events",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <DashboardEvents />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },

  // Economy
  {
    path: "/economy/total-budget",
    element: (
      <AppProviders>
        <BaseErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <TempShell>
              <EconomyTotal />
            </TempShell>
          </Suspense>
        </BaseErrorBoundary>
      </AppProviders>
    ),
  },
  { path: "/economy/invoices", element: wrap(<EconomyInvoices />) },
  { path: "/economy/costs", element: wrap(<EconomyCosts />) },
  { path: "/economy/cashflow", element: wrap(<EconomyCash />) },

  // CRM
  { path: "/crm/customers", element: wrap(<CRMCustomers />) },
  { path: "/crm/leads", element: wrap(<CRMLeads />) },
  { path: "/crm/communication", element: wrap(<CRMComm />) },
  { path: "/crm/portal", element: wrap(<CRMPortal />) },

  // Inventory
  { path: "/inventory/overview", element: wrap(<InvOverview />) },
  { path: "/inventory/items", element: wrap(<InvItems />) },
  { path: "/inventory/shortages", element: wrap(<InvShortages />) },
  { path: "/inventory/ai-suggestions", element: wrap(<InvAISuggest />) },

  // Team
  { path: "/team/schedule", element: wrap(<TeamSchedule />) },
  { path: "/team/tasks", element: wrap(<TeamTasks />) },
  { path: "/team/chat", element: wrap(<TeamChat />) },
  { path: "/team/performance", element: wrap(<TeamPerf />) },

  // Files
  { path: "/files/upload", element: wrap(<FilesUpload />) },
  { path: "/files/library", element: wrap(<FilesLibrary />) },
  { path: "/files/notes", element: wrap(<FilesNotes />) },

  // Settings
  { path: "/settings/roles", element: wrap(<SetRoles />) },
  { path: "/settings/integrations", element: wrap(<SetIntegrations />) },
  { path: "/settings/security", element: wrap(<SetSecurity />) },

  // Redirects & 404
  { path: "/dashboard", element: <Navigate to="/dashboard/overview" replace /> },
  { path: "*", element: <Navigate to="/" replace /> },
]);

/** Liten hjälpare för att slippa upprepa wrappers */
function wrap(child) {
  return (
    <AppProviders>
      <BaseErrorBoundary>
        <Suspense fallback={<BaseLoader />}>
          <TempShell>{child}</TempShell>
        </Suspense>
      </BaseErrorBoundary>
    </AppProviders>
  );
}
