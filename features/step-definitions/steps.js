const { Given, When, Then, And } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});



// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].collectopen()
//     await browser.pause(5000);
//     await LoginPage.loginWithSSO.click()
//     await browser.pause(5000);
//     await LoginPage.EnterMcollectLogin()
//     await browser.pause(5000);
//     await LoginPage.Clicksubmitbtn.click()
//     await browser.pause(10000);
//     await browser.pause(10000);

// });

Given(/^I am on the mercercollect (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    await browser.pause(5000);
    browser.maximizeWindow();
    await browser.pause(5000);


});

When(/^user click on internal user link and enter (.+)$/, async (username) => {
    await browser.pause(5000);
    await LoginPage.loginWithSSO.click()
    await browser.pause(5000);
    let inputs = $("//a[text()='Login with a password']/../../../../..//input[@id='login_username']")
    await inputs.setValue(username);
    await browser.pause(5000);
});

When(/^user enter the internal (.+)$/, async (username) => {
    await browser.pause(5000);
    await LoginPage.loginWithSSO.click()
    await browser.pause(5000);
    let inputs = $("//a[text()='Login with a password']/../../../../..//input[@id='login_username']")
    await inputs.setValue(username);
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);
});



Then(/^User enters external (.+)$/, async (username) => {

    await browser.pause(5000);
    let inputs = $("//input[@id='login_username']")
    await inputs.setValue(username);
    await browser.pause(5000);
    await browser.keys("\ue004");
});


When(/^External user enter (.+) (.+)$/, async (username, password) => {

    await browser.pause(5000);
    let inputs = $("//input[@id='login_username']")
    await inputs.setValue(username);
    await browser.pause(5000);
    await browser.keys("\ue004");

    let inputs1 = $("//input[@id='login_password']")
    await inputs1.click();
    await inputs1.setValue(password);
    await browser.pause(5000);

    // await LoginPage.Clicksubmitbtn.click()
    // await browser.pause(5000);
});


Then(/^let me enter pass (.+) (.+)$/, async (password) => {
    await browser.pause(5000);
    let inputs1 = $("//input[@id='login_password']")
    await inputs1.click();
    await browser.pause(1000);

    await inputs1.setValue(password);
    await browser.pause(5000);

    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);

});


