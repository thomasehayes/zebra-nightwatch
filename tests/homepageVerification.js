module.exports = {
    tags: ['test1'],
    'Check Navbar and URL are correct': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .verifyNavBar()
        browser
            .assert.urlEquals('https://www.thezebra.com/')
    },

    'Verify Car and Home Insurance labels are visible': function (browser) {
        const page = browser.page.homepage();
        page
            .verifyCarAndHomeLabels();
    }
    
}