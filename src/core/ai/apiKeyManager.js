// Enkel hantering av användarens API-nyckel (Free / Plus)
export function getUserApiKey() {
  return localStorage.getItem("mergx_api_key") || null;
}

export function setUserApiKey(key) {
  localStorage.setItem("mergx_api_key", key);
}

export function clearUserApiKey() {
  localStorage.removeItem("mergx_api_key");
}

export function getUserTier() {
  const key = getUserApiKey();
  return key ? "plus" : "free";
}
