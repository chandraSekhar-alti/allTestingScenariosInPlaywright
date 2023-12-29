exports.NewTabOpen = class NewTabOpen{
    constructor(page, test){
        this.page = page;
        this.test = test;
        this.w3headerBar = (genericText)=> page.locator(`//div[@id='subtopnav']/a[text()='${genericText}']`);
        this.accentureHeaderBar = (genericText) => page.locator(`(//div[@class="cmp-global-header__content"]/descendant::button[text()='${genericText}'])[1]`)
        this.w3LoginButton = page.locator('//a[@id="w3loginbtn"]');
    }
}