import { mockDb } from "@/lib/mockDb";
import { apiClient } from "@/lib/apiClient";

const handlers = {
  getItems: async () => mockDb.inventory.items,
  getShortages: async () => mockDb.inventory.shortages,
  quickBuy: async (sku) => ({ sku, status: "PO_Drafted" }),
};

export const inventoryService = {
  async fetchItems() {
    const { ok, data, error } = await apiClient.get(handlers.getItems);
    if (!ok) throw new Error(error);
    return data;
  },
  async fetchShortages() {
    const { ok, data, error } = await apiClient.get(handlers.getShortages);
    if (!ok) throw new Error(error);
    return data;
  },
  async draftPurchaseOrder(sku) {
    const { ok, data, error } = await apiClient.post(handlers.quickBuy, { sku });
    if (!ok) throw new Error(error);
    return data;
  },
};
