import{test,expect} from '@playwright/test';
test('Window Handles', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//button[@id='newWindowBtn']").click()
    ]);
    await newPage.waitForLoadState();
    const title = await newPage.title();

    console.log(title);
    newPage.evaluate(() => {
        window.scrollBy(0, 1500);
    });
    await newPage.waitForSelector("//input[@id='firstName']");

    await newPage.locator("//input[@id='firstName']").fill('John');
    await newPage.locator("//input[@id='lastName']").fill('Doe');
    await newPage.waitForTimeout(2000);
    await newPage.close();
});