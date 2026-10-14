import type { Fixtures } from '../../types';
import { test as environmentTest } from './config.fixture';
import login from '../api/AuthApi';

const test = environmentTest.extend<Fixtures>({
  loginApi: async ({ request, apiBaseURL }, use) => {
    const loginResult = await login(request, apiBaseURL);
    await use(loginResult)
  },
  authenticatedPage: async ({ page, request, apiBaseURL, appUrl }, use) => {
    const loginResult = await login(request, apiBaseURL);
//console.log(loginResult)
    if (!loginResult.ok || !loginResult.token) {
      throw new Error(`UI authentication failed with status ${loginResult.status}.`);
    }

    await page.addInitScript((value: string) => {
     
      window.localStorage.setItem('eventhub_token', value);
    }, loginResult.token);

    if (!appUrl) {
      throw new Error('Missing required environment fixture: appUrl');
    }

    await page.goto(appUrl)
    await use(page);
  },
});

export default test;
