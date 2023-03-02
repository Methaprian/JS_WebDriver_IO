/**
 *  ==========================================
 *      Creating Campaign and Organization
 *  ==========================================
 * 
 *  Open the Browser and Launch the Application
 *      URL :   http://testingserver:8888/
 * 
 *  Login to the Application with Valid Username and Password
 *      UN  :   admin
 *      PWD :   admin
 * 
 *  Move the Cursor to More and Click on Campaign Module.
 *  
 *  Click on Create New Campaign Button and fill all necessary details and CLick on Save Button.
 * 
 *  Click on Organization Link and CLick on Create New Organization Button.
 * 
 *  Fill all Mandatory fields and Click on Save button.
 * 
 *  Click on Opportunities and fill all mandatory fields and Click on Save button
 * 
 *  Navigate to Administrator and Click on Signout link.
 * 
 */

describe('VTiger_Create_Campaing_Org_Opportunities',async()=>{
    let adminUserName="admin"
    let adminPassword="admin"

    let camp_name='GO HP'

    let org_name="Toyoto"
    
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
    
    
    it('Move to More and Click on Campaign',async()=>{
        const more_options=await browser.$(`//a[contains(.,'More')]`)
        expect(more_options).toBeEnabled()
        await more_options.moveTo({})

        const vendors_link=await browser.$(`//a[.='Campaigns']`)
        await vendors_link.waitForDisplayed({timeout:5000})
        expect(vendors_link).toBeDisplayed()
        await vendors_link.click()

        expect(browser).toHaveTitleContaining(`Administrator - Campaigns - vtiger CRM 5`)
    })

    
    it('Click on Create Campaign Button and Fill necessary Details',async()=>{
        const new_Campaign_BTN=await browser.$(`//img[@title='Create Campaign...']`)
        expect(new_Campaign_BTN).toBeClickable()
        await new_Campaign_BTN.click()

        expect(browser.$(`//span[.='Creating New Campaign']`)).toBeDisplayed()

        const camp_name_TF=await browser.$(`[name='campaignname']`)
        expect(camp_name_TF).toBeEnabled()
        await camp_name_TF.setValue(camp_name)

        const camp_save_BTN=await browser.$(`//input[@title='Save [Alt+S]']`)
        expect(camp_save_BTN).toBeEnabled()
        await camp_save_BTN.click()

        expect(browser.$(`//span[contains(@class,'dvHeaderText')]`)).toHaveTextContaining(camp_name)
    })

    
    it('Create Organization',async()=>{
        const org_link=await browser.$(`//td[@class='tabUnSelected']/a[.='Organizations']`)
        expect(org_link).toBeClickable()
        await org_link.click()

        expect(browser).toHaveTitleContaining(`Administrator - Opportunities - vtiger CRM 5`)

        const create_org_BTN=await browser.$(`//img[@title='Create Opportunity...']`)
        expect(create_org_BTN).toBeClickable()
        await create_org_BTN.click()

        expect(browser.$(`//span[.='Creating New Opportunity']`)).toBeDisplayed()

        const org_name_TF=await browser.$(`[name='potentialname']`)

    })
})