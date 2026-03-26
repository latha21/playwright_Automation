import{test,expect} from '@playwright/test';

test('window handles using index', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
    
    await page.locator("//button[@id='newWindowBtn']").click();
    await page.waitForTimeout(2000);
     const pages = page.context().pages();
     const count = pages.length;
        console.log(count);
        /*
        for(let i=0; i<count; i++){
            const title: string = await pages[i].title();
            console.log(title);
        }
            */
           for(const pg of pages){
            const title: string = await pg.title();
            console.log(title);
            if(title === 'Basic Controls - H Y R Tutorials'){
                await pg.bringToFront();
                await pg.waitForLoadState();
                await pg.evaluate(() => {
                    window.scrollBy(0, 1000);
                });
                await pg.waitForSelector("//input[@id='firstName']");
                await pg.locator("//input[@id='firstName']").fill('John');
                await pg.locator("//input[@id='lastName']").fill('Doe');
                await pg.waitForTimeout(2000);
                await pg.close();
            }
           }    
});