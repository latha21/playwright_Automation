import { test, expect } from '@playwright/test';

test('Screenshot of the page', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/');
  //const element =  await page.locator("//input[@id='name']");
    //await page.screenshot({ path: 'screenshot.png'}); 
    //await element.screenshot({ path: 'element-screenshot.png' }); 
    const element = await page.locator('#news').getByRole('heading', { name: 'Write a java program to print' });
    await element.screenshot({ path: 'element-screenshot.png' });
});