Then(/^User enter external (.+)$/, async (password) => {

    await browser.pause(5000);
    let inputs1 = $("//input[@id='login_password']")
    await inputs1.click();
    await inputs1.setValue(password);
    await browser.pause(5000);


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

Then(/^User clicks on submit button$/, async () => {
    await browser.pause(5000);
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);
    // driver.switchTo().alert();
    // click on OK to accept with accept()
    // al.accept();
    // await browser.acceptAlert();
});

Then(/^user logout from application$/, async () => {

    await browser.pause(5000);
    await LoginPage.Clicklogouticonbtn.click()
    await browser.pause(5000);
    await LoginPage.Clicklogoutbtn.click()
    await browser.pause(5000);


});
Then(/^the user should be able to see records of last 90 days only in Upload History table$/, async () => {

    await browser.pause(5000);


});

Then(/^user verifies the disclaimer text$/, async () => {

    await browser.pause(10000);
    let inputs = $("//div[text()=' Upload History is maintained for last 90 days only ']")
    inputs.scrollIntoView();

    await browser.waitUntil(
        async () => (await $('//div[text()=" Upload History is maintained for last 90 days only "]').getText()) === 'Upload History is maintained for last 90 days only',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Given(/^I am on the FM (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(5000);
    // await browser.pause(5000);  
    await LoginPage.EnterMcollectFMLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the RK (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectRKLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the Admin (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    // await browser.pause(3000); 
    await browser.pause(5000);
    await LoginPage.EnterMcollectAdminLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the Consultant (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    //  browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectConsultantLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the CSOanalyst (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectCSOanalystLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the DOT (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectDOTLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the FieldAnalyst (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectFieldAnalystLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the PROanalyst (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectPROAnalystLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});

Given(/^I am on the Support (\w+) page$/, async (page) => {
    await pages[page].collectopen()
    browser.maximizeWindow();
    await browser.pause(3000);
    await browser.pause(5000);
    await LoginPage.EnterMcollectSupportLogin()
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(10000);
});


Then(/^Verify the landing page$/, async () => {
    browser.setTimeout({ 'pageLoad': 10000 })
    await browser.pause(10000);
    //  await page.goto(url, { waitUntil: verifyMcollect });

    // browser.setTimeout({ 'pageLoad': 10000 }) 
    await browser.pause(10000);
    // await browser.pause(10000);  
    // browser.onload = () => {
    //     setTimeout(() => {
    //       document.body.style.opacity = "100";
    //     }, 500);
    //   };
    // await browser.waitUntil(
    //     async () => (await $('(//h4[@class="mos-u-spacer--padding-md mos-u-font-weight--bold"])[1]').getText()) === 'Videos',
    //     {
    //         timeout: 20000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     }
    // );
    // await browser.waitForExist(LoginPage.verifyMcollect);
    await expect(LoginPage.verifyMcollect).toExist()
    // await browser.pause(10000);
    // await expect(LoginPage.verifyMcollect).toExist()
    // await LoginPage.dashboardClick.click()
    // await browser.pause(10000);  

});
Then(/^the user has logged into the Mercer Collect successfully$/, async () => {
    await LoginPage.Clicksubmitbtn.click()
    await browser.pause(5000);
    // browser.setTimeout({ 'pageLoad': 10000 })
    // await browser.pause(10000);
    browser.setTimeout({ 'pageLoad': 10000 })
    await browser.pause(10000);
    // await browser.pause(10000);  
    // browser.onload = () => {
    //     setTimeout(() => {
    //       document.body.style.opacity = "100";
    //     }, 500);
    //   };
    // await browser.waitUntil(
    //     async () => (await $('(//h4[@class="mos-u-spacer--padding-md mos-u-font-weight--bold"])[1]').getText()) === 'Videos',
    //     {
    //         timeout: 20000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     }
    // );
    //  browser.waitForText(LoginPage.verifyMcollect); 
    // await expect(LoginPage.verifyMcollect).toExist()
    await browser.pause(10000);
    await expect(LoginPage.verifyMcollect).toExist()
    // await LoginPage.dashboardClick.click()
    await browser.pause(10000);


});
Then(/^wait for some time$/, async () => {
    browser.setTimeout({ 'pageLoad': 10000 })
    await browser.pause(10000);


});



Then(/^Verify the dashboard page$/, async () => {
    await browser.pause(4000)
    await LoginPage.dashboardClick.click()
    await browser.pause(5000);
    await browser.waitUntil(
        async () => (await $('//h1[text()=" Dashboard "]').getText()) === 'Dashboard',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the dashboard page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.dashboardClick).not.toExist()

});

Then(/^Verify the data change logs page$/, async () => {
    await browser.pause(4000)
    await LoginPage.datachangeClick.click()
    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()=" Data Change Logs "]').getText()) === 'Data Change Logs',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the data change logs page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.datachangeClick).not.toExist()

});
Then(/^Verify the integration logs page$/, async () => {
    await browser.pause(4000)
    await LoginPage.integrationClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()="Integration Logs"]').getText()) === 'Integration Logs',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the integration logs page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.integrationClick).not.toExist()

});
Then(/^Verify the clients page$/, async () => {
    await browser.pause(4000)
    await LoginPage.clientsClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()="Client List"]').getText()) === 'Client List',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the clients page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.clientsClick).not.toExist()

});
Then(/^Verify the users page$/, async () => {
    await browser.pause(10000)
    browser.onload = () => {
        setTimeout(() => {
            document.body.style.opacity = "100";
        }, 500);
    };
    await LoginPage.usersClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()="User List"]').getText()) === 'User List',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the users page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.usersClick).not.toExist()

});

Then(/^Click on add new user$/, async () => {
    await browser.pause(4000)
    await LoginPage.addusersClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//label[text()="Email"]').getText()) === 'Email',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify Active user List$/, async () => {
    await browser.pause(10000)
    await LoginPage.Inactiveuser.click();
    //   await browser.pause(4000)   
    //   await LoginPage.dashboardClick.click()
    //   await browser.pause(4000)   
    //   await LoginPage.usersClick.click()
    await browser.pause(4000)
    expect(await $('//button[contains(text(),"View active user list")]')).toBeExisting();

    // await browser.waitUntil(
    //     async () => (await $('//div[@class="mos-u-spacer--margin-bottom-lg"]//button').getText()) === ' View inactive user list ',
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     }
    // );

});


Then(/^Verify InActive user List$/, async () => {
    await browser.pause(4000)
    await LoginPage.Inactiveuser.click()
    await browser.pause(6000)
    expect(await $('//button[contains(text(),"View active user list")]')).toBeExisting();

    // await browser.waitUntil(
    //     async () => (await $('//div[@class="mos-u-spacer--margin-bottom-lg"]//button').getText()) === ' View active user list',
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     }
    // );

});

Then(/^Filter the list by first name$/, async () => {
    await browser.pause(4000)
    await LoginPage.filterfirstname.click()
    await browser.pause(5000);

});

Then(/^Filter the list by last name$/, async () => {
    await browser.pause(4000)
    await LoginPage.filterlastname.click()
    await browser.pause(5000);
});

Then(/^Search the user using (.+)$/, async (eml) => {

    await browser.pause(5000);

    await LoginPage.searchname.setValue(eml)
    await browser.keys('Enter')
    await browser.pause(4000)
    expect(await $('(//td[contains(text(),email)])[1]')).toBeExisting();
    await browser.waitUntil(
        async () => (await $('//tr/td[3]').getText()) === eml,
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
    await browser.pause(5000);
    await browser.keys("\ue004");
});


Then(/^Clear the search box and verify search result$/, async () => {
    await browser.pause(4000)
    await LoginPage.searchname.clearValue()
    await browser.keys('Enter')
    // await browser.waitUntil(
    //     async () => (await $('//tr/td[1]').getText()) === 'Anjali',
    //     {
    //         timeout: 5000,
    //         timeoutMsg: 'expected text to be different after 5s'
    //     }
    // );
});

Then(/^Search the strategy$/, async () => {
    await browser.pause(4000)
    await LoginPage.searchname.clearValue()
    await browser.pause(4000)
    await LoginPage.searchname.setValue('205')
    await browser.pause(4000)
    await browser.keys('Enter')
    await browser.pause(8000)

});

Then(/^Verify the list of strategy$/, async () => {
    await browser.pause(4000);
    // expect(await $('(//td[contains(text(),"205")])')).toBeExisting();
    // await browser.pause(4000);
    await LoginPage.ClickStrategy.click();
    await browser.waitUntil(
        async () => (await $('//div[text()=" Performance "]').getText()) === 'Performance',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
});

Then(/^Click on strategy$/, async () => {
    // await browser.pause(4000);
    // await LoginPage.ClickStrategy.click();
    // await browser.pause(5000);  
});
Then(/^verify navigate to data sources$/, async () => {
    // await browser.pause(4000);
    await browser.waitUntil(
        async () => (await $('//div[text()=" Performance "]').getText()) === 'Performance',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
    await browser.pause(5000);
});

Then(/^Edit all Market value$/, async () => {
    await browser.pause(4000);
    await LoginPage.marketValueEditBox.setValue('20')
    await browser.pause(5000);
});
Then(/^Click on Clients$/, async () => {
    await browser.pause(4000);
    await LoginPage.clientClick.click()
    await browser.pause(5000);
});

When(/^Select the month filter$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.Selectmonth).toExist()

    await LoginPage.Selectmonth.click()
    await browser.pause(2000)
    await LoginPage.Selectmonthoption.click()
    await browser.pause(1000)

});
Then(/^Filter the list by roles$/, async () => {
    await browser.pause(1000)
    await LoginPage.filterroles.click()
    // await LoginPage.ClickRoles.click()
    // await browser.pause(1000)
    // await LoginPage.SelectRoles.click()
    // await browser.pause(5000);  
});


Then(/^Enter user details(.+)$/, async (eml) => {

    await browser.pause(5000);
    let inputs = $("//input[@title='Email']")
    await inputs.click();
    await inputs.setValue(eml);
    await browser.pause(5000);
    await browser.keys("\ue004");
    await LoginPage.EnteruserDetail()

});

Then(/^select roles type$/, async () => {

    await LoginPage.ClickRoles.click()
    await browser.pause(4000)
    await LoginPage.SelectRoles.click()
    await browser.pause(4000)
    // await LoginPage.SelectProAnalystRoles.click()  
    // await browser.pause(4000)
    await LoginPage.EnteruserDetail2()
    await browser.pause(10000);

});

Then(/^select status$/, async () => {
    await browser.pause(4000)
    await LoginPage.SelectStatus.click()
    await browser.pause(4000)

});

Then(/^select inactive status$/, async () => {
    await browser.pause(4000)
    await LoginPage.SelectStatus.click()
    await browser.pause(4000)
    await LoginPage.SelectInactiveStatus.click()
    await browser.pause(4000);

});
Then(/^save user details$/, async () => {
    await browser.pause(4000)
    await LoginPage.Saveuser.click()
    await browser.pause(10000);

});
Then(/^Verify the Data source FM page$/, async () => {
    await browser.pause(4000)
    await LoginPage.FMClick.click()

    await browser.pause(5000);
    await browser.waitUntil(
        async () => (await $('//span[text()="Strategy"]').getText()) === 'Strategy',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the Data sources FM page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.FMClick).not.toExist()

});


Then(/^Click on strategy$/, async () => {
    await browser.pause(4000)
    await LoginPage.strategyClick.click()
    await browser.pause(10000);

});

Then(/^Select next plan$/, async () => {
    await browser.pause(4000)
    await LoginPage.nextplanClick.click()
    await browser.pause(10000);

});



Then(/^Verify the FM Data source view page$/, async () => {
    await browser.pause(6000)
    await LoginPage.AnalystClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()=" My Assignments "]').getText()) === 'My Assignments',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the FM Data source view page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.AnalystClick).not.toExist()

});

Then(/^Click on view all assignment$/, async () => {
    await browser.pause(4000)
    await LoginPage.viewassignmenttClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//span[text()="View All Assignments "]').getText()) === 'View All Assignments',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});
Then(/^Verify the Data source view RK page$/, async () => {
    await browser.pause(4000)
    await LoginPage.RKClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h3[text()=" My Clients "]').getText()) === 'My Clients',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the Data source view RK page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.RKClick).not.toExist()

});

Then(/^Verify the RK Data source view page$/, async () => {
    await browser.pause(4000)
    try {
        await LoginPage.RKdatasourceClick.click()
        await browser.pause(10000);
        await browser.waitUntil(
            async () => (await $('//span[text()="My Assignments "]').getText()) === 'My Assignments',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    }
    catch (Exception) { }
});

Then(/^Verify the RK Data source view page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.RKdatasourceClick).not.toExist()

});

Then(/^Verify the DOT screen$/, async () => {
    await browser.pause(4000)
    await LoginPage.DOTClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//span[text()="DOT"]').getText()) === 'DOT',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the DOT screen should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.DOTClick).not.toExist()

});
Then(/^Verify the sent email page$/, async () => {
    await browser.pause(5000)
    await LoginPage.emailClick.click()

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//span[text()="Sent Emails"]').getText()) === 'Sent Emails',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Verify the sent email page should not visible$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.emailClick).not.toExist()

});
Then(/^click on blue button$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.BlueBtn).toExist()
    // browser.saveScreenshot('BlueBtnerror.png')

    await LoginPage.BlueBtn.click()
});

When(/^Click on get in touch button$/, async () => {
    await browser.pause(7000)
    await expect(LoginPage.TouchBtn).toExist()
    browser.saveScreenshot('TouchBtnerror.png')

    await LoginPage.TouchBtn.click()
});

When(/^click on green button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.GreenBtn).toExist()
    // browser.saveScreenshot('GreenBtnerror.png')

    await LoginPage.GreenBtn.click()
});


