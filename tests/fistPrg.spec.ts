import {test,expect, chromium} from '@playwright/test';



test('Launch Application', async ({ page }) => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
    

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.locator('//input[@name="username"]').fill("Admin");
  await page.locator('//input[@name="password"]').fill("admin12342");
  await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
  /*
  await page.locator("//p[contains(.,'Invalid credentials')]").innerText();
  
  let data:string | null = await page.locator("//p[contains(.,'Invalid credentials')]").textContent();
  console.log(data);
var test1 =await page.locator("//p[contains(.,'Invalid credentials')]").textContent();
console.log(test1);

var test= await page.locator("//input[@name='username']").inputValue(); 
console.log(test);

var test1 =await page.locator("//p[contains(.,'Invalid credentials')]").allTextContents();
console.log(test1);

*/

await page.close();
await browser.close();
await context.close();


});
