const { test, expect } = require("@playwright/test");
const Sections = require("../fixtures");
const data = require("../data/text.json");
require('dotenv').config();
import fs from 'fs'

test('continous data updation with usinf fs module', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto(process.env.data_Updation_URL);

    const updationData = new Sections.DataUpdation(page, test);

    await expect(updationData.currentTime).toBeVisible();
    const currentTimeFromUI = await (updationData.currentTime).textContent();

    let currentData = JSON.parse(fs.readFileSync(`${process.cwd()}//data//text.json`));

    currentData.updatedDataFromFS = currentTimeFromUI;

    fs.writeFileSync(process.cwd() + '\\data\\text.json', JSON.stringify(currentData));
    await page.waitForTimeout(parseInt(process.env.small_time));

});