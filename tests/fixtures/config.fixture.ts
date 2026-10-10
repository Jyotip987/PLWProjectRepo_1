import { test as base } from '@playwright/test'
import { EnvConfig } from '../../types'

export const test = base.extend<EnvConfig>({
    envName: ['test', { option: true }],
    appUrl: ['<>', { option: true }],
    apiBaseURL:['<>', { option: true }]
})