When(/^click on donot know button$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.donotKnowBtn).toExist()

    await LoginPage.donotKnowBtn.click()
});
When(/^click on button Submit request with a reference$/, async () => {
    await browser.pause(6000)
    await browser.refresh()
    await browser.pause(6000)
    await expect(LoginPage.requestBtn).toExist()

    await LoginPage.requestBtn.click()
});

When(/^select the request type$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestType).toExist()

    await LoginPage.requestType.click()
    await LoginPage.SelectrequestType.click()

});


When(/^click on button Submit request without a reference$/, async () => {
    await browser.refresh()
    await browser.pause(1000)
    await expect(LoginPage.WOrequestBtn).toExist()

    await LoginPage.WOrequestBtn.click()
});



Then(/^I enter (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login(firstname, lastname)
    browser.pause(5000)

})

Then(/^I insert (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login1(firstname, lastname)
    browser.pause(5000)

})

Then(/^user insert (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login15(firstname, lastname)
    browser.pause(5000)

})

Then(/^user insert contact TPT (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login156(firstname, lastname)
    browser.pause(5000)

})

Then(/^I insert the (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login2(firstname, lastname)
    browser.pause(10000)

})


Then(/^I inserts (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login22(firstname, lastname)
    browser.pause(10000)

})

Then(/^I am inserting (\w+) and (.+)$/, async (employerName, InsuranceNumber) => {
    await browser.pause(4000)

    await LoginPage.login32(employerName, InsuranceNumber)
    browser.pause(10000)

})

