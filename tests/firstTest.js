module.exports = {
    'My first test case': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            .assert.urlEquals('https://www.thezebra.com/')
            .waitForElementVisible('.header-brand')
            .assert.containsText('.header-brand', 'The Zebra®')
    }
}