module.exports = {
    elements: {
        male: {
            selector: '[data-cy="gender-0-Male-Radiobutton"]',
            locatestrategy: 'css selector'
        },
        single: {
            selector: '[data-cy="marital_status-0-Single-Radiobutton"]',
            locatestrategy: 'css selector'
        },
        bachelor: {
            selector: '[for="education-2-0"]',
            locatestrategy: 'css selector'
        },
        noAccident: {
            selector: '[data-cy="violations-0-No-Radiobutton"]',
            locatestrategy: 'css selector'
        },
        email: {
            selector: '[name="email"]',
            locatestrategy: 'css selector'
        },
        showQuotes: '[data-cy="show_my_quotes"]'
    },
    commands: [{
        clickMale() {
            this
                .click('@male')
                .api.pause(500)
            return this
        },
        clickMaritalStatus() {
            this
                .click('@single')
                .api.pause(500)
            return this
        },
        clickEducationLevel() {
            this
                .click('@bachelor')
                .api.pause(500)
            return this
        },
        clickNoAccident() {
            this
                .click('@noAccident')
                .api.pause(500)
            return this
        },
        enterEmail(email) {
            this
                .setValue('@email', email)
                .api.pause(500)
            return this
        }, 
        clickShowQuotesBtn() {
            this
                .click('@showQuotes')
            return this
        }
    }]
}