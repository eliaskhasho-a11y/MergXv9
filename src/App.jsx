import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/glass.css";

// Importera alla sidor
import {
  DashboardOverview, AiAnalys, KpiPanel, Handelser,
  Schema, Uppgifter, Chatt, Prestanda,
  LagerOversikt, Artiklar, Bristvarningar, LagerAiForslag,
  Budget, Fakturor, Kostnader, Kassaflode,
  Kunder, Leads, Kommunikation, Kundportal,
  AiKarna, AiCoach, AiRapporter,
  Uppladdning, Bibliotek, Noteringar,
  Forsaljning, KostnadMarginal, KpiExport,
  Roller, Integrationer, Sakerhet,
} from "./pages/index.jsx";

// 🔧 Enkel fallback-komponent (visas om något är fel)
const NotFound = () => (
  <div className="glass-card p-6">
    <h1 className="text-xl font-semibold text-red-400">Sidan kunde inte hittas</h1>
    <p className="text-zinc-400 mt-2">
      Kontrollera att din komponent finns i <code>src/pages/index.jsx</code>.
    </p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* Sidomeny */}
        <Sidebar />

        {/* Huvudyta */}
        <main className="main-area ml-64">
          {/* Toppbar */}
          <div className="topbar glass-card">
            <div className="title">MergX V9 — AI-driven affärs- & analysplattform</div>
            <div className="badge">Dark / Glass</div>
          </div>

          {/* Innehållsrouting */}
          <div className="space-y-6">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/ai-analys" element={<AiAnalys />} />
              <Route path="/kpi-panel" element={<KpiPanel />} />
              <Route path="/handelser" element={<Handelser />} />

              {/* Anställda & Team */}
              <Route path="/schema" element={<Schema />} />
              <Route path="/uppgifter" element={<Uppgifter />} />
              <Route path="/chatt" element={<Chatt />} />
              <Route path="/prestanda" element={<Prestanda />} />

              {/* Lager & Inventarie */}
              <Route path="/lager-oversikt" element={<LagerOversikt />} />
              <Route path="/artiklar" element={<Artiklar />} />
              <Route path="/bristvarningar" element={<Bristvarningar />} />
              <Route path="/lager-ai-forslag" element={<LagerAiForslag />} />

              {/* Ekonomi & Bokföring */}
              <Route path="/budget" element={<Budget />} />
              <Route path="/fakturor" element={<Fakturor />} />
              <Route path="/kostnader" element={<Kostnader />} />
              <Route path="/kassaflode" element={<Kassaflode />} />

              {/* CRM & Kunder */}
              <Route path="/kunder" element={<Kunder />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/kommunikation" element={<Kommunikation />} />
              <Route path="/kundportal" element={<Kundportal />} />

              {/* AI-Kärna & Coach */}
              <Route path="/ai-karna" element={<AiKarna />} />
              <Route path="/ai-coach" element={<AiCoach />} />
              <Route path="/ai-rapporter" element={<AiRapporter />} />

              {/* Filer & Bilagor */}
              <Route path="/uppladdning" element={<Uppladdning />} />
              <Route path="/bibliotek" element={<Bibliotek />} />
              <Route path="/noteringar" element={<Noteringar />} />

              {/* Rapporter & Analys */}
              <Route path="/forsaljning" element={<Forsaljning />} />
              <Route path="/kostnad-marginal" element={<KostnadMarginal />} />
              <Route path="/kpi-export" element={<KpiExport />} />

              {/* Inställningar & Roller */}
              <Route path="/roller" element={<Roller />} />
              <Route path="/integrationer" element={<Integrationer />} />
              <Route path="/sakerhet" element={<Sakerhet />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
