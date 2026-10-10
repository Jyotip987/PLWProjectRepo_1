import test from '../fixtures/fixtures'
import { expect } from 'playwright/test';



test.describe('EvenHubFunctioncase', () => {
    test('eventHub-createevent+case_1', async ({ authenticatedPage, loginApi }) => {
        expect(loginApi.ok).toBeTruthy();
        expect(loginApi.status).toBe(200);
        expect(loginApi.token).toBeTruthy();
        await authenticatedPage.getByRole('button', { name: "Explore All Events" }).click()
        await expect(authenticatedPage.getByText('Upcoming Events')).toHaveText('Upcoming Events')
        await authenticatedPage.getByRole('button', { name: "Add New Event" }).click()

    })
})