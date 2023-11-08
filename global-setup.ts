import { Browser, chromium, Page, expect } from "@playwright/test";
import { userName, passWord } from "./.auth/credentials";

async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.locator("#email").fill(userName);
  await page.locator("#passwd").fill(passWord);
  await page.getByRole("button", { name: " Sign in" }).click();
  await expect(page).toHaveURL(
    "https://techblog.polteq.com/testshop/index.php?controller=my-account"
  );

  await page.context().storageState({ path: "./auth/LoginAuth.json" });
  await browser.close();
}

export default globalSetup;
