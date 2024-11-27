const {setWorldConstructor} = require('cucumber');
const {expect} = require('chai');
const puppeteer = require('puppeteer');

class CustomWorld {
    async launchBrowser(){
        this.browser = await puppeteer.launch({headless: false});
    }
    async closeBrowser(){
        await this.browser.close();
    }
    async visit(){
        this.page = await this.browser.newPage();
        await this.page.goto('https://www.saucedemo.com/');
    }
    async fillLoginForm(){
        await this.page.waitForSelector('.login-box');
        await this.page.type('#user-name', 'standard_user');
        await this.page.type('#password', 'secret_sauce');
    }
    async submitLogin(){
        await this.page.click('#login-button');
    }
    async verifyLogin(){
        await this.page.waitForSelector('.inventory_list');
    }    
}

setWorldConstructor(CustomWorld);