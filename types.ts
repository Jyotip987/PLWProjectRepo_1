import type { Page } from '@playwright/test';

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResult = {
  ok: boolean;
  status: number;
  token?: string;
};

export type Fixtures = {
  loginApi: LoginResult;
  authenticatedPage: Page;
};

export type UiFixtures = {
 
};
export type EnvConfig = {
  envName: string;
  appUrl: string;
  apiBaseURL: string
}