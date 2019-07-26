"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPage_1 = require("../Pages/loginPage");
var chai = __importStar(require("chai"));
describe('Log In to the app', function () {
    var loginPg;
    beforeEach(function () {
        loginPg = new loginPage_1.loginPage();
        protractor_1.browser.waitForAngularEnabled(false);
    });
    afterEach(function () {
    });
    it('fields verification', function () {
        loginPg.navigateTo('http://localhost/IntegratedLifingWeb/#/main');
        loginPg.loginClick().isDisplayed().then(function () {
            loginPg.getPageTitle().then(function (title) {
                //console.log(title);	
                chai.expect(title).to.equal('Sign in to your account');
            });
            loginPg.login();
            loginPg.password();
        });
        loginPg.loginClick().click();
        protractor_1.browser.sleep(3000);
    });
});
