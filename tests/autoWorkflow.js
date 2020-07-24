module.exports = {
    'Enter Zip Code': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .clickCarInsurance()
            .clickZipTextBox()
            .enterZipCode("92101")
    }
}