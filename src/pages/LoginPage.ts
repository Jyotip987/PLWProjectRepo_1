import { expect, Locator, Page } from "playwright/test";

export class LoginClass {
  readonly page: Page;
  readonly emailLoc: Locator;
  readonly passwordLoc: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailLoc = page.getByRole("textbox", { name: "email" });
    this.passwordLoc = page.getByRole("textbox", { name: "email" });
  }
  async loginEventhub(): Promise<void> {
    await this.emailLoc.click();
    await this.passwordLoc.click();
  }
}
