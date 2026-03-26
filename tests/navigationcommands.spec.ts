import {test,expect} from '@playwright/test';
test('Navigation Commands', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.waitForSelector("//a[contains(text(),'Gmail')]");
    await page.locator("//a[contains(text(),'Gmail')]").click();
    await page.waitForURL('https://workspace.google.com/intl/en-US/gmail/');
    await page.goBack();
    //await page.waitForURL('https://www.google.com/');
      var url = await page.url();
      await page.waitForURL(url);
    await page.goForward();
    await page.waitForURL('https://workspace.google.com/intl/en-US/gmail/');
    await page.reload();

  

});