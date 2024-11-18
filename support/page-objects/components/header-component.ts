import { NotificationHeader } from "./notification-list-component";
import { expect, Page } from "@playwright/test";

export class Header {
  private page: Page;
  public notification: NotificationHeader;

  constructor(page: Page) {
    this.page = page;
    this.notification = new NotificationHeader(page);
  }

  async openNotifications() {
    await this.notification.icon.click();
    await expect(this.notification.list.first()).toBeVisible();
  }
}
