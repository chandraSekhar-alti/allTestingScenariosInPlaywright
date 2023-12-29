const { test, expect } = require("@playwright/test");
const Sections = require("../fixtures");
const data = require("../data/text.json");
require('dotenv').config();

test('new Tab opening test case', async ({ page }) => {
    test.setTimeout(240000);
    const w3Page = new Sections.NewTabOpen(page, test);
    await page.goto(process.env.new_Tab_URL_1);

    for (let i = 0; i <= 7; i++) {
        await w3Page.w3headerBar(data.w3HeaderTexts[i].name).click();
        await page.waitForTimeout(500);
    }
    //this code will open the new tab and if you want to access the page elements then we have to give it's page name
    const newPage = await page.context().newPage();
    await newPage.goto(process.env.new_Tab_URL_2);

    const accenturePage = new Sections.NewTabOpen(newPage, test);


    for (const iterator of data.accentureHeaderTexts) {
        await accenturePage.accentureHeaderBar(iterator.text).click();
        await newPage.waitForTimeout(500);
    }


    const newPage2 = await page.context().newPage();
    await newPage2.goto(process.env.new_Tab_URL_3);
    await newPage2.waitForTimeout(3000);
    // this bringToFront() function will take us to desired UI tab for that we have to give it's context page 
    await page.bringToFront();
    await w3Page.w3LoginButton.click();
    await page.waitForTimeout(3000);

});