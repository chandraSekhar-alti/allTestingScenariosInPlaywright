const { test, expect } = require("@playwright/test");
const Sections = require("../fixtures");
const data = require("../data/text.json");
require('dotenv').config();

test('Windows handler test case ', async ({ page }) => {
    await page.goto(process.env.windows_handler_URL);

    const windowPage = new Sections.WindowsPopupHandler(page, test);
    //we have to  Set up the event listener for the popup before click on the element which opens a browser.
    const popupPromise = page.waitForEvent('popup');
    // Click a button that opens a new browser window
    await windowPage.openUrlButton.click();
    //it Wait for the popup to open
    const newPage = await popupPromise;
    //we have to create a new object for our class because here the page is changed so we have to insert the new page to our class.
    const latestPage = new Sections.WindowsPopupHandler(newPage, test);

    // Interact with elements in the new window
    await latestPage.newPageInputField.fill(process.env.windows_handler_URL2);
    await latestPage.openUrlButton.click();
    await page.waitForTimeout(3000)
});





// in short
// const popupPromise = page.waitForEvent('popup');
// await page.locator("xpath of the element which open a new window").click();
// const newPage = await popupPromise;




