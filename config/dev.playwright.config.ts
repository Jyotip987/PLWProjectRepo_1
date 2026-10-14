import { defineConfig, devices } from '@playwright/test';
import  baseConfig  from '../playwright.config';
import { EnvConfig } from '../types'
import { getEnvironment } from './environment'
import path from 'path';

const dev = getEnvironment('DEV');

console.log("----RUNNING DEV IN DEV ENV---")
console.log(`Hello from config...Please have a look at test results 👋`)
export default defineConfig<EnvConfig>({
...baseConfig,
testDir: path.resolve(process.cwd(),"./tests"),
use:{
    ...baseConfig.use,
    envName: dev.envName,
    appUrl: dev.appUrl,
    apiBaseURL:dev.apiBaseURL,
    
}
})