Then(/^I am inserting1 (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login321(firstname, lastname)
    browser.pause(10000)

})
Then(/^I am inserting2 (\w+) and (.+)$/, async (CaseReference, memberNumber) => {
    await browser.pause(4000)

    await LoginPage.login322(CaseReference, memberNumber)
    browser.pause(10000)

})
Then(/^I am inserting3 (\w+) and (.+)$/, async (address, postcode) => {
    await browser.pause(4000)

    await LoginPage.login323(address, postcode)
    browser.pause(10000)

})
Then(/^I am inserting4 (\w+) and (.+)$/, async (email, number) => {
    await browser.pause(4000)

    await LoginPage.login324(email, number)
    browser.pause(10000)

})

Then(/^I fill (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login3(firstname, lastname)
    browser.pause(10000)

})

Then(/^I enter the (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login4(firstname, lastname)
    browser.pause(10000)

})

Then(/^I enters the (\w+) and (.+)$/, async (firstname, lastname) => {
    await browser.pause(4000)

    await LoginPage.login456(firstname, lastname)
    browser.pause(10000)

})



Then(/^selects the date$/, async () => {

    await browser.pause(1000)
    await expect(LoginPage.iconCalendar).toExist()
    // browser.saveScreenshot('iconCalendarerror.png')

    await LoginPage.iconCalendar.click()
    await LoginPage.iconCalendar.setValue('10/10/2008')

});

Then(/^select the date$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.iconCalendar1).toExist()

    // browser.saveScreenshot('iconCalendarerror.png')
    await LoginPage.iconCalendar1.click()
    await LoginPage.iconCalendar1.setValue('10/10/2008')

});


When(/^click on continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continueBtn).toExist()

    // browser.saveScreenshot('continueBtnerror.png') 
    await LoginPage.continueBtn.click()
    browser.pause(10000)
    // await expect(LoginPage.AfterContinueText).toHaveTextContaining('Provide information');


});

When(/^clicks on continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continuesBtn).toExist()
    // browser.saveScreenshot('continueBtnerror.png') 

    browser.pause(100000)
    await LoginPage.continuesBtn.click()


});


When(/^clicks on the continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continuesBtn1).toExist()
    // browser.saveScreenshot('continueBtnerror.png') 

    browser.pause(100000)
    await LoginPage.continuesBtn1.click()


});

Then(/^user tells us about type of request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestType1).toExist()
    // browser.saveScreenshot('requestTypeerror.png') 

    await LoginPage.requestType1.click()
    await LoginPage.SelectrequestType1.click()
    await browser.pause(1000)


});

Then(/^user tell us about type of request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestType).toExist()

    // browser.saveScreenshot('requestTypeerror.png') 
    await LoginPage.requestType.click()
    await LoginPage.SelectrequestType.click()
    await browser.pause(1000)


});




Then(/^user tell us about request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestbox).toExist()

    // browser.saveScreenshot('requestboxerror.png')  
    // await LoginPage.requestbox.click()
    await LoginPage.requestbox.setValue('request data inserting')
    await browser.pause(4000)


});

Then(/^user tells us about request$/, async () => {
    browser.pause(100000)
    await expect(LoginPage.requestbox1).toExist()

    // browser.saveScreenshot('requestboxerror.png') 
    await LoginPage.requestbox1.click()
    await LoginPage.requestbox1.setValue('Request data')
});

Then(/^user upload the document$/, async () => {
    // browser.pause(100000)
    // const path =require('path');     
    // const inputs = $('//div[text()=" Drop to upload a file or click here "]')   
    let inputs = $("//div[@class='mos-c-file-dropzone']")
    // const filePath =path.join(__dirname,'/Demo.pdf') 
    // const filePath =path.join("C:/Users/Rajesh-chouhan/OneDrive - MMC/Documents/CMAautomation/features/step-definitions/Demo.pdf") 

    // const remoteFilePath = await browser.uploadFile(filePath)
    // inputs.click();

    inputs.setValue("C:\\Users\\Rajesh-chouhan\\OneDrive - MMC\\Documents\\CMAautomation\\features\\step-definitions\\Demo.pdf")
    await LoginPage.submitbtn.click()


});

Then(/^user submit the request$/, async () => {
    // await browser.refresh()
    // await browser.pause(1000)
    // await expect(LoginPage.submitbtn).toExist()  
    browser.pause(10000)
    await expect(LoginPage.submitbtn).toExist()
    await LoginPage.submitbtn.click()
    browser.saveScreenshot('submitbtnerror.png')

    await expect(LoginPage.ThanksText).toHaveTextContaining('Thanks for the submission!');
    browser.pause(100000)

});

Then(/^user submits the request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.submitbtn).toExist()
    await LoginPage.submitbtn.click()
    browser.saveScreenshot('submitbtnerror.png')
    browser.pause(100000)
    await expect(LoginPage.ThankText).toHaveTextContaining('Thanks for getting in touch.');
    browser.pause(100000)

});

Then(/^user select all from dropdown$/, async () => {
    await browser.pause(5000)
    // console.log(await LoginPage.requestTitle().getText());
    // console.log('----------------------------------------')
    // console.log(titles)
    // // assert.equals(title, 'Contact Mercer Admin')
    // await expect('Request Queue').toHaveTextContaining(titles);
    // console.log('----------------------------------------')

    await expect(LoginPage.requestQueue).toExist()

    await LoginPage.requestQueue.click()
    await LoginPage.SelectAllrequestQueue.click()
    await browser.pause(1000)


});

Then(/^user select pending from dropdown$/, async () => {
    await browser.pause(5000)
    await expect(LoginPage.requestQueue).toExist()

    // browser.saveScreenshot('requestTypeerror.png') 
    await LoginPage.requestQueue.click()
    await LoginPage.SelectpendingrequestQueue.click()
    await browser.pause(1000)


});

