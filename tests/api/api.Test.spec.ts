import test from '../../src/fixture/fixtures'
import { expect } from 'playwright/test';

test.describe('EvenHubAPICase', () => {
    test('eventHub-createLogin', async ({ loginApi }) => {
       await test.step('login using api',async ()=>{
        expect(loginApi.ok).toBeTruthy();
        expect(loginApi.status).toBe(200);
        expect(loginApi.token).toBeTruthy();
    })})
})

