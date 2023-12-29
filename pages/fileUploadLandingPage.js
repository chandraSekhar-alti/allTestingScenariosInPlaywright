exports.FileUploadLanding = class FileUploadLanding {
    constructor(page, test) {
        this.page = page;
        this.test = test;
        this.fileUploadInputFiled = page.locator('//input[@id="file-upload"]');
        this.uploadButton = page.locator('//input[@id="file-submit"]');
        this.successMsg = page.locator('//div[@class="example"]')
    }

    async fileUpload(filePath) {
        const input = await this.fileUploadInputFiled;
        await input.setInputFiles(filePath);
        await this.page.waitForTimeout(2000);
    }
}