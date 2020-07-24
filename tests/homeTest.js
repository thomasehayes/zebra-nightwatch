module.exports = {
    'Check Navbar and URL are correct': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .verifyNavBar()
        browser
            .assert.urlEquals('https://www.thezebra.com/')
    },

    // 'Verify Car and Home Insurance is visible': function (browser) {
    //     const page = browser.page.homepage();
    //     page
    //         .verifyCarAndHomeLabels();
    // }
    
}