import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get loginForm() {
    return this.page.locator("[data-testid='royal_login_form']");
  }

  get usernameInput() {
    return this.page.locator("#email");
  }

  get passwordInput() {
    return this.page.locator("#pass");
  }

  get loginButton() {
    return this.page.locator("button[name='login']");
  }

  get loginErrorMessage() {
    return this.page.getByText("Wrong Credentials");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
