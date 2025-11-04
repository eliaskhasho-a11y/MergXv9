// Central motor för AI-analyser och textgenerering
export async function runAIAnalysis({ prompt, apiKey, module }) {
  if (!apiKey) {
    // Mock-läge (free-users)
    return `AI-simulerad analys (${module}): ${prompt.substring(0, 60)}... → föreslår standardåtgärd.`;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Du är MergX AI-analysmotor. Ge kortfattade, konkreta förslag i klartext.`,
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.6,
      }),
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Ingen analys kunde genereras.";
  } catch (err) {
    console.error("AI-fel:", err);
    return "Kunde inte hämta AI-analys (API-fel).";
  }
}
