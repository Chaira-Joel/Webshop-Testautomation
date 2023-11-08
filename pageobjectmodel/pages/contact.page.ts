import { Page, expect, test } from "@playwright/test";

export class contactPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto(
      "https://techblog.polteq.com/testshop/index.php?controller=contact"
    );
  }

  //locators
  textField = () => this.page.locator("#message");
  subjectDropdown = () => this.page.locator("#id_contact");
  orderReferenceDropdown = () => this.page.locator("#id_order");
  sendButton = () => this.page.locator("#submitMessage");
  successFullMessage = () => this.page.locator('//*[@id="center_column"]/p');

  //actions

  public async fillTextField() {
    await this.textField().fill("test");
  }

  public async selectCustomerServiceFromDropdown() {
    await this.subjectDropdown().selectOption("Customer service");
  }

  public async clickSendButton() {
    await this.sendButton().click();
  }

  public async assertSuccesfullMessage() {
    await expect(this.successFullMessage()).toBeVisible();
  }
}
