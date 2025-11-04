// Lätta "typer" via JSDoc för konsekvens i services och hooks.

/**
 * @typedef {{month: string, revenue: number, cost: number}} BudgetRow
 * @typedef {{id: string, customer: string, amount: number, due: string, status: 'Unpaid'|'Paid'|'Overdue'}} Invoice
 * @typedef {{id: number, name: string, contact: string, phone: string}} Customer
 * @typedef {{id: number, sku: string, name: string, qty: number, min: number}} InventoryItem
 */
export {};
