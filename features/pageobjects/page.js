/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    mcollectopen(path) {
        return browser.url(`https://digicon.us-east-1.dev.awsapp.mercer.com/auth/login`)
        //  return browser.url(`https://digicon.us-east-1.dev.awsapp.mercer.com`) 
        // return browser.url(`https://bizflow.sit.mercer.com/bizflow/index.jsp`)   
    }
}
