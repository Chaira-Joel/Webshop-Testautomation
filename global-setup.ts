import { Browser, chromium, Page, expect } from "@playwright/test";

async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.locator("#email").fill("testuser@testuser.com");
  await page.locator("#passwd").fill("Test1234!");
  await page.getByRole("button", { name: " Sign in" }).click();
  await expect(page).toHaveURL(
    "https://techblog.polteq.com/testshop/index.php?controller=my-account"
  ); //hie kan ook de logot button visible zijn als assertion

  //save the state of the webpage - means we are logged in
  await page.context().storageState({ path: "./LoginAuth.json" });
  await browser.close();
}

export default globalSetup;
