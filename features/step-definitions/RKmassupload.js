const { Given, When, And, Then, } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the mercercollect (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    await browser.pause(5000);
    browser.maximizeWindow();
    await browser.pause(5000);


});

Then(/^user enters external (.+)$/, async (username) => {

    await browser.pause(5000);
    let inputs = $("//input[@id='login_username']")
    await inputs.setValue(username);
    await browser.pause(5000);
    await browser.keys("\ue004");
});
Then(/^User click on submit button$/, async () => {
    await browser.pause(5000);
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);
    // driver.switchTo().alert();
    // click on OK to accept with accept()
    // al.accept();
    // await browser.acceptAlert();
});


Then(/^User enters internal (.+)$/, async (username) => {

    await browser.pause(5000);
    let inputs = $("//a[text()='Login with a password']/../../../../..//input[@id='login_username']")
    await inputs.setValue(username);
    await browser.pause(5000);

});

Then(/^user enter external (.+)$/, async (password) => {

    await browser.pause(5000);
    let inputs1 = $("//input[@id='login_password']")
    await inputs1.click();
    await inputs1.setValue(password);
    await browser.pause(5000);

});


Then(/^user clicks on submit button$/, async () => {

    await browser.pause(5000);
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);
    // driver.switchTo().alert();
    // click on OK to accept with accept()
    // al.accept();
    // await browser.acceptAlert();
});


Then(/^the user has logged into the Mercer Collect successfully$/, async () => {
    browser.setTimeout({ 'pageLoad': 10000 })
    await browser.pause(10000);
    browser.setTimeout({ 'pageLoad': 10000 })
    await browser.pause(10000);
    await expect(LoginPage.verifyMcollect).toExist()
    await browser.pause(10000);



});

Then(/^user logout from application$/, async () => {

    await browser.pause(5000);
    await LoginPage.Clicklogouticonbtn.click()
    await browser.pause(5000);
    await LoginPage.Clicklogoutbtn.click()
    await browser.pause(5000);


});
