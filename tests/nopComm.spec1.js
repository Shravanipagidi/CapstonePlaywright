const {test, expect} = require('@playwright/test')


test('verify application title', async ({page})=>{

    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.goto("https://www.redbus.in/")
   // await expect(page).toHaveTitle("OrangeHRM");

})