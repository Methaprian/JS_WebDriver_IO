/**
 *  *********************************
 *         Vendor and Product
 *  *********************************
 * 
 *  Open the Browser and Launch the Application
 *      URL :   http://testingserver:8888/
 * 
 *  Login to the Application with Valid Username and Password
 *      UN  :   admin
 *      PWD :   admin
 * 
 *  Move the Mouse Cursor to More and Click on Vendors Link. Vendors Page Should be displayed
 * 
 *  Click on Create Vendors Button. It should display Create Vendor Page.
 * 
 *  Fill all neccessary details. and Click on Save button
 * 
 *  Click on Product Module. Click on Create Product. It should display Create New Product Page.
 * 
 *  CLick on Vendor Lookup icon. Check whether Newly Created vendor is displayed in the List.
 *
 */

describe('Intergration between Vendors and Product Page',async()=>{
    let adminUserName="admin"
    let adminPassword="admin"
    
    it('Launch Browser and Login into Application',async()=>{
        await browser.maximizeWindow()
        await browser.url('http://testingserver:8888/')
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        
        const loginUN = await browser.$('[name="user_name"]')
        expect(loginUN).toBeEnabled()
        await loginUN.setValue(adminUserName)

        const loginPWD = await browser.$('[name="user_password"]')
        // await expect(loginPWD).toBeDisabled()
        expect(loginPWD).toBeEnabled()
        await loginPWD.setValue(adminPassword)

        const loginButton = await browser.$('#submitButton')
        expect(loginButton).toBeEnabled()
        await loginButton.waitForClickable()
        await loginButton.click()

        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5')
    })

    it('Move to More and click on Vendors Link',async()=>{
        const more_options=await browser.$(`//a[contains(.,'More')]`)
        expect(more_options).toBeEnabled()
        await more_options.moveTo({})

        const vendors_link=await browser.$(`//a[.='Vendors']`)
        await vendors_link.waitForDisplayed({timeout:5000})
        expect(vendors_link).toBeDisplayed()
        await vendors_link.click()

        expect(browser).toHaveTitleContaining(`Administrator - Vendors - vtiger CRM 5`)

    })

    let vendor_NAME="CEAT"
    it('Creating New Vendor',async()=>{
        const create_vendor_BTN=await browser.$(`//img[@title='Create Vendor...']`)
        expect(create_vendor_BTN).toBeEnabled()
        await create_vendor_BTN.click()

        expect(browser.$(`//span[contains(.,'Creating New Vendor')]`)).toBeDisplayed()

        const vendor_name_TF=await browser.$(`[name='vendorname']`)
        expect(vendor_name_TF).toBeEnabled()
        await vendor_name_TF.setValue(vendor_NAME)

        const save_button=await browser.$(`//input[@title='Save [Alt+S]']`)
        expect(save_button).toBeClickable()
        await save_button.click()

        expect(browser.$(`#dtlview_Vendor Name`)).toHaveTextContaining(vendor_NAME)
    })

    it('Navigate to Products Module and Clicking on Creat New Product Button',async()=>{
        const product_link=await browser.$(`//td[@class='tabUnSelected']/a[.='Products']`)
        expect(product_link).toBeClickable()
        await product_link.click()
        expect(browser).toHaveTitleContaining('Administrator - Products - vtiger CRM 5')

        const new_product_BTN=await browser.$(`//img[@title='Create Product...']`)
        expect(new_product_BTN).toBeClickable()
        await new_product_BTN.click()

        expect(browser.$(`//span[.='Creating New Product']`)).toBeDisplayed()

        const vendor_lookup_BTN=await browser.$(`//img[@title='Select']`)
        expect(vendor_lookup_BTN).toBeClickable()
        await vendor_lookup_BTN.click()

        await browser.switchWindow(`http://testingserver:8888/index.php?module=Vendors&action=Popup&html=Popup_picker&popuptype=specific&form=EditView&fromlink=`)

        const vendor_to_be_found=await browser.$(`//a[contains(.,'Vendor Name')]/../../..//td[contains(.,'${vendor_NAME}')]`)

        expect(vendor_to_be_found).toHaveTextContaining(vendor_NAME)

        console.log(`=========> ${vendor_to_be_found.getText()}`);




    })

})