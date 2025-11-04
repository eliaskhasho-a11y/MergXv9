import { apiClient } from "@/lib/apiClient";

// Mockad AI – ersätt handler med riktig endpoint när redo.
const handlers = {
  ask: async ({ prompt }) => {
    const lower = String(prompt).toLowerCase();
    if (lower.includes("kassaflöde")) {
      return "AI: Kassaflödet ser stabilt ut; rekommenderar 12% lagerökning i Region Syd.";
    }
    return "AI: Noterat. Analys och rekommendationer kommer i nästa steg.";
  },
};

export const aiService = {
  async ask(prompt) {
    const { ok, data, error } = await apiClient.post(handlers.ask, { prompt });
    if (!ok) throw new Error(error);
    return data;
  },
};
