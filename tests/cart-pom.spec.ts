import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
});

test('User can add a product using POM', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.addBackpack();
  await expect(cartPage.cartBadge).toHaveText('1');

  await cartPage.openCart();
  await expect(cartPage.backpackName())
    .toHaveText('Sauce Labs Backpack');
});

test('User can remove a product using POM', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.addBackpack();
  await cartPage.openCart();
  await cartPage.removeBackpack();

  await expect(cartPage.cartItems).toHaveCount(0);
  await expect(cartPage.cartBadge).toHaveCount(0);
});