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

Given(/^I open admin Dashboard (\w+) page$/, async (page3) => {
    await pages[page3].opensss()
  
});

Then(/^click on blue button$/, async () => {
    await browser.pause(4000)
    await expect(LoginPage.BlueBtn).toExist()
    // browser.saveScreenshot('BlueBtnerror.png')

    await LoginPage.BlueBtn.click()
});

When(/^Click on get in touch button$/, async () => {
    await browser.pause(5000)
    await expect(LoginPage.TouchBtn).toExist()
    // browser.saveScreenshot('TouchBtnerror.png')

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
    // browser.saveScreenshot('donotKnowBtnerror.png')

    await LoginPage.donotKnowBtn.click()
});
When(/^click on button Submit request with a reference$/, async () => {
    await browser.refresh()
    await browser.pause(1000)
    await expect(LoginPage.requestBtn).toExist()  
    // browser.saveScreenshot('requestBtnerror.png')

        await LoginPage.requestBtn.click()
});

When(/^select the request type$/, async () => {
    await browser.pause(1000)
    await expect(LoginPage.requestType).toExist()  
    // browser.saveScreenshot('requesttypeerror.png')

    await LoginPage.requestType.click()
    await LoginPage.SelectrequestType.click()

});

When(/^click on button Submit request without a reference$/, async () => {
    await browser.refresh()
    await browser.pause(1000)
    await expect(LoginPage.WOrequestBtn).toExist()  
    // browser.saveScreenshot('WOrequestBtnerror.png')

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
    let inputs= $("//div[@class='mos-c-file-dropzone']")
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
    browser.pause(2000)
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
    await browser.pause(4000)
    await LoginPage.TakeBlueTeam.click()
    // browser.pause(10000)
    await expect(LoginPage.verifyBlueTeamPage).toBeExisting();
});

Then(/^click on take button for blue team with InScope request$/, async () => {
    await browser.pause(4000)
    await LoginPage.TakeBlueTeam.click()
    // browser.pause(10000)
    await expect(LoginPage.verifyBlueTeamPage).toBeExisting();
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

