module.exports = {
    url: "https://www.thezebra.com/",
    elements: {
        mainZebraIcon: ".header-brand",
        navbarCompare: {
            selector: '.header-nav-item:nth-child(1) > a > span',
            locateStrategy: 'css selector'
        },
        navbarToolsTips: {
            selector: '.header-nav-item:nth-child(2) > a > span',
            locateStrategy: 'css selector'
        },
        navbarCompany: {
            selector: '.header-nav-item:nth-child(3) > a > span',
            locateStrategy: 'css selector'
        },
        navbarPhoneNo: {
            selector: 'a[class ="cta-phone cta-phone-link"]',
            locateStrategy: 'css selector'
        },
        homeInsuranceLabel: {
            selector: 'label[for="557ae5a0-13e0-40ca-800e-b5fef73eb05bhome"]',
            locateStrategy: 'css selector'
        },
        carInsuranceLabel: {
            selector: 'label[for="557ae5a0-13e0-40ca-800e-b5fef73eb05bauto"]',
            locateStrategy: 'css selector'
        },
        zipCode: {
            selector: 'input[id="557ae5a0-13e0-40ca-800e-b5fef73eb05b"]',
            locateStrategy: 'css selector'
        },

        //Needs work on making it unique to 1st start button on page
        startBtn: {
            selector: '.input-group-append > button',
            locateStrategy: 'css selector'
        },
        noInsuranceBtn: {
            selector: '[data-cy="currently_insuredstart-No-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        iRentBtn: {
            selector: '[data-cy="residence_ownershipstart-IRent-Radiobutton"',
            locateStrategy: 'css selector'
        },
        justLookingBtn: {
            selector: '[data-cy="user_intentstart-I’MJustLookingAtMyOptions-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        saveAndContinueBtn: '#startSaveBtn',
        vehicleYear: '#yearYear-0Input-0',
        vehicleMake: '#makeMake-0Input-0',
        vehicleModel: '#modelModel-0Input-0',
        vehicleTrim: '#submodelSubmodel-0Input-0',
        vehicleSaveBtn: '#vehiclesSelectSaveBtn',
        textClick:'.question-text'


    },
    commands: [{
        verifyNavBar() {
            this
                .waitForElementVisible('@mainZebraIcon')
                .assert.containsText('@mainZebraIcon', 'The Zebra®')
                .assert.containsText('@navbarCompare', "Compare")
                .assert.containsText('@navbarToolsTips', "Tools & Tips")
                .assert.containsText('@navbarCompany', "Company")
                .assert.containsText('@navbarPhoneNo', "1.888.255.4364")
            return this
        },

        clickCarInsurance() {
             this
                .click('@carInsuranceLabel')
            return this
        },

        clickZipTextBox() {
            this
                .click('@zipCode')
            return this
        },

        enterZipCode(zip) {
            this
                .setValue('@zipCode', zip)
            return this
        },

        clickStartBtn() {
            this
                .click('@startBtn')
            return this
        },

        clickNoInsBtn() {
            this
                .click('@noInsuranceBtn')
            return this
        },

        clickIRentBtn() {
            this
                .click('@iRentBtn')
            return this
        },

        clickJustLookingBtn() {
            this
                .click('@justLookingBtn')
            return this
        },
        
        clickSaveAndContinueBtn() {
            this
                .click('@saveAndContinueBtn')
            return this 
        },

        enterVehicleYear(year) {
            this
                .setValue('@vehicleYear', year)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleMake(make) {
            this
                .setValue('@vehicleMake', make)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleModel(model) {
            this
                .setValue('@vehicleModel', model)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleTrim(trim) {
            this
                .setValue('@vehicleTrim', trim)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        clickVehicleSaveBtn() {
            this
                .click('@vehicleSaveBtn')
            return this
        }

    }]
}
