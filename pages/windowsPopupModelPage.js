exports.WindowsPopupHandler = class WindowsPopupHandler{
    constructor(page,test){
        this.page = page;
        this.test = test;
        this.openUrlButton = page.locator("//a[text()='  Open URL ']");
        this.newPageInputField = page.locator('//input[@type="url"]');
    }
}