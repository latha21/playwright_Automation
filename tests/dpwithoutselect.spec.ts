import{test} from '@playwright/test';

test('Dropdown-withoutselect tag', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown#google_vignette');
    await page.locator("//a[@id='examples-dropdown']").click();
   const dp =  page.locator("//a[@id='examples-dropdown']/following::ul//a");
    const count = await dp.count();
    
    console.log(count);
    for(let i=0; i<count; i++){
        const text = await dp.nth(i).textContent();
        console.log(text);
        if(text?.trim() === 'Assertions'){
            await dp.nth(i).click();
            await page.waitForTimeout(2000);
            break;
        }
    }
});