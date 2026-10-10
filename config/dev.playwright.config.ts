import { defineConfig, devices } from '@playwright/test';
import  baseConfig  from '../playwright.config';
import { EnvConfig } from '../types'
import path from 'path';

console.log("----RUNNING DEV IN DEV ENV---")
console.log(`Hello from config...Please have a look at test results 👋`)
export default defineConfig<EnvConfig>({
...baseConfig,
testDir: path.resolve(process.cwd(),"./tests"),
use:{
    ...baseConfig.use,
    envName: "dev",
    appUrl: process.env.DEV_BASE_URL,
    apiBaseURL:process.env.DEV_API_BASE_URL,
    
}
})