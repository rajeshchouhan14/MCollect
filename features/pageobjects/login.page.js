

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
     get BlueBtn() {
        return $('//span[text()="Blue team"]');
        
    }
     get TouchBtn() {
        return $('//span[text()="Get in touch"]');
        
    }
     get GreenBtn() {
        return $('//span[text()="Green team"]');
        
    }
    
     get donotKnowBtn() {
        return $('body > mercer-app > mercer-app-page-container > div > brighter-main > main > mapp-submit-request > div > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > ng-component > div > brighter-section > section > div > button:nth-child(7) > div > span');
        
    }
     get iconCalendar() {
        return $('//input[@placeholder="mm/dd/yyyy"]');
        
    }
    
     get iconCalendar1() {
        return $('//input[@placeholder="dd/mm/yyyy"]');
        
    }
    
     get requestbox() {
        return $('//textarea[@id="input-information"]');
        
    }
    
     get requestbox1() {
        return $('//textarea[@id="Y50tbiMcj"]');
        
    }
    
     get Dropbox() {
        return $('//div[text()=" Drop to upload a file or click here "]');
        
    }
    
     get submitbtn() {
        return $('//span[text()="Submit"]');
        
    }
    
     get ThanksText() {
        return $('//h4[text()="Thanks for the submission! "]');
        
    }
    
     get ThankText() {
        return $('//h1[text()="Thanks for getting in touch."]');
        
    }
    
     get AfterContinueText() {
        return $('//h6[text()="Provide information"]');
        
    }
    
     get continueBtn() {
        return $('body > mercer-app > mercer-app-page-container > div > brighter-main > main > mapp-submit-request > div > galileo-interpreter > galileo-renderer > mason-renderer > mason-slot > mason-block-outlet > ng-component > div > brighter-section > section > form > div > div.mos-u-text-center > button > div > span');
        
    }
    
     get continuesBtn() {
        return $('//span[text()="Continue"]');
        
    }
    get continuesBtn1() {
        return $('//span[text()=" Continue "]');
        
    }
     get requestBtn() {
        return $('//span[text()="Submit request with a reference"]');
        
    }
    
     get requestType() {
        return $('//span[text()="Select One"]');
        
    }
    
    get requestTitle() {
        return $('//h1[text()="Request Queue"]');
        
    }
    get requestQueue() {
        return $('(//div[@class="brighter-control__input-wrapper"])[2]');
        
    }
    
    get requestQueueresult() {
        return $('(//span[text()=" Take "])[1]');
        
    }
    
    get verifyBlueTeamPage() {
        return $('//span[text()="blue"]');
        
    }
    
    get verifyInScopeTeamPage() {
        return $('//div[text()="Scope: In "]');
        
    }
    
    get verifyOutScopeTeamPage1() {
        return $('//div[text()="Scope: (Out) "]');
        
    }
    
    get verifyOutScopeTeamPage() {
        return $('//div[text()="Scope: Out "]');
        
    }
    
    get verifytptPage() {
        return $('//span[text()="blue"]');
        
    }
    
    get verifyGreenTeamPage() {
        return $('//span[text()="green"]');
        
    }
    
    get TakeBlueTeam() {
        return $('(//div[text()="blue"]/../../following-sibling::td[7])[1]');
        
    }
    
    get TakeContactTpt() {
        return $('(//td[text()=" contacttpt  "]/following-sibling::td[7])[1]');
        
    }
    
    get TakeBlueInScope() {
        return $('(//div[text()="blue"]/../../../td[2]//div[text()="Scope: In"]/../../../td[10]/button)[1]');
        
    }
    
    get TakeRecentRequest() {
        return $('//tbody[@class="ng-star-inserted"]/tr[1]');
        
    }
    
    get TakeRecentRequest6() {
        return $('//tbody[@class="ng-star-inserted"]/tr[6]');
        
    }
    
    get TakeRecentRequest5() {
        return $('//tbody[@class="ng-star-inserted"]/tr[5]');
        
    }
    
    get TakeRecentRequest2() {
        return $('//tbody[@class="ng-star-inserted"]/tr[2]');
        
    }
    get TakeRecentRequest3() {
        return $('//tbody[@class="ng-star-inserted"]/tr[3]');
        
    }
    
    get TakeRecentRequest4() {
        return $('//tbody[@class="ng-star-inserted"]/tr[4]');
        
    }
    
    get TakeBlueOutScope() {
        return $('(//div[text()="blue"]/../../../td[2]//div[text()="Scope: Out"]/../../../td[10]/button)[1]');
        
    }
    
    get TakeBlueOutScope1() {
        return $('(//div[text()="blue"]/../../../td[2]//div[text()="Scope: (Out)"]/../../../td[10]/button)[1]');
        
    }
    
    get TakeGreenInScope() {
        return $('(//div[text()="green"]/../../../td[2]//div[text()="Scope: In"]/../../../td[10]/button)[1]');
        
    }
    
    
    get createCaseBtn() {
        return $('//span[text()=" Create case "]');
        
    }

    
    get TakeGreenTeam() {
        return $('(//div[text()="green"]/../../following-sibling::td[7])[1]');
        
    }
    
    get verifyAccepted() {
        return $('(//td[text()=" Accepted "])[1]');
        
    }
    
    get verifyRejected() {
        return $('(//td[text()=" Rejected "])[1]');
        
    }
    get verifyPending() {
        return $('(//td[text()=" Pending "])[1]');
        
    }
    
     get requestType1() {
        return $('//span[text()="Select"]');
        
    }
    
     get SelectrequestType() {
        return $('//span[text()="Change of address"]');
        
    }
    
     get SelectrequestType1() {
        return $('#brighter-option-5 > span');
        
    }
    
     get WOrequestBtn() {
        return $('//span[text()="Submit request without a reference"]');
        
    }

     get inputfirstname() {
        return $('[name="firstName"]');
    }
    
     get inputReference() {
        return $('#input-enter-reference')
    }
    
     get inputMemberIN() {
        return $('#input-ni-number')
    }
    
     get inputaddress() {
        return $('#input-address')
    }
    get queuesearch() {
        return $('(//input)[1]')
    }
    
     get inputPostcode() {
        return $('#input-postcode')
    }
    
     get inputEmail() {
        return $('#input-enter-preferred-email')
    }
    
     get inputEmployer() {
        return $('#input-employer-name')
    }
    
     get inputfistnameName() {
        return $('#pxozyaJ6H')
    }
    
     get inputlastnameName() {
        return $('#CGXcdT6jZ')
    }
     get inputCaseReferenceName() {
        return $('#nbffe-HGg')
    }
     get inputmemberNumberName() {
        return $('#awZ405FrD')
    }
     get inputaddressName() {
        return $('#rI8RebnP_')
    }
     get inputpostcodeName() {
        return $('#dMrvC6U-w')
    }
     get inputemailName() {
        return $('#yyUcmIj20')
    }
     get inputnumberName() {
        return $('#BaPF4qvBB')
    }
     get inputEmployerName() {
        return $('//*[@id="vSSBtQUKk"]')
    }
    
     get inputInsuranceNo() {
        return $('//*[@id="98G75ahxE"]')
    }
    
     get inputScheme() {
        return $('#input-scheme-name')
    }
    
     get inputNumber() {
        return $('#input-phone-number')
    }

     get inputlastname(){
        return $('#input-last-name')
        
    }

     get btnSubmit() {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async click(element) {
        await (await element).waitForClickable({setTimeout: 3000})
        await (await element).click()
      }

     async login () {
        await this.inputfirstname.setValue('firstname')
        await this.inputlastname.setValue('lastname')
        browser.pause(5000)




    }
     async login1 () {
        browser.pause(5000)

        // await this.inputReference.setValue('PAY12233333')
        await this.inputMemberIN.setValue('AA546567')
    }
    async login15 () {
        browser.pause(5000)

        await this.inputReference.setValue('PAY12233333')
        await this.inputMemberIN.setValue('AA546567')
    }
     async login2 () {
        browser.pause(5000)

        await this.inputaddress.setValue('address details')
        await this.inputPostcode.setValue('676776')
    }
    async login156 () {
        browser.pause(5000)

        await this.inputReference.setValue('23064307')
        await this.inputMemberIN.setValue('AA544467')
    }
    
     async login22 () {
        browser.pause(5000)
        await this.inputMemberIN.setValue('AA546567')

    }
    
     async login32 (){
        browser.pause(5000)
        await this.inputEmployerName.setValue('EmployerName')
        await this.inputInsuranceNo.setValue('AA123457A')

    }
    
     async login321 (){
        browser.pause(5000)
        await this.inputfistnameName.setValue('firstName')
        await this.inputlastnameName.setValue('lastname')

    }
     async login322 (){
        browser.pause(5000)
        await this.inputCaseReferenceName.setValue('')
        await this.inputmemberNumberName.setValue('1234568')

    }
     async login323 () {
        browser.pause(5000)
        await this.inputaddressName.setValue('adress value')
        await this.inputpostcodeName.setValue('123456788')

    }
     async login324 (){
        browser.pause(5000)
        await this.inputemailName.setValue('EmployerName@test.com')
        await this.inputnumberName.setValue('1234567886')

    }
    
     async login33 (){
        browser.pause(5000)
        await this.inputEmployerName.setValue('EmployerName')
        await this.inputInsuranceNo.setValue('123456788')

    }
     async login34 () {
        browser.pause(5000)
        await this.inputEmployerName.setValue('EmployerName')
        await this.inputInsuranceNo.setValue('123456788')

    }
     async login35 (){
        browser.pause(5000)
        await this.inputEmployerName.setValue('EmployerName')
        await this.inputInsuranceNo.setValue('123456788')

    }
    
     async login36 (){
        browser.pause(5000)
        await this.inputEmployerName.setValue('EmployerName')
        await this.inputInsuranceNo.setValue('123456788')

    }

     async login3 () {

        await this.inputEmail.setValue('abc@test.com')
        await this.inputNumber.setValue('9888772727')
        browser.pause(5000)
    }
    
     async login4 () {

        await this.inputEmployer.setValue('Mercer company')
        await this.inputScheme.setValue('Mercer Scheme')
        browser.pause(5000)
    }
    
    async login456 () {

        // await this.inputEmployer.setValue('Mercer company')
        await this.inputScheme.setValue('MercerScheme')
        browser.pause(5000)
    }
    // async getAtrribute(element : WebdriverIO.Element, attribute: string) {
    //     const attributeValue = (await element).getAttribute(attribute).then(async function (value: string){
    //       return value
    //     })
    //     return attributeValue
    //   }

    /**
     * overwrite specific options to adapt it to page object
     */
     open() {
        return super.open();
    }
     opens() {
        return super.opens();
    }
    
     openss() {
        return super.opens();
    }
    opensss() {
        return super.opensss();
        
    }


    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
    async searchQueue () {
        browser.pause(5000)

        await this.queuesearch.setValue('Pension')
    }
    
    async searchTpt () {
        browser.pause(5000)

        await this.queuesearch.setValue('tpt')
    }
    
    async searchBlueTeam () {
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
        return $('(//span[@class="brighter-option__text"])[3]');
        
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
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
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
