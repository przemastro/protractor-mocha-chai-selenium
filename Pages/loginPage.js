"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var basePage_1 = require("./basePage");
var loginPage = /** @class */ (function (_super) {
    __extends(loginPage, _super);
    function loginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.submitButton = protractor_1.element(protractor_1.by.id('idSIButton9'));
        return _this;
    }
    loginPage.prototype.loginClick = function () {
        return this.submitButton;
    };
    loginPage.prototype.login = function () {
        var usernameInput = protractor_1.element(protractor_1.by.name('loginfmt'));
        usernameInput.sendKeys('ehmtestadmin@ehmtestbed.onmicrosoft.com');
        this.submitButton.click();
        protractor_1.browser.sleep(2000);
    };
    loginPage.prototype.password = function () {
        var passwordInput = protractor_1.element(protractor_1.by.name('passwd'));
        passwordInput.sendKeys('11QQaazz');
        this.submitButton.click();
        protractor_1.browser.sleep(2000);
    };
    loginPage.prototype.navigateTo = function (url) {
        protractor_1.browser.get(url);
    };
    loginPage.prototype.getPageTitle = function () {
        return protractor_1.browser.getTitle();
    };
    return loginPage;
}(basePage_1.BasePage));
exports.loginPage = loginPage;
