const getEnvVars = () => {
  return {
    AI_API_KEY: process.env.EXPO_PUBLIC_AI_API_KEY,
  };
};

export const env = getEnvVars();
