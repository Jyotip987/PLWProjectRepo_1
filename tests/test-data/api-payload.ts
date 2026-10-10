import type { LoginPayload } from '../../types';

function requiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export default function getLoginPayload(): LoginPayload {
  return {
    email: requiredEnvironmentVariable('USER_NAME'),
    password: requiredEnvironmentVariable('PASS_WORD'),
  };
}
