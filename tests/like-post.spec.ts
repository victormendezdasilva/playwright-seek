import { LoginPage } from "../support/page-objects/login-page.ts";
import { HomePage } from "../support/page-objects/home-page.ts";
import { PostPage } from "../support/page-objects/post-page.ts";
import { Browser, expect, Page, test } from "@playwright/test";

let page: Page;
let browser: Browser;

const validUsername = "eleganza.uy@gmail.com";
const validPassword = "Seek Test 123456";

const invalidUsername = "invalid.username123@email.com";
const invalidPassword = "password12345";

test.beforeAll("Login", async ({ playwright }) => {
  browser = await playwright.chromium.launch();

  const context = await browser.newContext();
  page = await context.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.usernameInput.fill(invalidUsername);
  await loginPage.passwordInput.fill(invalidPassword);
  await loginPage.loginButton.click();
  await expect(loginPage.loginErrorMessage).toBeVisible();

  await loginPage.login(validUsername, validPassword);
});

test.afterAll("Unlike Post", async () => {
  const postPage = new PostPage(page);
  await postPage.unlikePost();
  await browser.close();
});

test("Like random post from Notification List", async () => {
  const homePage = new HomePage(page);
  await homePage.waitToLoad();

  await homePage.header.openNotifications();
  await homePage.header.notification.selectRandomNotification();

  const postPage = new PostPage(page);

  await postPage.likePost();
  await expect(postPage.likedButton).toHaveCount(1);
});
