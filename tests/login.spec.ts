import { test, expect } from "@playwright/test";
import { Header } from "../pageobjectmodel/sections/header.section";
import { contactPage } from "../pageobjectmodel/pages/contact.page";

test("User should be able to login", async ({ page }) => {
  const header = new Header(page);
  await header.goto();
  await header.assertLoggedin();
});

test("User should be able to logout", async ({ page }) => {
  const header = new Header(page);
  await header.goto();
  await header.clickSignoutButton();
  await header.assertLoggedout();
});

test("User should be able to send a message to customer service", async ({
  page,
}) => {
  const contactpage = new contactPage(page);
  await contactpage.goto();
  await contactpage.fillTextField();
  await contactpage.selectCustomerServiceFromDropdown();
  await contactpage.clickSendButton();
  await contactpage.assertSuccesfullMessage();
});
