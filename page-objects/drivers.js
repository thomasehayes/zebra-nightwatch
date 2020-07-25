module.exports = {
    elements: {
        fName: '#first_name-0',
        lName:'#last_name-0',
        dob: '#date_of_birth-0',
        address: '#garaging_addressInput',
        unit: '#unit-0',
        driverSaveBtn: '#driversSelectSaveBtn',
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
        enterFName(fName) {
            this
                .setValue('@fName', fName)
            return this
        },
        
        enterLName(lName) {
            this
                .setValue('@lName', lName)
            return this
        },

        enterDob(dob) {
            this
                .setValue('@dob', dob)
                .api.pause(500)
            return this
        },

        enterAddress(address) {
            this
                .setValue('@address', address)
            return this
        },

        enterUnit(unit) {
            this
                .setValue('@unit', unit)
                // .click('[data-cy="pac_item"]')
            return this
        },

        clickDriverSaveBtn() {
            this
                .click('@driverSaveBtn')
            return this
        },
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