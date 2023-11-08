import { test } from "../fixtures/basePage";

test("User should be able to login", async ({ header }) => {
  await header.goto();
  await header.assertLoggedin();
});

test("User should be able to logout", async ({ header }) => {
  await header.goto();
  await header.clickSignoutButton();
  await header.assertLoggedout();
});

test("User should be able to send a message to customer service", async ({
  contactpage,
}) => {
  await contactpage.goto();
  await contactpage.fillTextField();
  await contactpage.selectCustomerServiceFromDropdown();
  await contactpage.clickSendButton();
  await contactpage.assertSuccesfullMessage();
});
