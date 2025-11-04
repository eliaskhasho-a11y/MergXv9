import { flags } from "@/lib/featureFlags";
export function useFeatureFlag(key) {
  return Boolean(flags[key]);
}
