exports.IframeLandingPage = class IframeLandingPage{
    constructor(page,test){
        this.page = page;
        this.test = test;
        this.homePageCenterText = page.locator('//div[@class="example"]/child::h3');
        this.paragraphArea = page.locator("//p");
        this.boldButton = page.locator('//button[@aria-label="Bold"]');
        this.italicButton = page.locator('//button[@title="Italic"]');

    }
}