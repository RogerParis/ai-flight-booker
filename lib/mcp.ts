export const sendMCPToGPT = async (context: any) => {
  const res = await fetch('https://ai-flight-booker-api.vercel.app/api/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(context),
  });

  const data = await res.json();
  console.log(data);
  return data.message;
};
