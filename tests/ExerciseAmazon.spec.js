const {test, expect} = require('@playwright/test')


test('Amazon Application', async ({page})=>{

    //Go to Amazon URL
    await page.goto("https://www.amazon.in/");

    // verify the title
    await expect(page).toHaveTitle(/Online Shopping site in India/);

    //Type smart watches in From input box
    await page.fill('[placeholder="Search Amazon.in"]', 'smart watches');

    
    //click on search
    await page.click('[value="Go"]');

    //click on dropdown button
    await page.waitForTimeout(3000);
    await page.click('span[class="a-button a-button-dropdown a-button-small"]');
    //await page.waitForTimeout(3000);

    //click on newest arrivals
    await page.waitForTimeout(5000);
    await page.click('a[id="s-result-sort-select_4"]');

    //verify title
    await expect(page).toHaveTitle(/Amazon.in: Smart Watches/);
  

 

  

})