class Page {

    get whyUsSection() {
        return $('//h6[contains(text(),"WHY US")]')
    }

    get landingPageTitle() {
        return $("//div[contains(@class,'vc_col-sm-12 wpb_column column_container vc_column_container col neg-marg no-extra-padding instance-0')]//div[contains(@class,'column-bg-overlay-wrap')]");
    }

    get navigationBar() {
        return $('//*[@id="top"]/div/div')
    }

    get searchButton() {
        return $("//li[@class='astm-search-menu is-menu is-dropdown menu-item']")
    }

    get servicesTitle() {
        return $("//h1[normalize-space()='We make']");
    }

    get contactUsSection() {
        return $("//h1[contains(text(),'Let’s make things happen')]");
    }

    get inputField1() {
        return $("//textarea[@id='form-input']");
    }

    get inputField2() {
        return $("//textarea[@id='form-input']");
    }

    get inputField3() {
        return $("//input[@id='form-input-mail']");
    }

    get searchInputField() {
        return $('//*[@id="top"]/div/div/div[2]/nav/ul[1]/li[7]')
    }
}

module.exports = Page
