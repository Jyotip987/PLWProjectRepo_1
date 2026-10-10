import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';


import dotenv from 'dotenv'
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') })


const baseConfig = defineConfig({
  testDir: './tests',
  timeout: 36000,
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html'], ['allure-playwright', {
    detail: true,
    suiteTitle: true,
    environmentInfo: {
      name:"TEST AUTOMATION CASES",
      appName: "EventHub",
      Release: "1.0.1",
      node_version: process.version

    }
  }]],
  globalSetup: path.resolve(__dirname, './tests/setup/global-setup.ts'),
  globalTeardown: path.resolve(__dirname, './tests/setup/global-teardown.ts'),
  use: {
    //baseURL: environment.appUrl,
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },


      },
    },
  ],
});
export default baseConfig