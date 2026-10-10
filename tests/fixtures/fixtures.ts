import { test as base } from '@playwright/test';
import type { Fixtures } from '../../types';
import login from '../api/apiHelper';


let config

const test = base.extend<Fixtures>({
  loginApi: async ({ request }, use, testInfo) => {
    const loginResult = await login(request, testInfo);
    use(loginResult)
  },
  authenticatedPage: async ({ page, request }, use, testInfo) => {
    const loginResult = await login(request, testInfo);
//console.log(loginResult)
    if (!loginResult.ok || !loginResult.token) {
      throw new Error(`UI authentication failed with status ${loginResult.status}.`);
    }

    await page.addInitScript((value: string) => {
     
      window.localStorage.setItem('eventhub_token', value);
    }, loginResult.token);
    config = testInfo.project.use as any

    await page.goto(config.appUrl)
    await use(page);
  },
});

export default test;
