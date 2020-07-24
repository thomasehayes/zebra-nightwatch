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
        }
    }]

}
