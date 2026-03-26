import{test,expect}from"@playwright/test";
test('Frames 3– use frame name', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');



    const frame = await page.frames();
const child = page.frame({ name: 'myChild' });
const parent = child?.parentFrame();

if (parent) {

  await parent.click('button#confirm');
}
});