const {test, expect} = require('@playwright/test')


test('Red Bus Application', async ({page})=>{

    //Go to 
    await page.goto("https://www.redbus.in/");

    // verify the title
    await expect(page).toHaveTitle(/Bus Tickets Booking Online with Attractive Rates - redBus/);

    //Type Hyderabad in From input box
    await page.fill('input[id="src"]', 'Hyderabad');

    //Type Bangalore in To input box
    await page.fill('input[id="dest"]', 'Bangalore');

    //click on calender to select date
    await page.click("div[class='labelCalendarContainer']");

    await page.click('//span[text()="31"]');
    await page.waitForTimeout(3000);

    //click on search
    await page.click('button[id="search_button"]');
    await page.waitForTimeout(3000);


    //clcik on after 6pm check box in departure time
    //await page.click('label[for="dtAfter 6 pm"][class="custom-checkbox"]');
    //expect(await page.isChecked('(//input[@type="checkbox"])[2]')).toBeTruthy() 
   // await page.isChecked('label[for="dtAfter 6 pm"][class="custom-checkbox"]').toBeTruthy();
    
    
    
    //click on Sleeper check box in Bus Type
    //await page.click('//label[@for="bt_SLEEPER"]');

   // await expect(page).toHaveTitle(/Bus Tickets Booking Online with Attractive Rates - redBus/)

  

})