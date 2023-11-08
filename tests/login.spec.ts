import { test, expect } from "@playwright/test";
import { Header } from "../pageobjectmodel/sections/header.section";

test("Should be able to login", async ({ page }) => {
  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await expect(page.getByRole("link", { name: "Sign out" })).toBeVisible();
});

test("User should be able to logout", async ({ page }) => {
  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await page.locator('//*[@id="header"]/div[1]/div/div/nav/div[3]/a').click();
  await expect(page.getByRole("link", { name: "Sign in" })).toBeVisible();
});

test("Basic test using the POM - user is logged in succesfully", async ({
  page,
}) => {
  const header = new Header(page);
  await header.goto();
  await header.assertLoggedin();
});

test("Basic test using the POM - user is logged out succesfully", async ({
  page,
}) => {
  const header = new Header(page);
  await header.goto();
  await header.clickSignoutButton();
  await header.assertLoggedout();
});
