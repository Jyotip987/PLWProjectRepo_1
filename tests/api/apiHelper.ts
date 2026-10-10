import type { APIRequestContext, TestInfo } from '@playwright/test';
import type { LoginPayload, LoginResult } from '../../types';
import getLoginPayload from '../test-data/api-payload';
let config
type LoginResponse = {
  token?: string;
};
export default async function login(
  request: APIRequestContext,
  testInfo:TestInfo,
  credentials: LoginPayload = getLoginPayload(),
  
): Promise<LoginResult> {
config= testInfo.project.use as any
  const response = await request.post(`${config.apiBaseURL}/api/auth/login`, {
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
