const report = require('cucumber-html-reporter');
const { launch } = require('puppeteer');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
};

report.generate(options);
