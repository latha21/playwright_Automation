import{test,expect} from '@playwright/test';

test('window handles using index', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
    
    await page.locator("//button[@id='newWindowBtn']").click();
    await page.waitForTimeout(2000);
     const pages = page.context().pages();
    const childwin = pages[1];
    await childwin.bringToFront();
    await childwin.waitForLoadState();
    const title: string = await childwin.title();
    console.log(title);
    
    await childwin.evaluate(() => {
        window.scrollBy(0, 1000);
    });
    await childwin.waitForSelector("//input[@id='firstName']");
    await childwin.locator("//input[@id='firstName']").fill('John');
    await childwin.locator("//input[@id='lastName']").fill('Doe');
    await childwin.waitForTimeout(2000);
    await childwin.close();
    const parentwin = pages[0];
    await parentwin.bringToFront();
    await parentwin.locator("//input[@id='name']").fill('John Doe');
    await parentwin.waitForTimeout(2000);
});