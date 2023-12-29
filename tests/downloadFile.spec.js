const { test, expect } = require("@playwright/test");
const Sections = require("../fixtures");
const data = require("../data/text.json");
require('dotenv').config();


test('configuring file download path in our project directory', async ({ page, contextOptions }) => {

    await page.goto(process.env.Download_file_URL);

    const downloadPage = new Sections.FileDownload(page, test);
    await downloadPage.downloadText.click();


    await downloadPage.samplePdf.click();
    
    const downloadPromise = page.waitForEvent('download');
    const download = await downloadPromise;
    console.log("download path is ::---->"+await download.path());
    await download.saveAs(data.downloadPath);

    await page.waitForTimeout(parseInt(process.env.medium_time));


});


