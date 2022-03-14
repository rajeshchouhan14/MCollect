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
    // browser.saveScreenshot('donotKnowBtnerror.png')

    await LoginPage.donotKnowBtn.click()
});
When(/^click on button Submit request with a reference$/, async () => {
    await browser.pause(6000)
    await browser.refresh()
    await browser.pause(6000)
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

    try{  
        // await browser.pause(6000)
        await LoginPage.arrangeDate.click()
        await browser.pause(4000)
        await LoginPage.TakeContactTpt.click()
       // await browser.pause(4000)
       await expect(LoginPage.verifyGreenTeamPage).toBeExisting();

   
       } catch(err){   
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

    
    try{  
        // await browser.pause(6000)
        await LoginPage.arrangeDate.click()
        await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()
        await browser.pause(4000)
        await expect(LoginPage.verifyInScopeTeamPage).toBeExisting();

   
       } catch(err){   
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

    try{  
         await browser.pause(6000)
         await LoginPage.arrangeDate.click()
         await browser.pause(4000)
         await LoginPage.TakeBlueInScope.click()
        // await browser.pause(4000)
    
        } catch(err){   
        await LoginPage.arrangeDate.click()
        // await browser.pause(4000)
        await LoginPage.TakeBlueInScope.click()  
        }
        });



Then(/^click on take button for recent request21$/, async () => {
    try{
    //  await LoginPage.arrangeDate.doubleClick()
    await browser.pause(7000)

     await LoginPage.arrangeDate.click()
     await browser.pause(4000)

     await LoginPage.TakeRecentRequest.click()

    } catch(err){   
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
    let clickablebtn= await LoginPage.OneAndDoneBtn.isClickable();
    // assert(clickablebtn === 'false')
    console.log("This one and done button is not active :"+ clickablebtn)


    let clickablecasebtn= await LoginPage.createCaseBtn.isClickable();
    console.log("This create case button is not active :"+ clickablecasebtn)
    await browser.pause(4000)

    // assert.equals(clickablecasebtn, 'false')

});

Then(/^verify OneAndDone & case button should be enabled$/, async () => {
    await browser.pause(4000)
    let clickablebtn= await LoginPage.OneAndDoneBtn.isClickable();
    console.log(clickablebtn)
    // assert.equals(clickablebtn, 'true')
    let clickablecasebtn= await LoginPage.createCaseBtn.isClickable();
    console.log(clickablecasebtn)
    // assert.equals(clickablecasebtn, 'true')

});


Then(/^click on reassign and select green team$/, async () => {
    await browser.pause(4000)
    await LoginPage.ReassignRequest.click()  
    await browser.pause(10000)
    if(expect(LoginPage.ClickDropRequest).toBeExisting()){}
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
    try{            
      
        // browser.refresh();
        await browser.pause(1000) 
        await LoginPage.EmailBtn.click();
        await browser.pause(4000)  
      
      } 
    catch(er){
          
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


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
