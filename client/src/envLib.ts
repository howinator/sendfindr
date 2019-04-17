type EnvKeys = 'GMAPS_API_KEY' | 'API_URL';
interface Window {
  env: {
    [key in EnvKeys]: string
  };
  [key: string]: any;
}

declare var window: Window;

export const getEnv = (key: EnvKeys): string => window.env[key];