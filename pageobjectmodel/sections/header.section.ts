import { Page, expect } from "@playwright/test";

export class Header {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto("https://techblog.polteq.com/testshop/index.php");
  }

  //locators
  signinButton = () => this.page.getByRole("link", { name: "Sign in" });
  signoutButton = () => this.page.getByRole("link", { name: "Sign out" });
  contactUsButton = () => this.page.locator('//*[@id="contact-link"]/a');

  //actions
  public async clickSigninButton() {
    await this.signinButton().click();
  }

  public async clickSignoutButton() {
    await this.signoutButton().click();
  }

  public async clickcontactusButton() {
    await this.contactUsButton().click();
  }

  public async assertLoggedin() {
    await expect(this.signoutButton()).toBeVisible();
  }

  public async assertLoggedout() {
    await expect(this.signinButton()).toBeVisible();
  }
}
