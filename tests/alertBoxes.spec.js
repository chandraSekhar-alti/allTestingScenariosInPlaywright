const { test, expect } = require('@playwright/test');
const Sections = require('../fixtures');
require('dotenv').config()

test('', async ({ page }) => {
    await page.goto(process.env.alert_Boxes_URL);
    const javascriptAlertBox = new Sections.AlertBoxes(page, test);

    page.on('dialog', async (dialog) => {
        const alertMessage = dialog.message();
        console.log('Alert Message:', alertMessage);
        await option(dialog, 'Ok')
    });

    async function option(dialog, value) {
        if (value == 'Ok') {
            await dialog.accept();
            console.log("Yesssssssssssssssssssssssssssssssssssssssss")
        } else {
            await dialog.dismiss();
        }
    }


    await javascriptAlertBox.alertBoxButton.click();
    // await alertsHandler('I am an alert box!', 'Ok')


    // const text = await page.dialog.message();
    // console.log(text, "==================================================");

});
