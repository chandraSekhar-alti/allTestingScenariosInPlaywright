const { test, expect } = require("@playwright/test");
const Sections = require("../fixtures");
const data = require("../data/text.json");
require('dotenv').config();

test('Iframe handler test case', async ({ page }) => {
    const loginPage = new Sections.IframeLandingPage(page, test);
    await page.goto(process.env.Iframe_URL);
    await expect(loginPage.homePageCenterText).toContainText(data.IframeCenterText);


    //this is a resuable function we can just pass the attribute and it's value, then we can switch to the iframe

    async function iframeHandler(attribute, value) {
        const iframeElement = await page.waitForSelector(`//iframe[@${attribute}="${value}"]`);
        const iframe = await iframeElement.contentFrame();
        return iframe;
    }


    // this code is also for the iframe switch but here I'm using the resuable function
    // const iframe = await iframeHandler("class", "tox-edit-area__iframe");
    // const iframeElement = await page.waitForSelector('.tox-edit-area__iframe');
    // const iframe = await iframeElement.contentFrame();

    // here we are switching to the iframe by using our function.
    const iframe = await iframeHandler("class", "tox-edit-area__iframe");


    //here we have to create the new object for our class because of in the last class object it's value is page but here we have to switch to the iframe locator     
    const iframePage = new Sections.IframeLandingPage(iframe, test);

    await expect(iframePage.paragraphArea).toBeVisible();
    await iframePage.paragraphArea.click();
    await iframePage.paragraphArea.fill("In occaecat dolore reprehenderit velit. Reprehenderit in anim anim ad sunt duis. Quis tempor voluptate do occaecat voluptate deserunt officia irure.")
    await page.waitForTimeout(parseInt(process.env.small_time));
    await loginPage.boldButton.click();
    await loginPage.italicButton.click();

    await page.waitForTimeout(parseInt(process.env.small_time));
});

