exports.AlertBoxes = class AlertBoxes{
    constructor(page, test){
        this.page= page;
        this.test = test;
        this.alertBoxButton = page.locator("//p[text()='JavaScript Alerts']/button");
        this.confirmBoxButton = page.locator("//p[text()='Confirm box:']/button");
        this.promptBoxButton = page.locator("//p[text()='Prompt box:']/button");
    }
}