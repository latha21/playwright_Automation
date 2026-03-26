import {test,expect} from '@playwright/test';

test('getattribute', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                  
/*
     var url = await page.url();
     console.log(url);
     
    await page.locator('//input[@name="username"]').fill("Admin");
   //await page.locator("//input[@name='username']").inputValue();
   */
   var data = await page.locator("//input[@name='username']").getAttribute('value');
   console.log(data);
   
  await page.close();


});