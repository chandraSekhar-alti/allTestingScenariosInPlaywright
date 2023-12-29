exports.DataUpdation = class DataUpdation{
    constructor(page, test){
        this.page = page;
        this.test = test;
        this.currentTime = page.locator('//span[@id="ct"]');
    }
}