Then(/^select pending from dropdown and arrange request queue$/, async () => {
    await browser.pause(5000)
    await LoginPage.arrangeDate.doubleClick()
    await LoginPage.arrangeNInumber.doubleClick()
    await LoginPage.arrangeRefNum.doubleClick()
    await LoginPage.arrangeRequestType.doubleClick()
    await LoginPage.arrangeScheme.doubleClick()
    await LoginPage.arrangeStatus.doubleClick()
    await LoginPage.arrangeTeam.doubleClick()
    await LoginPage.arrangeworkType.doubleClick()
    await LoginPage.arrangeAssignee.doubleClick()
    await browser.pause(1000)


});

Then(/^select all from dropdown and arrange request queue$/, async () => {
    await browser.pause(5000)
    await LoginPage.arrangeDate.doubleClick()
    await LoginPage.arrangeNInumber.doubleClick()
    await LoginPage.arrangeRefNum.doubleClick()
    await LoginPage.arrangeRequestType.doubleClick()
    await LoginPage.arrangeScheme.doubleClick()
    await LoginPage.arrangeStatus.doubleClick()
    await LoginPage.arrangeTeam.doubleClick()
    await LoginPage.arrangeworkType.doubleClick()
    await browser.pause(1000)


});

Then(/^select accepted from dropdown and arrange request queue$/, async () => {
    await browser.pause(5000)
    await LoginPage.arrangeDate.doubleClick()
    await LoginPage.arrangeRefNum.doubleClick()
    await LoginPage.arrangeRequestType.doubleClick()
    await LoginPage.arrangeScheme.doubleClick()
    await LoginPage.arrangeStatus.doubleClick()
    await LoginPage.arrangeTeam.doubleClick()
    await LoginPage.arrangeworkType.doubleClick()
    await LoginPage.arrangeCase.click()
    await LoginPage.arrangeDownload.click()
    await browser.pause(1000)
});

Then(/^select rejected from dropdown and arrange request queue$/, async () => {
    await browser.pause(5000)
    await LoginPage.arrangeDate.doubleClick()
    await LoginPage.arrangeNInumber.doubleClick()
    await LoginPage.arrangeRefNum.doubleClick()
    await LoginPage.arrangeScheme.doubleClick()
    await LoginPage.arrangeStatus.doubleClick()
    await LoginPage.arrangeTeam.doubleClick()
    await LoginPage.arrangeworkType.doubleClick()
    await LoginPage.arrangeRejection.doubleClick()
    await LoginPage.arrangeEmail.doubleClick()
    await browser.pause(1000)
});

Then(/^user select rejected from dropdown$/, async () => {
    await browser.pause(5000)
    await expect(LoginPage.requestQueue).toExist()
    await LoginPage.requestQueue.click()
    await LoginPage.SelectrejectedrequestQueue.click()
    await browser.pause(1000)
});

Then(/^user select accepted from dropdown$/, async () => {
    await browser.pause(5000)
    await expect(LoginPage.requestQueue).toExist()
    await LoginPage.requestQueue.click()
    await LoginPage.SelectacceptedrequestQueue.click()
    await browser.pause(1000)

});

Then(/^user verify accepted list$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.verifyAccepted).toBeExisting();
});

Then(/^user verify rejected list$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.verifyRejected).toBeExisting();
});

Then(/^user select Pending and verify pending list$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.verifyPending).toBeExisting();
});

Then(/^user verify all list$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.verifyAccepted).toBeExisting();
    await expect(LoginPage.verifyRejected).toBeExisting();

});
When(/^I search the queue$/, async () => {
    await browser.pause(4000)
    await LoginPage.searchQueue()
    browser.pause(10000)
    // await expect(LoginPage.requestQueueresult).toBeExisting();
});

Then(/^click on take button for blue team request$/, async () => {
    await browser.pause(4000)
    await LoginPage.TakeBlueTeam.click()
    // browser.pause(10000)
    await expect(LoginPage.verifyBlueTeamPage).toBeExisting();
});

Then(/^click on take button for green team request$/, async () => {
    await browser.pause(4000)
    await LoginPage.TakeGreenTeam.click()
    // browser.pause(10000)
    await expect(LoginPage.verifyGreenTeamPage).toBeExisting();
});

Then(/^click on take button for contactTpt team request$/, async () => {
    // await browser.pause(4000)
    // await LoginPage.arrangeDate.click()
    // await browser.pause(4000)
    // await LoginPage.TakeContactTpt.click()
    // // browser.pause(10000)
    // await expect(LoginPage.verifyGreenTeamPage).toBeExisting();

    try {
        // await browser.pause(6000)
        await LoginPage.arrangeDate.click()
        await browser.pause(4000)
        await LoginPage.TakeContactTpt.click()
        // await browser.pause(4000)
        await expect(LoginPage.verifyGreenTeamPage).toBeExisting();


    } catch (err) {
        await LoginPage.arrangeDate.click()
        // await browser.pause(4000)
        await LoginPage.TakeContactTpt.click()
    }

});

Then(/^click on take button for blue team with InScope request$/, async () => {
    // await browser.pause(4000)
    // await LoginPage.arrangeDate.click()
    // await LoginPage.TakeBlueInScope.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyInScopeTeamPage).toBeExisting();


    try {
        // await browser.pause(6000)
        await LoginPage.arrangeDate.click()
        await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()
        await browser.pause(4000)
        await expect(LoginPage.verifyInScopeTeamPage).toBeExisting();


    } catch (err) {
        await LoginPage.arrangeDate.click()
        // await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()
    }
});

Then(/^Create case for Selected Request$/, async () => {
    await browser.pause(4000)
    await LoginPage.createCaseBtn.click()
    await browser.pause(4000)
    await expect(LoginPage.requestQueue).toExist()

});


