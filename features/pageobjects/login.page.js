const Page = require('./page');
// const {Builder, By, Key, until} = require('selenium-webdriver');
// const {Options} = require('selenium-webdriver/ie');

// (async () => {
//     let ieOptions = new Options();
//     ieOptions.setEdgeChromium(true);
//     ieOptions.setEdgePath('C:/Users/Rajesh-chouhan/OneDrive - MMC/Documents/iedriverzip/IEDriverServer.exe');

//     let driver = await new Builder().
//                            forBrowser('ie').
//                            setIeOptions(ieOptions).
//                            build();
//     try {
//       await driver.get('https://bizflow.sit.mercer.com/bizflow/index.jsp');
//     //   let elem = await driver.findElement(By.id('sb_form_q'));
//     //   await elem.sendKeys('WebDriver', Key.RETURN);
//     //   await driver.wait(until.titleIs('WebDriver - Bing'), 1000);
//     } finally {
//       await driver.quit();
//     }
//   })();


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get loginWithSSO() {
        return $('//*[@id="login-form-0"]/mercer-card/div/div[4]/mercer-card-footer/div[3]/div/a');

    }

    get EnterloginId() {
        return $('//a[text()="Login with a password"]/../../../../..//input[@id="login_username"]');

    }

    get Enteruseremail() {
        return $('//input[@title="Email"]');

    }

    get Enterbizusername() {
        return $('//input[@id="login_username"]');

    }

    get Enterbizuserpass() {
        return $('//input[@id="bf-pwd"]');

    }

    get bizsign() {
        return $('//input[@id="bf-signIn"]');

    }

    get Enterusername() {
        return $('//input[@id="login_username"]');

    }


    get Enteruserpass() {
        return $('//input[@id="login_password"]');

    }

    get Enterusername1() {
        return $('//input[@id="login_username"]');

    }


    get Enteruserpass1() {
        return $('//input[@id="login_password"]');

    }
    get Enteruserfirst() {
        return $('//input[@title="First Name"]');

    }

    get Enteruserlast() {
        return $('//input[@title="Last Name"]');

    }
    get Enterusertitle() {
        return $('//input[@title="Title"]');

    }
    get Enterusernumber() {
        return $('//input[@title="Phone Number"]');

    }
    get Enterusercompany() {
        return $('//input[@title="Company Name"]');

    }
    get Enteruserofficelocation() {
        return $('//input[@title="Office Location"]');

    }
    get Enterusersecondarynumber() {
        return $('//input[@title="Secondary Phone Number"]');

    }
    get Enteruseraddress() {
        return $('//input[@title="Office Address (optional)"]');

    }


    get EnterloginId1() {
        return $('//input[@id="login_username"]');

    }
    get Clicksubmitbtn() {
        return $('//button');

    }

    get Clicklogouticonbtn() {
        return $('//div[@class="mos-c-dropdown__container"]');

    }

    get Clicklogoutbtn() {
        return $('//a[text()="Logout"]');

    }

    get verifyMcollect() {
        return $('//span[text()="Landing Page"]');
    }

    get dashboardClick() {
        return $('a[href*="/dashboard"]');

    }
    get datachangeClick() {
        return $('a[href*="/data-change-logs"]');

    }

    get integrationClick() {
        return $('a[href*="/integration-logs"]');

    }
    get massuploadClick() {
        return $('a[href*="fund-manager-mass-upload"]');

    }

    get clientsClick() {
        return $('a[href*="/clients"]');

    }
    get usersClick() {
        return $('a[href*="/users"]');

    }

    get ClickRoles() {
        return $('//label[text()="Roles"]/following-sibling::div[1]');

    }

    get SelectRoles() {
        return $('(//label[text()="Roles"]/following-sibling::div[1]/following-sibling::div/div/div//label)[1]');

    }

    get Inactiveuser() {
        return $('//div[@class="mos-u-spacer--margin-bottom-lg"]//button');

    }

    get filterfirstname() {
        return $('//span[text()="First Name"]');

    }

    get filterlastname() {
        return $('//span[text()="Last Name"]');

    }
    get filterroles() {
        return $('//span[text()="Roles"]');

    }

    get searchname() {
        return $('//input[@placeholder="Search"]');

    }

    get marketValueEditBox() {
        return $('(//input[@title="Market Value"])[1]');

    }

    get cl() {
        return $('(//input[@title="Market Value"])[1]');

    }

    get ClickStrategy() {
        return $('(//td/span)[1]');

    }

    get SelectStatus() {
        return $('//select[@title="Status"]');

    }

    get Selectmonth() {
        return $('(//select[@id="selectItem"])[1]');

    }

    get Selectmonthoption() {
        return $('(//select[@id="selectItem"])[1]/option[18]');

    }
    get SelectActiveStatus() {
        return $('//select[@title="Status"]/option[2]');

    }
    get SelectInactiveStatus() {
        return $('//select[@title="Status"]/option[3]');

    }

    get SelectOnHoldStatus() {
        return $('//select[@title="Status"]/option[4]');

    }

    get SelectProAnalystRoles() {
        return $('//div[text()=" PRO Analyst "]');

    }
    get Saveuser() {
        return $('(//button[text()])[1]');

    }

    get addusersClick() {
        return $('//div[@class="columns expand"]//button');

    }

    get viewactiveusers() {
        return $('//div[@class="mos-u-spacer--margin-bottom-lg"]//button');

    }
    get FMClick() {
        return $('a[href*="/fund-manager-data-source"]');

    }

    get strategyClick() {
        return $('(//tbody/tr/td[2])[1]');

    }

    get clientClick() {
        return $('(//tbody/tr/td[3]/div)[1]');

    }

    get nextplanClick() {
        return $('//div[@class="row align-right"]');

    }
    get AnalystClick() {
        return $('a[href*="/analyst-data-source"]');

    }

    get viewassignmenttClick() {
        return $('//span[text()="View All Assignments "]');

    }

    get viewmyassignmenttClick() {
        return $('//span[text()="My Assignments "]');

    }
    get RKClick() {
        return $('a[href*="/record-keeper-data-source"]');

    }

    get RKdatasourceClick() {
        return $('a[href*="/record-keeper-pro-data-source"]');

    }

    get DOTClick() {
        return $('a[href*="/dot"]');

    }

    get emailClick() {
        return $('a[href*="/sent-emails"]');

    }
    async click(element) {
        await (await element).waitForClickable({ setTimeout: 3000 })
        await (await element).click()
    }
    //    async ZoomInMcollect(){
    // ((IJavaScriptExecutor),driver).executeScript("document.body.style.zoom='80%';");

    //    browser.pause(5000);       
    //    await browser.keys(['Meta', 'a'])
    //    await browser.keys(['Meta', 'c'])
    // for(int i=0; i<3; i++){
    //     driver.findElement(By.tagName("html")).sendKeys(Keys.chord(Keys.CONTROL,Keys.ADD));
    //     }
    // }
    async EnterMcollectLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')
        browser.pause(5000)

    }
    async EnterMcollectLogin1(uname) {
        browser.pause(5000)
        await this.EnterloginId.setValue(uname)
        browser.pause(5000)

    }
    async EnterbizLogin() {
        browser.pause(5000)
        await this.Enterbizusername.setValue('annu-kumari')
        await this.Enterbizuserpass.setValue('Flipkart@123#')
        browser.pause(5000)

    }
    async EnterMcollectFMLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestsupport2.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterbizLogin() {
        browser.pause(5000)
        await this.Enterusername.setValue('annu-kumari')
        await this.Enteruserpass.setValue('Flipkart@123#')
        browser.pause(5000)
    }

    async EnterMcollectRKLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestrk2.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterMcollectAdminLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('rajesh.chouhan@mmc.com')
        // await this.Enteruserpass.setValue('Password@123')
        browser.pause(5000)
    }

    async EnterMcollectConsultantLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestconsultant1.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterMcollectCSOanalystLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestcsooanalyst13.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }


    async EnterMcollectDOTLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestdot2.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterMcollectFieldAnalystLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestfieldanalyst2.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterMcollectPROAnalystLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestproanalyst2.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@12345')
        browser.pause(5000)
    }

    async EnterMcollectSupportLogin() {
        browser.pause(5000)
        await this.EnterloginId.setValue('rajesh.chouhan@mmc.com')

        // await this.Enterusername.setValue('qatestsupport1.dheeraj.vashisht@gisqa.mercer.com')
        // await this.Enteruserpass.setValue('Password@123')
        browser.pause(5000)
    }

    async EnteruserDetail() {
        browser.pause(5000)
        // await this.Enteruseremail.setValue('testuser14@mmc.com')
        await this.Enteruserfirst.setValue('Test')
        await this.Enteruserlast.setValue('Test2')
        await this.Enterusertitle.setValue('MMCuser')

    }

    async EnteruserDetail2() {
        await this.Enterusernumber.setValue('122345678')
        await this.Enterusercompany.setValue('MMC')
        await this.Enteruserofficelocation.setValue('GRG')
        await this.Enterusersecondarynumber.setValue('123456789')
        await this.Enteruseraddress.setValue('GRG,India')
        browser.pause(5000)

    }

    async EnterMcollectLogin1() {
        browser.pause(5000)
        await this.EnterloginId1.click()
        await this.EnterloginId1.keys('Tab')
        browser.pause(5000)

    }


    /**
     * overwrite specific options to adapt it to page object
     */
    collectopen() {
        return super.mcollectopen();
    }


    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
    async searchQueue() {
        browser.pause(5000)

        await this.queuesearch.setValue('Pension')
    }

    async searchTpt() {
        browser.pause(5000)

        await this.queuesearch.setValue('tpt')
    }

    async searchBlueTeam() {
        browser.pause(5000)

    }

    get SelectAllrequestQueue() {
        return $('//span[text()="All"]');

    }

    get SelectpendingrequestQueue() {
        return $('//span[text()="Pending"]');

    }

    get SelectacceptedrequestQueue() {
        return $('//span[text()="Accepted"]');

    }

    get SelectrejectedrequestQueue() {
        return $('//span[text()="Rejected"]');

    }

    get arrangeDate() {
        return $('//span[text()="Date"]');

    }

    get arrangeworkType() {
        return $('//span[text()="Work Item Type"]');

    }
    get arrangeTeam() {
        return $('//span[text()="Team"]');

    }
    get arrangeStatus() {
        return $('//span[text()="Status"]');

    }
    get arrangeRefNum() {
        return $('//span[text()="Ref. Number"]');

    }
    get arrangeRequestType() {
        return $('//span[text()="Request Type"]');

    }
    get arrangeNInumber() {
        return $('//span[text()="NI Number"]');

    }
    get arrangeScheme() {
        return $('//span[text()="Scheme"]');

    }

    get arrangeAssignee() {
        return $('//span[text()="Assignee"]');

    }

    get arrangeEmail() {
        return $('//span[text()="Email"]');

    }

    get arrangeRejection() {
        return $('//span[text()="Rejection Reason"]');

    }

    get arrangeCase() {
        return $('//span[text()="Case Creation Status"]');

    }
    get arrangeDownload() {
        return $('//span[text()="Downloaded Date"]');

    }

    get editRequest() {
        return $('//span[text()=" Edit "]');

    }
    get ReassignRequest() {
        return $('//span[text()=" Reassign "]');

    }

    get ClickDropRequest() {
        return $('//div[@class="mos-c-modal__content"]/div//div/span');

    }

    get CrossDropRequest() {
        return $('//div[@class="brighter-select__clear-wrapper ng-star-inserted"]');

    }

    get SelectBlueTeam() {
        return $('(//span[@class="brighter-option__text"])[2]');

    }

    get SelectGreenTeam() {
        return $('(//span[@class="brighter-option__text"])[1]');

    }

    get CloseTeam() {
        return $('//button[@class="mos-c-modal__close ng-tns-c50-8"]');

    }

    get RequestEdit() {
        return $('(//div[@class="brighter-control__infix"])[2]');

    }

    get SchemeEdit() {
        return $('(//div[@class="brighter-control__infix"])[5]');

    }

    get SelectEditrequestType() {
        return $('(//div[@class="brighter-select__panel"]//span)[1]');

    }

    get SelectEditSchemeType() {
        return $('(//div[@class="brighter-select__panel"]//span)[1]');

    }

    get SaveEdit() {
        return $('//span[text()=" Save "]');

    }

    get OneAndDoneBtn() {
        return $('//span[text()=" One and done "]');

    }

    get TemplateBtn() {
        return $('//div[@class="brighter-select__value"]');

    }

    get SelectTemplate() {
        return $('(//div[@class="brighter-select__panel"]//span)[2]');

    }

    get EmailTemplateSubject() {
        return $('//div[@class="brighter-control__infix"]//input');

    }

    get EmailContent() {
        return $('//div[@class="brighter-control__infix"]//textarea');

    }

    get SendEmail() {
        return $('//span[text()="Send email"]');

    }

    get SendEmailCreateCase() {
        return $('//span[text()="Send email & create case"]');

    }

    get DownloadSendEmail() {
        return $('//span[text()=" Download "]');

    }
    get EmailBtn() {
        return $('//span[text()=" Email "]');

    }

    get memberBtn() {
        return $('(//div[@class="brighter-select__value"])[1]');

    }

    get SelectmemberBtn() {
        return $('(//div[@class="brighter-option__select-box"]/..)[2]');

    }

    get adressBtn() {
        return $('(//div[@class="brighter-select__value"])[2]');

    }

    get DobBtn() {
        return $('(//div[@class="brighter-select__value"])[3]');
    }

    get NIBtn() {
        return $('(//div[@class="brighter-select__value"])[4]');
    }

    get DesignationBtn() {
        return $('(//div[@class="brighter-select__value"])[5]');
    }

    get PhoneNoBtn() {
        return $('//div[@class="brighter-control__infix"]/textarea');
    }

    get SaveBtn() {
        return $('//span[text()="Save record"]');
    }

    get SaveBtnCreateCase() {
        return $('//span[text()="Send record & create case"]');
    }

    get thirdbox() {
        return $('(//input[@class="brighter-radio-button__native-control"])[2]');
    }

    get thirdPartyName() {
        return $('(//input)[3]');
    }

    get authorityName() {
        return $('(//input)[5]');
    }


    get memberName() {
        return $('(//input)[4]');
    }

    get recordName() {
        return $('(//textarea)[1]');
    }

    get PhoneBtn() {
        return $('(//div[@class="small-6"])[2]');

    }

    get RejectBtn() {
        return $('//span[text()=" Reject "]');

    }

    get ClickReasonBtn() {
        return $('//div[@class="columns small-6"]//div[@class="brighter-select__value"]');

    }
    get SelectReasonBtn() {
        return $('(//span[@class="brighter-option__text"])[1]');

    }
    get SendEmailBtn() {
        return $('//div[@class="brighter-button__wrapper"]/span[text()=" Send email "]');

    }

    get AdminBtn() {
        return $('//li[@class="column shrink"]');

    }

    get ClientsTab() {
        return $('//h6[text()="Clients"]');

    }

    get AddClientsBtn() {
        return $('//span[text()="Add Client"]');

    }

    get EnterClientsName() {
        return $('//div[@class="brighter-control__infix"]/input');

    }

    get AddClientsName() {
        return $('//span[text()="Add"]');

    }

    get ClientsSettingTab() {
        return $('//h6[text()="Client Settings"]');

    }

    get ClickSelectFont() {
        return $('//div[@class="brighter-select__value"]');

    }
    get SelectFontName() {
        return $('//span[text()="Roboto"]');

    }
    get AddFont() {
        return $('//button[@class="brighter-button"]');

    }

    get DeleteFont() {
        return $('(//div[@class="brighter-button__wrapper"])[3]');

    }

    get EnterGroupName() {
        return $('(//div[@class="brighter-control__infix"])[1]/input');

    }

    get Clickworkflow() {
        return $('(//div[@class="brighter-control__infix"])[2]');

    }
    get Selectworkflow() {
        return $('//span[text()="blue"]');

    }
    get SelectPermission() {
        return $('(//div[@class="brighter-checkbox__wrapper"])[1]');

    }
    get ClickAddGroupBtn() {
        return $('//span[text()="Add Group"]');

    }

    get ClickAddBtn() {
        return $('//span[text()="Add"]');

    }
    get GroupsTab() {
        return $('//h6[text()="Groups"]');

    }
    get ReportingTab() {
        return $('//h6[text()="Reporting"]');

    }

    get SelectStartDate() {
        return $('(//input[@placeholder="DD/MM/YYYY"])[1]');

    }
    get SelectEndDate() {
        return $('(//input[@placeholder="DD/MM/YYYY"])[2]');

    }
    get SelectClient() {
        return $('(//div[@class="brighter-select__panel"]//span)[1]');

    }
    get ClickClient() {
        return $('//div[@class="brighter-select__value"]');

    }

    get Downloadcsv() {
        return $('//span[text()="Download CSV"]');

    }
    get MemberImportTab() {
        return $('//h6[text()="Member Import"]');

    }
    get SchemeImportTab() {
        return $('//h6[text()="Scheme Import"]');

    }

    get DashFundManager() {
        return $('//div[text()="Fund Managers"]');

    }

    get DashRecordKeeper() {
        return $('//div[text()="Record Keepers"]');
    }

    get Dashoverallcompletion() {
        return $('//h2[text()=" Overall Completion "]');
    }
    get Dashperformance() {
        return $('//p[contains(text(),"Performance")]');
    }
    get DashPercentage() {
        return $('//div[contains(text(),"%")]');
    }
    get DashTotalRequest() {
        return $('//p[contains(text()," TOTAL REQUESTS ")]');
    }
    get DashPlanStrategies() {
        return $('//div[@class="mos-c-preloader__container"]/div/ul');
    }
    get DashRecentPlans() {
        return $('(//select[@id="selectItem"]/option[2])[1]');
    }

    get DashRecordKeeper() {
        return $('');
    }
    get DashRecordKeeper() {
        return $('');
    }
    get DashRecordKeeper() {
        return $('');
    }







    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.Enteruseremail.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }


}

module.exports = new LoginPage();
