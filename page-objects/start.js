module.exports = {
    elements: {
        noInsuranceBtn: {
            selector: '[data-cy="currently_insuredstart-No-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        iRentBtn: {
            selector: '[data-cy="residence_ownershipstart-IRent-Radiobutton"',
            locateStrategy: 'css selector'
        },
        justLookingBtn: {
            selector: '[data-cy="user_intentstart-I’MJustLookingAtMyOptions-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        saveAndContinueBtn: '#startSaveBtn'
    }, 
    commands: [{
        clickNoInsBtn() {
            this
                .click('@noInsuranceBtn')
            return this
        },

        clickIRentBtn() {
            this
                .click('@iRentBtn')
            return this
        },

        clickJustLookingBtn() {
            this
                .click('@justLookingBtn')
            return this
        },
        
        clickSaveAndContinueBtn() {
            this
                .click('@saveAndContinueBtn')
            return this 
        }
    }]
}