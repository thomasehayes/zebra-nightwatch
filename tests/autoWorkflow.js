module.exports = {
    'Enter Zip Code and Click Start Button': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .clickCarInsurance()
            .clickZipTextBox()
            .enterZipCode("92101")
            .clickStartBtn()
    },

    'Answer Questions from Start Page and Continue': function (browser) {
        const page = browser.page.homepage();
        page
            .clickNoInsBtn()
            .clickIRentBtn()
            .clickJustLookingBtn()
            .clickSaveAndContinueBtn()

    }
}