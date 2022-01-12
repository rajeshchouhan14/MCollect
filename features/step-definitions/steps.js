const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    // browser.maximizeWindow()

});

Given(/^I open contact (\w+) page$/, async (page1) => {
    await pages[page1].opens()
    
});

Given(/^I open Dashboard (\w+) page$/, async (page2) => {
    await pages[page2].openss()
    
});

Then(/^click on blue button$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.BlueBtn).toExist()
    await LoginPage.BlueBtn.click()
});

When(/^Click on get in touch button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.TouchBtn).toExist()
    await LoginPage.TouchBtn.click()
});

When(/^click on green button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.GreenBtn).toExist()  
    await LoginPage.GreenBtn.click()
});


When(/^click on donot know button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.donotKnowBtn).toExist()  
  
    await LoginPage.donotKnowBtn.click()
});
When(/^click on button Submit request with a reference$/, async () => {
    await browser.pause(1000)
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
    await browser.pause(4000)

    await LoginPage.iconCalendar.click()
    await LoginPage.iconCalendar.setValue('10/10/2008')

  });
  
  Then(/^select the date$/, async () => {
    await browser.pause(4000)

    await LoginPage.iconCalendar1.click()
    await LoginPage.iconCalendar1.setValue('10/10/2008')

  });


When(/^click on continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continueBtn).toExist()  
    await LoginPage.continueBtn.click()
    browser.pause(10000)
    // await expect(LoginPage.AfterContinueText).toHaveTextContaining('Provide information');


});

When(/^clicks on continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continuesBtn).toExist()  
    browser.pause(100000)
    await LoginPage.continuesBtn.click()


});
		
When(/^clicks on the continue button$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.continuesBtn1).toExist()  
    browser.pause(100000)
    await LoginPage.continuesBtn1.click()


});

Then(/^user tells us about type of request$/, async () => {
    await browser.pause(1000)
    await LoginPage.requestType1.click() 
    await LoginPage.SelectrequestType1.click()
    await browser.pause(1000)


});

Then(/^user tell us about type of request$/, async () => {
    await browser.pause(1000)
    await LoginPage.requestType.click() 
    await LoginPage.SelectrequestType.click()
    await browser.pause(1000)


});
Then(/^user tell us about request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestbox).toExist()  
    await LoginPage.requestbox.click()
    await LoginPage.requestbox.setValue('request data inserting')
    await browser.pause(1000)


});

Then(/^user tells us about request$/, async () => {
    browser.pause(100000)
    await LoginPage.requestbox1.click()
    await LoginPage.requestbox1.setValue('Request data')
});

Then(/^user upload the document$/, async () => {
    browser.pause(100000)
    // const path =require('path');     
    const inputs = $('//div[text()=" Drop to upload a file or click here "]')   
    const filePath =path.join(__dirname,'./Demo.pdf') 
    // const remoteFilePath = await browser.uploadFile(filePath)
    // inputs.click();
    inputs.setValue(filePath)

});
Then(/^user submit the request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.submitbtn).toExist()  
    await LoginPage.submitbtn.click()
    browser.pause(100000)
    await expect(LoginPage.ThanksText).toHaveTextContaining('Thanks for the submission!');
    browser.pause(100000)

});

Then(/^user submits the request$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.submitbtn).toExist()  
    await LoginPage.submitbtn.click()
    browser.pause(100000)
    await expect(LoginPage.ThankText).toHaveTextContaining('Thanks for getting in touch.');
    browser.pause(100000)

});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

