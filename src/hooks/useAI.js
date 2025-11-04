import { useState } from "react";
import { runAIAnalysis } from "../core/ai/AIMotor";
import { getUserApiKey, getUserTier } from "../core/ai/apiKeyManager";

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [tier] = useState(getUserTier());

  async function analyze(prompt, module = "Allmänt") {
    setLoading(true);
    const key = getUserApiKey();
    const result = await runAIAnalysis({ prompt, apiKey: key, module });
    setOutput(result);
    setLoading(false);
    return result;
  }

  return { analyze, loading, output, tier };
}
