import { mockDb } from "@/lib/mockDb";
import { apiClient } from "@/lib/apiClient";

const handlers = {
  getBudget: async () => mockDb.economy.totalBudget,
  getInvoices: async () => mockDb.economy.invoices,
  getCosts: async () => mockDb.economy.costs,
  remindOverdue: async (id) => {
    const inv = mockDb.economy.invoices.find((x) => x.id === id);
    if (!inv) throw new Error("Invoice not found");
    return { id, status: "ReminderDrafted" };
  },
};

export const economyService = {
  async fetchBudget() {
    const { ok, data, error } = await apiClient.get(handlers.getBudget);
    if (!ok) throw new Error(error);
    return data;
  },
  async fetchInvoices() {
    const { ok, data, error } = await apiClient.get(handlers.getInvoices);
    if (!ok) throw new Error(error);
    return data;
  },
  async fetchCosts() {
    const { ok, data, error } = await apiClient.get(handlers.getCosts);
    if (!ok) throw new Error(error);
    return data;
  },
  async draftOverdueReminder(id) {
    const { ok, data, error } = await apiClient.post(handlers.remindOverdue, { id });
    if (!ok) throw new Error(error);
    return data;
  },
};
