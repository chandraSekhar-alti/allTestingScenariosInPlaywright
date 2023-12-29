exports.FileDownload = class FileDownload{
    constructor(page, test){
        this.page = page;
        this.test = test;
        this.downloadText = page.locator("//a[text()='File Download']");
        this.samplePdf = page.locator("//a[text()='HRMS Assesment.txt']");
    }
}