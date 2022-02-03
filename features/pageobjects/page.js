/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://main.inboundmailer.emea.stage.ext.mercer.com`)
    }
    opens(path) {
        return browser.url(`https://main.inboundmailer.emea.stage.ext.mercer.com/contacttpt`)
    }
    openss(path) {
        return browser.url(`https://main.inboundmailer.emea.stage.ext.mercer.com/dashboard`)
    }
    
    opensss(path) {
        return browser.url(`https://admin.inboundmailer.emea.stage.int.mercer.com/dashboard`)
    }
    

}
