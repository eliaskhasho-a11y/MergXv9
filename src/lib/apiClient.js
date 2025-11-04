// Minimal API-klient med mock-latens, enkel loggning och felhantering.
// Byt ut baseFetch mot riktig fetch/axios när backend finns.

const LATENCY = Number(import.meta.env.VITE_API_LATENCY || 250);

async function baseFetch(handler, payload) {
  await new Promise((r) => setTimeout(r, LATENCY));
  try {
    const res = await handler(payload);
    return { ok: true, data: res };
  } catch (e) {
    console.error("[apiClient] error:", e);
    return { ok: false, error: e?.message || "Unknown error" };
  }
}

export const apiClient = {
  get: (handler, params) => baseFetch(handler, params),
  post: (handler, body) => baseFetch(handler, body),
  put: (handler, body) => baseFetch(handler, body),
  del: (handler, params) => baseFetch(handler, params),
};
