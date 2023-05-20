const report =require("multiple-cucumber-html-reporter")
report.generate
({
    jsonDir:"cypress/cucumber-json",
    reportPath: "./reports/cucumber-html-report.html",
    metadata:{
        browser: {
            name: 'chrome',
            version: '90'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '16.04'
        }
    },
    




})