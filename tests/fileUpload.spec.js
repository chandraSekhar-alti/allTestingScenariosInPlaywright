const { test, expect } = require('@playwright/test');
const Sections = require("../fixtures");
require('dotenv').config();

test('File Upload test case', async ({ page }) => {
  await page.goto(process.env.file_Upload_URL);
  const loginPage = new Sections.FileUploadLanding(page, test);

  //here process.cwd() meains this will take the sample directory path and then I'm adding additional path for my file
  const filePath = process.cwd() + '//data//sampleImage.png';

  await loginPage.fileUpload(filePath);
  await loginPage.uploadButton.click();
  await expect(loginPage.successMsg).toBeVisible();
  await page.waitForTimeout(parseInt(process.env.medium_time));



  //uncomment this line for the another way of the code execution 

  // await loginPage.fileUploadInputFiled.setInputFiles(filePath);
  // await page.waitForTimeout(2000);
  // await loginPage.uploadButton.click();
  //await expect(loginPage.successMsg).toBeVisible();
  // await page.waitForTimeout(4000);








});


