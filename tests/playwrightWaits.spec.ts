import {test,expect} from '@playwright/test';
test('different waits', async ({ page }) => {

    await page.goto('https://www.google.com/');
    await page.waitForSelector("//a[contains(text(),'Gmail')]");
    await page.locator("//a[contains(text(),'Gmail')]").click();
    await page.waitForURL('https://workspace.google.com/intl/en-US/gmail/');
    await page.waitForTimeout(5000);
    await page.setDefaultNavigationTimeout(10000);
    await page.waitForRequest('https://www.google.com/async/adsense/adsenseclient.js');


const requestPromise = page.waitForRequest(request =>
  request.url() === 'https://example.com' && request.method() === 'GET',
);
await page.getByText('trigger request').click();
const request = await requestPromise;

page.waitForResponse(response =>
  response.url() === 'https://example.com' && response.status() === 200,
);
await page.getByText('trigger response').click();


const selector = '.foo';
await page.waitForFunction(selector => !!document.querySelector(selector), selector);

await page.waitForLoadState('networkidle');

const element = page.locator("xpath");
await element.waitFor({ state: 'visible' });
await page.setDefaultTimeout(10000);
   
});
 