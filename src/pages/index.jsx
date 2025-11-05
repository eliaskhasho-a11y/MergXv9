import React from "react";

/** Liten generisk placeholder-komponent som ser prydlig ut */
function makePage(title, subtitle = "Den här sidan är en plats­hållare i V9.") {
  return function Page() {
    return (
      <div className="glass-card p-6">
        <h1 className="text-xl font-semibold text-zinc-100">{title}</h1>
        <p className="text-zinc-400 mt-2">{subtitle}</p>
      </div>
    );
  };
}

// Dashboard
export const DashboardOverview = makePage("Dashboard – Översikt");
export const AiAnalys = makePage("Dashboard – AI-analys");
export const KpiPanel = makePage("Dashboard – KPI-panel");
export const Handelser = makePage("Dashboard – Händelser");

// Anställda & Team
export const Schema = makePage("Anställda & Team – Schema");
export const Uppgifter = makePage("Anställda & Team – Uppgifter");
export const Chatt = makePage("Anställda & Team – Chatt");
export const Prestanda = makePage("Anställda & Team – Prestanda");

// Lager & Inventarie
export const LagerOversikt = makePage("Lager & Inventarie – Översikt");
export const Artiklar = makePage("Lager & Inventarie – Artiklar/SKU");
export const Bristvarningar = makePage("Lager & Inventarie – Bristvarningar");
export const LagerAiForslag = makePage("Lager & Inventarie – AI-förslag");

// Ekonomi & Bokföring
export const Budget = makePage("Ekonomi & Bokföring – Total budget");
export const Fakturor = makePage("Ekonomi & Bokföring – Fakturor");
export const Kostnader = makePage("Ekonomi & Bokföring – Kostnader");
export const Kassaflode = makePage("Ekonomi & Bokföring – Kassaflöde");

// CRM & Kunder
export const Kunder = makePage("CRM & Kunder – Kunder");
export const Leads = makePage("CRM & Kunder – Leads");
export const Kommunikation = makePage("CRM & Kunder – Kommunikation");
export const Kundportal = makePage("CRM & Kunder – Kundportal");

// AI-Kärna & Coach
export const AiKarna = makePage("AI-Kärna");
export const AiCoach = makePage("AI-Coach");
export const AiRapporter = makePage("AI-Rapporter");

// Filer & Bilagor
export const Uppladdning = makePage("Filer & Bilagor – Uppladdning");
export const Bibliotek = makePage("Filer & Bilagor – Bibliotek");
export const Noteringar = makePage("Filer & Bilagor – Noteringar");

// Rapporter & Analys
export const Forsaljning = makePage("Rapporter & Analys – Försäljning");
export const KostnadMarginal = makePage("Rapporter & Analys – Kostnad/Marginal");
export const KpiExport = makePage("Rapporter & Analys – KPI & Export");

// Inställningar & Roller
export const Roller = makePage("Inställningar – Roller/Behörighet");
export const Integrationer = makePage("Inställningar – Integrationer");
export const Sakerhet = makePage("Inställningar – Säkerhet");

// (Dolda – för v9.1)
// export const Workspace = makePage("Workspace");
// export const Projects = makePage("Project");
