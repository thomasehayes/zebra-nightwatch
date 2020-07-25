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
        carInsuranceLabel: {
            selector: '[for="557ae5a0-13e0-40ca-800e-b5fef73eb05bauto"]',
            locateStrategy: 'css selector'
        },
        homeInsuranceLabel: {
            selector: '[for="557ae5a0-13e0-40ca-800e-b5fef73eb05bhome"]',
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
        }
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
        verifyCarAndHomeLabels(){
            this  
                .waitForElementVisible('@carInsuranceLabel')
                .waitForElementVisible('@homeInsuranceLabel')
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
    }]
}