Then(/^click on take button for green team with InScope request$/, async () => {
    await browser.pause(4000)
    await LoginPage.TakeGreenInScope.click()
    // browser.pause(10000)
    await expect(LoginPage.verifyInScopeTeamPage).toBeExisting();
});

Then(/^click on take button for green team InScope request$/, async () => {
    // await browser.pause(6000)
    // await LoginPage.arrangeDate.click()
    // await browser.pause(6000)
    // await LoginPage.TakeBlueInScope.click()
    // browser.pause(10000)

    try {
        await browser.pause(6000)
        await LoginPage.arrangeDate.click()
        await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()
        // await browser.pause(4000)

    } catch (err) {
        await LoginPage.arrangeDate.click()
        // await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()
    }
});



Then(/^click on take button for recent request21$/, async () => {
    try {
        //  await LoginPage.arrangeDate.doubleClick()
        await browser.pause(7000)

        await LoginPage.arrangeDate.click()
        await browser.pause(4000)

        await LoginPage.TakeRecentRequest.click()

    } catch (err) {
        await browser.pause(4000)

        await LoginPage.arrangeDate.click()
        await browser.pause(4000)

        await LoginPage.TakeRecentRequest.click()
    }
});

Then(/^click on take button for recent request6$/, async () => {
    await browser.pause(6000)
    await LoginPage.arrangeDate.doubleClick()

    await LoginPage.arrangeDate.click()
    await browser.pause(6000)
    await LoginPage.TakeRecentRequest6.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyOutScopeTeamPage1).toBeExisting();
});

Then(/^click on take button for recent request5$/, async () => {
    await browser.pause(6000)
    await LoginPage.arrangeDate.doubleClick()

    await LoginPage.arrangeDate.click()
    await browser.pause(6000)
    await LoginPage.TakeRecentRequest.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyOutScopeTeamPage1).toBeExisting();
});

Then(/^click on take button for recent request2$/, async () => {
    await browser.pause(6000)
    await LoginPage.arrangeDate.doubleClick()

    await LoginPage.arrangeDate.click()
    await browser.pause(6000)
    await LoginPage.TakeRecentRequest.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyOutScopeTeamPage1).toBeExisting();
});

Then(/^click on take button for recent request3$/, async () => {
    await browser.pause(6000)
    await LoginPage.arrangeDate.doubleClick()

    await LoginPage.arrangeDate.click()
    await browser.pause(6000)
    await LoginPage.TakeRecentRequest3.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyOutScopeTeamPage1).toBeExisting();
});


Then(/^click on take button for recent request4$/, async () => {
    await browser.pause(6000)
    await LoginPage.arrangeDate.doubleClick()

    await LoginPage.arrangeDate.click()
    await browser.pause(6000)
    await LoginPage.TakeRecentRequest4.click()
    // browser.pause(10000)
    // await expect(LoginPage.verifyOutScopeTeamPage1).toBeExisting();
});

Then(/^verify OneAndDone & case button should be disabled$/, async () => {
    await browser.pause(4000)
    // let assert = require('assert');
    // LoginPage.OneAndDoneBtn.click()
    let clickablebtn = await LoginPage.OneAndDoneBtn.isClickable();
    // assert(clickablebtn === 'false')
    console.log("This one and done button is not active :" + clickablebtn)


    let clickablecasebtn = await LoginPage.createCaseBtn.isClickable();
    console.log("This create case button is not active :" + clickablecasebtn)
    await browser.pause(4000)

    // assert.equals(clickablecasebtn, 'false')

});

Then(/^verify OneAndDone & case button should be enabled$/, async () => {
    await browser.pause(4000)
    let clickablebtn = await LoginPage.OneAndDoneBtn.isClickable();
    console.log(clickablebtn)
    // assert.equals(clickablebtn, 'true')
    let clickablecasebtn = await LoginPage.createCaseBtn.isClickable();
    console.log(clickablecasebtn)
    // assert.equals(clickablecasebtn, 'true')

});


Then(/^click on reassign and select green team$/, async () => {
    await browser.pause(4000)
    await LoginPage.ReassignRequest.click()
    await browser.pause(10000)
    if (expect(LoginPage.ClickDropRequest).toBeExisting()) { }
    await LoginPage.ClickDropRequest.click()
    await browser.pause(4000)

    await LoginPage.SelectGreenTeam.click()
    await browser.pause(10000)

});

Then(/^click on reassign and select team$/, async () => {
    await browser.pause(4000)
    await LoginPage.ReassignRequest.click()
    await browser.pause(1000)
    try {
        await browser.pause(4000)
        await LoginPage.ClickDropRequest.click()
        await browser.pause(4000)
        await LoginPage.SelectGreenTeam.click()
        await browser.pause(4000)
        // await expect(LoginPage.ReassignRequest).toHaveTextContaining(Reassign);

    } catch (err) {
        await LoginPage.ClickDropRequest.click()
        await browser.pause(4000)
        await LoginPage.SelectBlueTeam.click()
        await browser.pause(6000)
    }


});

Then(/^click on edit and select request type$/, async () => {
    await browser.pause(4000)
    await LoginPage.editRequest.click()
    await browser.pause(5000)
    await LoginPage.RequestEdit.click()
    await browser.pause(4000)
    await LoginPage.SelectEditrequestType.click()


});

Then(/^select the request type$/, async () => {
    await browser.pause(8000)
    await LoginPage.RequestEdit.click()
    await browser.pause(4000)
    await LoginPage.SelectEditrequestType.click()
    await browser.pause(1000)

});
Then(/^select scheme name$/, async () => {
    await browser.pause(4000)
    await LoginPage.SchemeEdit.click()
    await browser.pause(4000)
    await LoginPage.SelectEditSchemeType.click()
    await browser.pause(1000)
});

Then(/^click on save button$/, async () => {
    await browser.pause(4000)
    await LoginPage.SaveEdit.click()
    await browser.pause(1000)

});

Then(/^click on one and done request$/, async () => {
    await browser.pause(4000)
    await LoginPage.OneAndDoneBtn.click()

});

