// import { test as base } from '@playwright/test';
// import type { UiFixtures } from '../../types';
// import login from '../api/apiHelper';

// let config
// // const test = base.extend<UiFixtures>({
// //   authenticatedPage: async ({ page, request }, use,testInfo) => {
// //     const loginResult = await login(request,testInfo);

// //     if (!loginResult.ok || !loginResult.token) {
// //       throw new Error(`UI authentication failed with status ${loginResult.status}.`);
// //     }

// //     await page.addInitScript((value: string) => {
// //       window.localStorage.setItem('token', value);
// //     }, loginResult.token);
// //     config=testInfo.project.use as any
    
// //     await page.goto(config.appUrl)
// //     await use(page);
// //   },
// // });

// // export default test;
