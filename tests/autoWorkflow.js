module.exports = {
    'Enter Zip Code and Click Start Button': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .clickCarInsurance()
            .clickZipTextBox()
            .enterZipCode("92101")
            .clickStartBtn()
        browser.pause(2000)
    },

    'Answer Questions from Start Page and Continue': function (browser) {
        const page = browser.page.homepage();
        page
            .clickNoInsBtn()
            .clickIRentBtn()
            .clickJustLookingBtn()
            .clickSaveAndContinueBtn()
        browser.pause(2000)
    },

    'Enter Basic Vehicle Information': function (browser) {
        const page = browser.page.homepage();
        page
            .enterVehicleYear(2012)
            .enterVehicleMake("Hyundai")
            .enterVehicleModel("Tucson")
            .enterVehicleTrim("GLS 4dr SUV")
            .clickVehicleSaveBtn()
        browser.pause(2000)
    },

    'Enter Vehicle Usage Information': function (browser) {
        const page = browser.page.homepage();
        page
            .clickOwnPaidInFullBtn()
            .clickPersonalCommutingBtn()
            .enterMiles(12000)
            .clickUsageSaveBtn()
        browser.pause(2000)

    },

    "Enter Driver's Information": function (browser) {
        const page = browser.page.homepage() 
        page
            .enterFName("John")
            .enterLName("Smith")
            .enterDob(111119900)
            .enterAddress("1475 Island Ave")
            .enterUnit(2403)
            .clickDriverSaveBtn()
        browser.pause(2000)
    }
}