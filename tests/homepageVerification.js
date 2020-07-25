module.exports = {
    tags: ['homeVerification'],
    'Check Navbar and URL are correct': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .verifyNavBar()
        browser
            .assert.urlEquals('https://www.thezebra.com/')
    },

    'Verify Text on Homepage': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyHomepageTxt("Compare insurance quotes instantly.")
            .verifyReviewYourQuotesTxt("Review your quotes.")
    },

    'Verify Car and Home Insurance labels are visible': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyCarAndHomeLabels();
    },

    'Verify Links exist for Compare tab': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyCompareTabLnks();
    },

    'Verify Links exist for Tools & Tips tab': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyToolsTipsTabLnks();
    },
    
    'Verify Links exist for Company tab': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyCompanyTabLnks();
    }    
}