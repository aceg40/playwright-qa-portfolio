
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);

  await expect(
    page.locator('[data-test="title"]')
  ).toHaveText('Products');
});
