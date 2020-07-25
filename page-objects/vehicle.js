module.exports = {
    elements: {
        vehicleYear: '#yearYear-0Input-0',
        vehicleMake: '#makeMake-0Input-0',
        vehicleModel: '#modelModel-0Input-0',
        vehicleTrim: '#submodelSubmodel-0Input-0',
        vehicleSaveBtn: '#vehiclesSelectSaveBtn',
        textClick:'.question-text',
        ownPaid: {
            selector: '[data-cy="ownership-0-Own-PaidInFull-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        personCommuting: {
            selector: '[data-cy="primary_use-0-Personal/Commuting-Radiobutton"]',
            locateStrategy: 'css selector'
        },
        estimatedMiles:'#miles-input-0',
        usageSaveBtn: '#vehiclesDetailsSaveBtn'
    },
    commands: [{
        enterVehicleYear(year) {
            this
                .setValue('@vehicleYear', year)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleMake(make) {
            this
                .setValue('@vehicleMake', make)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleModel(model) {
            this
                .setValue('@vehicleModel', model)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        enterVehicleTrim(trim) {
            this
                .setValue('@vehicleTrim', trim)
                .click('@textClick')
                .api.pause(1000)
            return this
        },

        clickVehicleSaveBtn() {
            this
                .click('@vehicleSaveBtn')
            return this
        },

        clickOwnPaidInFullBtn() {
            this
                .click('@ownPaid')
                .api.pause(1000)
            return this
        },

        clickPersonalCommutingBtn() {
            this
                .click('@personCommuting')
                .api.pause(1000)
            return this
        },

        enterMiles(miles) {
            this
                .setValue('@estimatedMiles', miles)
            return this
        },

        clickUsageSaveBtn() {
            this
                .click('@usageSaveBtn')
            return this
        }
    }]
}