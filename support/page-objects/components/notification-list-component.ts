import { Page } from "@playwright/test";

export class NotificationHeader {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get icon() {
    return this.page.locator("[href='/notifications/']");
  }

  get list() {
    return this.page.locator(
      "[role='grid'][aria-label='Notificaciones'] > div > div[role='row']"
    );
  }

  async selectRandomNotification() {
    const notifications = await this.list.all();
    const randomIndex = Math.floor(Math.random() * notifications.length);
    await notifications[randomIndex].scrollIntoViewIfNeeded();
    await notifications[randomIndex]
      .locator(
        "div[role='gridcell'] > a[href^='https://www.facebook.com/'] > div[role='none']"
      )
      .click();
  }
}
