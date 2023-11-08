import { Page, expect, test } from "@playwright/test";

export class MyAccount {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public async goto() {
    await this.page.goto(
      "https://techblog.polteq.com/testshop/index.php?controller=my-account"
    );
  }

  //locators
  myOrderHistoryButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[1]/a/span');
  myCreditslipsButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[2]/a/span');
  myAddressesButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[3]/a/span');
  myPersonalInformationButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[4]/a/span');
  myFavoriteProductsButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[5]/a/span');
  myWishListButton = () =>
    this.page.locator('//*[@id="center_column"]/div/div[1]/ul/li[6]/a/span');

  //actions

  public async clickmyOrderHistoryButton() {
    await this.myOrderHistoryButton().click();
  }
  public async clickmyCreditslipsButton() {
    await this.myCreditslipsButton().click();
  }
  public async clickmyAddressButton() {
    await this.myAddressesButton().click();
  }
  public async clickmyPersonalInformationButton() {
    await this.myPersonalInformationButton().click();
  }
  public async clickmyFavoriteProductsButton() {
    await this.myFavoriteProductsButton().click();
  }
  public async clickmyWishListButton() {
    await this.myWishListButton().click();
  }
}
