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
        },

        //Compare Links
        //Ins = Insurance
        autoInsLnk: {
            selector: 'a[href="https://www.thezebra.com/auto-insurance/"]',
            locateStrategy: 'css selector'
        },
        homeInsLnk: {
            selector: 'a[href="https://www.thezebra.com/homeowners-insurance/"]',
            locateStrategy: 'css selector'
        },
        rentersInsLnk: {
            selector: 'a[href="https://www.thezebra.com/renters-insurance/"]',
            locateStrategy: 'css selector'
        },
        lifeInsLnk: {
            selector: 'a[href="https://www.thezebra.com/life-insurance/"]',
            locateStrategy: 'css selector'
        },
        freeCarInsQuoteInsLnk: {
            selector: 'a[href="https://www.thezebra.com/car-insurance-quotes/"]',
            locateStrategy: 'css selector'
        },
        bestCheapCarInsLnk: {
            selector: 'a[href="https://www.thezebra.com/auto-insurance/how-to-shop/best-cheap-auto-insurance/"]',
            locateStrategy: 'css selector'
        },
        bestCarInsByVehicleLnk: {
            selector: 'a[href="https://www.thezebra.com/auto-insurance/vehicles/"]',
            locateStrategy: 'css selector'
        },
        bestInsCompaniesLnk: {
            selector: 'a[href="https://www.thezebra.com/insurance-companies/"]',
            locateStrategy: 'css selector'
        },  
        insByStateLnk: {
            selector: 'a[href="https://www.thezebra.com/states/"]',
            locateStrategy: 'css selector'
        },  
        otherInsLnk: {
            selector: 'a[href="https://www.thezebra.com/other-insurance/"]',
            locateStrategy: 'css selector'
        },    

        //Tools & Tips Links
        resourcesLnk: {
            selector: 'a[href="https://www.thezebra.com/resources/"]',
            locateStrategy: 'css selector'
        },   
        researchReportsLnk: {
            selector: 'a[href="https://www.thezebra.com/resources/research/"]',
            locateStrategy: 'css selector'
        },            
        stateOfInsLnk: {
            selector: 'a[href="https://www.thezebra.com/state-of-insurance/auto/2020/"]',
            locateStrategy: 'css selector'
        },    
        carInsCalculatorLnk: {
            selector: 'a[href="https://www.thezebra.com/auto-insurance/coverage/car-insurance-calculator/"]',
            locateStrategy: 'css selector'
        },

        //Company Links   
        aboutTheZebraLnk: {
            selector: 'a[href="https://www.thezebra.com/about/"]',
            locateStrategy: 'css selector'
        },
        pressLnk: {
            selector: 'a[href="https://www.thezebra.com/about/press/"]',
            locateStrategy: 'css selector'
        },
        careersLnk: {
            selector: 'a[href="https://www.thezebra.com/about/careers/"]',
            locateStrategy: 'css selector'
        },
        contactUsLnk: {
            selector: 'a[href="https://www.thezebra.com/about/help/"]',
            locateStrategy: 'css selector'
        },        
        covid19ResponseLnk: {
            selector: 'a[href="https://www.thezebra.com/about/covid-19-response/"]',
            locateStrategy: 'css selector'
        },
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
            return this
        },

        verifyCompareTabLnks() {
            this
                .click('@navbarCompare')
                .waitForElementVisible('@autoInsLnk')
                .waitForElementVisible('@homeInsLnk')
                .waitForElementVisible('@rentersInsLnk')
                .waitForElementVisible('@lifeInsLnk')
                .waitForElementVisible('@freeCarInsQuoteInsLnk')
                .waitForElementVisible('@bestCheapCarInsLnk')
                .waitForElementVisible('@bestCarInsByVehicleLnk')
                .waitForElementVisible('@bestInsCompaniesLnk')
                .waitForElementVisible('@insByStateLnk')
                .waitForElementVisible('@otherInsLnk')
            return this
        },

        verifyToolsTipsTabLnks(){
            this
                .click('@navbarToolsTips')
                .waitForElementVisible('@resourcesLnk')
                .waitForElementVisible('@researchReportsLnk')
                .waitForElementVisible('@stateOfInsLnk')
                .waitForElementVisible('@carInsCalculatorLnk')
            return this
        },
        
        verifyCompanyTabLnks(){
            this
                .click('@navbarCompany')
                .waitForElementVisible('@aboutTheZebraLnk')
                .waitForElementVisible('@pressLnk')
                .waitForElementVisible('@careersLnk')
                .waitForElementVisible('@contactUsLnk')
                .waitForElementVisible('@covid19ResponseLnk')
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
    }]
}
