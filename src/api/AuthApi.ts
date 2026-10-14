import type { APIRequestContext } from '@playwright/test';
import type { LoginPayload, LoginResult } from '../../types';
import getLoginPayload from '../../tests/test-data/api-payload';

type LoginResponse = {
  token?: string;
};
export default async function login(
  request: APIRequestContext,
  apiBaseURL: string,
  credentials: LoginPayload = getLoginPayload(),
  
): Promise<LoginResult> {
  if (!apiBaseURL?.trim()) {
    throw new Error('Missing required environment fixture: apiBaseURL');
  }

  const response = await request.post(`${apiBaseURL}/api/auth/login`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: credentials,
  });

  const responseBody:LoginResponse = (await response.json()) as LoginResponse;
 

  return {
    ok: response.ok(),
    status: response.status(),
    token: responseBody.token,
  };
}
