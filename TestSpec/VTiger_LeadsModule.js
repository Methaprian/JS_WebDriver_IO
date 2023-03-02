/**   SCENARIO : LEADS MODULE
 * 
 *      Launch the browser
 *      Pass the Main URL of the Application
 *          URL: http://localhost:8888
 *      
 *      Login into the application using valid credentials
 *          UN : admin 
 *          PWD : admin
 * 
 *      Click on Lead Module
 * 
 *      Click on Create New Lead Button
 * 
 *      Enter all Data into the Mandatory fields(*) and Click on Save Button
 * 
 *      Lead Number should be generated and displayed on the Lead Information Page
 * 
 *      Click on Edit button and Enter the Mobile & Phone Number and Click on Save button
 * 
 *      Click on Leads Module. List of all the generated lead should be displayed
 * 
 *      Select the First Name from the dropdown and in the Search box, type the and name and click on Search Now Button
 * 
 *      Lead List Page should be displayed and check the mobile and phone number is updated or not.
 * 
 */
let adminUserName="admin"
let adminPassword="admin"


let firstName="Methaprian"
let lastName="SKM"
let companyName="TYSS"
let MobileNO="9897956982"
let PhoneNO="4522459109"

describe('Leads Module',()=>{
    it('Launch Browser and Login',async ()=>{
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

    it('Leads Module Operation',async ()=>{
        const LeadsLink=await browser.$('=Leads')
        await LeadsLink.click()
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining('Administrator - Leads - vtiger CRM 5')
        
        const createLeadButton=await browser.$('aria/Create Lead...')       // ----> Using ARIA selector and "att" attribute
        await createLeadButton.click()
        const PageName=await browser.$('//span[text()="Creating New Lead"]')
        expect(PageName).toHaveTextContaining('Creating New Lead')

        const firstNameTF=await browser.$('[name="firstname"]')     // CSS Selector
        await firstNameTF.setValue(firstName)

        const lastNameTF=await browser.$('[name="lastname"]')       // CSS Selector
        await lastNameTF.setValue(lastName)

        const companyTF=await browser.$('[name="company"]')         // CSS Selector
        await companyTF.setValue(companyName)

        const saveButton=await browser.$('//input[@title="Save [Alt+S]"]')      // XPath
        await saveButton.click()

        const leadValue=await browser.$('//td[text()="Lead No"]/..//td[@class="dvtCellInfo"][2]')
        expect(leadValue).toHaveTextContaining('')

        const editLead=await browser.$('[name="Edit"]')
        expect(editLead).toBeDisplayed()
        await editLead.click()

        const phoneTF=await browser.$('#phone')
        expect(phoneTF).toBeEnabled()
        await phoneTF.setValue(PhoneNO)
       

        const mobileTF=await browser.$('#mobile')
        expect(mobileTF).toBeEnabled()
        await mobileTF.setValue(MobileNO)
        
        const save_edit_Button=await browser.$('//input[@title="Save [Alt+S]"]')      // XPath
        await save_edit_Button.waitForClickable()
        await save_edit_Button.click()

        ////td[text()='Phone']/..//div/input[@id='txtbox_Phone']
        // const PHONE_EDIT=await browser.$('//td[text()="Phone"]/..//div/input[@id="txtbox_Phone"]').getAttribute("value")
        // // await console.log(PHONE_EDIT.getAttribute("value"));
        // await expect(PHONE_EDIT).toBeDefined()

        // const MOBILE_EDIT=await browser.$('//td[text()="Mobile"]/..//div/input[@id="txtbox_Mobile"]').getAttribute("value")
        // // console.log(MOBILE_EDIT);
        // await expect(MOBILE_EDIT).toBeDefined()

        const MOB_CONT=await (await browser.$('//div[@id="editarea_Mobile"]/input[@id="txtbox_Mobile"]')).getAttribute("value")
        expect(MOB_CONT).toContain(MobileNO)
        
        // const LeadInfoPage=await (await browser.$('//span[contains(.,"Lead Information")]')).getText()
        // await expect(LeadInfoPage).toBePresent()
    })
    
    it('Search Created Lead',async()=>{
        const LeadsModule=await browser.$('=Leads')
        await LeadsModule.click()
        expect(browser).toHaveTitleContaining('Administrator - Leads - vtiger CRM 5')

        const criteriaDD=await $('#bas_searchfield')
        expect(criteriaDD).toHaveTextContaining('First Name')
        await criteriaDD.selectByVisibleText('First Name')

        const searchTF=await $('[name="search_text"]')
        expect(searchTF).toBeDisplayed()
        await searchTF.setValue('Methaprian')

        const searchButton=await $('[name="submit"]')
        expect(searchButton).toBeClickable()
        await searchButton.click()
        

        // const FIRSTNAME_Verify=await (await $('//tr[@id="row_68"]//td/span[@vtfieldname="phone"]/..')).getText()
        // await expect(FIRSTNAME_Verify).toContain(firstName)

        const UPDATED_phoneNo=await $('//tr[@id="row_68"]//td/span[@vtfieldname="phone"]/..').getText()
        expect(UPDATED_phoneNo).toEqual(PhoneNO)

    })
})