import{test,expect,Locator} from '@playwright/test';

test('Single select dropdown', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    /*
    await page.selectOption("//select[@id='course']", 'java');
    
   await page.locator("//select[@id='course']").selectOption('java');
   
    const element:Locator =  page.locator("//select[@id='course']");
   await element.selectOption('java');
   
   await page.selectOption("//select[@id='course']", { label: 'Dot Net' });
   
      await page.locator("//select[@id='course']").selectOption({ label: 'Dot Net' });
   
    const element:Locator =  page.locator("//select[@id='course']");
   await element.selectOption({ label: 'Dot Net' });
   */
    await page.selectOption("//select[@id='course']", { index: 2 });
    
   await page.locator("//select[@id='course']").selectOption({ index: 2 });
   const element:Locator =  page.locator("//select[@id='course']");
   await element.selectOption({ index: 2 });

    
});