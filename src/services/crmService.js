import { mockDb } from "@/lib/mockDb";
import { apiClient } from "@/lib/apiClient";

const handlers = {
  getCustomers: async () => mockDb.crm.customers,
  getLeads: async () => mockDb.crm.leads,
  upsertCustomer: async (payload) => {
    const i = mockDb.crm.customers.findIndex((c) => c.id === payload.id);
    if (i >= 0) mockDb.crm.customers[i] = payload;
    else mockDb.crm.customers.push({ ...payload, id: Date.now() });
    return payload;
  },
};

export const crmService = {
  async fetchCustomers() {
    const { ok, data, error } = await apiClient.get(handlers.getCustomers);
    if (!ok) throw new Error(error);
    return data;
  },
  async fetchLeads() {
    const { ok, data, error } = await apiClient.get(handlers.getLeads);
    if (!ok) throw new Error(error);
    return data;
  },
  async saveCustomer(customer) {
    const { ok, data, error } = await apiClient.post(handlers.upsertCustomer, customer);
    if (!ok) throw new Error(error);
    return data;
  },
};
