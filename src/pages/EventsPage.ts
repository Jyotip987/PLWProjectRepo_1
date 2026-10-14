import type { Locator, Page } from '@playwright/test';

export class EventsPage {
  readonly page: Page;
  readonly exploreAllEventsButton: Locator;
  readonly upcomingEventsText: Locator;
  readonly addNewEventButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.exploreAllEventsButton = page.getByRole('button', {
      name: 'Explore All Events',
    });
    this.upcomingEventsText = page.getByText('Upcoming Events', {
      exact: true,
    });
    this.addNewEventButton = page.getByRole('button', {
      name: 'Add New Event',
    });
  }

  async openUpcomingEvents(): Promise<void> {
    await this.exploreAllEventsButton.click();
  }

  async clickAddNewEvent(): Promise<void> {
    await this.addNewEventButton.click();
  }
}
