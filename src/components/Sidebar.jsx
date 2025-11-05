import { NavLink } from "react-router-dom";

const SectionTitle = ({ emoji, title }) => (
  <div className="mx-3 mt-6 mb-2 text-xs font-semibold tracking-wider text-zinc-400/80 uppercase flex items-center gap-2">
    <span className="text-sm">{emoji}</span>
    {title}
  </div>
);

const LinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      [
        "block mx-2 px-3 py-2 rounded-lg text-[13px]",
        "text-zinc-300/90 hover:text-white",
        "hover:bg-white/5 transition-colors",
        isActive ? "bg-white/10 text-white shadow-sm" : "bg-transparent",
      ].join(" ")
    }
  >
    <span className="relative pl-4">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-cyan-400/70 shadow-[0_0_8px_rgba(34,211,238,.45)]" />
      {label}
    </span>
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-64
        bg-zinc-900/40 backdrop-blur-xl border-r border-white/10
        shadow-[inset_0_1px_0_rgba(255,255,255,.06)]
        flex flex-col
      "
    >
      {/* Brand */}
      <div className="h-16 flex items-center px-4">
        <div className="w-full glass-card flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-semibold text-zinc-100">MergX V9</span>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
            GLASS / DARK
          </span>
        </div>
      </div>

      <div className="overflow-y-auto pb-8">
        {/* Dashboard */}
        <SectionTitle emoji="🏠" title="Dashboard" />
        <LinkItem to="/" label="Översikt" />
        <LinkItem to="/ai-analys" label="AI-analys" />
        <LinkItem to="/kpi-panel" label="KPI-panel" />
        <LinkItem to="/handelser" label="Händelser" />

        {/* Anställda & Team */}
        <SectionTitle emoji="👥" title="Anställda & Team" />
        <LinkItem to="/schema" label="Schema" />
        <LinkItem to="/uppgifter" label="Uppgifter" />
        <LinkItem to="/chatt" label="Chatt" />
        <LinkItem to="/prestanda" label="Prestanda" />

        {/* Lager & Inventarie */}
        <SectionTitle emoji="📦" title="Lager & Inventarie" />
        <LinkItem to="/lager-oversikt" label="Översikt" />
        <LinkItem to="/artiklar" label="Artiklar/SKU" />
        <LinkItem to="/bristvarningar" label="Bristvarningar" />
        <LinkItem to="/lager-ai-forslag" label="AI-förslag" />

        {/* Ekonomi & Bokföring */}
        <SectionTitle emoji="💰" title="Ekonomi & Bokföring" />
        <LinkItem to="/budget" label="Total budget" />
        <LinkItem to="/fakturor" label="Fakturor" />
        <LinkItem to="/kostnader" label="Kostnader" />
        <LinkItem to="/kassaflode" label="Kassaflöde" />

        {/* CRM & Kunder */}
        <SectionTitle emoji="🧾" title="CRM & Kunder" />
        <LinkItem to="/kunder" label="Kunder" />
        <LinkItem to="/leads" label="Leads" />
        <LinkItem to="/kommunikation" label="Kommunikation" />
        <LinkItem to="/kundportal" label="Kundportal" />

        {/* AI-Kärna & Coach */}
        <SectionTitle emoji="🧠" title="AI-Kärna & Coach" />
        <LinkItem to="/ai-karna" label="AI-kärna" />
        <LinkItem to="/ai-coach" label="AI-coach" />
        <LinkItem to="/ai-rapporter" label="AI-rapporter" />

        {/* Filer & Bilagor */}
        <SectionTitle emoji="📎" title="Filer & Bilagor" />
        <LinkItem to="/uppladdning" label="Uppladdning" />
        <LinkItem to="/bibliotek" label="Bibliotek" />
        <LinkItem to="/noteringar" label="Noteringar" />

        {/* Rapporter & Analys */}
        <SectionTitle emoji="📊" title="Rapporter & Analys" />
        <LinkItem to="/forsaljning" label="Försäljning" />
        <LinkItem to="/kostnad-marginal" label="Kostnad/Marginal" />
        <LinkItem to="/kpi-export" label="KPI & Export" />

        {/* Inställningar & Roller */}
        <SectionTitle emoji="⚙️" title="Inställningar & Roller" />
        <LinkItem to="/roller" label="Roller/Behörighet" />
        <LinkItem to="/integrationer" label="Integrationer" />
        <LinkItem to="/sakerhet" label="Säkerhet" />

        {/* Dolda tills v9.1 */}
        {/* <SectionTitle emoji="🗂️" title="Workspace & Projekt" />
        <LinkItem to="/workspace" label="Workspace" />
        <LinkItem to="/projects" label="Project" /> */}
      </div>
    </aside>
  );
}
