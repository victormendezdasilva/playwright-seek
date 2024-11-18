import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class PostPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get likedButton() {
    return this.page
      .locator("div[role='dialog']")
      .locator("[aria-label='Suprimir Me gusta']");
  }

  get likeButton() {
    return this.page
      .locator("div[role='dialog']")
      .locator("[aria-label='Me gusta']")
      .first();
  }

  async likePost() {
    await this.likeButton.scrollIntoViewIfNeeded();
    await this.likeButton.click();
  }

  async unlikePost() {
    await this.likedButton.click({ force: true });
    await expect(this.likedButton).toHaveCount(0);
  }
}
