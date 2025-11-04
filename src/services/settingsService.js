import { apiClient } from "@/lib/apiClient";

const handlers = {
  saveGeneral: async (payload) => ({ ok: true, ...payload }),
  toggleB2B: async (active) => ({ active }),
};

export const settingsService = {
  async saveGeneral(payload) {
    const { ok, data, error } = await apiClient.post(handlers.saveGeneral, payload);
    if (!ok) throw new Error(error);
    return data;
  },
  async setB2B(active) {
    const { ok, data, error } = await apiClient.post(handlers.toggleB2B, { active });
    if (!ok) throw new Error(error);
    return data;
  },
};
