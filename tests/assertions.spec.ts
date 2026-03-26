import { test,expect } from '@playwright/test';

test('assertions playwright', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await expect(page).toHaveTitle('Google');
    //await expect(page).toHaveURL('https://www.google.com/');
    //await expect(page.locator("//div/p[contains(.,'Forgot your password')]")).toContainText('your password',{ ignoreCase: true });
    //await expect(page.locator("//div/p[contains(.,'Forgot your password')]")).toBeEnabled();
    await page.locator('#news').getByRole('heading', { name: 'Write a java program to print' }).click();
});