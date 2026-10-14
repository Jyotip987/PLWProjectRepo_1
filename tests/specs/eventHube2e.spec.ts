import test from "../../src/fixture/fixtures";
import { expect } from "playwright/test";
import { EventsPage } from "../../src/pages/EventsPage";


test.describe("EvenHubFunctioncase", () => {
  test("eventHub-createevent+case_1", async ({ authenticatedPage }) => {
    await test.step("event creation", async () => {

    
      const eventPage = new EventsPage(authenticatedPage);
      await eventPage.openUpcomingEvents();
      await expect(authenticatedPage).toHaveURL(/\/events\/?$/);
      await expect(eventPage.upcomingEventsText).toBeVisible()
      await expect(eventPage.addNewEventButton).toBeVisible();
      await eventPage.clickAddNewEvent();

      await expect(authenticatedPage).toHaveURL(/\/admin\/events\/?$/);

    });
  });
});
