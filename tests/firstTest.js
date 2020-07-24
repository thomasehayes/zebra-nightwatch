module.exports = {
    'Verify Zebra Navbar': function (browser) {
        const page = browser.page.homepage();
        page
            .navigate()
            .verifyNavBar();
        browser
            .assert.urlEquals('https://www.thezebra.com/')
            
            
    }
}