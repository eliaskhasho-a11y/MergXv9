import fs from "fs";
const components = [
  "DashboardOverview","AiAnalys","KpiPanel","Handelser","Schema","Uppgifter","Chatt","Prestanda",
  "LagerOversikt","Artiklar","Bristvarningar","LagerAforslag","Budget","Fakturor","Kostnader",
  "KassaFlode","Kunder","Leads","Kommunikation","Kundportal","AiKarna","AiCoach","AiRapporter",
  "Uppladdning","Bibliotek","Noteringar","Forsaljning","KostnadMarginal","KpiExport",
  "Roller","Integrationer","Sakerhet"
];

const basePath = "./src/pages/";

const template = (name) => `
