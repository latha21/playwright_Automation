import{test,expect}from"@playwright/test";
test('Frames – use frame name', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    /*
    const frame1 = page.frame('https://www.globalsqa.com/trainings/');
   
    if (frame1) {

        await page.waitForSelector('//input[@name="s"]');
        await page.waitForTimeout(2000);
        await frame1.locator('//input[@name="s"]').fill('John');
    }
        */
    
   
    const frame1:any|null = page.frame({name:'globalSqaTraining'});

    await frame1.locator('//input[@name="s"]').fill('John');
    
 
});