import {test,expect} from '@playwright/test';



test('Get Title', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.setDefaultTimeout(5000);
  var locator= page.locator('//input[@name="username"]');
  await locator.fill("Admin");
  await locator.clear();
  await page.setDefaultTimeout(5000);
    var title = await page.title();
    console.log(title);

    var data = "orange";
    
    if(title==data){
      console.log("Title is correct");
    }
    else
    {
        console.log("Title is incorrect");
    }

});