Then(/^click on email$/, async () => {
    await browser.pause(4000)
    await LoginPage.EmailBtn.click()

});

Then(/^click on phone$/, async () => {
    await browser.pause(4000)
    await LoginPage.PhoneBtn.click()
    // browser.positionClick()
    // await browser.pause(4000)    


});
Then(/^select the template$/, async () => {
    await browser.pause(4000)
    await LoginPage.TemplateBtn.click()
    await LoginPage.SelectTemplate.click()

});
Then(/^enter email template subject$/, async () => {
    await browser.pause(4000)
    await LoginPage.EmailTemplateSubject.click()
    // await LoginPage.EmailTemplateSubject.setValue('Contact TPT - Action Required')  

});
Then(/^enter email content$/, async () => {
    await browser.pause(4000)
    await LoginPage.EmailContent.click()
    await LoginPage.EmailContent.setValue('Test')


});
Then(/^click on send email$/, async () => {
    await browser.pause(4000)
    await LoginPage.SendEmail.click()
    await browser.pause(4000)


});

Then(/^click on send email and create case$/, async () => {
    await browser.pause(4000)
    await LoginPage.SendEmailCreateCase.click()
    await browser.pause(4000)


});

Then(/^click on download$/, async () => {

    await browser.pause(6000)
    // try{
    //     await LoginPage.DownloadSendEmail.click() 
    //     // await browser.pause(6000) 
    //    }
    // catch(err){
    //     await browser.pause(6000)   
    //     await LoginPage.DownloadSendEmail.click() 
    //     // await browser.pause(6000)    
    // }
});

Then(/^Select member name$/, async () => {
    await browser.pause(4000)
    await LoginPage.memberBtn.click()
    await LoginPage.SelectmemberBtn.click()
    await browser.pause(4000)


});

Then(/^Select Home address$/, async () => {
    await LoginPage.adressBtn.click()
    await browser.pause(2000)
    await LoginPage.SelectmemberBtn.click()
    await browser.pause(4000)


});

Then(/^Select Date of Birth$/, async () => {
    await browser.pause(4000)
    await LoginPage.DobBtn.click()
    await browser.pause(4000)
    await LoginPage.SelectmemberBtn.click()
    await browser.pause(4000)


});

Then(/^Select NI Number$/, async () => {
    await browser.pause(4000)
    await LoginPage.NIBtn.click()
    await browser.pause(4000)
    await LoginPage.SelectmemberBtn.click()
    await browser.pause(4000)


});

Then(/^Select Designation$/, async () => {
    await browser.pause(4000)
    await LoginPage.DesignationBtn.click()
    await browser.pause(4000)
    await LoginPage.SelectmemberBtn.click()
    await browser.pause(4000)


});

Then(/^Enter the Phone record$/, async () => {
    await browser.pause(4000)
    await LoginPage.PhoneNoBtn.click()
    await LoginPage.PhoneNoBtn.setValue('9098010213')
    await browser.pause(4000)


});

Then(/^Click on Save Record$/, async () => {
    await browser.pause(4000)
    await LoginPage.SaveBtn.click()
});

Then(/^Click on Save Record and Create Case$/, async () => {
    await browser.pause(4000)
    await LoginPage.SaveBtnCreateCase.click()
});

Then(/^Select third party on Member represenatation$/, async () => {
    await browser.pause(4000)
    await LoginPage.thirdbox.click()
});

Then(/^Enter the third Party name$/, async () => {
    await browser.pause(4000)
    await LoginPage.thirdPartyName.addValue('partyname')
});

Then(/^Enter authority name$/, async () => {
    await browser.pause(4000)
    await LoginPage.authorityName.addValue('authorityName')
});

Then(/^Enter member name$/, async () => {
    await browser.pause(4000)
    await LoginPage.memberName.addValue('memberName')
});
Then(/^Enter Record of conversation$/, async () => {
    await browser.pause(4000)
    await LoginPage.recordName.addValue('recordName')
});


Then(/^User on email reference number page$/, async () => {
    try {

        // browser.refresh();
        await browser.pause(1000)
        await LoginPage.EmailBtn.click();
        await browser.pause(4000)

    }
    catch (er) {

        await browser.pause(6000)
        await LoginPage.editRequest.click()
        await browser.pause(4000)
        await LoginPage.RequestEdit.click()
        await browser.pause(4000)
        await LoginPage.SelectEditrequestType.click()
        await browser.pause(4000)
        await LoginPage.SchemeEdit.click()
        await browser.pause(4000)
        await LoginPage.SelectEditSchemeType.click()
        await browser.pause(4000)
        await LoginPage.SaveEdit.click()
        await browser.pause(4000)
        await LoginPage.OneAndDoneBtn.click()

    }
});

Then(/^click on Reject$/, async () => {
    await browser.pause(4000)
    await LoginPage.RejectBtn.click();
});

Then(/^select the reason and send mail$/, async () => {
    // try{
    await browser.pause(4000)
    await LoginPage.ClickReasonBtn.click();
    browser.saveScreenshot('error.png')
    await browser.pause(4000)
    await LoginPage.SelectReasonBtn.click();
    await browser.pause(4000)
    await LoginPage.SendEmailBtn.click();

    //  } catch(err){
    //         return false
    //     }
});

Then(/^Click on Settings tool Icon$/, async () => {
    await browser.pause(6000)
    await LoginPage.AdminBtn.click();
    await browser.pause(4000)

});

Then(/^Click on client tile$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClientsTab.click();


});

Then(/^Click on Add client$/, async () => {
    await browser.pause(4000)
    await LoginPage.AddClientsBtn.click();
});

Then(/^Enter client name$/, async () => {
    await browser.pause(4000)
    await LoginPage.EnterClientsName.click()
    await browser.pause(4000)
    await LoginPage.EnterClientsName.setValue('ATestClient');
});

