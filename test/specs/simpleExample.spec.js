const Page = require('../pageObjects/HomePage'),
    homePage = new Page()

describe('Smoke, Regression and Visual testing with WDIO image comparison', () => {
    it('Landing page should display landing page and functional navigation bar', () => {
        // Open the website
        browser.url('https://www.atlantbh.com/');

        // Verify landing page is displayed
        expect(homePage.landingPageTitle).toBeDisplayed();

        // Verify navigation bar is displayed
        expect(homePage.navigationBar).toBeDisplayed();

        // Verify navigation bar functionality (e.g., click on a button)
        homePage.searchButton.click();
    })

    it('Landing page should have all components displayed', () => {

        // Verify navigation bar is displayed
        expect(homePage.navigationBar).toBeDisplayed();

        // Verify each component in the navigation bar
        const component1 = $("//li[@id='menu-item-1081']");
        expect(component1).toBeDisplayed();

        const component2 = $("//li[@id='menu-item-1451']");
        expect(component2).toBeDisplayed();

        const component3 = $("//li[@id='menu-item-17838']");
        expect(component2).toBeDisplayed();

        const component4 = $("//li[@id='menu-item-18684']");
        expect(component2).toBeDisplayed();

        const component5 = $("//li[@id='menu-item-13931']");
        expect(component2).toBeDisplayed();

        const component6 = $("//li[@id='menu-item-14574']");
        expect(component2).toBeDisplayed();

        // Verify that all components are displayed
        expect(component1 && component2 && component3 && component4 && component5 && component6).toBeDisplayed()
    });

    it('Services should be displayed and title matches expected title', () => {
        // Open the 'Services' page
        browser.url('https://www.atlantbh.com/services/');

        // Verify the 'Services' page is displayed
        expect(homePage.servicesTitle).toBeDisplayed();
    });

    it('Contact us page should have clickable input fields', () => {
        // Open the 'Contact Us' page or section
        browser.url('https://www.atlantbh.com/contact/');

        // Verify the 'Contact Us' section is displayed
        expect(homePage.contactUsSection).toBeDisplayed();

        // Verify each input field in the 'Contact Us' section
        expect(homePage.inputField1).toBeClickable();
        expect(homePage.inputField2).toBeClickable();
        expect(homePage.inputField3).toBeClickable();
    });

    it('Input fields in Contact us page should accept text, numbers, and symbols in input fields', () => {
        // Open the 'Contact Us' page or section
        browser.url('https://www.atlantbh.com/contact/');

        // Verify the 'Contact Us' section is displayed
        expect(homePage.contactUsSection).toBeDisplayed();

        // Test data
        const textInput = 'Hello World';
        const emailInput = 'arzemina.brackovic@gmail.com';
        const symbolInput = '@#$%^&*';

        // Input text, numbers, and symbols into the fields
        homePage.inputField1.click()
        homePage.inputField1.setValue(textInput);
        homePage.inputField2.click()
        homePage.inputField2.setValue(emailInput);
        homePage.inputField3.click()
        homePage.inputField3.setValue(symbolInput);
    });

    it('Contact us button should be clickable and displayed', () => {
        // Open the 'Contact Us' page or section
        browser.url('https://www.atlantbh.com/contact/');

        // Button selector - Update based on your HTML structure
        const contactUsButton = $("//input[@id='form-button']");
        expect(contactUsButton).toBeDisplayed();

        // Verify the 'Contact Us' button is clickable
        expect(contactUsButton).toBeClickable();
    });

    it('Careers page should be displayed and title matches expected title', () => {
        // Open the 'Careers' page
        browser.url('https://www.atlantbh.com/jobs/');

        // Verify the 'Careers' page is displayed
        const careersPageTitle = $("//h1[normalize-space()='Life @Atlantbh']");
        expect(careersPageTitle).toBeDisplayed();
    });

    it('Blog page should be displayed and title matches expected title', () => {
        // Open the 'Blog' page
        browser.url('https://www.atlantbh.com/blog/');

        // Verify the 'Blog' page is displayed
        const blogPageTitle = $("//li[@id='menu-item-18684']");
        expect(blogPageTitle).toBeDisplayed();
    });

    it('Search input field should accept text, numbers, and symbols in search and display results', () => {
        // Test data
        const searchText = 'Blog';
        const numberSearch = '12345';
        const symbolSearch = '@#$%^&*';

        // Perform a search with text
        homePage.searchButton.click()
        homePage.searchInputField.setValue(searchText);

        // Perform a search with numbers
        homePage.searchButton.click()
        homePage.searchInputField.setValue(numberSearch);

        // Perform a search with symbols
        homePage.searchButton.click()
        homePage.searchInputField.setValue(symbolSearch);
    });

    it('Giving Back page should be displayed and title matches expected title', () => {
        // Open the 'Giving Back' page
        browser.url('https://www.atlantbh.com/community/');

        // Verify the 'Giving Back' page is displayed
        const givingBackPageTitle = $('//*[@id="page-header-bg"]/div[2]/div/div/div/h1'); // Update the selector based on your HTML structure
        expect(givingBackPageTitle).toBeDisplayed();
    });

    it('Verify landing page is displayed as expected with image comparison', async () => {
        browser.url('https://www.atlantbh.com/');
        await expect(
            await browser.checkScreen('landingPage',
                {
                    /* some options */
                })
        ).toEqual(0)
    })
    it('Verify one element on page is displayed as expected with image comparison', async () => {
        await expect(
            await browser.checkElement(
                await homePage.landingPageTitle,
                'elementOnPage',
                {
                    /* some options */
                }
            )
        ).toEqual(0)
    })
    it('Verify landing page is displayed as expected with given tolerance with image comparison', async () => {
        browser.url('https://www.atlantbh.com/');
        await expect(
            await browser.checkScreen('landingPageWithTolerance',
                {
                    saveAboveTolerance: 1.0
                })
        ).toBeLessThanOrEqual(1.0)
    })
})
