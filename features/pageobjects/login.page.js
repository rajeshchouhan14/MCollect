

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
    
    get verifyGreenTeamPage() {
        return $('//span[text()="green"]');
        
    }
    
    get TakeBlueTeam() {
        return $('(//div[text()="blue"]/../../following-sibling::td[7])[1]');
        
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
        await this.inputemailName.setValue('EmployerName@gmail.com')
        await this.inputnumberName.setValue('123456788')

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

        await this.inputEmail.setValue('abc@gmail.com')
        await this.inputNumber.setValue('00772727')
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
