import{test,expect,Locator} from '@playwright/test';

test('Single select dropdown', async ({ page }) => {

    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    await page.selectOption("//select[@id='ide']", ['ec', 'ij', 'vs']);
    await page.waitForTimeout(2000);
    
   //await page.locator("//select[@id='course']").selectOption(['java', 'dotnet', 'python']);
   //const element:Locator =  page.locator("//select[@id='ide']");
   //await element.selectOption(['java', 'dotnet', 'python']);
});