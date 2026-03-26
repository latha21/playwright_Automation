import { test, expect } from '@playwright/test';

test('Right-click operation using mouse in Playwright', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
/*
  // Move mouse to the target element and right-click
  
  //const target = await page.locator("//button[@name='start']" );
  
  const box = await target.boundingBox();
  if (!box) {
    throw new Error('Target button not found');
  }

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2, { button: 'right' });
  await page.waitForTimeout(2000);
  
  await page.locator("//button[@name='start']").click({ button: 'right' });
  //await page.click("//button[@name='start']", { button: 'right' });
  await page.waitForTimeout(2000);
 
  await page.dblclick("//button[contains(text(),'Copy Text')]");
  await page.waitForTimeout(2000);
  const data = await page.locator("//input[@id='field2']").inputValue();
  console.log(data);
  
 await page.locator("//button[contains(text(),'Point Me')]").hover();

 await page.waitForTimeout(2000);
 ////button[contains(text(),'Point Me')]/following::div/a[contains(text(),'Mobiles')]
 await page.locator("//div/a[contains(text(),'Mobiles')]").click();
 await page.waitForTimeout(2000);

 await page.hover("//button[contains(text(),'Point Me')]");
 

 await page.dragAndDrop("[id='draggable']","[id='droppable']");
 await page.waitForTimeout(2000);

 

 await page.mouse.wheel(1000, 0);
 await page.waitForTimeout(2000);
 
 await page.mouse.move(0, 1000);
 await page.mouse.up();
 await page.waitForTimeout(2000);
 
 await page.mouse.move(200, 200);
 await page.mouse.up();
 await page.waitForTimeout(2000);
 */

 await page.keyboard.press('Control+Shift+I');
 await page.waitForTimeout(2000);
 await page.keyboard.down('Control');
 await page.keyboard.press('KeyR');
 await page.waitForTimeout(2000);
 await page.keyboard.up('Control');
});