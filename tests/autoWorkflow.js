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
        const start = browser.page.start();
        start
            .clickNoInsBtn()
            .clickIRentBtn()
            .clickJustLookingBtn()
            .clickSaveAndContinueBtn()
        browser.pause(2000)
    },

    'Enter Basic Vehicle Information': function (browser) {
        const vehicle = browser.page.vehicle();
        vehicle
            .enterVehicleYear(2012)
            .enterVehicleMake("Hyundai")
            .enterVehicleModel("Tucson")
            .enterVehicleTrim("GLS 4dr SUV")
            .clickVehicleSaveBtn()
        browser.pause(2000)
    },

    'Enter Vehicle Usage Information': function (browser) {
        const vehicle = browser.page.vehicle();
        vehicle
            .clickOwnPaidInFullBtn()
            .clickPersonalCommutingBtn()
            .enterMiles(12000)
            .clickUsageSaveBtn()
        browser.pause(2000)

    },

    "Add Driver's Information": function (browser) {
        const driver = browser.page.drivers() 
        driver
            .enterFName("John")
            .enterLName("Smith")
            .enterDob(111119900)
            .enterAddress("1475 Island Ave")
            .enterUnit(2403)
            .clickDriverSaveBtn()
        browser.pause(2000)
    },

    "Provide Driver's Information": function (browser) {
        const driver = browser.page.drivers()
        driver  
            .clickMale()
            .clickMaritalStatus()
            .clickEducationLevel()
            .clickNoAccident()
            .enterEmail("johnsmith@example.com")
            .clickShowQuotesBtn()
        browser.pause(2000)
    }
}