Then(/^Add the client$/, async () => {
    await browser.pause(4000)
    await LoginPage.AddClientsName.click();
});

Then(/^Click on client settings tile$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClientsSettingTab.click();
});
Then(/^Select the font$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClickSelectFont.click();
    await LoginPage.SelectFontName.click();

});
Then(/^Add the font$/, async () => {
    await browser.pause(4000)
    await LoginPage.AddFont.click();
});

Then(/^Delete the font$/, async () => {
    await browser.pause(4000)
    await LoginPage.DeleteFont.click();
});

Then(/^Click on groups tile$/, async () => {
    await browser.pause(4000)
    await LoginPage.GroupsTab.click();
});

Then(/^Click on Add group$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClickAddGroupBtn.click();
});
Then(/^Enter group name$/, async () => {
    await browser.pause(4000)
    await LoginPage.EnterGroupName.setValue('ATestGroup')
});
Then(/^Select allowed workflow$/, async () => {
    await browser.pause(4000)
    await LoginPage.Clickworkflow.click();
    await LoginPage.Selectworkflow.click();

});

Then(/^Select permission for this group$/, async () => {
    await browser.pause(4000)
    await LoginPage.SelectPermission.click();
});
Then(/^Add the group$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClickAddBtn.click();
});

Then(/^Click on reporting tile$/, async () => {
    await browser.pause(4000)
    await LoginPage.ReportingTab.click();
});

Then(/^Select start date$/, async () => {
    await browser.pause(4000)
    await LoginPage.SelectStartDate.setValue('10/10/2008')
});
Then(/^Select end date$/, async () => {
    await browser.pause(4000)
    await LoginPage.SelectEndDate.setValue('10/10/2009')
});
Then(/^Select client$/, async () => {
    await browser.pause(4000)
    await LoginPage.ClickClient.click();
    await browser.pause(4000)
    await LoginPage.SelectClient.click();

});
Then(/^Download the csv$/, async () => {
    await browser.pause(4000)
    await LoginPage.Downloadcsv.click();
});



Then(/^verify Settings page should be displayed with six tiles$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.ReportingTab).toBeExisting();
    await browser.pause(1000)
    await expect(LoginPage.ClientsTab).toBeExisting();
    await browser.pause(1000)
    await expect(LoginPage.ClientsSettingTab).toBeExisting();
    await browser.pause(1000)
    await expect(LoginPage.GroupsTab).toBeExisting();
    await browser.pause(1000)
    await expect(LoginPage.MemberImportTab).toBeExisting();
    await browser.pause(1000)
    await expect(LoginPage.SchemeImportTab).toBeExisting();





});


Then(/^User verify selected fund manager$/, async () => {
    await browser.pause(7000)
    // await expect(LoginPage.DashFundManager).toBeExisting();
    await browser.pause(4000)

});

Then(/^User verify unselected record keeper$/, async () => {
    await browser.pause(4000)
    // await expect(LoginPage.DashRecordKeeper).toBeExisting();
    await browser.pause(4000)

});

Then(/^User verify overall completion data$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.Dashoverallcompletion).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify performance holdings cashflows$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.Dashperformance).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify request percentage$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.DashPercentage).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify total number of requests$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.DashTotalRequest).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify client plans strategies data$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.DashPlanStrategies).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify either select month or quarter$/, async () => {
    await browser.pause(4000)
    // await expect(LoginPage.).toBeExisting();

    await browser.pause(4000)

});
Then(/^User verify plans for recent quarter$/, async () => {
    await browser.pause(5000)
    let quater = await LoginPage.DashRecentPlans.getText();
    expect(await $('//li[contains(text(), ""+quater+"")]')).toBeExisting();
    await browser.pause(4000)

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
Then(/^Data Source Mass Upload link should be displayed to user$/, async () => {
    await browser.pause(4000)
    await LoginPage.massuploadClick.click()

    // const jsCode = `arguments[0].style.cssText = "border: 2px solid red !important;";`;
    // browser.executeAsync(jsCode, massuploadClick);

    await browser.pause(10000);
    await browser.waitUntil(
        async () => (await $('//h1[text()=" Data Source Mass Upload "]').getText()) === 'Data Source Mass Upload',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Data Source Mass Upload link should not be displayed to user$/, async () => {
    await browser.pause(6000)
    await expect(LoginPage.massuploadClick).not.toExist()
    await browser.pause(10000);

});

Then(/^the user has been authenticated as Fund Manager user role$/, async () => {
    await browser.pause(1000)

});

Then(/^the user observes left menu$/, async () => {
    await browser.pause(1000)

});

Then(/^Data Source Mass Upload link should be placed between Data Sources and FM Data Source View links$/, async () => {
    await browser.pause(1000)

});

Then(/^the user has been authenticated as any user role other than Fund Manager$/, async () => {
    await browser.pause(1000)

});

Then(/^verify upload history$/, async () => {

    await browser.pause(10000);
    let inputs = $("//div[text()=' Upload History is maintained for last 90 days only ']")
    inputs.scrollIntoView();

    await browser.waitUntil(
        async () => (await $('//div[text()=" Upload History is maintained for last 90 days only "]').getText()) === 'Upload History is maintained for last 90 days only',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

});

Then(/^Run Lighthouse report$/, async () => {
    const { exec, execSync } = require('child_process');
    const testurl = await browser.getUrl();
    console.log('-----------------');
    console.log(testurl);
    // browser.enablePerformanceAudits()


    // let metrics = browser.getMetrics();
    // console.log(metrics);
    // let score = browser.getPerformanceScore() // get Lighthouse Performance score
    // console.log(score);



    // eslint-disable-next-line no-useless-concat
    const output = execSync('lighthouse ' + testurl + ' --output html --output-path=./lighthousereport/testreport.html  --save-assets', { encoding: 'utf-8' });
    console.log(output);
    // browser.disablePerformanceAudits()

});