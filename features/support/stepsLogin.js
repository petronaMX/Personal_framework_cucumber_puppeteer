const {Given, When, Then, Before, After} = require('cucumber');

Before(async function () {
    return await this.launchBrowser();
});

After(async function () {
    return await this.closeBrowser();
});

Given('I open the login page', async function () {  
    return await this.visit();
});

When('I enter my username and password', async function () {
    return await this.fillLoginForm();
});

When('I click the login button', async function () { 
    return await this.submitLogin();
});

Then('I should be redirected to the application content', async function () { 
    return await this.verifyLogin();
});