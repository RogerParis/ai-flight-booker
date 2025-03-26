import { env } from "@/config/env";

export const sendMCPToGPT = async (context: any) => {
  const payload = {
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful travel booking assistant. Respond based on the provided context.',
      },
      {
        role: 'user',
        content: `MCP Context:\n${JSON.stringify(context, null, 2)}`,
      },
    ],
    max_tokens: 140,
  };

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.AI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response.';
};
