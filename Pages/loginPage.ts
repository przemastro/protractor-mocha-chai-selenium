import {browser, element, by, ExpectedConditions} from 'protractor';
import {BasePage} from "./basePage";

export class loginPage extends BasePage{

    submitButton = element(by.id('idSIButton9'));

    loginClick() {
        return this.submitButton;
    }

    login() {
        const usernameInput = element(by.name('login'));
        usernameInput.sendKeys('login');
        this.submitButton.click();
        browser.sleep(2000);
    }

    password() {
        const passwordInput = element(by.name('passwd'));
        passwordInput.sendKeys('Password');
        this.submitButton.click();
        browser.sleep(2000);
    }

    navigateTo(url: string) {
        browser.get(url);
    }

    getPageTitle() {
        return browser.getTitle();
    }
}