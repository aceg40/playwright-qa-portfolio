
import { test, expect } from '@playwright/test';

test('Successful login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});


test('Login fails with invalid password', async ({ page }) => {
  // Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Enter invalid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');

  // Attempt to log in
  await page.locator('[data-test="login-button"]').click();

  // Verify the error message is displayed
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});
