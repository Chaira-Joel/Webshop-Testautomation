import { test, expect } from "@playwright/test";

test("Should be able to login", async ({ page }) => {
  await page.goto("https://techblog.polteq.com/testshop/index.php");
  await expect(page.getByRole("link", { name: "Sign out" })).toBeVisible();
});
