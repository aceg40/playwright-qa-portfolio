
import { test, expect } from '@playwright/test';

test('User can complete a purchase successfully', async ({ page }) => {
  // Open the application
  await page.goto('https://www.saucedemo.com/');

  // Log in
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);

  // Add a product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Start checkout
  await page.locator('[data-test="checkout"]').click();

  // Enter customer details
  await page.locator('[data-test="firstName"]').fill('Juan');
  await page.locator('[data-test="lastName"]').fill('Test');
  await page.locator('[data-test="postalCode"]').fill('12345');

  // Continue to checkout overview
  await page.locator('[data-test="continue"]').click();

  // Verify product
  await expect(page.locator('[data-test="inventory-item-name"]'))
    .toHaveText('Sauce Labs Backpack');

  // Complete purchase
  await page.locator('[data-test="finish"]').click();

  // Verify order confirmation
  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});
