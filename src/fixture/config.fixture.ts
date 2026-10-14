import { test as base } from '@playwright/test';
import type { EnvConfig } from '../../types';

export const test = base.extend<EnvConfig>({
    envName: ['', { option: true }],
    appUrl: ['', { option: true }],
    apiBaseURL: ['', { option: true }],
});
