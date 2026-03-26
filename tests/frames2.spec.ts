import{test,expect}from"@playwright/test";
test('Frames', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    await page.evaluate(() => window.scrollBy(0, 1500));

    /*
    
    page.frames().forEach(frame => {
        console.log(frame.url());
        var data =frame.url();
                {
                    if (data.includes('basic-controls.html')) {

                        //await page.waitForSelector('(//input[@id="firstName"])[1]');
                        await frame.locator('(//input[@id="firstName"])[1]').fill('John');
                        await page.waitForTimeout(2000);
                    }
                }
        

    });
    
           const frames = await page.frames();
           {
            for (const frame of frames) {
                var data =frame.url();
                {
                    if (data.includes('basic-controls.html')) {

                        //await page.waitForSelector('(//input[@id="firstName"])[1]');
                        await frame.locator('(//input[@id="firstName"])[1]').fill('John');
                        await page.waitForTimeout(2000);
                    }
                }
            }
           }
            
            */  
           
           const frames = page.frames();
           
           const frame1 = frames[3];
              await frame1.locator('(//input[@id="firstName"])[1]').fill('John');


});