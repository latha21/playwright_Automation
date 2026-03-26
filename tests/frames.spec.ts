import{test,expect}from"@playwright/test";
test('Frames', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    await page.evaluate(() => window.scrollBy(0, 1500));
    const frame1 = page.frameLocator('#frm2');
   
    await frame1.locator("//input[@id='firstName']").fill('John');
    await page.waitForTimeout(2000);
  
});
