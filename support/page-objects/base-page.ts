import { Page } from "@playwright/test";
import { Header } from "./components/header-component";

export class BasePage {
  protected page: Page;
  public header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }
}
