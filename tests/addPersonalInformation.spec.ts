import { test, expect } from "@playwright/test";

test("Should be able to add personal information", async ({ page }) => {
  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await page.locator('//*[@id="header"]/div[1]/div/div/nav/div[2]/a').click();
  await page
    .locator('//*[@id="center_column"]/div/div[1]/ul/li[4]/a/span')
    .click();

  await page.locator("#id_gender2").check();
  expect(await page.locator("#id_gender2").isChecked()).toBeTruthy();
});
    