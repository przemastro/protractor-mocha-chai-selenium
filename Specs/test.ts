import { browser, element, by, ExpectedConditions} from 'protractor'
import {loginPage} from '../Pages/loginPage';
import * as chai from 'chai';


describe('Log In to the app', function() {
	
	let loginPg: loginPage;

	beforeEach(() => {
		loginPg = new loginPage();
		browser.waitForAngularEnabled(false);
	});
	
	afterEach(() => {

	});

	it('fields verification', () => { 
			loginPg.navigateTo('http://google.com');	
	    loginPg.loginClick().isDisplayed().then(function() {
		    loginPg.getPageTitle().then(function(title) {  
		      //console.log(title);	
		      chai.expect(title).to.equal('Sign in to your account');
				});
				//loginPg.login();
				//loginPg.password();
			});
			//loginPg.loginClick().click();
			browser.sleep(3000);	
	});
});