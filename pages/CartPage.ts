import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartItems = page.locator('[data-test="cart-item"]');
  }

  async addBackpack() {
    await this.page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    ).click();
  }

  async openCart() {
    await this.page.locator(
      '[data-test="shopping-cart-link"]'
    ).click();
  }

  async removeBackpack() {
    await this.page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    ).click();
  }

  backpackName() {
    return this.page
      .locator('[data-test="cart-list"]')
      .locator('[data-test="inventory-item-name"]');
  }
}