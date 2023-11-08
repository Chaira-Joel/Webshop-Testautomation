import { test as base } from "@playwright/test";
import { Header } from "../pageobjectmodel/sections/header.section";
import { contactPage } from "../pageobjectmodel/pages/contact.page";

export const test = base.extend<{
  header: Header;
  contactpage: contactPage;
}>({
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
  contactpage: async ({ page }, use) => {
    await use(new contactPage(page));
  },
});
