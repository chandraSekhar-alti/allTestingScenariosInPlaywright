const { test, expect } = require("@playwright/test");
const ebayData = require("../data/ebay.json");
// const { removeSync } = require("fs-extra");
// removeSync("allure-results/")
require("dotenv").config();
const LoginPage = require("../pages/Sample.page");

// test.beforeEach("Logging to the ebay applicaton", async ({ page }) => {
//   const LoginToApp = new LoginPage.SampleData(page, test);
//   await page.goto(process.env.URL);
//   await LoginToApp.loginfunction();
//   // await LoginToApp.navigationlink();
// });

test.only("selecting  specific item in ebay application and adding  it to cart", async ({
  page,
}) => {
  await page.goto("https://www.ebay.com/");

  const LoginToEbay = new LoginPage.SampleData(page, test);

  await LoginToEbay.loginfunction();

  await LoginToEbay.selcategory.click();
  await expect(LoginToEbay.itemlink).toBeVisible();
  await expect(LoginToEbay.itemlink).toBeVisible();
  await LoginToEbay.itemlink.click();
  await LoginToEbay.ipadslink.click();
  await expect(LoginToEbay.ipaditem).toBeVisible();
  await LoginToEbay.ipaditem.click();
  let initialcartval = parseInt(await LoginToEbay.initialcartval.textContent());
  await page.waitForTimeout(+process.env.medium_wait);
  await expect(LoginToEbay.atc).toBeVisible();
  await LoginToEbay.atc.click();
  let afteratc = parseInt(await LoginToEbay.initialcartval.textContent());
  expect(afteratc).toBeGreaterThan(initialcartval);
  await page.waitForTimeout(+process.env.small_wait);
  await LoginToEbay.homeebay.click();
  await LoginToEbay.carticon.click();
  await expect(LoginToEbay.checkForItem).toBeVisible();
  await expect(LoginToEbay.RemCartItem).toBeVisible();
  await LoginToEbay.RemCartItem.click();
  await page.waitForTimeout(+process.env.small_wait);
});

test("Now selecting any item from  search area an added to wishlist", async ({
  page,
}) => {
  const LoginToApp = new LoginPage.SampleData(page, test);
  await LoginToApp.searchitem.fill(ebayData.itemName);
  const keyboard = page.keyboard;
  await keyboard.press("Enter");
  await page.waitForTimeout(+process.env.small_wait);
  await LoginToApp.laptopitem.click();
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//button[text()=' Shop by category']"),
  ]);
  await newPage.waitForLoadState("domcontentloaded");
  const LoginToApp1 = new LoginPage.SampleData(newPage, test);
  await newPage.waitForTimeout(2000);
  await newPage.waitForLoadState();
  await expect(LoginToApp1.wishlistBtn).toBeVisible();
  await LoginToApp1.wishlistBtn.click();
  await newPage.waitForTimeout(+process.env.small_wait);
  await LoginToApp1.wishListIcon.click();
  await newPage.waitForTimeout(+process.env.medium_wait);
  await expect(LoginToApp1.checkforWishItem).toBeVisible();
  await LoginToApp1.checkforWishItem.click();
  await newPage.waitForTimeout(+process.env.small_wait);
  await expect(LoginToApp1.unWatchBtn).toBeVisible();
  await LoginToApp1.unWatchBtn.click();
});
// test.afterEach("I logout from the application", async ({ page }) => {
//   const LoginToApp = new LoginPage.SampleData(page, test);
//   await page.bringToFront();
//   await LoginToApp.logoutFunction();
// });
