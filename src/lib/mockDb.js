// Enkel in-memory DB för V9. Kan bytas mot t.ex. Supabase/Firebase.
// Håll all seed-data här under utveckling.

export const mockDb = {
  economy: {
    totalBudget: [
      { month: "Jan", revenue: 50000, cost: 30000 },
      { month: "Feb", revenue: 75000, cost: 42000 },
      { month: "Mar", revenue: 95000, cost: 50000 },
      { month: "Apr", revenue: 120000, cost: 73000 },
      { month: "Maj", revenue: 80000, cost: 48000 },
      { month: "Jun", revenue: 125000, cost: 73400 },
    ],
    invoices: [
      { id: "INV-1001", customer: "Power Uppsala", amount: 23800, due: "2025-11-15", status: "Unpaid" },
      { id: "INV-1002", customer: "Elon Lidingö", amount: 15490, due: "2025-11-09", status: "Overdue" },
    ],
    costs: [
      { id: "C-4001", category: "Lagerinköp", amount: 42000, date: "2025-11-02" },
      { id: "C-4002", category: "Hyra", amount: 21000, date: "2025-11-01" },
    ],
  },
  crm: {
    customers: [
      { id: 1, name: "Power Uppsala", contact: "Anna Lund", phone: "070-321 88 10" },
      { id: 2, name: "Elon Lidingö", contact: "Johan Ek", phone: "070-654 22 89" },
    ],
    leads: {
      New: ["Tech Pro AB", "Mobilshoppen Sthlm"],
      Active: ["Digital Partner Umeå"],
      Won: ["Phone Lab Göteborg"],
    },
  },
  inventory: {
    items: [
      { id: 1, sku: "C-60W-USB-C", name: "USB-C kabel 60 W", qty: 120, min: 80 },
      { id: 2, sku: "CAR-CHG-30W", name: "Bil-laddare Dual 30 W", qty: 64, min: 50 },
    ],
    shortages: [
      { id: 1, sku: "LIGHT-27W", name: "Lightning kabel 27 W", level: "Critical" },
      { id: 2, sku: "NORAH-2.0", name: "Norah Airflow 2.0", level: "Low" },
    ],
  },
  quality: {
    audit: [
      { id: 1, user: "AI-System", action: "Gen rapport Q4", time: "2025-11-04 10:32" },
      { id: 2, user: "Lina", action: "Edit kund", time: "2025-11-04 09:18" },
    ],
  },
};
