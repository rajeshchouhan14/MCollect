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

Then(/^User enters internal (.+)$/, async (username) => {

    await browser.pause(5000);
    let inputs = $("//a[text()='Login with a password']/../../../../..//input[@id='login_username']")
    await inputs.setValue(username);
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
    await browser.pause(10000);
    await browser.waitForText(LoginPage.verifyMcollect);
    await expect(LoginPage.verifyMcollect).toExist()

});

And(/^Data Source Mass Upload link should be displayed to user$/, async () => {
    await browser.pause(4000)
    await LoginPage.massuploadClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()=" Data Source Mass Upload "]').getText()) === 'Data Source Mass Upload',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});
And(/^Data Source Mass Upload link should be placed between Data Sources and FM Data Source View links$/, async () => {
    await browser.pause(4000)


});


Then(/^user logout from application$/, async () => {

    await browser.pause(5000);
    await LoginPage.Clicklogouticonbtn.click()
    await browser.pause(5000);
    await LoginPage.Clicklogoutbtn.click()
    await browser.pause(5000);


});
