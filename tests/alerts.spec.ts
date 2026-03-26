import {test,expect} from '@playwright/test';

test('Alerts', async ({ page }) => {

    await page.on('dialog', async alertbox => {
        console.log(alertbox.message());
        await alertbox.accept('Playwright');
       var output = await page.locator('//div[@id="output"]').textContent();
        console.log(output);
    });

    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
    await page.locator('//button[@id="promptBox"]').click();
   
});
