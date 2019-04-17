
interface Window {
  env: {
    [key: string]: string
  }
}

declare var window: Window;

export const getEnv = (key: string): string => window.env[key];